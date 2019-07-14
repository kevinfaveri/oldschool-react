import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import withSplashScreen from '../components/splash-screen/with-splash-screen';
import * as CommonPages from './common-pages';
import * as AuthPages from './auth-pages';
import PrivateRoute from './private-route';

// TODO: Fazer página de erro 404 quando acessar rota inválida, que aí joga pro '/'
const Routes = () => (
  <div id="routes">
    <BrowserRouter>
      <Switch>
        {/* Common Routes */}
        <Route path="/" exact component={CommonPages.Home} />
        <Route path="/login" exact component={CommonPages.Login} />
        <Route path="/register" exact component={CommonPages.Register} />

        {/* Auth Routes */}
        <PrivateRoute path="/dashboard" exact component={AuthPages.Dashboard} />
        <PrivateRoute path="/library" exact component={AuthPages.Library} />
        <PrivateRoute path="/favs" exact component={AuthPages.Favs} />
        <PrivateRoute path="/about" exact component={AuthPages.About} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default withSplashScreen(Routes);
