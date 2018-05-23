import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img className="logo" src={logo} alt="logo" />
          <div className="nav-right">
            <a className="button button-primary" href="#">Sign Up</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
