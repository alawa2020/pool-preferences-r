import React from 'react';
import useForm from '../../hooks/useForm';
import LanguageCheckbox from './LanguageCheckbox';
import ProfessionRadio from './ProfessionRadio';
import SportSelect from './SportSelect';

const PollScreen = () => {
  const { formValues, handleChange } = useForm({
    name: '',
    nick: '',
    sport: '',
    proffesion: '',
    languages: [],
  });

  const { name, nick, sport, profession, languages } = formValues;
  return (
    <div>
      <h1>Short Poll of your Preferences</h1>
      <form action="https://www.google.com">
        <fieldset>
          <legend>Who are you?</legend>
          {/* name */}
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              autoComplete="off"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
            <div id="nameHelp" className="form-text">
              * We'll never share your name with anyone else.
            </div>
            {/* nick */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputNick1" className="form-label">
              Someone favorite nick
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputNick1"
              autoComplete="off"
              name="nick"
              value={nick}
              onChange={handleChange}
            />
            <div className="form-text">This is not required</div>
          </div>
        </fieldset>

        {/* ******************************************************* */}
        <fieldset>
          <legend>Your preferences</legend>

          {/* sports */}
          <SportSelect />

          {/* profession */}
          <ProfessionRadio />

          {/* languages */}
          <LanguageCheckbox />
        </fieldset>

        {/* final part */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I'm agree to share the form
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <input
          type="reset"
          className="ms-3 btn btn-outline-danger"
          value="reset"
        />
      </form>
    </div>
  );
};

export default PollScreen;
