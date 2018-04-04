import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class CityList extends Component {
  renderCities(cityData) {
    console.log(cityData);
    const temperature = cityData.list.map(info => info.main.temp);
    const humidity = cityData.list.map(info => info.main.humidity);
    const pressure = cityData.list.map(info => info.main.pressure);

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>{cityData.city.country}</td>
        <td>
          <Chart data={temperature} color="orange" />
        </td>
        <td>
          <Chart data={temperature} color="orange" />
        </td>
        <td>
          <Chart data={temperature} color="orange" />
        </td>
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
