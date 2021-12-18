#pragma once

#include <actor-zeta/base/communication_module.hpp>
#include <actor-zeta/detail/pmr/memory_resource.hpp>
#include <actor-zeta/clock/thread_safe_clock.hpp>
#include "actor-zeta/scheduler/scheduler_abstract.hpp"

namespace actor_zeta { namespace base {
    class supervisor_abstract : public communication_module {
    public:
        supervisor_abstract(detail::pmr::memory_resource*, std::string);
        supervisor_abstract(std::string);
        supervisor_abstract(supervisor_abstract*, std::string);
        ~supervisor_abstract() override;
        auto scheduler() noexcept -> scheduler::scheduler_abstract_t*;
        auto resource() const -> detail::pmr::memory_resource*;
        auto address() noexcept -> address_t;
        auto broadcast(message_ptr) -> void;
        auto broadcast(detail::string_view, message_ptr) -> void;
        auto clock() noexcept -> clock::clock_t&;

    protected:
        template<
            class Actor,
            class... Args,
            class = type_traits::enable_if_t<std::is_base_of<actor_abstract, Actor>::value>>
        auto spawn_actor(Args&&... args) -> address_t {
            auto allocate_byte = sizeof(Actor);
            auto allocate_byte_alignof = alignof(Actor);
            void* buffer = resource()->allocate(allocate_byte, allocate_byte_alignof);
            auto* actor = new (buffer) Actor(this, std::forward<Args>(args)...);
            auto address = actor->address();
            add_actor_impl(actor);
            sync(address);
            return address;
        }

        template<
            class Supervisor,
            class... Args,
            class = type_traits::enable_if_t<std::is_base_of<supervisor_abstract, Supervisor>::value>>
        auto spawn_supervisor(Args&&... args) -> address_t {
            auto allocate_byte = sizeof(Supervisor);
            auto allocate_byte_alignof = alignof(Supervisor);
            void* buffer = resource()->allocate(allocate_byte, allocate_byte_alignof);
            auto* supervisor = new (buffer) Supervisor(this, std::forward<Args>(args)...);
            auto address = supervisor->address();
            add_supervisor_impl(supervisor);
            sync(address);
            return address;
        }

        using storage_contact_t = std::list<address_t>;
        using key_type = detail::string_view;
        using contacts_t = std::unordered_map<key_type, storage_contact_t>;
        using address_range_t = std::pair<contacts_t::const_iterator, contacts_t::const_iterator>;

        virtual auto scheduler_impl() noexcept -> scheduler::scheduler_abstract_t* = 0;
        virtual auto add_actor_impl(actor) -> void = 0;
        virtual auto add_supervisor_impl(supervisor) -> void = 0;
        auto set_current_message(message_ptr) -> void;
        auto current_message_impl() -> message* final;
        auto address_book(detail::string_view) -> address_t;
        auto address_book(std::string& type) -> address_t;
        auto address_book() -> address_range_t;
        /**
        * debug method
        */
        auto all_view_address() const -> std::set<std::string>;

    private:
        void sync(const base::address_t&);
        auto redirect(std::string& type, message* msg) -> void;
        void add_link();
        void remove_link();

        void add_link_impl(address_t);
        void remove_link_impl(const address_t&);

        contacts_t contacts_;
        message* current_message_;
        detail::pmr::memory_resource* memory_resource_;
    };

}} // namespace actor_zeta::base
