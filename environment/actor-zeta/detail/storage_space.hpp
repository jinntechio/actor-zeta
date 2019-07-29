#pragma once

#include <vector>
#include <memory>
#include <actor-zeta/actor/actor_address.hpp>

namespace actor_zeta { namespace detail {

        using id_t = std::size_t;
        using layer = std::vector<id_t>;

///
/// @brief
///
        class storage_space final {
        public:
            storage_space();

            storage_space(const storage_space &) = default;

            storage_space &operator=(const storage_space &)= default;

            storage_space(storage_space &&) = default;

            storage_space &operator=(storage_space &&)= default;

            ~storage_space() = default;

            auto add(actor::abstract_actor *) -> std::pair<const id_t,actor::actor>;

            auto create_link(id_t, id_t) -> void;

            auto get(id_t) -> actor::actor_address;

            auto current_layer(id_t) -> std::vector<actor::actor_address>;

        private:
            class impl; //TODO: controversial design

            std::shared_ptr<impl> pimpl;
        };
}}
