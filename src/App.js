import React, { Component } from 'react';
import Board from './Components/board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Board/>
      </div>
    );
  }
}

export default App;
