import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const PollFilledRoute = ({ isPollFilled, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isPollFilled ? <Component {...props} /> : <Redirect to="/poll" />
      }
    />
  );
};

PollFilledRoute.propTypes = {
  isPollFilled: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PollFilledRoute;
