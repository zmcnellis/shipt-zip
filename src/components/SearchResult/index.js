import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class SearchResult extends Component {

  // return formatted launch date string
  formatDate(dateStr) {
    let date = new Date(dateStr); // launch date
    const currentDate = new Date(); // current date
    const timeZoneDiff = date.getTimezoneOffset() - currentDate.getTimezoneOffset(); // timezone offset difference

    // ensure that the date displayed is not adjusted to the client machine's timezone
    date.setMinutes(date.getMinutes() + timeZoneDiff);

    // if date is in the past or present, show "Now Available"
    if (date - currentDate <= 0) {
      return "Now Available";
    }
    // if date is in the future, show "Coming MM/dd"
    else {
      return `Coming ${date.getMonth() + 1}/${date.getDate()}`;
    }
  }

  // render results
  render() {
    return (
      <div className="search-result">
        <h2 className="store-name">{this.props.name}</h2>
        <p className="launch-date">{this.formatDate(this.props.date)}</p>
      </div>
    );
  }
}

SearchResult.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default SearchResult;
