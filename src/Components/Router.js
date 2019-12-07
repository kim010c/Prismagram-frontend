import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routers/Auth";
import Feed from "../Routers/Feed";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const AppRouter = ({ isLoggedIn }) => (
  <Switch>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    {/* <Route exact path="/Confim" component={Confirm} /> */}
  </Switch>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
