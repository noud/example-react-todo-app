import React from 'react';
import { shallow } from 'enzyme';
import Root from '../Root';

// TODO: maybe change this not to import real components
import Home from '../../Home/Home';
import NotFound from '../../NotFound/NotFound';


describe('<Root />', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Root />);
  })
  
  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders two routes', () => {
    expect(wrapper.find('Route').length).toBe(2);

    // TODO: maybe change this not to check real components
    expect(wrapper.find('Route').at(0).prop('component')).toEqual(Home);
    expect(wrapper.find('Route').at(1).prop('component')).toEqual(NotFound);
  });

});