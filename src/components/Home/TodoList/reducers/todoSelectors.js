import { createSelector } from 'reselect';
import { FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from '../constants';

export const getVisibilityFilter = (state) => state.todoReducer.filter;
export const getTodos = (state) => state.todoReducer.todos;

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case FILTER_ALL:
        return todos;
      case FILTER_DONE:
        return todos.filter(todo => todo.done);
      case FILTER_UNDONE:
        return todos.filter(todo => !todo.done);
      default:
        return todos;
    }
  }
);