import React, { Component } from 'react';
import './styles.css';

class Announcement extends Component {
  // the content of the announcement is currently configured here instead of in props
  // this should change if multiple announcements are used across many pages
  render() {
    const text = "Get $50 Off + $15 Credit*";
    const url = "#";

    return (
      <a className="announcement" href={url}>
        <h5 className="announcement-text">{text}</h5>
      </a>
    );
  }
}

export default Announcement;
