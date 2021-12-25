import types from '../types/types';

const answerPollReducer = (state, action) => {
  switch (action.type) {
    case types.answerPoll:
      return {
        ...action.payload,
        pollFilled: true,
      };
    case types.answerAgain:
      return {
        pollFilled: false,
      };
    default:
      return state;
  }
};

export default answerPollReducer;
