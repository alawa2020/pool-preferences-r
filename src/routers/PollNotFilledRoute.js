import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const PollNotFilledRoute = ({
  isPollFilled,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isPollFilled ? <Component {...props} /> : <Redirect to="pollfilled" />
      }
    />
  );
};

PollNotFilledRoute.propTypes = {
  isPollFilled: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PollNotFilledRoute;
