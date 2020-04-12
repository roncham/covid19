import React from 'react';

class GlobalList extends React.Component {
  state = {
    glData: []
  };

  async componentDidMount() {
    // Load async data.
    await fetch('https://corona.lmao.ninja/all')
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          isLoaded: true,
          glData: json
        });
        //console.log(this.state.glData);
      });
    error => {
      this.setState({ error });
    };
  }

  render() {
    const { isLoaded, glData } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <ul>
            <li>
              <strong>Confirmed:</strong> {glData.cases}
            </li>
            <li className="is-red">
              <strong>Deaths:</strong> {glData.deaths}
            </li>
            <li className="is-orange">
              <strong>Active:</strong> {glData.active}
            </li>
            <li className="is-red">
              <strong>Critical:</strong> {glData.critical}
            </li>

            <li className="is-green">
              <strong>Recovered:</strong> {glData.recovered}
            </li>
            <li>
              <strong>Tests Done:</strong> {glData.tests}
            </li>
          </ul>
        </>
      );
    }
  }
}

export default GlobalList;
