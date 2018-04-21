import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let paragraph = "This is a sample paragraph.";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{ paragraph }</h1>
      </div>
    );
  }
}

export default App;
