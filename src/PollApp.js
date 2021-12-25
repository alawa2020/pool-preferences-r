import React, { useEffect, useReducer } from 'react';
import PollContext from './context/PollContext';
import answerPollReducer from './reducers/answerPollReducer';
import AppRouter from './routers/AppRouter';

const PollApp = () => {
  const initPoll = () => {
    return (
      JSON.parse(localStorage.getItem('values-poll-preferences')) || {
        pollFilled: false,
      }
    );
  };
  const [state, dispatch] = useReducer(answerPollReducer, {}, initPoll);

  useEffect(() => {
    localStorage.setItem('values-poll-preferences', JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <PollContext.Provider value={{ state, dispatch }}>
        <AppRouter />
      </PollContext.Provider>
    </div>
  );
};

export default PollApp;
