import React from 'react';
import { shallow } from 'enzyme';
import FilterSelect from '../FilterSelect';
import { FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from '../../constants';


describe('<FilterSelect />', () => {

  const minProps = {
    changeFilter: jest.fn(() => null)
  };

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<FilterSelect {...minProps} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders select with filter options', () => {
    expect(wrapper.find('select').length).toBe(1);
  });

  it('renders correct options', () => {
    expect(wrapper.find('select option').length).toBe(3);

    // TODO: maybe refactor this so that order of options doesn't break tests
    expect(wrapper.find('select option').at(0).prop('value')).toBe(FILTER_ALL);
    expect(wrapper.find('select option').at(1).prop('value')).toBe(FILTER_DONE);
    expect(wrapper.find('select option').at(2).prop('value')).toBe(FILTER_UNDONE);
  });

  it('calls changeFilter with correct parameters when option is selected', () => {
    // test for each filter type
    wrapper.find('select').simulate('change', { target: { value: FILTER_ALL } });
    expect(minProps.changeFilter).toBeCalledWith(FILTER_ALL);

    wrapper.find('select').simulate('change', { target: { value: FILTER_DONE } });
    expect(minProps.changeFilter).toBeCalledWith(FILTER_DONE);

    wrapper.find('select').simulate('change', { target: { value: FILTER_UNDONE } });
    expect(minProps.changeFilter).toBeCalledWith(FILTER_UNDONE);
  });

});