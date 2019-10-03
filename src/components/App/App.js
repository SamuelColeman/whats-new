import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js';
import SearchForm from '../SearchForm/SearchForm.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      technology: technology,
      entertainment: entertainment,
      science: science,
      health: health
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm className="searchForm" />
        <section className="nav">
          <h1>What's New</h1>
          <button type="button">Local News</button>
          <button type="button">Technology</button>
          <button type="button">Entertainment</button>
          <button type="button">Science</button>
          <button type="button">Health</button>
        </section>
        <section className="newsContainer">
          <NewsContainer news={this.state.local}/>
        </section>
      </div>
    );
  }
}

export default App;
