import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Bar, Doughnut, Line, defaults } from 'react-chartjs-2';

import clarkCity from '../assets/images/Clark-by-City.png';
import clarkZip from '../assets/images/Clark-by-Zip.png';

import Layout from '../components/Layout';
import Container from '../components/Container';

defaults.global.maintainAspectRatio = false;

class NevadaPage extends Component {
  render() {
    const data1 = {
      labels: [
        '03/04/20',
        '03/05/20',
        '03/06/20',
        '03/07/20',
        '03/08/20',
        '03/09/20',
        '03/10/20',
        '03/11/20',
        '03/12/20',
        '03/13/20',
        '03/14/20',
        '03/15/20',
        '03/16/20',
        '03/17/20',
        '03/18/20',
        '03/19/20',
        '03/20/20',
        '03/21/20',
        '03/22/20',
        '03/23/20',
        '03/24/20',
        '03/25/20',
        '03/26/20',
        '03/27/20',
        '03/28/20',
        '03/29/20',
        '03/30/20',
        '03/31/20',
        '04/01/20',
        '04/02/20',
        '04/03/20',
        '04/04/20',
        '04/05/20',
        '04/06/20',
        '04/07/20',
        '04/08/20',
        '04/09/20',
        '04/10/20',
        '04/11/20',
        '04/12/20',
        '04/13/20',
        '04/14/20',
        '04/15/20',
        '04/16/20',
        '04/17/20',
        '04/18/20',
        '04/19/20',
        '04/20/20',
        '04/21/20',
        '04/22/20',
        '04/23/20',
        '04/24/20',
        '04/25/20',
        '04/26/20',
        '04/27/20',
        '04/28/20',
        '04/29/20',
        '04/30/20',
        '05/01/20',
        '05/02/20',
        '05/03/20',
        '05/04/20',
        '05/05/20',
        '05/06/20',
        '05/07/20',
        '05/08/20',
        '05/09/20',
        '05/10/20',
        '05/11/20',
      ],
      datasets: [
        {
          label: 'Nevada Cases',
          data: [
            1,
            3,
            4,
            4,
            5,
            5,
            9,
            12,
            22,
            34,
            45,
            63,
            73,
            78,
            101,
            109,
            124,
            154,
            190,
            278,
            321,
            420,
            535,
            621,
            738,
            996,
            1113,
            1279,
            1458,
            1514,
            1742,
            1836,
            1953,
            2087,
            2318,
            2456,
            2584,
            2700,
            2836,
            2971,
            3088,
            3211,
            3321,
            3524,
            3626,
            3728,
            3830,
            3937,
            4081,
            4208,
            4398,
            4539,
            4602,
            4690,
            4805,
            4898,
            4998,
            5227,
            5311,
            5423,
            5491,
            5594,
            5633,
            5766,
            5884,
            6028,
            6098,
            6152,
            6311,
          ],
          fill: false, // Don't fill area under the line
          backgroundColor: '#933A16', // Line color
        },
      ],
    };
    const data1b = {
      labels: [
        '03/04/20',
        '03/05/20',
        '03/06/20',
        '03/07/20',
        '03/08/20',
        '03/09/20',
        '03/10/20',
        '03/11/20',
        '03/12/20',
        '03/13/20',
        '03/14/20',
        '03/15/20',
        '03/16/20',
        '03/17/20',
        '03/18/20',
        '03/19/20',
        '03/20/20',
        '03/21/20',
        '03/22/20',
        '03/23/20',
        '03/24/20',
        '03/25/20',
        '03/26/20',
        '03/27/20',
        '03/28/20',
        '03/29/20',
        '03/30/20',
        '03/31/20',
        '04/01/20',
        '04/02/20',
        '04/03/20',
        '04/04/20',
        '04/05/20',
        '04/06/20',
        '04/07/20',
        '04/08/20',
        '04/09/20',
        '04/10/20',
        '04/11/20',
        '04/12/20',
        '04/13/20',
        '04/14/20',
        '04/15/20',
        '04/16/20',
        '04/17/20',
        '04/18/20',
        '04/19/20',
        '04/20/20',
        '04/21/20',
        '04/22/20',
        '04/23/20',
        '04/24/20',
        '04/25/20',
        '04/26/20',
        '04/27/20',
        '04/28/20',
        '04/29/20',
        '04/30/20',
        '05/01/20',
        '05/02/20',
        '05/03/20',
        '05/04/20',
        '05/05/20',
        '05/06/20',
        '05/07/20',
        '05/08/20',
        '05/09/20',
        '05/10/20',
        '05/11/20',
      ],
      datasets: [
        {
          label: 'Nevada Daily Cases',
          data: [
            1,
            2,
            1,
            0,
            1,
            0,
            4,
            3,
            10,
            12,
            11,
            18,
            10,
            5,
            23,
            8,
            15,
            30,
            36,
            88,
            43,
            99,
            115,
            86,
            117,
            258,
            117,
            166,
            179,
            56,
            228,
            94,
            117,
            134,
            231,
            138,
            128,
            116,
            136,
            135,
            117,
            123,
            110,
            203,
            102,
            102,
            102,
            107,
            144,
            127,
            190,
            141,
            63,
            88,
            115,
            93,
            100,
            229,
            84,
            112,
            68,
            103,
            39,
            133,
            118,
            144,
            70,
            54,
            159,
          ],
          fill: false, // Don't fill area under the line
          backgroundColor: '#933A16', // Bar color
        },
      ],
    };
    const data2 = {
      labels: [
        '03/04/20',
        '03/05/20',
        '03/06/20',
        '03/07/20',
        '03/08/20',
        '03/09/20',
        '03/10/20',
        '03/11/20',
        '03/12/20',
        '03/13/20',
        '03/14/20',
        '03/15/20',
        '03/16/20',
        '03/17/20',
        '03/18/20',
        '03/19/20',
        '03/20/20',
        '03/21/20',
        '03/22/20',
        '03/23/20',
        '03/24/20',
        '03/25/20',
        '03/26/20',
        '03/27/20',
        '03/28/20',
        '03/29/20',
        '03/30/20',
        '03/31/20',
        '04/01/20',
        '04/02/20',
        '04/03/20',
        '04/04/20',
        '04/05/20',
        '04/06/20',
        '04/07/20',
        '04/08/20',
        '04/09/20',
        '04/10/20',
        '04/11/20',
        '04/12/20',
        '04/13/20',
        '04/14/20',
        '04/15/20',
        '04/16/20',
        '04/17/20',
        '04/18/20',
        '04/19/20',
        '04/20/20',
        '04/21/20',
        '04/22/20',
        '04/23/20',
        '04/24/20',
        '04/25/20',
        '04/26/20',
        '04/27/20',
        '04/28/20',
        '04/29/20',
        '04/30/20',
        '05/01/20',
        '05/02/20',
        '05/03/20',
        '05/04/20',
        '05/05/20',
        '05/06/20',
        '05/07/20',
        '05/08/20',
        '05/09/20',
        '05/10/20',
        '05/11/20',
      ],
      datasets: [
        {
          label: 'Nevada Deaths',
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            2,
            3,
            3,
            5,
            7,
            8,
            13,
            13,
            17,
            21,
            25,
            28,
            32,
            37,
            46,
            51,
            59,
            70,
            76,
            79,
            91,
            101,
            111,
            120,
            125,
            128,
            133,
            141,
            150,
            158,
            162,
            167,
            170,
            177,
            190,
            199,
            208,
            213,
            225,
            233,
            243,
            248,
            253,
            263,
            269,
            274,
            277,
            281,
            285,
            295,
            303,
            308,
            309,
            309,
            309,
          ],
          backgroundColor: 'maroon',
        },
      ],
    };

