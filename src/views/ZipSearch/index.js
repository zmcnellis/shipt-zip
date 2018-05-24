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

// main view for the search page
class ZipSearch extends Component {
  // store api results in state
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      hasError: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setSearchReference = this.setSearchReference.bind(this);
    this.getStartedClick = this.getStartedClick.bind(this);
  }

  // set the error state to true for validation errors
  displayError() {
    this.setState({
      hasError: true
    });
  }

  // call zip code api when search button is clicked
  handleSubmit(zipCode) {
    // check if the zip code is in a valid format (5 digits)
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

  // keep track of input box reference in order to set focus on button clicks
  setSearchReference(ref) {
    this.searchBox = ref;
  }

  // set the focus of the input box when a "Get Started" button is clicked
  getStartedClick() {
    this.searchBox.focus();
  }

  // render search results after search if no errors
  renderSearchResults() {
    let hasSearchResults = this.state.stores.length > 0;
    let searchResults = !hasSearchResults ? "" : this.state.stores.sort(api.comparator).map(store => <SearchResult id={store.id} name={store.name} date={store.launch_date}/>);

    if (hasSearchResults) {
      return (
        <section id="searchResults">
          <h4 className="results-header">Delivering From:</h4>
          <div className="results-container">{searchResults}</div>
          <div className="button-area">
            <Button text="Get Started" size="large" onClick={this.getStartedClick}/>
          </div>
        </section>
      );
    }
  }

  // render components
  render() {
    return (
      <div>
        <Announcement/>
        <Header/>

        <main>
          <Hero handleSubmit={this.handleSubmit} hasError={this.state.hasError} setSearchReference={this.setSearchReference}/>
          {this.renderSearchResults()}

          <h1 className="card-header">Everything you love about Target at your fingertips.</h1>

          <section className="cards">
            <Card title="Scroll through the aisles." description="Create an order from your local store in our app or on our website." step="1"/>
            <Card title="Our shoppers work their magic." description="Connect with your shopper and get live updates from the aisles." step="2"/>
            <Card title="We deliver your groceries." description="Schedule a delivery, and your order will arrive in as soon as 1 hour." step="3"/>
          </section>

          <div className="button-area">
            <Button text="Get Started" size="large" onClick={this.getStartedClick}/>
          </div>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default ZipSearch;
