import todoReducer from '../todoReducer';
import InitialState from '../initialState';

import * as types from '../../constants';

describe('todoReducer', () => {

  const initialState = new InitialState();

  it('returns passed state if invalid action type is sent', () => {
    expect(todoReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('adds new todo into state', () => {
    const actionStub = { type: types.ADD_TODO_SUCCESS, payload: { todo: { test: 1 } } };

    expect(initialState.todos.length).toBe(0);
    expect(todoReducer(initialState, actionStub).todos.length).toBe(1);
  });

  it('removes todo by id', () => {
    const actionStub = { type: types.DELETE_TODO_SUCCESS, payload: { id: 1 } };
    const stubState = initialState.set('todos', [{ id: 1 }, { id: 2 }]);

    expect(stubState.todos.length).toBe(2);
    let foundTodo = stubState.todos.find((todo) => todo.id === 1);
    expect(foundTodo).toBeDefined();

    const returnedState = todoReducer(stubState, actionStub);

    expect(returnedState.todos.length).toBe(1);
    foundTodo = returnedState.todos.find((todo) => todo.id === 1);
    expect(foundTodo).not.toBeDefined();
  });

  it('sets todo as done or undone by id', () => {
    const actionStub = { type: types.SET_TODO_DONE_SUCCESS, payload: { id: 1, done: true } };
    const stubState = initialState.set('todos', [{ id: 1, done: false }, { id: 2, done: false }]);

    expect(stubState.todos.length).toBe(2);
    let foundTodo = stubState.todos.find((todo) => todo.id === 1);
    expect(foundTodo).toBeDefined();
    expect(foundTodo.done).not.toBeTruthy();

    const returnedState = todoReducer(stubState, actionStub);
    expect(returnedState.todos.length).toBe(2);
    foundTodo = returnedState.todos.find((todo) => todo.id === 1);
    expect(foundTodo).toBeDefined();
    expect(foundTodo.done).toBeTruthy();

    // testing revert process
    actionStub.payload.done = false;
    const finalState = todoReducer(returnedState, actionStub);
    expect(finalState.todos.length).toBe(2);
    foundTodo = finalState.todos.find((todo) => todo.id === 1);
    expect(foundTodo).toBeDefined();
    expect(foundTodo.done).not.toBeTruthy();
  });

  it('binds fetched todos to state', () => {
    const actionStub = { type: types.FETCH_TODOS_SUCCESS, payload: { todos: [ { todo: 'Todo 1' }, { todo: 'Todo 2' }] } };

    expect(initialState.todos).toEqual([]);
    expect(todoReducer(initialState, actionStub).todos).toEqual(actionStub.payload.todos);
  });

  it('changes filter', () => {
    const actionStub = { type: types.CHANGE_FILTER, payload: { filter: 'test' } };

    expect(initialState.filter).toBe(types.FILTER_ALL);
    expect(todoReducer(initialState, actionStub).filter).toBe(actionStub.payload.filter);
  });

});