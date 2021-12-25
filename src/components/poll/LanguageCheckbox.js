import React, { useState } from 'react';
import PropTypes from 'prop-types';
import languages from '../../data/languages';

const LanguageCheckbox = ({ languagesForm, handleChangeForm }) => {
  const [languagesState, setLanguagesState] = useState([]);
  return (
    <>
      <p className="form-label">Your languages</p>
      <div className="mb-5">
        {languages.map((language) => (
          <div className="form-check form-check-inline" key={language}>
            <input
              className="form-check-input"
              type="checkbox"
              value={language}
              id={`language-${language}`}
              name="language"
            />
            <label
              className="form-check-label"
              htmlFor={`language-${language}`}
            >
              {language}
            </label>
          </div>
        ))}

        <div className="form-text">Choose many options as you want</div>
      </div>
    </>
  );
};

LanguageCheckbox.propTypes = {
  languagesForm: PropTypes.array.isRequired,
  handleChangeForm: PropTypes.func.isRequired,
};

export default LanguageCheckbox;
