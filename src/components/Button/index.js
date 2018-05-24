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
        onClick={this.props.onClick}>
        {this.props.text}
      </a>
    );
  }
}

// currently supports medium and large-sized buttons
Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['normal', 'large']),
  onClick: PropTypes.func.isRequired
};

export default Button;
