window.BENCHMARK_DATA = {
  "lastUpdate": 1692105427036,
  "repoUrl": "https://github.com/duckstax/actor-zeta",
  "entries": {
    "Benchmark": [
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
          "id": "9ea7db2e5ada69e5d48b60cf590979573f31e1d1",
          "message": "Clear ci cd gcc builds",
          "timestamp": "2023-08-15T13:08:01+03:00",
          "tree_id": "cf67563764789fb9c14f5ae68cf63d38a82d2fb9",
          "url": "https://github.com/duckstax/actor-zeta/commit/9ea7db2e5ada69e5d48b60cf590979573f31e1d1"
        },
        "date": 1692094610381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<int8_t>/ping_pong_single_threaded_1_int8_t/0",
            "value": 28611.594604450125,
            "unit": "ns/iter",
            "extra": "iterations: 131627\ncpu: 9056.158690846105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t>/ping_pong_single_threaded_2_int8_t/0",
            "value": 29336.44235624895,
            "unit": "ns/iter",
            "extra": "iterations: 73269\ncpu: 9204.947522144425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t>/ping_pong_single_threaded_3_int8_t/0",
            "value": 24400.80190424925,
            "unit": "ns/iter",
            "extra": "iterations: 115111\ncpu: 7674.1597240923975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_4_int8_t/0",
            "value": 29681.772103017356,
            "unit": "ns/iter",
            "extra": "iterations: 73542\ncpu: 9466.50077506731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_5_int8_t/0",
            "value": 29634.593639915132,
            "unit": "ns/iter",
            "extra": "iterations: 73238\ncpu: 9379.875201398187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_6_int8_t/0",
            "value": 29727.795332264544,
            "unit": "ns/iter",
            "extra": "iterations: 69884\ncpu: 9443.377597161008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_7_int8_t/0",
            "value": 29945.557345566787,
            "unit": "ns/iter",
            "extra": "iterations: 74984\ncpu: 9639.651125573459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_8_int8_t/0",
            "value": 30141.63781024821,
            "unit": "ns/iter",
            "extra": "iterations: 69944\ncpu: 9821.291318769303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_9_int8_t/0",
            "value": 29970.099983158252,
            "unit": "ns/iter",
            "extra": "iterations: 71252\ncpu: 9725.906641217089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_10_int8_t/0",
            "value": 29842.953372555712,
            "unit": "ns/iter",
            "extra": "iterations: 75299\ncpu: 9602.463512131628 ns\nthreads: 1"
          }
        ]
      }
    ],
    "Benchmark actors_ping_pong_scheduled gcc-10 22.04 Debug c++-14": [
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
          "id": "86aa937ef15f5428085e7cc8c00d54ef97859541",
          "message": "Named bm",
          "timestamp": "2023-08-15T13:27:57+03:00",
          "tree_id": "ae04af2b4d57ab6b294a91fd6505a3e455ab9971",
          "url": "https://github.com/duckstax/actor-zeta/commit/86aa937ef15f5428085e7cc8c00d54ef97859541"
        },
        "date": 1692095805247,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<int8_t>/ping_pong_single_threaded_1_int8_t/0",
            "value": 29229.84477712404,
            "unit": "ns/iter",
            "extra": "iterations: 89175\ncpu: 9221.457807681527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t>/ping_pong_single_threaded_2_int8_t/0",
            "value": 29072.089526688487,
            "unit": "ns/iter",
            "extra": "iterations: 74771\ncpu: 9334.267296144226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t>/ping_pong_single_threaded_3_int8_t/0",
            "value": 28974.082846302488,
            "unit": "ns/iter",
            "extra": "iterations: 75115\ncpu: 9152.889569327031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_4_int8_t/0",
            "value": 21962.51288924772,
            "unit": "ns/iter",
            "extra": "iterations: 76847\ncpu: 6595.695342693921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_5_int8_t/0",
            "value": 27229.26099587738,
            "unit": "ns/iter",
            "extra": "iterations: 76415\ncpu: 8628.62003533338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_6_int8_t/0",
            "value": 29105.89761216048,
            "unit": "ns/iter",
            "extra": "iterations: 77099\ncpu: 9135.262454765949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_7_int8_t/0",
            "value": 29422.23006709146,
            "unit": "ns/iter",
            "extra": "iterations: 95094\ncpu: 9316.631964161774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_8_int8_t/0",
            "value": 29334.459319999838,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 9259.722000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_9_int8_t/0",
            "value": 29373.248852640685,
            "unit": "ns/iter",
            "extra": "iterations: 102627\ncpu: 9435.589074999756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_10_int8_t/0",
            "value": 29346.106081081674,
            "unit": "ns/iter",
            "extra": "iterations: 72520\ncpu: 9306.549917264188 ns\nthreads: 1"
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
          "id": "490632efe51dc425ebf32ac4485bf86d928365b6",
          "message": "Experiment rt sudo",
          "timestamp": "2023-08-15T14:25:02+03:00",
          "tree_id": "02143fed47c04344cc6c9642bc07111ce871053f",
          "url": "https://github.com/duckstax/actor-zeta/commit/490632efe51dc425ebf32ac4485bf86d928365b6"
        },
        "date": 1692099268113,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<int8_t>/ping_pong_single_threaded_1_int8_t/0",
            "value": 31088.85823805274,
            "unit": "ns/iter",
            "extra": "iterations: 75916\ncpu: 10012.956425522947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t>/ping_pong_single_threaded_2_int8_t/0",
            "value": 28882.795779678065,
            "unit": "ns/iter",
            "extra": "iterations: 106390\ncpu: 9610.81210640098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t>/ping_pong_single_threaded_3_int8_t/0",
            "value": 28474.590354946344,
            "unit": "ns/iter",
            "extra": "iterations: 74152\ncpu: 9486.933595857157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_4_int8_t/0",
            "value": 28620.69405537789,
            "unit": "ns/iter",
            "extra": "iterations: 71039\ncpu: 9461.281831106857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_5_int8_t/0",
            "value": 28793.25877345608,
            "unit": "ns/iter",
            "extra": "iterations: 74714\ncpu: 9555.330995529614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_6_int8_t/0",
            "value": 28867.899885050134,
            "unit": "ns/iter",
            "extra": "iterations: 73945\ncpu: 9449.964162553244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_7_int8_t/0",
            "value": 28676.086212660502,
            "unit": "ns/iter",
            "extra": "iterations: 101702\ncpu: 9534.18910149259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_8_int8_t/0",
            "value": 28532.98380999505,
            "unit": "ns/iter",
            "extra": "iterations: 74861\ncpu: 9462.566623475499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_9_int8_t/0",
            "value": 28614.67772729727,
            "unit": "ns/iter",
            "extra": "iterations: 73956\ncpu: 9522.395748823614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_10_int8_t/0",
            "value": 28688.594521479088,
            "unit": "ns/iter",
            "extra": "iterations: 73560\ncpu: 9570.301794453502 ns\nthreads: 1"
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
          "id": "88fdd486465e72f0ba6fdbacb36d637519982659",
          "message": "install git and checkout in container : git config safe dir 2",
          "timestamp": "2023-08-15T16:04:18+03:00",
          "tree_id": "a81fd4e4b3527f88adc1c100b561e1ed0bf34c24",
          "url": "https://github.com/duckstax/actor-zeta/commit/88fdd486465e72f0ba6fdbacb36d637519982659"
        },
        "date": 1692105426458,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<int8_t>/ping_pong_single_threaded_1_int8_t/0",
            "value": 28791.512540000214,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 9700.084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t>/ping_pong_single_threaded_2_int8_t/0",
            "value": 28698.113135663236,
            "unit": "ns/iter",
            "extra": "iterations: 72444\ncpu: 9632.097896306113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t>/ping_pong_single_threaded_3_int8_t/0",
            "value": 28944.89151857188,
            "unit": "ns/iter",
            "extra": "iterations: 71238\ncpu: 9571.17268873354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_4_int8_t/0",
            "value": 28791.110254210445,
            "unit": "ns/iter",
            "extra": "iterations: 89729\ncpu: 9467.061930925343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_5_int8_t/0",
            "value": 22863.87246847038,
            "unit": "ns/iter",
            "extra": "iterations: 86904\ncpu: 7400.477538433215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_6_int8_t/0",
            "value": 28547.642577878953,
            "unit": "ns/iter",
            "extra": "iterations: 71361\ncpu: 9465.472737209398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_7_int8_t/0",
            "value": 28657.295458262848,
            "unit": "ns/iter",
            "extra": "iterations: 73364\ncpu: 9529.3032004798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_8_int8_t/0",
            "value": 28713.625079723304,
            "unit": "ns/iter",
            "extra": "iterations: 73693\ncpu: 9490.320654607625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_9_int8_t/0",
            "value": 26892.25663200563,
            "unit": "ns/iter",
            "extra": "iterations: 78860\ncpu: 8884.137712401729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t, int8_t>/ping_pong_single_threaded_10_int8_t/0",
            "value": 28038.01311650263,
            "unit": "ns/iter",
            "extra": "iterations: 75020\ncpu: 9401.347640629177 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}