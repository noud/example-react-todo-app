import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../../constants';
import * as actions from '../todoActions';
import { mockResponse } from '../../../../../utils/testUtils';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('todoActions', () => {

  describe('#setTodoDoneStart', () => {

    it('returns valid instance', () => {
      const expectedAction = {
        type: types.SET_TODO_DONE_START
      };

      expect(actions.setTodoDoneStart()).toEqual(expectedAction);
    });

  });

  describe('#setTodoDoneError', () => {

    it('returns valid instance', () => {
      const error = new Error('Test error');
      const expectedAction = {
        type: types.SET_TODO_DONE_ERROR,
        error
      };

      expect(actions.setTodoDoneError(error)).toEqual(expectedAction);
    });

  });

  describe('#setTodoDoneSuccess', () => {

    it('returns valid instance', () => {
      const payload = { id: 1, done: false };
      const expectedAction = {
        type: types.SET_TODO_DONE_SUCCESS,
        payload
      };

      expect(actions.setTodoDoneSuccess(payload.id, payload.done)).toEqual(expectedAction);
    });

  });

  describe('#deleteTodoStart', () => {

    it('returns valid instance', () => {
      const expectedAction = {
        type: types.DELETE_TODO_START,
      };

      expect(actions.deleteTodoStart()).toEqual(expectedAction);
    });

  });

  describe('#deleteTodoError', () => {

    it('returns valid instance', () => {
      const error = new Error('Test error');
      const expectedAction = {
        type: types.DELETE_TODO_ERROR,
        error,
      };

      expect(actions.deleteTodoError(error)).toEqual(expectedAction);
    });

  });

  describe('#deleteTodoSuccess', () => {

    it('returns valid instance', () => {
      const payload = { id: 1 };
      const expectedAction = {
        type: types.DELETE_TODO_SUCCESS,
        payload,
      };

      expect(actions.deleteTodoSuccess(payload.id)).toEqual(expectedAction);
    });

  });

  describe('#addTodoStart', () => {

    it('returns valid instance', () => {
      const expectedAction = {
        type: types.ADD_TODO_START,
      };

      expect(actions.addTodoStart()).toEqual(expectedAction);
    });

  });

  describe('#addTodoError', () => {

    it('returns valid instance', () => {
      const error = new Error('Test error');
      const expectedAction = {
        type: types.ADD_TODO_ERROR,
        error,
      };

      expect(actions.addTodoError(error)).toEqual(expectedAction);
    });

  });

  describe('#addTodoSuccess', () => {

    it('returns valid instance', () => {
      const payload = { todo: { id: 1, task: 'Dummy stub task', done: false } };
      const expectedAction = {
        type: types.ADD_TODO_SUCCESS,
        payload,
      };

      expect(actions.addTodoSuccess(payload.todo)).toEqual(expectedAction);
    });

  });

  describe('#fetchTodosStart', () => {

    it('returns valid instance', () => {
      const expectedAction = {
        type: types.FETCH_TODOS_START,
      };

      expect(actions.fetchTodosStart()).toEqual(expectedAction);
    });

  });

  describe('#fetchTodosError', () => {

    it('returns valid instance', () => {
      const error = new Error('Test error');
      const expectedAction = {
        type: types.FETCH_TODOS_ERROR,
        error,
      };

      expect(actions.fetchTodosError(error)).toEqual(expectedAction);
    });

  });

  describe('#fetchTodosSuccess', () => {

    it('returns valid instance', () => {
      const payload = { todos: [{ id: 1, task: 'Dummy stub task', done: false }] };
      const expectedAction = {
        type: types.FETCH_TODOS_SUCCESS,
        payload,
      };

      expect(actions.fetchTodosSuccess(payload.todos)).toEqual(expectedAction);
    });

  });

  describe('#changeFilter', () => {

    it('returns valid instance', () => {
      const payload = { filter: types.FILTER_ALL };
      const expectedAction = {
        type: types.CHANGE_FILTER,
        payload
      };

      expect(actions.changeFilter(payload.filter)).toEqual(expectedAction);
    });

  });


  describe('#setTodoDone', () => {

    let parameterMock;
    let store;

    beforeEach(() => {
      parameterMock = { id: 1, done: true };
      store = mockStore();
    });

    it('It handles successfull response', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ data: { } }))));

      store.dispatch(actions.setTodoDone({ id: parameterMock.id }, parameterMock.done)).then(() => {
        // return of async actions
        const storeActions = store.getActions();

        expect(storeActions[0].type).toBe(types.SET_TODO_DONE_START);
        expect(storeActions[1].type).toBe(types.SET_TODO_DONE_SUCCESS);
        expect(storeActions[1].payload).toEqual(parameterMock)
      });
    });

    it('handles error response', () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject(mockResponse(400, 'Bad request', '{}')));

      store.dispatch(actions.setTodoDone({ id: parameterMock.id }, parameterMock.done)).then(() => {
        const storeActions = store.getActions();

        expect(storeActions[0].type).toBe(types.SET_TODO_DONE_START);
        expect(storeActions[1].type).toBe(types.SET_TODO_DONE_ERROR);
        expect(storeActions[1].error).toBeDefined();
      })
    });

  });

  describe('#deleteTodo', () => {

    let parameterMock;
    let store;

    beforeEach(() => {
      parameterMock = { id: 1 };
      store = mockStore();
    });
    
    it('It handles successfull response', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ data: { } }))));

      store.dispatch(actions.deleteTodo(parameterMock.id)).then(() => {
        // return of async actions
        const storeActions = store.getActions();

        expect(storeActions[0].type).toBe(types.DELETE_TODO_START);
        expect(storeActions[1].type).toBe(types.DELETE_TODO_SUCCESS);
        expect(storeActions[1].payload).toEqual(parameterMock);
      });
    });

    it('handles error response', () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject(mockResponse(400, 'Bad request', '{}')));

      store.dispatch(actions.deleteTodo(parameterMock.id)).then(() => {
        const storeActions = store.getActions();

        expect(storeActions[0].type).toBe(types.DELETE_TODO_START);
        expect(storeActions[1].type).toBe(types.DELETE_TODO_ERROR);
        expect(storeActions[1].error).toBeDefined();
      })
    });

  });

  describe('#addTodo', () => {

    let parameterMock;
    let responseMock;
    let store;

    beforeEach(() => {
      parameterMock = { task: 'Test task' };
      responseMock = { id: 1, task: parameterMock.task, done: false };
      store = mockStore();
    });
    
    it('It handles successfull response', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify(responseMock))));

      const parameterMock = { task: 'Test task' };
      const store = mockStore();

      store.dispatch(actions.addTodo(parameterMock.task)).then(() => {
        // return of async actions
        const storeActions = store.getActions();

        expect(storeActions[0].type).toBe(types.ADD_TODO_START);
        expect(storeActions[1].type).toBe(types.ADD_TODO_SUCCESS);
        expect(storeActions[1].payload.todo).toEqual(responseMock)
      });
    });

    it('handles error response', () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject(mockResponse(400, 'Bad request', '{}')));

      const store = mockStore();

      store.dispatch(actions.addTodo(parameterMock.task)).then(() => {
        const storeActions = store.getActions();

        expect(storeActions[0].type).toBe(types.ADD_TODO_START);
        expect(storeActions[1].type).toBe(types.ADD_TODO_ERROR);
        expect(storeActions[1].error).toBeDefined();
      })
    });

  });

  describe('#fetchTodos', () => {
    
    let responseMock;
    let store;

    beforeEach(() => {
      responseMock = [{ id: 1, task: 'Test task', done: false }, { id: 2, task: 'Test task 2', done: false }];
      store = mockStore();
    });

    it('It handles successfull response', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify(responseMock))));

      store.dispatch(actions.fetchTodos()).then(() => {
        // return of async actions
        const storeActions = store.getActions();

        expect(storeActions[0].type).toBe(types.FETCH_TODOS_START);
        expect(storeActions[1].type).toBe(types.FETCH_TODOS_SUCCESS);
        expect(storeActions[1].payload).toEqual({ todos: responseMock })
      });
    });

    it('handles error response', () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject(mockResponse(400, 'Bad request', '{}')));

      const store = mockStore();

      store.dispatch(actions.fetchTodos()).then(() => {
        const storeActions = store.getActions();

        expect(storeActions[0].type).toBe(types.FETCH_TODOS_START);
        expect(storeActions[1].type).toBe(types.FETCH_TODOS_ERROR);
        expect(storeActions[1].error).toBeDefined();
      })
    });

  });

});