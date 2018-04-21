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

    //bind the functions to this (app component)
    this.removeItem = this.removeItem.bind(this)

  }

  // remove item function
  /*removeItem(id) {
    console.log(id)
    //using javascript filter method
    // we can filter out the clicked item and render the updated list
    function isNotId(item) {
      return item.objectID !== id
    }
    // create a new updated list
    const updatedList = this.state.list.filter(isNotId)    

    //assign the new updated list to the list using setState method
    this.setState({list: updatedList})    
  }*/

  /*removeItem(id) {
    const isNotId = item => item.objectID !== id
    const updatedList = this.state.list.filter(isNotId)
    this.setState({list: updatedList})
  }*/

  removeItem(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id)
    this.setState({list: updatedList})
  }

  render() {
    return (
      <div className="App">
        {
          this.state.list.map(item =>
            <div key={item.objectID}>
              <h1><a href={item.url}>{item.title}</a> by {item.author}</h1>
              <h4>{item.num_comments} Comments | {item.points} Points</h4>
              {/* to use this keyword, use arrow function not the old function */}
              <button type="button" onClick={() => this.removeItem(item.objectID)}>Remove</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
