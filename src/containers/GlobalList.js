import React from 'react';

import axiosbase from '../utils/axiobase';
import Container from 'components/Container';

class GlobalList extends React.Component {
  state = {
    glData: []
  };

  async componentDidMount() {
    // Load async data.
    const url = '/all';
    await axiosbase
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ glData: data });
        console.log(this.state.glData);
      });
  }

  render() {
    return (
      <>
        {this.state.glData.map(glData => (
          <Container className="row">
            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark h-100">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Total Cases
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <h2 className="is-orange">{glData.cases}</h2>
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark h-100">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Global Deaths
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <h2 className="is-red">{glData.deaths}</h2>
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark h-100">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Recovered
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <h2 className="is-green">{glData.recovered}</h2>
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark h-100">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Countries
                  </Container>
                </Container>

                <Container className="card-value pt-4">
                  <h2>{glData.affectedCountries}</h2>
                </Container>
              </Container>
            </Container>
          </Container>
        ))}
      </>
    ); // return
  } // render
}

export default GlobalList;
