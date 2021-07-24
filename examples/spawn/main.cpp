#include <actor-zeta/link.hpp>
#include <cassert>
#include <chrono>
#include <iostream>
#include <iterator>
#include <memory>
#include <mutex>
#include <queue>
#include <sstream>
#include <string>
#include <thread>
#include <unordered_set>
#include <vector>

#include <actor-zeta.hpp>

using actor_zeta::abstract_executor;

using actor_zeta::abstract_executor;
using actor_zeta::executor_t;
using actor_zeta::work_sharing;

using actor_zeta::make_message;

std::atomic_int count;
const int max_queue = 100;

std::mutex print_mt;

template<typename Task, typename... Args>
auto make_task(actor_zeta::supervisor& executor_, const std::string& command, Args... args) -> void {
    actor_zeta::send(executor_, executor_->address(), command, std::move(Task(std::forward<Args>(args)...)));
}

template<typename Task, typename... Args>
auto make_task_broadcast(actor_zeta::supervisor& executor_, const std::string& command, Args... args) -> void {
    executor_->broadcast(make_message(executor_->address(), command, std::move(Task(std::forward<Args>(args)...))));
}

auto thread_pool_deleter = [](abstract_executor* ptr) {
    ptr->stop();
    delete ptr;
};

class worker_t2 final : public actor_zeta::basic_async_actor {
public:
    explicit worker_t2(actor_zeta::supervisor_abstract* ptr)
        : actor_zeta::basic_async_actor(ptr, "bot2") {
        count++;
        std::cout << "bot2 created:" << address().get() << std::endl;
        add_handler("spawn_broadcast", &worker_t2::spawn_broadcast);
        add_handler("print_links", &worker_t2::print_links);
    }

    void spawn_broadcast(actor_zeta::address_t addr) {
        std::cout << "class:bot2 type:" << address().type() << "(" << address().get() << ") got actor: "
                  << addr << " " << addr.type() << " " << addr.get() << std::endl;
        if (addr.type() == "bot3") {
            std::cout << "class:bot2 linking with:" << addr << " " << addr.type() << " " << addr.get() << std::endl;
            auto self_addr = address();
            actor_zeta::link(self_addr, addr);
        }
    }

    void print_links() {
        std::lock_guard<decltype(print_mt)> mt(print_mt);
        std::cout << "bot2 linked with:\n";
        auto addrs = all_view_address();
        for (const auto& a : addrs) {
            std::cout << '\t' << a << std::endl;
        }
    }
};

class worker_t3 final : public actor_zeta::basic_async_actor {
public:
    explicit worker_t3(actor_zeta::supervisor_abstract* ptr)
        : actor_zeta::basic_async_actor(ptr, "bot3") {
        count++;
        std::cout << "bot3 created:" << address().get() << std::endl;
        add_handler("spawn_broadcast", &worker_t3::spawn_broadcast);
        add_handler("print_links", &worker_t3::print_links);
    }

    void spawn_broadcast(actor_zeta::address_t addr) {
        std::cout << "class:bot3 type:" << address().type() << "(" << address().get() << ") got actor: "
                  << addr << " " << addr.type() << " " << addr.get() << std::endl;
    }

    void print_links() {
        //std::lock_guard<decltype(print_mt)> mt(print_mt);
        std::cout << "bot3 linked with:\n";
        auto addrs = all_view_address();
        for (const auto& a : addrs) {
            std::cout << '\t' << a << std::endl;
        }
    }
};

class worker_t final : public actor_zeta::basic_async_actor {
    auto get_info() -> std::string {
        std::string s;
        std::stringstream ss(s);
        ss << "class:bot1 type:" << this->type() << "(" << address().get() << ")";
        return ss.str();
    }

public:
    explicit worker_t(actor_zeta::supervisor_abstract* ptr /*, int a, double b*/)
        : actor_zeta::basic_async_actor(ptr, "bot1") {
        count++;
        std::cout << get_info() << " created" << std::endl;
        add_handler("spawn_actor_in_bot", &worker_t::spawn_worker);
        add_handler("spawn_broadcast", &worker_t::spawn_broadcast);
        add_handler("print_links", &worker_t::print_links);
    }

    auto spawn_worker() -> void {
        auto addr = address_book("manager-2");
        actor_zeta::spawn_actor<worker_t2>(addr, address());
        actor_zeta::spawn_actor<worker_t3>(addr, address());
    }

    void spawn_broadcast(actor_zeta::address_t addr) {
        std::cout << get_info() << " got actor: " << addr << " " << addr.type() << " " << addr.get() << std::endl;
        if (addr.type() == "bot2") {
            auto self_addr = address();
            actor_zeta::link(self_addr, addr);
        }
    }

    void print_links() {
        //std::lock_guard<decltype(print_mt)> mt(print_mt);
        std::cout << get_info() << " linked with:\n";
        auto addrs = all_view_address();
        for (const auto& a : addrs) {
            std::cout << '\t' << a << std::endl;
        }
    }
};

