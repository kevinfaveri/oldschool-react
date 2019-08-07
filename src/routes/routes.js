import React from 'react';
import { Route, Switch } from 'react-router-dom';

import withSplashScreen from '../components/splash-screen/with-splash-screen';
import * as CommonPages from './common-pages';
import * as AuthPages from './auth-pages';
import Redirect from '../components/redirect/redirect';
import PrivateRoute from './private-route';

const Routes = () => (
  <div id="routes">
    <>
      <Switch>
        {/* Common Routes */}
        <Route exact path="/" component={CommonPages.Home} />
        <Route exact path="/login" component={CommonPages.Login} />
        <Route exact path="/register" component={CommonPages.Register} />

        {/* Auth Routes */}
        <PrivateRoute exact path="/dashboard" component={AuthPages.Dashboard} />
        <PrivateRoute exact path="/library" component={AuthPages.Library} />
        <PrivateRoute exact path="/favs" component={AuthPages.Favs} />
        <PrivateRoute exact path="/about" component={AuthPages.About} />

        {/* Error Pages */}
        <Route exact path="/404" component={CommonPages.Page404} />
        <Route exact path="/401" component={CommonPages.Page401} />
        <Route exact path="/500" component={CommonPages.Page500} />
        <Route component={Redirect} />
      </Switch>
    </>
  </div>
);

export default withSplashScreen(Routes);
