import InitialState from './initialState';
import * as types from '../constants';

const initialState = new InitialState();

const todoReducer = (state = initialState, action) => {
  if (!(state instanceof InitialState)) state = initialState.mergeDeep(state);

  switch(action.type) {
    case types.SET_TODO_DONE_SUCCESS:
      return state.set('todos', state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, done: action.payload.done } : todo));
    
    case types.DELETE_TODO_SUCCESS:
      return state.set('todos', state.todos.filter((todo) => todo.id !== action.payload.id));
    
    case types.ADD_TODO_SUCCESS:
      // return state.set('todos', [ ...state.todos, { id: getLastId(state.todos) + 1, task: action.payload.task, done: false } ]);
      return state.set('todos', [...state.todos, action.payload.todo]);

    case types.FETCH_TODOS_SUCCESS:
      return state.set('todos', [...action.payload.todos]);

    case types.CHANGE_FILTER:
      return state.set('filter', action.payload.filter);

    default:
      return state;
  }
}

export default todoReducer;