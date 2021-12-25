import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeScreen from '../components/home/HomeScreen';
import PollScreen from '../components/poll/PollScreen';
import NavBar from '../components/ui/NavBar';

const DashBoardRoutes = () => {
  const a = 2;
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/poll" component={PollScreen} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};

export default DashBoardRoutes;
