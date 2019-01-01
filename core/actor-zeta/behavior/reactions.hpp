#pragma once

#include <memory>
#include <unordered_map>
#include <actor-zeta/detail/type_traits/callable_trait.h>

#include <actor-zeta/behavior/type_action.hpp>
#include <actor-zeta/behavior/abstract_action.hpp>

namespace actor_zeta { namespace behavior {
///
/// @brief
///

        class reactions final {
        public:
            using event_type     = type_action;
            using storage        = std::unordered_map<event_type, std::unique_ptr<abstract_action>>;
            using iterator       = storage::iterator;
            using const_iterator = storage::const_iterator;

            reactions()  = default;

            reactions(const reactions &) = delete;

            reactions &operator=(const reactions &) = delete;

            reactions(reactions &&) = delete;

            reactions &operator=(reactions &&) = delete;

            ~reactions() = default;

            void execute(context&);

            bool add(abstract_action*);

            auto end() -> iterator;

            auto begin() -> iterator;

            auto cend() -> const_iterator;

            auto cbegin() -> const_iterator;

            auto begin() const -> const_iterator;

            auto end() const -> const_iterator;

        private:
            storage reactions_;
        };

}} /// namespace actor_zeta { namespace behavior {}}
