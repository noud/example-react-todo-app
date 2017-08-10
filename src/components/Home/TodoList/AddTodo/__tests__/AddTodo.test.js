import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../AddTodo';


describe('<AddTodo />', () => {

  const minProps = {
    addTodo: jest.fn(() => null)
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddTodo {...minProps} />);
  })

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('contains input field for todo task', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('contains tooltip for submitting only if any text is entered', () => {
    expect(wrapper.find('small.form-text').length).toBe(0);
    wrapper.setState({ task: 'Something is entered' });
    expect(wrapper.find('small.form-text').length).toBe(1);
    expect(wrapper.find('small.form-text').text()).toBe('Press enter to submit todo');
  });

  it('on change at input state of component is changed', () => {
    const wrapper = shallow(<AddTodo {...minProps} />);

    wrapper.find('input').simulate('change', { preventDefault: () => null, target: { value: 'test' } });
    expect(wrapper.state('task')).toBe('test');
  });

  it('submits todo task on enter key, by calling addTodo method got from props', () => {
    wrapper.setState({ task: 'Test task' });

    wrapper.find('input').simulate('keypress', { preventDefault: () => null, key: 'Enter' });
    expect(minProps.addTodo).toBeCalledWith('Test task');
    expect(wrapper.state('task')).toBe('');
  });

});