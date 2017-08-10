import React, { Component } from 'react';

import TodoList from './TodoList/TodoListContainer';

import './assets/styles/index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <h1>ToDo App</h1>
        </div>
        <div className="main-content">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default Home;
