import React, { Component } from 'react';
import PropTypes from 'prop-types';
import step1 from '../../images/step1.png';
import step2 from '../../images/step2.png';
import step3 from '../../images/step3.png';
import './styles.css';

class Card extends Component {
  render() {
    let imgSrc;
    switch(Number.parseInt(this.props.step)) {
      case 1:
        imgSrc = step1;
        break;
      case 2:
        imgSrc = step2;
        break;
      case 3:
        imgSrc = step3;
        break;
      default:
        imgSrc = step1;
        break;
    }

    return (
      <article>
        <img className="article-img" src={imgSrc} />
        <h1 className="article-title">{this.props.title}</h1>
        <p className="article-description">{this.props.description}</p>
      </article>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired
};

export default Card;
