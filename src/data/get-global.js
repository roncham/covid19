import React from 'react';
import Container from 'components/Container';
import { render } from 'enzyme';

const GetGlobals = () => {
  state = {
  loading: true,
  error: false,
  fetchData: [],
  }

  componentDidMount() {
    fetch('https://corona.lmao.ninja/all')
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({
        fetchData: json.results,
        loading: false
      })
    })
  }

  render() {
    const { fetchData } = this.state,
  

  return (
    <Layout>
      {/* content area start */}
      <Container
        type="content"
        className="text-center container-fluid pr-5 pl-5 pt-5 pb-5"
      >
        <h2 className="is-dark-text-light">Global Cases</h2>
        {/* row 1 - global */}
        <Container className="row">
          <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
            <Container className="card grid-card is-card-dark h-100">
              <Container className="card-heading">
                <Container className="is-dark-text-light letter-spacing text-small">
                  Total Cases
                </Container>
              </Container>

              <Container className="card-value pt-4 text-x-large">
                <h2 className="is-orange">cases</h2>
                Total Cases
                <h2 className="is-orange">todayCases</h2>
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
                <h2 className="is-red">deaths</h2>
                Todays Deaths
                <h2 className="is-red">todayDeaths</h2>
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
                <h2 className="is-green">recovered</h2>
                Active
                <h2 className="is-green">active</h2>
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
                <h2>affectedCountries</h2>
                Last Updated
                <h5>updated</h5>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      </Layout>
  );
}
}


export default GetGlobals;