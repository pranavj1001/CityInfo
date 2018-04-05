import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import CityMap from '../components/city_map';

class CityList extends Component {
  renderCities(cityData) {
    const temperature = cityData.list.map(info => info.main.temp - 273.15);
    const humidity = cityData.list.map(info => info.main.humidity);
    const pressure = cityData.list.map(info => info.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>{cityData.city.country}</td>
        <td><Chart data={temperature} color="orange" units="℃" /></td>
        <td><Chart data={humidity} color="blue" units="%" /></td>
        <td><Chart data={pressure} color="green" units="hPa" /></td>
        <td><CityMap lon={lon} lat={lat} /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={width6}>City</th>
            <th style={width6}>Country</th>
            <th style={width22}>Temperature (℃)</th>
            <th style={width22}>Humidity (%)</th>
            <th style={width22}>Pressure (hPa)</th>
            <th style={width22}>Map</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cityInfo.map(this.renderCities)}
        </tbody>
      </table>
    );
  }
}

const width6 = {
  width: '6%'
};

const width22 = {
  width: '22%'
};

const mapStateToProps = ({ cityInfo }) => ({ cityInfo });

export default connect(mapStateToProps)(CityList);
