import React, { Component } from 'react';
import './styles.css';
import Announcement from '../../components/Announcement';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchResult from '../../components/SearchResult';
import Hero from '../../components/Hero';
import * as api from '../../services/ZipApi'

class ZipSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      hasError: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayError() {
    this.setState({
      hasError: true
    });
  }

  handleSubmit(zipCode) {
    if (api.isValidZip(zipCode) === false) {
      this.displayError();
    }
    else {
      api.getNearestStores(zipCode)
        .then(result => {
          this.setState({
            stores: result,
            hasError: false
          });
        })
        .catch(error => {
          this.displayError();
        });
    }
  }

  renderSearchResults() {
    let hasSearchResults = this.state.stores.length > 0;
    let searchResults = !hasSearchResults ? "" : this.state.stores.sort(api.comparator).map(store => <SearchResult id={store.id} name={store.name} date={store.launch_date}/>);

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
