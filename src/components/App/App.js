import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <h1>What's New</h1>
        <NewsContainer newsContainer={this.state}/>
      </div>
    );
  }
}

export default App;
