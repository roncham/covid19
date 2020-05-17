import React from 'react';

import axiosbase from '../data/axiobase';

class StatesList extends React.Component {
  state = {
    usData: [],
  };

  async componentDidMount() {
    // Load async data.
    const url = '/v2/states?sort=cases';
    await axiosbase
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ usData: data });
        //console.log(this.state.usData);
      });
  }

  render() {
    return (
      <>
        {this.state.usData.map((usData) => (
          <tr key={usData.state}>
            <th scope="row">{usData.state}</th>
            <td className="is-yellow">{usData.cases}</td>
            <td className="is-red">{usData.deaths}</td>
            <td className="is-orange">{usData.active}</td>
            <td className="is-blue">{usData.tests}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default StatesList;
