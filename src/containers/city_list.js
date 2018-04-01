import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityList extends Component {
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

const mapStateToProps = ({ city_info }) => ({ city_info });

export default connect(mapStateToProps)(CityList);
