import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo/Todo';
import AddTodo from './AddTodo/AddTodo';
import FilterSelect from './FilterSelect/FilterSelect';

// styles
import './assets/styles/index.css';


const TodoList = ({ todos, setTodoDone, deleteTodo, addTodo, changeFilter }) => (
  <div>
    <AddTodo addTodo={addTodo} />
    <ul className="todo-list">
      {todos.map((todo) => <Todo key={`TODO#ID_${todo.id}`} todo={todo} setDone={setTodoDone} deleteTodo={deleteTodo} />)}
    </ul>
    <FilterSelect changeFilter={changeFilter} />
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  })).isRequired,
  setTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired
};

export default TodoList;