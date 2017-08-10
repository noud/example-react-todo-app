import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';


describe('<NotFound />', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<NotFound />);
  })

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('has not found text message', () => {
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Page not found');
  });

});