class supervisor_lite final : public actor_zeta::supervisor_abstract {
public:
    explicit supervisor_lite(std::string name)
        : supervisor_abstract(std::move(name))
        , e_(new executor_t<work_sharing>(1, max_queue),
             thread_pool_deleter)
        , system_{"add_link",
                  "sync_contacts",
                  "remove_link",
                  "spawn_actor", "delegate", "spawn_broadcast"} {
        e_->start();
        add_handler("spawn_broadcast", &supervisor_lite::spawn_broadcast);
    }

    auto executor_impl() noexcept -> actor_zeta::abstract_executor* final { return e_.get(); }

    auto add_actor_impl(actor_zeta::actor t) -> void final {
        std::cout << "sup: added actor:" << t.address() << " " << t.type() << " " << t->address().get() << std::endl;
        spawn_broadcast(address(), t->address());
        actors_.emplace_back(std::move(t));
    }

    auto add_supervisor_impl(actor_zeta::supervisor t) -> void final {
        supervisor_.emplace_back(std::move(t));
    }

    auto spawn_broadcast(actor_zeta::address_t sender, actor_zeta::address_t addr) -> void {
        auto contacts = address_book();
        for (auto it = contacts.first; it != contacts.second; ++it) {
            if (it->first != sender.type()) {
                for (auto& linked_addr : it->second) {
                    actor_zeta::send(linked_addr, address(), "spawn_broadcast", address(), addr);
                }
            }
        }
    }

    auto enqueue_base(actor_zeta::message_ptr msg, actor_zeta::execution_device*) -> void final {
        auto msg_ = std::move(msg);
        auto it = system_.find(msg_->command());
        if (it != system_.end()) {
            local(std::move(msg_));
        }
    }

private:
    auto local(actor_zeta::message_ptr msg) -> void {
        set_current_message(std::move(msg));
        execute();
    }

    std::unique_ptr<abstract_executor, decltype(thread_pool_deleter)> e_;
    std::vector<actor_zeta::actor> actors_;
    std::vector<actor_zeta::address_t> actors_for_broadcast_;
    std::vector<actor_zeta::supervisor> supervisor_;
    std::unordered_set<actor_zeta::detail::string_view> system_;
};

auto main() -> int {
    //1. manager-1 spawns 5 actor named "bot1"
    //2. bot1 must send spawn request for types "bot2" and "bot3" to manager-2 upon spawning
    //3. manager-2 must spawn bot2 and bot3 actors on each request
    //4. manager-2 must link bot2 to bot3 upon each spawning
    //5. manager-2 must broadcast bots names to bot1
    //6. bot1 must link itself with type "bot2" and ignore "bot3"
    //7. spawned actors count must be equal 1 + sends * 2
    /*
        ┌──manager-1────┐◄────────────►┌────────────manager-2───────┐
        │               │              │                            │
        │ ┌─bot-1───┐   │              │  ┌─bot-2────┐   ┌─bot-3──┐ │
        │ │         ◄───┼──────────────┼──►          ◄───►        │ │
        │ │         │   │              │  │          │   │        │ │
        │ └─────────┘   │              │  └──────────┘   └────────┘ │
        │               │              │                            │
        └───────────────┘              └────────────────────────────┘
     */
    actor_zeta::supervisor supervisor1(new supervisor_lite("manager-1"));
    actor_zeta::supervisor supervisor2(new supervisor_lite("manager-2"));
    actor_zeta::link(supervisor1, supervisor2);
    std::cout << "supervisors linked" << std::endl;

    int const sends = 1;
    int const actors = 1 + sends * 2;
    count = 0;

    actor_zeta::spawn_actor<worker_t>(supervisor1); //actor creator, "bot1"
    //actor_zeta::delegate_send(supervisor1, "bot1", "link_with", supervisor2->address()); //link bot-1 with manager-2
    actor_zeta::delegate_send(supervisor1, "bot1", "add_link", supervisor2->address()); //link bot-1 with manager-2
    //actor_zeta::delegate_send(supervisor1, "bot1", "print_links");

    for (auto i = sends - 1; i >= 0; --i) {
        std::cout << "sending spawn request#" << i << std::endl;
        actor_zeta::delegate_send(supervisor1, "bot1", "spawn_actor_in_bot");
    }

    std::this_thread::sleep_for(std::chrono::seconds(1));
    std::cerr << " Finish " << std::endl;
    using namespace std::chrono_literals;
    std::this_thread::sleep_for(100ms);
    actor_zeta::delegate_send(supervisor1, "bot1", "print_links");
    std::this_thread::sleep_for(100ms);
    actor_zeta::delegate_send(supervisor2, "bot2", "print_links");
    std::this_thread::sleep_for(100ms);
    actor_zeta::delegate_send(supervisor2, "bot3", "print_links");
    std::this_thread::sleep_for(100ms);

    assert(count == actors);
    return 0;
}