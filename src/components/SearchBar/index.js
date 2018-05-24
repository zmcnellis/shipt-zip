import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class SearchBar extends Component {

  // store input value in component's state
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.clearValidationErrors = false; // when typing in the search box, all validation errors should disappear
    this.updateValue = this.updateValue.bind(this);
  }

  // submit search term to parent component for processing
  handleSubmit() {
    this.props.handleSubmit(this.state.inputValue);
    this.clearValidationErrors = false;
  }

  // after submitting an invalid zip, any changes to the field should cause the validation errors to disappear
  updateValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
    if (this.props.hasError)
      this.clearValidationErrors = true;
  }

  // display search bar depending on validation error state
  displaySearch() {
    if (this.props.hasError && !this.clearValidationErrors) {
      return (
        <div className="search-wrapper">
          <div className="search-bar">
            <div className="search-icon warning search-icon-left">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="search-field">
              <input ref={(input) => { this.props.setSearchReference(input); }} className="search-field-input warning" name="search" type="text" autoComplete="off" maxLength="5" placeholder="Enter ZIP Code" onChange={evt => this.updateValue(evt)}/>
            </div>
            <div className="search-icon warning search-icon-right">
              <i className="fas fa-exclamation-circle"></i>
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
              <input ref={(input) => { this.props.setSearchReference(input); }} className="search-field-input" name="search" type="text" autoComplete="off" maxLength="5" placeholder="Enter ZIP Code" onChange={evt => this.updateValue(evt)}/>
            </div>
            <div className="search-icon warning search-icon-right" style={{visibility: 'hidden'}}>
              <i className="fas fa-exclamation-circle"></i>
            </div>
          </div>
          <a className="button button-primary search-button" onClick={this.handleSubmit.bind(this)}>Get Started</a>
        </div>
      );
    }
  }

  // render
  render() {
    return this.displaySearch();
  }
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  setSearchReference: PropTypes.func.isRequired
};

export default SearchBar;
