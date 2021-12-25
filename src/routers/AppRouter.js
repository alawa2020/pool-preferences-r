import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PollFilled from '../components/completed-poll/PollFilled';
import DashBoardRoutes from './DashBoardRoutes';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/pollfilled" component={PollFilled} />
        <Route path="/" component={DashBoardRoutes} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
