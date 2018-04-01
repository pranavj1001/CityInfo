import React, { Component } from 'react';

export default class CityList extends Component {
  render() {
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th>City</th>
            <th>Country</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
            <th>Map</th>
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }
}
