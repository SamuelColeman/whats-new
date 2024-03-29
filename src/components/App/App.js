import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Menu from '../Menu/Menu.js';

class App extends Component {
  constructor() {
    super();
    this.news = {
      local, technology, entertainment, science, health
    }
    this.state = {
      news: this.news.local
    }
  }

  filterArticles = (category) => {
    this.setState({news: this.news[category]});
  }

  searchArticles = (input) => {
    let upperInput = input.toUpperCase();
    let articles = this.state.news.filter(article => {
       return (article.headline.toUpperCase().includes(upperInput))
    })
    this.setState({ news: articles})
  }

  render () {
    return (
      <div className="app">
        <SearchForm searchArticles={this.searchArticles} className="searchForm" />
        <section className="nav">
          <h1>What's <span>New?</span></h1>
          <Menu filterArticles={this.filterArticles}/>
        </section>
        <section className="newsContainer">
          <NewsContainer news={this.state.news}/>
        </section>
      </div>
    );
  }
}

export default App;
