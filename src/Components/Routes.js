import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routers/Auth";
import Feed from "../Routers/Feed";
import Explore from "../Routers/Explore";
import Search from "../Routers/Search";
import Profile from "../Routers/Profile";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
