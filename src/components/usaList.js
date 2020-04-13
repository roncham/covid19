import React from 'react';

class USAList extends React.Component {
  state = {
    usaData: []
  };

  async componentDidMount() {
    // Load async data.
    await fetch('https://corona.lmao.ninja/v2/countries/USA')
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          isLoaded: true,
          usaData: json
        });
        //console.log(this.state.usaData);
      });
    error => {
      this.setState({ error });
    };
  }

  render() {
    const { isLoaded, usaData } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <ul key={usaData._id}>
            <li>
              <strong>Confirmed:</strong> {usaData.cases}
            </li>
            <li className="is-red">
              <strong>Deaths:</strong> {usaData.deaths}
            </li>
            <li className="is-orange">
              <strong>Active:</strong> {usaData.active}
            </li>
            <li className="is-red">
              <strong>Critical:</strong> {usaData.critical}
            </li>

            <li className="is-green">
              <strong>Recovered:</strong> {usaData.recovered}
            </li>
            <li>
              <strong>Tests Done:</strong> {usaData.tests}
            </li>
          </ul>
        </>
      );
    }
  }
}

export default USAList;
