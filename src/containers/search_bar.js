import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchInfo } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: '' };
  }

  onInputChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchInfo(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchInfo }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
