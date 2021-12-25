import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-info" to="/home">
          PollApp
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              exact
              activeClassName="active text-warning"
              className="nav-link text-info"
              aria-current="page"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active text-warning"
              className="nav-link text-info"
              to="/poll"
            >
              Poll
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
