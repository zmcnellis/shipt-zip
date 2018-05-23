import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import step1 from '../../images/step1.png';
import step2 from '../../images/step2.png';
import step3 from '../../images/step3.png';
import './styles.css';
import Announcement from '../../components/Announcement';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchResult from '../../components/SearchResult';
import Hero from '../../components/Hero';

class ZipSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      hasError: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  isValidZip(zipCode) {
    return /(^\d{5}$)/.test(zipCode);
  }

  displayError() {
    this.setState({
      hasError: true
    });
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error();
    }
    return response;
  }

  handleSubmit(zipCode) {
    if (this.isValidZip(zipCode) === false) {
      this.displayError();
    }
    else {
      fetch(`https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/${zipCode}`)
          .then(this.handleErrors)
          .then(results => {
            return results.json();
          })
          .then(data => {
            this.setState({
              stores: data.stores,
              hasError: false
            });
          })
          .catch(error => this.displayError());
    }
  }

  comparator(storeA, storeB) {
    const nameA = storeA.name.toUpperCase();
    const nameB = storeB.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    }
    else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  renderSearchResults() {
    let hasSearchResults = this.state.stores.length > 0;
    let searchResults = !hasSearchResults ? "" : this.state.stores.sort(this.comparator).map(store => <SearchResult id={store.id} name={store.name} date={store.launch_date}/>);

    if (hasSearchResults) {
      return (
        <section id="searchResults">
          <h4 className="results-header">Delivering From:</h4>
          <div className="results-container">{searchResults}</div>
          <div className="button-area">
            <Button text="Get Started" size="large"/>
          </div>
        </section>
      );
    }
  }

  render() {
    return (
      <div>
        <Announcement/>
        <Header/>

        <main>
          <Hero handleSubmit={this.handleSubmit} hasError={this.state.hasError}/>
          {this.renderSearchResults()}

          <h1 className="text-center">Everything you love about Target at your fingertips.</h1>

          <section className="cards">
            <Card title="Scroll through the aisles." description="Create an order from your local store in our app or on our website." step="1"/>
            <Card title="Our shoppers work their magic." description="Connect with your shopper and get live updates from the aisles." step="2"/>
            <Card title="We deliver your groceries." description="Schedule a delivery, and your order will arrive in as soon as 1 hour." step="3"/>
          </section>

          <div className="button-area">
            <Button text="Get Started" size="large"/>
          </div>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default ZipSearch;
