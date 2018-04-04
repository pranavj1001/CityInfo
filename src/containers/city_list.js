import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class CityList extends Component {
  renderCities(cityData) {
    console.log(cityData);
    const temperature = cityData.list.map(info => info.main.temp - 273.15);
    const humidity = cityData.list.map(info => info.main.humidity);
    const pressure = cityData.list.map(info => info.main.pressure);

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>{cityData.city.country}</td>
        <td><Chart data={temperature} color="orange" units="℃" /></td>
        <td><Chart data={humidity} color="blue" units="%" /></td>
        <td><Chart data={pressure} color="green" units="hPa" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={width10}>City</th>
            <th style={width10}>Country</th>
            <th style={width20}>Temperature (℃)</th>
            <th style={width20}>Humidity (%)</th>
            <th style={width20}>Pressure (hPa)</th>
            <th style={width20}>Map</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cityInfo.map(this.renderCities)}
        </tbody>
      </table>
    );
  }
}

const width10 = {
  width: '10%'
};

const width20 = {
  width: '20%'
};

const mapStateToProps = ({ cityInfo }) => ({ cityInfo });

export default connect(mapStateToProps)(CityList);
