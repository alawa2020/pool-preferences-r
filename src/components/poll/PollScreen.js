import React from 'react';

const PollScreen = () => {
  return (
    <div>
      <h1>Short Poll of your Preferences</h1>
      <form action="https://getbootstrap.com/docs/5.1/forms/overview/">
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
              required
            />
            <div id="nameHelp" className="form-text">
              We'll never share your name with anyone else.
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
            />
            <div className="form-text">This is not required</div>
          </div>
        </fieldset>

        {/* ******************************************************* */}
        <fieldset>
          <legend>Your preferences</legend>

          {/* sports */}
          <label forHtml="select-sports" className="form-label">
            Sport
          </label>
          <div className="mb-3">
            <select className="form-select" name="sport" id="select-sports">
              <option value="" selected>
                Choose an option
              </option>
              <option value="football">Football</option>
              <option value="volleyball">Volleyball</option>
              <option value="basketball">Basketball</option>
            </select>
            <div className="form-text">Choose only one option.</div>
          </div>

          {/* profession */}
          <div className="mb-3">
            <p className="form-label">Profession</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="profession"
                id="flexRadioDefault1"
                value="engineer"
                required
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Engineer
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="profession"
                id="flexRadioDefault2"
                value="licensed"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Licensed
              </label>
            </div>
            <div className="form-text">Choose only one option.</div>
          </div>

          {/* languages */}
          <p className="form-label">Your languages</p>
          <div className="mb-5">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value="english"
                id="checkbox-english"
                name="language"
              />
              <label className="form-check-label" htmlFor="checkbox-english">
                English
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value="spanish"
                id="checkbox-spanish"
                name="language"
              />
              <label className="form-check-label" htmlFor="checkbox-spanish">
                Spanish
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value="francais"
                id="checkbox-francais"
                name="language"
              />
              <label className="form-check-label" htmlFor="checkbox-francais">
                Francais
              </label>
            </div>
            <div className="form-text">Choose many options as you want</div>
          </div>
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
