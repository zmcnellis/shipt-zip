import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button'
import './styles.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.clear = false;
    this.updateValue = this.updateValue.bind(this);
  }

  handleSubmit() {
    this.props.handleSubmit(this.state.inputValue);
    this.clear = false;
  }

  updateValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
    if (this.props.hasError)
      this.clear = true;
  }

  displaySearch() {
    if (this.props.hasError && !this.clear) {
      return (
        <div className="search-wrapper">
          <div className="search-bar">
            <div className="search-icon warning search-icon-left">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="search-field">
              <input className="search-field-input warning" name="search" type="text" autoComplete="off" maxLength="5" placeholder="Enter ZIP Code" onChange={evt => this.updateValue(evt)}/>
            </div>
            <div className="search-icon warning search-icon-right">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
          </div>
          <a className="button button-primary search-button" onClick={this.handleSubmit.bind(this)}>Get Started</a>
          <p className="error-text">This ZipCode is invalid! Please try again.</p>
        </div>
      );
    }
    else {
      return (
        <div className="search-wrapper">
          <div className="search-bar">
            <div className="search-icon search-icon-left">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="search-field">
              <input className="search-field-input" name="search" type="text" autoComplete="off" maxLength="5" placeholder="Enter ZIP Code" onChange={evt => this.updateValue(evt)}/>
            </div>
            <div className="search-icon warning search-icon-right" style={{visibility: 'hidden'}}>
              <i className="fas fa-exclamation-triangle"></i>
            </div>
          </div>
          <a className="button button-primary search-button" onClick={this.handleSubmit.bind(this)}>Get Started</a>
        </div>
      );
    }
  }

  render() {
    return this.displaySearch();
  }
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default SearchBar;
