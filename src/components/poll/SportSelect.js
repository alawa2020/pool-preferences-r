import React from 'react';
import sports from '../../data/sports';

const SportSelect = () => {
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

export default SportSelect;
