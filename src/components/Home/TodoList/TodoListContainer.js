import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setTodoDone, deleteTodo, addTodo, changeFilter, fetchTodos } from './actions/todoActions';
import { getVisibleTodos } from './reducers/todoSelectors';
import TodoList from './TodoList';


class TodoListContainer extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return <TodoList {...this.props} />
  }

}


const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setTodoDone,
  deleteTodo,
  addTodo,
  changeFilter,
  fetchTodos,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);