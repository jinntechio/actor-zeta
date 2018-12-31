#include "actor-zeta/actor/blocking_actor.hpp"
#include "actor-zeta/executor/execution_device.hpp"
#include "actor-zeta/actor/actor_address.hpp"
#include "actor-zeta/messaging/message.hpp"

namespace actor_zeta {
    namespace actor {

        executor::executable_result
        blocking_actor::run(executor::execution_device *e, size_t max_throughput) {

            device(e);
            for (;;) {

                messaging::message msg_ptr = next_message();
                if (msg_ptr) {
                    behavior::context context_(this, std::move(msg_ptr));
                    reactions_.execute(context_);
                } else {
                    return executor::executable_result::done;
                }
            }
            return executor::executable_result::done;

        }

        void blocking_actor::launch(executor::execution_device *e, bool hide) {
            device(e);
            if (hide) {//TODO:???
                device(e);
                device()->execute_async(this);
            } else {
                this->run(e,std::numeric_limits<std::size_t>::max());
            }
        }

        blocking_actor::blocking_actor(environment::abstract_environment *env,mailbox_type* mail, const std::string &type)
                : local_actor(env, type),
                  mailbox_(mail) {

        }

        messaging::message blocking_actor::next_message() {
            return mailbox().get();
        }

        blocking_actor::~blocking_actor() {}

        blocking_actor::mailbox_type &blocking_actor::mailbox() {
            return *mailbox_;
        }

    }
}
