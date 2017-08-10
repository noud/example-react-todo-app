import { Record } from 'immutable';
import * as types from '../constants';


const TodoState = new Record({
  todos: [],
  filter: types.FILTER_ALL
});

export default TodoState;