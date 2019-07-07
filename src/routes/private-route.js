import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isUserLogged } from '../service/auth-service';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isUserLogged() ? <Component {...props} /> : <Redirect to="/login?loginExpired=true" />)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
