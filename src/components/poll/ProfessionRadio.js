import React from 'react';
import PropTypes from 'prop-types';

import professions from '../../data/professions';

const ProfessionRadio = ({ professionForm, handleFormChange }) => {
  return (
    <div className="mb-3">
      <p className="form-label">Profession</p>

      {professions.map((profession) => (
        <div className="form-check form-check-inline" key={profession}>
          <input
            className="form-check-input"
            type="radio"
            name="profession"
            id={`profesion-${profession}`}
            value={profession}
            checked={profession === professionForm || false}
            onChange={handleFormChange}
            required
          />
          <label
            className="form-check-label"
            htmlFor={`profesion-${profession}`}
          >
            {profession}
          </label>
        </div>
      ))}

      <div className="form-text">* Choose only one option.</div>
    </div>
  );
};

ProfessionRadio.propTypes = {
  professionForm: PropTypes.string.isRequired,
  handleFormChange: PropTypes.func.isRequired,
};

export default ProfessionRadio;
