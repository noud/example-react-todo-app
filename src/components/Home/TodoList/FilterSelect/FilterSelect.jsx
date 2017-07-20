import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from '../constants';


const handleChange = (e, changeFilter) => changeFilter(e.target.value);

const FilterSelect = ({ changeFilter }) => (
  <div className="form-group row">
    <select className="form-control dark-select" onChange={(e) => handleChange(e, changeFilter)}>
      <option value={FILTER_ALL}>No filter</option>
      <option value={FILTER_DONE}>Show finished only</option>
      <option value={FILTER_UNDONE}>Show unfinished only</option>
    </select>
  </div>
);

FilterSelect.propTypes = {
  changeFilter: PropTypes.func.isRequired
};

export default FilterSelect;