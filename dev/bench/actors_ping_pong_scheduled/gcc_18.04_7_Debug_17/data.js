window.BENCHMARK_DATA = {
  "lastUpdate": 1696258635336,
  "repoUrl": "https://github.com/duckstax/actor-zeta",
  "entries": {
    "Benchmark actors_ping_pong_scheduled gcc-7 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "13f5d5708aa4baefe68655e94d167b4efc46662f",
          "message": "BM run GCC and Clang",
          "timestamp": "2023-08-15T17:01:02+03:00",
          "tree_id": "0582bed100837da8b35e1568fdf6634365e7ed04",
          "url": "https://github.com/duckstax/actor-zeta/commit/13f5d5708aa4baefe68655e94d167b4efc46662f"
        },
        "date": 1692110761396,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<int8_t>/ping_pong_single_threaded_1_int8_t/0",
            "value": 22463.86515999973,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 7229.991000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t>/ping_pong_single_threaded_2_int8_t/0",
            "value": 28274.13151712507,
            "unit": "ns/iter",
            "extra": "iterations: 74918\ncpu: 9261.63004885341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t>/ping_pong_single_threaded_3_int8_t/0",
            "value": 28805.340496766436,
            "unit": "ns/iter",
            "extra": "iterations: 104838\ncpu: 9666.074324195426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_4_int8_t/0",
            "value": 29057.64740810728,
            "unit": "ns/iter",
            "extra": "iterations: 69891\ncpu: 9746.028816299664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_5_int8_t/0",
            "value": 29218.07363825358,
            "unit": "ns/iter",
            "extra": "iterations: 72150\ncpu: 9663.819819819824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_6_int8_t/0",
            "value": 29144.781414158333,
            "unit": "ns/iter",
            "extra": "iterations: 71958\ncpu: 9746.680007782314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_7_int8_t/0",
            "value": 28651.127410487545,
            "unit": "ns/iter",
            "extra": "iterations: 70214\ncpu: 9533.389352550776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_8_int8_t/0",
            "value": 28639.221380542305,
            "unit": "ns/iter",
            "extra": "iterations: 71682\ncpu: 9574.21946932285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_9_int8_t/0",
            "value": 28931.514764477633,
            "unit": "ns/iter",
            "extra": "iterations: 73284\ncpu: 9497.041646198344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_10_int8_t/0",
            "value": 28744.874951803413,
            "unit": "ns/iter",
            "extra": "iterations: 72620\ncpu: 9536.6414210961 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "a399537583db8a03197a97a8f198d4629df94140",
          "message": "rm redundant file",
          "timestamp": "2023-08-15T17:57:42+03:00",
          "tree_id": "3ad66e1340f7c9b7ea7b34a8ae8158a5059eed65",
          "url": "https://github.com/duckstax/actor-zeta/commit/a399537583db8a03197a97a8f198d4629df94140"
        },
        "date": 1692112637050,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<int8_t>/ping_pong_single_threaded_1_int8_t/0",
            "value": 21146.498040000097,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 6814.09 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t>/ping_pong_single_threaded_2_int8_t/0",
            "value": 28420.300847636034,
            "unit": "ns/iter",
            "extra": "iterations: 71139\ncpu: 9513.363977565048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t>/ping_pong_single_threaded_3_int8_t/0",
            "value": 28702.618089089723,
            "unit": "ns/iter",
            "extra": "iterations: 114312\ncpu: 9712.856043110085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_4_int8_t/0",
            "value": 28583.219141293495,
            "unit": "ns/iter",
            "extra": "iterations: 88249\ncpu: 9654.971727724957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_5_int8_t/0",
            "value": 25578.179527367232,
            "unit": "ns/iter",
            "extra": "iterations: 74011\ncpu: 8447.849643971833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_6_int8_t/0",
            "value": 28569.422390347034,
            "unit": "ns/iter",
            "extra": "iterations: 72433\ncpu: 9605.516822442816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_7_int8_t/0",
            "value": 28593.110092869254,
            "unit": "ns/iter",
            "extra": "iterations: 73329\ncpu: 9613.733993372338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_8_int8_t/0",
            "value": 28492.132591652327,
            "unit": "ns/iter",
            "extra": "iterations: 72448\ncpu: 9621.652771643116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_9_int8_t/0",
            "value": 28452.279828943952,
            "unit": "ns/iter",
            "extra": "iterations: 70854\ncpu: 9487.08753210828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_10_int8_t/0",
            "value": 28519.75762647549,
            "unit": "ns/iter",
            "extra": "iterations: 71101\ncpu: 9595.320740917869 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "83edc9ba42e3d906163786de1e04b82b74d1c7d7",
          "message": "Add bm to README clang",
          "timestamp": "2023-08-15T19:19:03+03:00",
          "tree_id": "a8ce11e570c94b0b45155ece3758e54b11ac634b",
          "url": "https://github.com/duckstax/actor-zeta/commit/83edc9ba42e3d906163786de1e04b82b74d1c7d7"
        },
        "date": 1692117525142,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<int8_t>/ping_pong_single_threaded_1_int8_t/0",
            "value": 28964.472349999825,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 9338.127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t>/ping_pong_single_threaded_2_int8_t/0",
            "value": 29126.311503488294,
            "unit": "ns/iter",
            "extra": "iterations: 71813\ncpu: 9657.922660242573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t>/ping_pong_single_threaded_3_int8_t/0",
            "value": 28849.054099109464,
            "unit": "ns/iter",
            "extra": "iterations: 74382\ncpu: 9419.846199349307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_4_int8_t/0",
            "value": 28225.47403007906,
            "unit": "ns/iter",
            "extra": "iterations: 75934\ncpu: 9154.62638607212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_5_int8_t/0",
            "value": 25197.018530000154,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 8104.584999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_6_int8_t/0",
            "value": 29161.257620168468,
            "unit": "ns/iter",
            "extra": "iterations: 76081\ncpu: 9433.77190100025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_7_int8_t/0",
            "value": 29257.691479490182,
            "unit": "ns/iter",
            "extra": "iterations: 73282\ncpu: 9690.24999317705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_8_int8_t/0",
            "value": 29501.09771838707,
            "unit": "ns/iter",
            "extra": "iterations: 74684\ncpu: 9613.827593594346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_9_int8_t/0",
            "value": 26784.062941548545,
            "unit": "ns/iter",
            "extra": "iterations: 106019\ncpu: 8531.467944425058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_10_int8_t/0",
            "value": 29271.444764134736,
            "unit": "ns/iter",
            "extra": "iterations: 74725\ncpu: 9472.421545667436 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "82aeadab4616f514c112e4040236e1f437d656eb",
          "message": "PMR for 17 std fix : no dyncast with nortti",
          "timestamp": "2023-10-02T17:29:14+03:00",
          "tree_id": "ea1869a91dd06f5d847cc1aa3cbed77af47ee437",
          "url": "https://github.com/duckstax/actor-zeta/commit/82aeadab4616f514c112e4040236e1f437d656eb"
        },
        "date": 1696258634595,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<int8_t>/ping_pong_single_threaded_1_int8_t/0",
            "value": 25813.7836100002,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 8143.381000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t>/ping_pong_single_threaded_2_int8_t/0",
            "value": 29036.206639999877,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 9339.278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t>/ping_pong_single_threaded_3_int8_t/0",
            "value": 29387.566339999867,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 9521.976999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_4_int8_t/0",
            "value": 29219.44529740582,
            "unit": "ns/iter",
            "extra": "iterations: 77638\ncpu: 9431.359643473555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_5_int8_t/0",
            "value": 28864.505602703823,
            "unit": "ns/iter",
            "extra": "iterations: 81657\ncpu: 9204.613199113359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_6_int8_t/0",
            "value": 28975.026567409554,
            "unit": "ns/iter",
            "extra": "iterations: 74151\ncpu: 9142.778924087335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_7_int8_t/0",
            "value": 29539.2850728139,
            "unit": "ns/iter",
            "extra": "iterations: 73269\ncpu: 9627.621504319706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_8_int8_t/0",
            "value": 29505.81038110171,
            "unit": "ns/iter",
            "extra": "iterations: 75098\ncpu: 9553.593970545162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_9_int8_t/0",
            "value": 29068.87793142522,
            "unit": "ns/iter",
            "extra": "iterations: 74196\ncpu: 9329.537980484125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_10_int8_t/0",
            "value": 29175.999286648563,
            "unit": "ns/iter",
            "extra": "iterations: 75699\ncpu: 9571.13436108799 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}