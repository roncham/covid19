import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Bar, Doughnut, defaults } from 'react-chartjs-2';

import clarkCity from '../assets/images/Clark-by-City.png';
import clarkZip from '../assets/images/Clark-by-Zip.png';

import Layout from '../components/Layout';
import Container from '../components/Container';

defaults.global.maintainAspectRatio = false;

class NevadaPage extends Component {
  render() {
    const data = {
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
          ],
          fill: false, // Don't fill area under the line
          backgroundColor: '#933A16', // Line color
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
            100,
            109,
            119,
            124,
            127,
            131,
            138,
            147,
            155,
            158,
            161,
            164,
            168,
            172,
            187,
            195,
            203,
            206,
            206,
            217,
            223,
            242,
            250,
            252,
            255,
          ],
          backgroundColor: 'maroon',
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
      ],
      datasets: [
        {
          label: 'CC Hospitalized',
          backgroundColor: '#933A16',
          data: [
            20,
            44,
            74,
            80,
            92,
            100,
            145,
            198,
            277,
            331,
            362,
            369,
            371,
            417,
            497,
            537,
            583,
            621,
            624,
            623,
            651,
            683,
            705,
            741,
            765,
            768,
            768,
            805,
            826,
            860,
            881,
            907,
            913,
            915,
            927,
            950,
            966,
            978,
            999,
            1002
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
        ],
        datasets: [
        {
          label: 'CC Hosp New',
          backgroundColor: 'maroon',
          data: [
            20,
            24,
            30,
            6,
            12,
            8,
            45,
            53,
            79,
            4,
            31,
            7,
            2,
            46,
            80,
            40,
            46,
            38,
            3,
            -1,
            28,
            32,
            22,
            36,
            24,
            3,
            0,
            37,
            21,
            34,
            21,
            26,
            6,
            2,
            12,
            23,
            16,
            12,
            21,
            3,
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
          ],
          backgroundColor: 'maroon',
        },
      ],
    };

    const data5 = {
      labels: ['0-4', '5-17', '18-24', '25-49', '50-64', '65+'],
      datasets: [
        {
          label: 'Age of Cases',
          data: [20, 105, 267, 1715, 1193, 971],
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
          data: [2176, 1999, 99],
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
              <div className="col-md-9 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      Nevada Cases
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <Bar data={data} />
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
                    <h1>45,269</h1>
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
                    <h1>39,843</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-9 is-light-text mb-4">
                <div className="card grid-card is-card-dark">
                  <div className="card-heading">
                    <div className="is-dark-text-light letter-spacing text-small">
                      Nevada Deaths
                    </div>
                  </div>
                  <div className="card-value pt-4">
                    <Bar data={data2} />
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
                    <h1>5,423</h1>
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
                    <h1>255</h1>
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
                        CC New Hospitalized
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
                      <h1>4,274</h1>
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
                      <h1>1,002</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 is-light-text mb-4">
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        Clark County Deaths
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <Bar data={data4} />
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
                      <h1>218</h1>
                    </div>
                  </div>
                  <div className="card grid-card is-card-dark">
                    <div className="card-heading">
                      <div className="is-dark-text-light letter-spacing text-small">
                        Deaths were Hospitalized
                      </div>
                    </div>
                    <div className="card-value pt-4">
                      <p className="is-dark-text-light">Total</p>
                      <h1>199</h1>
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
            </div>
          </article>
        </Container>
      </Layout>
    );
  }
}

export default NevadaPage;
