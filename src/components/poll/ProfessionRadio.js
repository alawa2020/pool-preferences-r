import React from 'react';
import professions from '../../data/professions';

const ProfessionRadio = () => {
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

export default ProfessionRadio;
