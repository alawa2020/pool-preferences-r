import React from 'react';

import './pollFilled.css';

const PollFilled = () => {
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
              <td>Pedro</td>
            </tr>
            <tr>
              <td>Nick</td>
              <td>Unnamed</td>
            </tr>
            <tr>
              <td>Sport</td>
              <td>Football</td>
            </tr>
            <tr>
              <td>Profession</td>
              <td>Engineer</td>
            </tr>
            <tr>
              <td rowSpan={3}>Languages</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Francais</td>
            </tr>
            <tr>
              <td>Spanish</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-info">Do you want answer this poll again?</p>
      <button className="btn btn-outline-info" type="button">
        go
      </button>
    </div>
  );
};

export default PollFilled;
