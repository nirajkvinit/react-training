import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'Tell me the truth without words',
    url: 'http://kaloraat.com',
    author: 'Ryan',
    num_comments: 100,
    points: 50,
    objectID: 1
  },
  {
    title: 'Oh no! The candle is out',
    url: 'http://kaloraat.com',
    author: 'Zen',
    num_comments: 50,
    points: 20,
    objectID: 2
  },
  {
    title: 'The hard earned black belt',
    url: 'http://kaloraat.com',
    author: 'Ninja',
    num_comments: 10,
    points: 5,
    objectID: 3
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        {
          list.map(function(item){
            return (
              <div>
                <h1><a href={item.url}>{item.title}</a> by {item.author}</h1>
                <h4>{item.num_comments} Comments | {item.points} Points</h4>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
