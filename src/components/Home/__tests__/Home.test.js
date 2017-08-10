import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';


describe('<Home />', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Home />);
  })
  
  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders application heading', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('renders main content (with todo list)', () => {
    expect(wrapper.find('div.main-content').length).toBe(1);
  });

});
