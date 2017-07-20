import { combineReducers } from 'redux';

// custom reducers
import todoReducer from './components/Home/TodoList/reducers/todoReducer';

const appReducer = combineReducers({
  // here will go real reducers
  todoReducer
});

export default appReducer;