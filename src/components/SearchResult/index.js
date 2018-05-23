import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class SearchResult extends Component {

  formatDate(dateStr) {
    const date = new Date(dateStr);

    if (date - new Date() <= 0) {
      return "Now Available";
    }
    else {
      return `Coming ${date.getMonth() + 1}/${date.getDate()}`;
    }
  }

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
