import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Button extends Component {
  render() {
    return (
      <a
        className={
          "button button-primary" +
          (this.props.size === "large" ? " button-lg" : "")
        }
        href="#">
        {this.props.text}
      </a>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['normal', 'large'])
};

export default Button;
