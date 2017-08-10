import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../Todo';


describe('<Todo />', () => {

  const minProps = {
    todo: {
      id: 1,
      task: 'Todo Task text',
      done: false
    },
    setDone: jest.fn(() => null),
    deleteTodo: jest.fn(() => null)
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todo {...minProps} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders todos text', () => {
    expect(wrapper.find('.todo-holder .text').length).toBe(1);

    expect(wrapper.find('.todo-holder .text').text()).toBe(minProps.todo.task);
  });

  it('renders finish/activate button', () => {
    expect(wrapper.find('.todo-holder .done-button').length).toBe(1);
  });

  it('renders delete button', () => {
    expect(wrapper.find('.todo-holder .delete-button').length).toBe(1);
  });

  it('renders different class for finished and not finished todo', () => {
    expect(wrapper.find('.done').length).toBe(0);

    wrapper.setProps({ todo: { id: 1, task: 'Todo Task text', done: true } });
    expect(wrapper.find('.done').length).toBe(1);
  });

  it('renders different buttons (finish/activate) for finished and not finished todo', () => {
    expect(wrapper.find('.todo-holder .done-button img').props().src).toBe('done.png');

    wrapper.setProps({ todo: { id: 1, task: 'Todo Task text', done: true } });
    expect(wrapper.find('.todo-holder .done-button img').props().src).toBe('reactivate.png');
  });

  it('calls setDone when finish/activate button is clicked with appropriate params', () => {
    let todoStub = minProps.todo;

    wrapper.find('.todo-holder .done-button').simulate('click', new Event('click'));
    expect(minProps.setDone).toBeCalledWith(todoStub, !todoStub.done);

    // simulate changing state (because real change is mocked), and check if it works then
    todoStub = { ...todoStub, done: true };
    wrapper.setProps({ todo: todoStub });
    wrapper.find('.todo-holder .done-button').simulate('click', new Event('click'));
    expect(minProps.setDone).toBeCalledWith(todoStub, !todoStub.done);
  });

  it('calls deleteTodo when delete button is clicked with appropriate params', () => {
    wrapper.find('.todo-holder .delete-button').simulate('click', new Event('click'));
    expect(minProps.deleteTodo).toBeCalledWith(minProps.todo.id);
  });

});