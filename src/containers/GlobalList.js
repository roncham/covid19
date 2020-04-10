import React from 'react';

import axiosbase from '../utils/axiobase';

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
          <div className="row">
            <div className="col-lg-3 col-sm-6 is-light-text mb-4">
              <div className="card grid-card is-card-dark h-100">
                <div className="card-heading">
                  <div className="is-dark-text-light letter-spacing text-small">
                    Total Cases
                  </div>
                </div>

                <div className="card-value pt-4 text-x-large">
                  <h2 className="is-orange">{glData.cases}</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 is-light-text mb-4">
              <div className="card grid-card is-card-dark h-100">
                <div className="card-heading">
                  <div className="is-dark-text-light letter-spacing text-small">
                    Global Deaths
                  </div>
                </div>

                <div className="card-value pt-4 text-x-large">
                  <h2 className="is-red">{glData.deaths}</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 is-light-text mb-4">
              <div className="card grid-card is-card-dark h-100">
                <div className="card-heading">
                  <div className="is-dark-text-light letter-spacing text-small">
                    Recovered
                  </div>
                </div>

                <div className="card-value pt-4 text-x-large">
                  <h2 className="is-green">{glData.recovered}</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 is-light-text mb-4">
              <div className="card grid-card is-card-dark h-100">
                <div className="card-heading">
                  <div className="is-dark-text-light letter-spacing text-small">
                    Countries
                  </div>
                </div>

                <div className="card-value pt-4">
                  <h2>{glData.affectedCountries}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    ); // return
  } // render
} // main

export default GlobalList;
