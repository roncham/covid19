import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Bar, Doughnut, defaults } from 'react-chartjs-2';

import Layout from 'components/Layout';
import Container from 'components/Container';

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
        '04/07/20'
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
            2246
          ],
          fill: false, // Don't fill area under the line
          backgroundColor: '#933A16' // Line color
        }
      ]
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
        '04/07/20'
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
            1,
            1,
            2,
            2,
            2,
            4,
            6,
            10,
            10,
            14,
            14,
            15,
            17,
            26,
            36,
            43,
            45,
            46,
            46,
            58,
            82
          ],
          backgroundColor: 'maroon'
        }
      ]
    };

    const data3 = {
      labels: [
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
        '04/07/20'
      ],
      datasets: [
        {
          label: 'Clark County Cases',
          data: [
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            5,
            11,
            20,
            21,
            35,
            42,
            69,
            74,
            121,
            126,
            151,
            212,
            249,
            350,
            443,
            528,
            612,
            753,
            869,
            961,
            1125,
            1279,
            1418,
            1519,
            1608,
            1734,
            1878
          ],
          backgroundColor: '#933A16'
        }
      ]
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
        '04/07/20'
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
            65
          ],
          backgroundColor: 'maroon'
        }
      ]
    };

    const data5 = {
      labels: ['0-4', '5-17', '18-24', '25-49', '50-64', '65+'],
      datasets: [
        {
          label: 'Age of Cases',
          data: [4, 22, 99, 759, 559, 435],
          backgroundColor: [
            'rgb(54, 162, 235)', //blue
            'rgb(255, 99, 132)', //salmon
            'rgb(255, 205, 86)', //yellow
            'rgb(147, 58, 22)', //rust
            'rgb(181, 234, 215)', //light green
            'rgb(179, 153, 212)' //light purple
          ]
        }
      ]
    };

    const data6 = {
      labels: ['Male', 'Female', '* Unknown'],
      datasets: [
        {
          label: 'Sex',
          data: [923, 926, 29],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)'
          ]
        }
      ]
    };

    return (
      <Layout pageName="nevada">
        <Helmet>
          <title>Nevada</title>
        </Helmet>

        {/* content area start */}
        <Container
          type="content"
          className="text-center container-fluid pr-5 pl-5 pt-5 pb-5"
        >
          <article className="canvas-container">
            <h2 className="">Nevada</h2>
            <h5 className="is-dark-text-light">
              NOTE: Nevada Data Is One Day Old
            </h5>
            <p className="is-dark-text-light">
              Hover over colored sections to see numbers.
            </p>

            <Container className="row">
              <Container className="col-lg-12 is-light-text mb-4">
                <Container className="card grid-card is-card-dark">
                  <Container className="card-heading">
                    <Container className="is-dark-text-light letter-spacing text-small">
                      Nevada Cases - 2246
                    </Container>
                  </Container>
                  <Container className="card-value pt-4">
                    <Bar data={data} />
                  </Container>
                </Container>
              </Container>
            </Container>

            <Container className="row">
              <Container className="col-lg-12 is-light-text mb-4">
                <Container className="card grid-card is-card-dark">
                  <Container className="card-heading">
                    <Container className="is-dark-text-light letter-spacing text-small">
                      Nevada Deaths - 82
                    </Container>
                  </Container>
                  <Container className="card-value pt-4">
                    <Bar data={data2} />
                  </Container>
                </Container>
              </Container>
            </Container>

            <h2 className="is-dark-text-light">Clark County NV</h2>

            <Container className="row">
              <Container className="col-lg-12 is-light-text mb-4">
                <Container className="card grid-card is-card-dark">
                  <Container className="card-heading">
                    <Container className="is-dark-text-light letter-spacing text-small">
                      Clark County Cases - 1878
                    </Container>
                  </Container>
                  <Container className="card-value pt-4">
                    <Bar data={data3} />
                  </Container>
                </Container>
              </Container>
            </Container>

            <Container className="row">
              <Container className="col-lg-12 is-light-text mb-4">
                <Container className="card grid-card is-card-dark">
                  <Container className="card-heading">
                    <Container className="is-dark-text-light letter-spacing text-small">
                      Clark County Deaths - 65
                    </Container>
                  </Container>
                  <Container className="card-value pt-4">
                    <Bar data={data4} />
                  </Container>
                </Container>
              </Container>
            </Container>

            <Container className="row">
              <Container className="col-md-6 mb-4">
                <Container className="card is-card-dark chart-card">
                  <Container className="chart-container large">
                    <Container className="card-heading">
                      <Container className="is-dark-text-light letter-spacing text-small">
                        Age of Cases
                      </Container>
                    </Container>
                    <Container className="card-value pt-4">
                      <Doughnut data={data5} />
                    </Container>
                  </Container>
                </Container>
              </Container>

              <Container className="col-md-6 mb-4">
                <Container className="card is-card-dark chart-card">
                  <Container className="chart-container large">
                    <Container className="card-heading">
                      <Container className="is-dark-text-light letter-spacing text-small">
                        Gender of Cases
                      </Container>
                    </Container>
                    <Container className="card-value pt-4">
                      <Doughnut data={data6} />
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
            <p className="is-dark-text-light">
              <em>
                *Information is based on current investigations and may not be
                complete.
                <br />
                Due to limited weekend reporting counts may be artificially low
                Saturday - Monday.
              </em>
            </p>
          </article>
        </Container>
      </Layout>
    );
  }
}

export default NevadaPage;