    const data2b = {
      labels: [
        '03/16/20',
        '03/17/20',
        '03/18/20',
        '03/19/20',
        '03/20/20',
        '03/21/20',
        '03/22/20',
        '03/23/20',
        '03/24/20',
        '03/25/20',
        '03/26/20',
        '03/27/20',
        '03/28/20',
        '03/29/20',
        '03/30/20',
        '03/31/20',
        '04/01/20',
        '04/02/20',
        '04/03/20',
        '04/04/20',
        '04/05/20',
        '04/06/20',
        '04/07/20',
        '04/08/20',
        '04/09/20',
        '04/10/20',
        '04/11/20',
        '04/12/20',
        '04/13/20',
        '04/14/20',
        '04/15/20',
        '04/16/20',
        '04/17/20',
        '04/18/20',
        '04/19/20',
        '04/20/20',
        '04/21/20',
        '04/22/20',
        '04/23/20',
        '04/24/20',
        '04/25/20',
        '04/26/20',
        '04/27/20',
        '04/28/20',
        '04/29/20',
        '04/30/20',
        '05/01/20',
        '05/02/20',
        '05/03/20',
        '05/04/20',
        '05/05/20',
        '05/06/20',
        '05/07/20',
        '05/08/20',
        '05/09/20',
        '05/10/20',
        '05/11/20',
      ],
      datasets: [
        {
          label: 'Nevada Daily Deaths',
          backgroundColor: 'maroon',
          data: [
            1,
            0,
            1,
            1,
            0,
            2,
            2,
            1,
            5,
            0,
            4,
            4,
            4,
            3,
            4,
            5,
            9,
            5,
            8,
            11,
            6,
            3,
            12,
            10,
            10,
            9,
            5,
            3,
            5,
            8,
            9,
            8,
            4,
            5,
            3,
            7,
            13,
            9,
            9,
            5,
            12,
            8,
            10,
            5,
            5,
            10,
            6,
            5,
            3,
            4,
            3,
            10,
            8,
            5,
            1,
            0,
            0,
          ],
        }
      ],
    };

