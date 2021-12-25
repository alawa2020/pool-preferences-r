import React from 'react';
import PropTypes from 'prop-types';

import sports from '../../data/sports';

const SportSelect = ({ handleChange }) => {
  return (
    <>
      <label htmlFor="select-sports" className="form-label">
        Sport
      </label>
      <div className="mb-3">
        <select
          className="form-select"
          name="sport"
          id="select-sports"
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>

          {sports.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
        <div className="form-text">* Choose only one option.</div>
      </div>
    </>
  );
};

SportSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SportSelect;
