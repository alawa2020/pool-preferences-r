import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/poll');
  };
  return (
    <div>
      <h1>Welcome to the poll!</h1>
      <p>Begin with the poll now!</p>
      <p>Simply click in the button below</p>
      <button
        onClick={handleClick}
        className="btn btn-outline-primary"
        type="button"
      >
        Go!
      </button>
    </div>
  );
};

export default HomeScreen;
