import * as selectors from '../todoSelectors';
import { FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from '../../constants';


describe('todoSelectors', () => {

  let stateMock = {
    todoReducer: {    
      todos: [
        { id: 1, task: 'Task 1', done: false },
        { id: 2, task: 'Task 2', done: false },
        { id: 3, task: 'Task 3', done: true }
      ],
      filter: FILTER_ALL
    }
  };

  describe('#getVisibilityFilter', () => {

    it('should extract filter from state', () => {
      expect(selectors.getVisibilityFilter(stateMock)).toBe(stateMock.todoReducer.filter);
    });

  });

  describe('#getTodos', () => {

    it('should extract todos from state', () => {
      expect(selectors.getTodos(stateMock)).toEqual(stateMock.todoReducer.todos);
    });

  });

  describe('#getVisibleTodos', () => {

    let copyState;

    beforeEach(() => {
      copyState = Object.assign({}, stateMock);
    })

    it('with FILTER_ALL option it should return all todos', () => {
      expect(copyState.todoReducer.filter).toBe(FILTER_ALL);
      expect(selectors.getVisibleTodos(copyState)).toEqual(copyState.todoReducer.todos);
    });

    it('with FILTER_DONE option should return only done todos', () => {
      copyState.todoReducer.filter = FILTER_DONE;
      expect(selectors.getVisibleTodos(copyState)).toHaveLength(1);
    });

    it('with FILTER_UNDONE option should return only undone todos', () => {
      copyState.todoReducer.filter = FILTER_UNDONE;
      expect(selectors.getVisibleTodos(copyState)).toHaveLength(2);
    })

  })

})