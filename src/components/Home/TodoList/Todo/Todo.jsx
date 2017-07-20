import React from 'react';
import PropTypes from 'prop-types';

// styles
import './assets/styles/index.css';
import deleteImg from './assets/images/delete.png';
import doneImg from './assets/images/done.png';
import reactivateImg from './assets/images/reactivate.png';


const Todo = ({ todo, setDone, deleteTodo }) => (
  <li className={'todo-holder ' + (todo.done ? 'done' : '')}>
    <p className="text">{todo.task}</p>
    <div className="buttons">
      <a className="done-button" onClick={(e) => { e.preventDefault(); setDone(todo, !todo.done) }}>
        {
          todo.done ? 
            <img src={reactivateImg} className="control-image" alt="Reactivate" /> :
            <img src={doneImg} className="control-image" alt="Set Done" />
        }
      </a>&nbsp;
      <a className="delete-button" onClick={(e) => { e.preventDefault(); deleteTodo(todo.id) }}>
        <img src={deleteImg} className="control-image" alt="Delete" />
      </a>
    </div>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired,
  setDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todo;