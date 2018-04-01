import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityList extends Component {
  renderCities(cityData) {
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>{cityData.city.country}</td>
      </tr>
    );
  }

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
        <tbody>
          {this.props.cityInfo.map(this.renderCities)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ cityInfo }) => ({ cityInfo });

export default connect(mapStateToProps)(CityList);