    const data2c = {
      labels: [
        '03/24/20',
        '03/25/20',
        '03/26/20',
        '03/27/20',
        '03/28/20',
        '03/29/20',
        '03/30/20',
        '03/31/20',
        '04/01/20',
        '04/02/20',
        '04/03/20',
        '04/04/20',
        '04/05/20',
        '04/06/20',
        '04/07/20',
        '04/08/20',
        '04/09/20',
        '04/10/20',
        '04/11/20',
        '04/12/20',
        '04/13/20',
        '04/14/20',
        '04/15/20',
        '04/16/20',
        '04/17/20',
        '04/18/20',
        '04/19/20',
        '04/20/20',
        '04/21/20',
        '04/22/20',
        '04/23/20',
        '04/24/20',
        '04/25/20',
        '04/26/20',
        '04/27/20',
        '04/28/20',
        '04/29/20',
        '04/30/20',
        '05/01/20',
        '05/02/20',
        '05/03/20',
        '05/04/20',
        '05/05/20',
        '05/06/20',
        '05/07/20',
        '05/08/20',
        '05/09/20',
        '05/10/20',
        '05/11/20',
      ],
      datasets: [
        {
          label: 'Test Positivity Rate',
          fill: false, // Don't fill area under the line
          backgroundColor: 'rgb(54, 162, 235)', //blue
          borderColor: 'rgb(54, 162, 235)', //blue
          data: [
            7.0,
            8.2,
            8.0,
            7.3,
            8.1,
            8.9,
            9.5,
            10.0,
            10.4,
            10.4,
            10.8,
            10.9,
            11.1,
            11.2,
            11.3,
            11.3,
            11.4,
            11.4,
            11.5,
            11.7,
            11.6,
            11.6,
            11.7,
            11.8,
            11.8,
            11.8,
            11.8,
            11.9,
            12.0,
            12.1,
            12.2,
            12.2,
            12.1,
            12.1,
            12.0,
            11.9,
            11.9,
            12.0,
            12.0,
            12.0,
            11.9,
            11.7,
            11.5,
            11.2,
            11.0,
            10.7,
            10.4,
            10.2,
            9.8,
          ],
        },
          {
            label: 'WHO Max Rate Before Re-Opening',
            fill: false, // Don't fill area under the line
            backgroundColor: '#933A16',
            borderColor: '#933A16',
            pointRadius: 1,
            data: [
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
            ],
          },
          {
            label: 'Test + Rate Goal',
            fill: false, // Don't fill area under the line
            backgroundColor: 'green',
            borderColor: 'green',
            pointRadius: 1,
            data: [
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
            ],
          },
        ],
      };
    
