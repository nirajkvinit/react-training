import React, { Component } from 'react';
import './App.css';
import list from './list'

// filter the results by search
// Higher order function is function which returns another function 
function isSearched(searchTerm) {
  return function(item) {
    return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())
  }
}

class App extends Component {
  // setting up internal component state
  // ES6 class can use constructor to initialize internal state
  constructor(props) {
    // super props sets this.props to the constructor
    super(props);

    this.state = {
      list: list,
      searchTerm: ''
    }

    //bind the functions to this (app component)
    this.removeItem = this.removeItem.bind(this)
    this.searchValue = this.searchValue.bind(this)
  }

  removeItem(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id)
    this.setState({list: updatedList})
  }

  //get input field value from search form
  searchValue(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.searchValue} />
        </form>
        {
          this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
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
