import React, { Component } from 'react';

import TodoList from './TodoList/TodoListContainer';

import './assets/styles/index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <h2>ToDo App</h2>
        </div>
        <div className="main-content">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default Home;