    const data3 = {
      labels: [
        '03/20/20',
        '03/23/20',
        '03/25/20',
        '03/26/20',
        '03/27/20',
        '03/29/20',
        '03/30/20',
        '03/31/20',
        '04/01/20',
        '04/02/20',
        '04/03/20',
        '04/04/20',
        '04/05/20',
        '04/06/20',
        '04/07/20',
        '04/08/20',
        '04/09/20',
        '04/10/20',
        '04/11/20',
        '04/12/20',
        '04/13/20',
        '04/14/20',
        '04/15/20',
        '04/16/20',
        '04/17/20',
        '04/18/20',
        '04/19/20',
        '04/20/20',
        '04/21/20',
        '04/22/20',
        '04/23/20',
        '04/24/20',
        '04/25/20',
        '04/26/20',
        '04/27/20',
        '04/28/20',
        '04/29/20',
        '04/30/20',
        '05/01/20',
        '05/02/20',
        '05/03/20',
        '05/04/20',
        '05/05/20',
        '05/06/20',
        '05/07/20',
        '05/08/20',
        '05/09/20',
        '05/10/20',
        '05/11/20',
      ],
      datasets: [
        {
          label: 'CC Hospitalized',
          backgroundColor: '#933A16',
          data: [
            20,
            44,
            74,
            90,
            106,
            115,
            167,
            224,
            309,
            367,
            401,
            408,
            410,
            469,
            560,
            603,
            653,
            711,
            717,
            717,
            749,
            789,
            816,
            856,
            887,
            893,
            893,
            934,
            962,
            1006,
            1034,
            1066,
            1072,
            1074,
            1098,
            1131,
            1152,
            1169,
            1195,
            1201,
            1206,
            1232,
            1270,
            1292,
            1311,
            1326,
            1326,
            1327,
            1353,
          ],
        },
      ],
    };
      const data3b = {
        labels: [
          '03/20/20',
          '03/23/20',
          '03/25/20',
          '03/26/20',
          '03/27/20',
          '03/29/20',
          '03/30/20',
          '03/31/20',
          '04/01/20',
          '04/02/20',
          '04/03/20',
          '04/04/20',
          '04/05/20',
          '04/06/20',
          '04/07/20',
          '04/08/20',
          '04/09/20',
          '04/10/20',
          '04/11/20',
          '04/12/20',
          '04/13/20',
          '04/14/20',
          '04/15/20',
          '04/16/20',
          '04/17/20',
          '04/18/20',
          '04/19/20',
          '04/20/20',
          '04/21/20',
          '04/22/20',
          '04/23/20',
          '04/24/20',
          '04/25/20',
          '04/26/20',
          '04/27/20',
          '04/28/20',
          '04/29/20',
          '04/30/20',
          '05/01/20',
          '05/02/20',
          '05/03/20',
          '05/04/20',
          '05/05/20',
          '05/06/20',
          '05/07/20',
          '05/08/20',
          '05/09/20',
          '05/10/20',
          '05/11/20',
        ],
        datasets: [
        {
          label: 'Clark Co. Hosp Daily',
          backgroundColor: 'maroon',
          data: [
            20,
            24,
            30,
            6,
            12,
            8,
            52,
            57,
            85,
            58,
            34,
            7,
            2,
            59,
            91,
            43,
            50,
            58,
            6,
            0,
            32,
            40,
            27,
            40,
            31,
            6,
            0,
            41,
            28,
            44,
            28,
            32,
            6,
            2,
            24,
            33,
            21,
            17,
            26,
            6,
            5,
            26,
            38,
            22,
            19,
            15,
            0,
            1,
            26,
          ],
        },
      ],
    };

