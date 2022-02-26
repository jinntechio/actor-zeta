#include <benchmark/benchmark.h>

#include <chrono>
#include <iostream>
#include <memory>
#include <tuple>

#include <actor-zeta/detail/pmr/memory_resource.hpp>
#include <actor-zeta/detail/rtt.hpp>

#include "fixtures.hpp"
#include "register_benchmark.hpp"

namespace benchmark_messages {

    namespace by_args {

        template<typename... Args>
        auto message_arg_tmpl(
#if CPP17_OR_GREATER
            actor_zeta::detail::pmr::monotonic_buffer_resource* mr,
#endif
            Args&&... args) -> void;

        namespace body {

            template<typename... Args>
            auto message_arg_tmpl(
#if CPP17_OR_GREATER
                __attribute__((unused)) actor_zeta::detail::pmr::monotonic_buffer_resource* mr,
#endif
                Args&&... args) -> void {
                actor_zeta::detail::rtt rtt_tuple(nullptr, std::forward<Args>(args)...);
            }

            template<typename T, std::size_t... I>
            auto call_message_arg_tmpl(
                T& packed_tuple,
#if CPP17_OR_GREATER
                actor_zeta::detail::pmr::monotonic_buffer_resource* mr,
#endif
                actor_zeta::type_traits::index_sequence<I...>) -> void {
                message_arg_tmpl(
#if CPP17_OR_GREATER
                    mr,
#endif
                    (std::get<I>(packed_tuple))...);
            }

        } // namespace body

        using body_t = void; /* just for ifaces */

#define REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture, bm_name, type) REGISTER_BENCHMARK_WITH_MEMR_ARGS(fixture, bm_name, body_t, benchmark_messages::by_args::body, type)

        namespace trivial_args {

            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mem_resource_t, BodyMessage_Args_int8_t, int8_t);
            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mem_resource_t, BodyMessage_Args_int16_t, int16_t);
            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mem_resource_t, BodyMessage_Args_int32_t, int32_t);
            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mem_resource_t, BodyMessage_Args_int64_t, int64_t);

        } // namespace trivial_args

        namespace container_args {

            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_vec_t, BodyMessage_Args_std_vector_int8_t, int8_t);
            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_list_t, BodyMessage_Args_std_list_int8_t, int8_t);
            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_map_t, BodyMessage_Args_std_map_int8_t, int8_t);
            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_set_t, BodyMessage_Args_std_set_int8_t, int8_t);

            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_vec_t, BodyMessage_Args_std_vector_int16_t, int16_t);
            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_list_t, BodyMessage_Args_std_list_int16_t, int16_t);
            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_map_t, BodyMessage_Args_std_map_int16_t, int16_t);
            //REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_set_t, BodyMessage_Args_std_set_int16_t, int16_t);

            REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_vec_t, BodyMessage_Args_std_vector_int32_t, int32_t);
            REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_list_t, BodyMessage_Args_std_list_int32_t, int32_t);
            REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_map_t, BodyMessage_Args_std_map_int32_t, int32_t);
            REGISTER_MESSAGE_BENCHMARK_FOR_BODY_ARGS(fixture_mr_set_t, BodyMessage_Args_std_set_int32_t, int32_t);

        } // namespace container_args

    } // namespace by_args

    class memory_manager_t : public benchmark::MemoryManager {
        void Start() BENCHMARK_OVERRIDE {}
        void Stop(Result* result) BENCHMARK_OVERRIDE {
        }
    };

} // namespace benchmark_messages

// Run the benchmark
int main(int argc, char** argv) {
    benchmark::Initialize(&argc, argv);
    if (benchmark::ReportUnrecognizedArguments(argc, argv))
        return 1;
    std::unique_ptr<benchmark::MemoryManager> mm(new benchmark_messages::memory_manager_t());
    benchmark::RegisterMemoryManager(mm.get());
    benchmark::RunSpecifiedBenchmarks();
    benchmark::Shutdown();
    benchmark::RegisterMemoryManager(nullptr);
    return 0;
}
