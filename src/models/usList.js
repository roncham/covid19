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
            <td>{usData.cases}</td>
            <td>{usData.deaths}</td>
            <td>{usData.active}</td>
            <td>{usData.tests}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default StatesList;
