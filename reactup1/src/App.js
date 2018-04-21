import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import list from './list'

class App extends Component {
  // setting up internal component state
  // ES6 class can use constructor to initialize internal state
  constructor(props) {
    // super props sets this.props to the constructor
    super(props);

    this.state = {
      list: list
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.list.map(item =>
            <div key={item.objectID}>
              <h1><a href={item.url}>{item.title}</a> by {item.author}</h1>
              <h4>{item.num_comments} Comments | {item.points} Points</h4>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
