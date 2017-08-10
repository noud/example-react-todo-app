import React from 'react';
import { shallow, mount } from 'enzyme';
// importing not connected one
import { TodoListContainer } from '../TodoListContainer';


describe('<TodoListContainer />', () => {

  const minProps = {
    todos: [],
    setTodoDone: jest.fn(() => null),
    deleteTodo: jest.fn(() => null),
    addTodo: jest.fn(() => null),
    changeFilter: jest.fn(() => null),
    fetchTodos: jest.fn(() => null)
  };


  it('should render without crashing', () => {
    expect(shallow(<TodoListContainer {...minProps} />)).toHaveLength(1);
  });

  it('should call fetchTodos when component is mounted', () => {
    // calling mount instead of shallow so that `componentDidMount` lifecycle method gets called
    mount(<TodoListContainer {...minProps} />);
    expect(minProps.fetchTodos).toBeCalled();
  });

  it('should render TodoList', () => {
    expect(shallow(<TodoListContainer {...minProps} />).find('TodoList')).toHaveLength(1);
  })

});