    const data4 = {
      labels: [
        '03/04/20',
        '03/05/20',
        '03/06/20',
        '03/07/20',
        '03/08/20',
        '03/09/20',
        '03/10/20',
        '03/11/20',
        '03/12/20',
        '03/13/20',
        '03/14/20',
        '03/15/20',
        '03/16/20',
        '03/17/20',
        '03/18/20',
        '03/19/20',
        '03/20/20',
        '03/21/20',
        '03/22/20',
        '03/23/20',
        '03/24/20',
        '03/25/20',
        '03/26/20',
        '03/27/20',
        '03/28/20',
        '03/29/20',
        '03/30/20',
        '03/31/20',
        '04/01/20',
        '04/02/20',
        '04/03/20',
        '04/04/20',
        '04/05/20',
        '04/06/20',
        '04/07/20',
        '04/08/20',
        '04/09/20',
        '04/10/20',
        '04/11/20',
        '04/12/20',
        '04/13/20',
        '04/14/20',
        '04/15/20',
        '04/16/20',
        '04/17/20',
        '04/18/20',
        '04/19/20',
        '04/20/20',
        '04/21/20',
        '04/22/20',
        '04/23/20',
        '04/24/20',
        '04/25/20',
        '04/26/20',
        '04/27/20',
        '04/28/20',
        '04/29/20',
        '04/30/20',
        '05/01/20',
        '05/02/20',
        '05/03/20',
        '05/04/20',
        '05/05/20',
        '05/06/20',
        '05/07/20',
        '05/08/20',
        '05/09/20',
        '05/10/20',
        '05/11/20',
      ],
      datasets: [
        {
          label: 'Clark County Deaths',
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            4,
            6,
            10,
            10,
            10,
            14,
            15,
            23,
            28,
            34,
            39,
            41,
            41,
            41,
            54,
            65,
            71,
            75,
            96,
            100,
            101,
            106,
            115,
            121,
            124,
            133,
            137,
            137,
            141,
            150,
            163,
            168,
            174,
            174,
            174,
            186,
            196,
            202,
            206,
            215,
            218,
            223,
            226,
            238,
            245,
            253,
            256,
            260,
            260,
            267,
          ],
          backgroundColor: 'maroon',
        },
      ],
    };

    const data4b = {
      labels: [
        '03/16/20',
        '03/17/20',
        '03/18/20',
        '03/19/20',
        '03/20/20',
        '03/21/20',
        '03/22/20',
        '03/23/20',
        '03/24/20',
        '03/25/20',
        '03/26/20',
        '03/27/20',
        '03/28/20',
        '03/29/20',
        '03/30/20',
        '03/31/20',
        '04/01/20',
        '04/02/20',
        '04/03/20',
        '04/04/20',
        '04/05/20',
        '04/06/20',
        '04/07/20',
        '04/08/20',
        '04/09/20',
        '04/10/20',
        '04/11/20',
        '04/12/20',
        '04/13/20',
        '04/14/20',
        '04/15/20',
        '04/16/20',
        '04/17/20',
        '04/18/20',
        '04/19/20',
        '04/20/20',
        '04/21/20',
        '04/22/20',
        '04/23/20',
        '04/24/20',
        '04/25/20',
        '04/26/20',
        '04/27/20',
        '04/28/20',
        '04/29/20',
        '04/30/20',
        '05/01/20',
        '05/02/20',
        '05/03/20',
        '05/04/20',
        '05/05/20',
        '05/06/20',
        '05/07/20',
        '05/08/20',
        '05/09/20',
        '05/10/20',
        '05/11/20',
      ],
      datasets: [
        {
          label: 'Clark Co. Daily Deaths',
          backgroundColor: 'maroon',
          data: [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            2,
            2,
            4,
            0,
            0,
            4,
            1,
            8,
            5,
            6,
            5,
            2,
            0,
            0,
            13,
            11,
            6,
            4,
            21,
            4,
            1,
            5,
            9,
            6,
            3,
            9,
            4,
            0,
            4,
            9,
            13,
            5,
            6,
            0,
            0,
            12,
            10,
            6,
            4,
            9,
            3,
            5,
            3,
            12,
            7,
            11,
            3,
            4,
            0,
            7,
          ]
        }
      ],
    };

    const data5 = {
      labels: ['0-4', '5-17', '18-24', '25-49', '50-64', '65+'],
      datasets: [
        {
          label: 'Age of Cases',
          data: [35, 132, 305, 1983, 1321, 1090],
          backgroundColor: [
            'rgb(54, 162, 235)', //blue
            'rgb(255, 99, 132)', //salmon
            'rgb(255, 205, 86)', //yellow
            'rgb(147, 58, 22)', //rust
            'rgb(181, 234, 215)', //light green
            'rgb(179, 153, 212)', //light purple
          ],
        },
      ],
    };

    const data6 = {
      labels: ['Female', 'Male', '* Unknown'],
      datasets: [
        {
          label: 'Sex',
          data: [2481, 2293, 95],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
        },
      ],
    };

    return (
      <Layout pageName="nevada">
        <Helmet>
          <title>Nevada Stats</title>
        </Helmet>

        {/* content area start */}
        <Container
          type="content"
          className="text-center container-fluid pr-5 pl-5 pt-5 pb-5"
        >
          <article className="canvas-container">
            <div>
              <h2 className="is-dark-text-light">Nevada</h2>
              <h5 className="is-dark-text-light">
                <em>NOTE: Nevada Data Is One Day Old</em>
              </h5>
              <p className="is-dark-text-light">
                <em>Hover over colored sections to see numbers.</em>
              </p>
            </div>
            <div className="row">
              <div className="col-md-5 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      Nevada Cases
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <Bar data={data1} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 is-light-text mb-4">
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                      Nevada Daily Cases
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <Bar data={data1b} />
                    </div>
                  </div>
                </div>

              <div className="col-md-3">
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      People Tested
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <p className="is-dark-text-light">Total</p>
                    <h1>64,075</h1>
                  </div>
                </div>
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      Tested Negative
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <p className="is-dark-text-light">Total</p>
                    <h1>57,764</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      Nevada Deaths - Date of Death
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <Bar data={data2} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      Nevada Daily Deaths
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <Bar data={data2b} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      Nevada Cases
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <p className="is-dark-text-light">Total</p>
                    <h1>6,311</h1>
                  </div>
                </div>
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      Nevada Deaths
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <p className="is-dark-text-light">Total</p>
                    <h1>309</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      NV Test Positivity Rate
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <Line data={data2c} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="is-dark-text-light">Clark County NV</h2>
              <div className="row">
                <div className="col-lg-5 is-light-text mb-4">
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        Clark County Hospitalized
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <Bar data={data3} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 is-light-text mb-4">
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        CC Daily Hospitalized
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <Bar data={data3b} />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 is-light-text mb-4">
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        Clark County Cases
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <p className="is-dark-text-light">Total</p>
                      <h1>4,869</h1>
                    </div>
                  </div>
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        Clark Co Hospitalized
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <p className="is-dark-text-light">Total</p>
                      <h1>1,353</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 is-light-text mb-4">
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        Clark County Deaths - Date Reported
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <Bar data={data4} />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 is-light-text mb-4">
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        Clark County Daily Deaths
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <Bar data={data4b} />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 is-light-text mb-4">
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        Clark County Deaths
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <p className="is-dark-text-light">Total</p>
                      <h1>267</h1>
                    </div>
                  </div>
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                      Clark County Recovered
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <p className="is-dark-text-light">Total</p>
                      <h1>4,133</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card is-card-dark chart-card">
                    <div className="chart-container large">
                      <div className="card-heading">
                        <div className="is-dark-text-light letter-spacing text-small">
                          Clark County Age of Cases
                        </div>
                      </div>
                      <div className="card-value pt-4">
                        <Bar data={data5} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="card is-card-dark chart-card">
                    <div className="chart-container large">
                      <div className="card-heading">
                        <div className="is-dark-text-light letter-spacing text-small">
                          Clark County Gender of Cases
                        </div>
                      </div>
                      <div className="card-value pt-4">
                        <Doughnut data={data6} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      Clark County Cases By City
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <img
                      src={clarkCity}
                      className="img-fluid"
                      alt="Covid-19 in Clark Co Cities"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card is-card-dark chart-card">
                  <div className="chart-container large">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        Clark County Cases By Zip
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <img
                        src={clarkZip}
                        className="img-fluid"
                        alt="Covid-19 in Clark Co by zip code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="is-dark-text-light">
                <em>
                  *Information is based on current investigations and may not be
                  complete.
                  <br />
                  Due to limited weekend reporting counts may be artificially
                  low Saturday - Monday.
                </em>
              </p>
              <h3>Nevada Data Sources:</h3>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.powerbigov.us/view?r=eyJrIjoiMjA2ZThiOWUtM2FlNS00MGY5LWFmYjUtNmQwNTQ3Nzg5N2I2IiwidCI6ImU0YTM0MGU2LWI4OWUtNGU2OC04ZWFhLTE1NDRkMjcwMzk4MCJ9"
                >
                  Nevada DWWS
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.southernnevadahealthdistrict.org/coronavirus"
                >
                  SNHD
                </a>
              </p>
            </div>
          </article>
        </Container>
      </Layout>
    );
  }
}

export default NevadaPage;
