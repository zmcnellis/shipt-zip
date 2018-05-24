import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
  // because there can only be one footer and it doesn't typically change, the text is set here instead of in props
  render() {
    return (
      <footer>
        <p className="footer-text">&copy; 2018 Shipt, Inc. and its services are not necessarily affiliated or endorsed by the retailers on this site.</p>
      </footer>
    );
  }
}

export default Footer;
