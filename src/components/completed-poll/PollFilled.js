import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PollContext from '../../context/PollContext';
import types from '../../types/types';

import './pollFilled.css';

const PollFilled = () => {
  const { state, dispatch } = useContext(PollContext);
  const { name, nick, profession, sport, languages } = state;

  const history = useHistory();

  const handleClickPollAgain = () => {
    dispatch({
      type: types.answerAgain,
    });
    history.replace('/poll');
  };
  return (
    <div className="poll-filled">
      <div className="mb-3">
        <h1 className="text-primary">Thank you for answer this poll</h1>
        <h2 className="text-secondary">Your answers</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Nick</td>
              <td>{nick}</td>
            </tr>
            <tr>
              <td>Sport</td>
              <td>{sport}</td>
            </tr>
            <tr>
              <td>Profession</td>
              <td>{profession}</td>
            </tr>
            <tr>
              <td rowSpan={languages.length}>Languages</td>
              <td>{languages[0]}</td>
            </tr>
            {languages.slice(1, languages.length).map((language) => (
              <tr key={language}>
                <td>{language}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-info">Do you want answer this poll again?</p>
      <button
        onClick={handleClickPollAgain}
        className="btn btn-outline-info"
        type="button"
      >
        go
      </button>
    </div>
  );
};

export default PollFilled;
