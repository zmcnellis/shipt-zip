import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import './styles.css';

class Hero extends Component {

  render() {
    const title = "Target exclusive offer.";
    const subtitle = "$49 membership (reg. $99) + $15 credit with qualifying purchase.*";
    const detail = "*Membership offer valid for new members only. Target order of $100 or more must be placed to qualify for $15 credit, which expires 30 days after qualifying order is placed and can be applied to any order from Shipt.";

    return (
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-content">
          <div className="hero-container">
            <p className="title">{title}</p>
            <p className="subtitle">{subtitle}</p>

            <SearchBar handleSubmit={this.props.handleSubmit} hasError={this.props.hasError} setSearchReference={this.props.setSearchReference}/>

            <p className="small-text">{detail}</p>
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  setSearchReference: PropTypes.func.isRequired
};

export default Hero;
