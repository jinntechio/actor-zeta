#include <actor-zeta/environment/abstract_environment.hpp>
#include <actor-zeta/environment/supervisor_heavy.hpp>

namespace actor_zeta { namespace environment {

        auto abstract_environment::created_group(actor::abstract_actor *t) -> actor::supervisor & {
            auto name = t->name();
            auto it = supervisors.emplace(name, new supervisor_heavy(this,storage_space_, t));
            return *(it.first->second);
        }

}}