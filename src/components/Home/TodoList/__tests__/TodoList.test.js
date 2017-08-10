import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';


describe('<TodoList />', () => {

  const minProps = {
    todos: [],
    setTodoDone: jest.fn(() => null),
    deleteTodo: jest.fn(() => null),
    addTodo: jest.fn(() => null),
    changeFilter: jest.fn(() => null)
  };

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<TodoList {...minProps} />);
  })
  
  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders form for adding todo', () => {
    expect(wrapper.find('AddTodo').length).toBe(1);
  });

  it('renders filter dropdown', () => {
    expect(wrapper.find('FilterSelect').length).toBe(1);
  });

  it('renders acctaul list with todos', () => {
    // check if list is showing
    expect(wrapper.find('ul.todo-list').length).toBe(1);

    // test no todos
    expect(wrapper.find('ul.todo-list Todo').length).toBe(0);

    wrapper.setProps({ 
      todos: [
        {
          id: 1,
          task: 'String',
          done: false
        },
        {
          id: 2,
          task: 'String',
          done: false
        },
        {
          id: 3,
          task: 'String',
          done: false
        }
      ] 
    });

    expect(wrapper.find('ul.todo-list Todo').length).toBe(3);
  });

});
