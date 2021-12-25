import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PollFilled from '../components/completed-poll/PollFilled';
import PollContext from '../context/PollContext';
import DashBoardRoutes from './DashBoardRoutes';
import PollFilledRoute from './PollFilledRoute';
import PollNotFilledRoute from './PollNotFilledRoute';

const AppRouter = () => {
  const { state } = useContext(PollContext);
  return (
    <Router>
      <Switch>
        <PollFilledRoute
          exact
          path="/pollfilled"
          component={PollFilled}
          isPollFilled={state.pollFilled}
        />
        <PollNotFilledRoute
          path="/"
          component={DashBoardRoutes}
          isPollFilled={state.pollFilled}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
