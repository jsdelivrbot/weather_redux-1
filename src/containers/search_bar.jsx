import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault()

    // We need to fetch weather data

    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' });
  }

  onInputChange(e) {
    this.setState({ term: e.target.value })
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}className="input-group">
        <input
          className="form-control"
          placeholder="Get a five-day forecastin your favorite cities"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchtoProps)(SearchBar)