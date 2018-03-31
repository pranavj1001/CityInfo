import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: '' };
  }

  onInputChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Search for a city"
          className="form-control"
          value={this.state.searchQuery}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="submit">Search</button>
        </span>
      </form>
    );
  }
}
