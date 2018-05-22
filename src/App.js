import React, { Component } from 'react';
import logo from './logo.svg';
import step1 from './step1.png';
import step2 from './step2.png';
import step3 from './step3.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <a className="announcement" href="#">
          <h5 className="announcement-text">Get $50 Off + $15 Credit*</h5>
        </a>
        <header>
          <nav>
            <img className="logo" src={logo} alt="logo" />
            <div className="nav-right">
              <a className="button button-primary" href="#">Sign Up</a>
            </div>
          </nav>
        </header>
        <main>
          <section className="hero">
            <div className="hero-image"></div>
            <div className="hero-content">
              <div className="hero-container">
                <p className="title">Target exclusive offer.</p>
                <p className="subtitle">$49 membership (reg. $99) + $15 credit with qualifying purchase.*</p>

                <div className="search-wrapper">
                  <div className="search-bar">
                    <div className="search-icon search-icon-left">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="search-field">
                      <input className="search-field-input" name="search" type="text" autocomplete="off" maxLength="5" placeholder="Enter ZIP Code"/>
                    </div>
                    <div className="search-icon warning search-icon-right">
                      <i className="fas fa-exclamation-triangle"></i>
                    </div>
                  </div>
                  <a className="button button-primary search-button" href="">Get Started</a>
                  <p className="error-text">This ZipCode is invalid! Please try again.</p>
                </div>

                <p className="small-text">*Membership offer valid for new members only. Target order of $100 or more must be placed to qualify for $15 credit, which expires 30 days after qualifying order is placed and can be applied to any order from Shipt.</p>
              </div>
            </div>
          </section>
          <section id="searchResults">
            <h4 className="results-header">Delivering From:</h4>
            <div className="results-container">
              <div className="search-result">
                <h2 className="store-name">Fred Meyer</h2>
                <p className="launch-date">Coming 9/19</p>
              </div>
              <div className="search-result">
                <h2 className="store-name">QFC</h2>
                <p className="launch-date">Coming 9/19</p>
              </div>
              <div className="search-result">
                <h2 className="store-name">Target</h2>
                <p className="launch-date">Now Available</p>
              </div>
            </div>
            <div className="button-area">
              <a className="button button-primary button-lg" href="#">Get Started</a>
            </div>
          </section>


          <h1 className="text-center">Everything you love about Target at your fingertips.</h1>
          <section className="cards">
            <article>
              <img className="article-img" src={step1} alt=" " />
              <h1 className="article-title">
                Scroll through<br/>the aisles.
              </h1>
              <p className="article-description">
                Create an order from your local store in our app or on our website.
              </p>
            </article>
            <article>
              <img className="article-img" src={step2} alt=" " />
              <h1 className="article-title">
                Our shoppers work<br/>their magic.
              </h1>
              <p className="article-description">
                Connect with your shopper and get live updates from the aisles.
              </p>
            </article>
            <article>
              <img className="article-img" src={step3} alt=" " />
              <h1 className="article-title">
                We deliver<br/>your groceries.
              </h1>
              <p className="article-description">
                Schedule a delivery, and your order will arrive in as soon as 1 hour.
              </p>
            </article>
          </section>
          <div className="button-area">
            <a className="button button-primary button-lg" href="#">Get Started</a>
          </div>
        </main>
        <footer>
          <p className="footer-text">&copy; 2018 Shipt, Inc. and its services are not necessarily affiliated or endorsed by the retailers on this site.</p>
        </footer>
      </div>
    );
  }
}

export default App;
