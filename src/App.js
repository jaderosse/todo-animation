import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoList from './TodoList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To dizzle lizzle</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
