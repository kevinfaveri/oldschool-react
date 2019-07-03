import React from 'react';
import { Button } from 'antd';

import logo from './logo.svg';
import withSplashScreen from './components/splash-screen/with-splash-screen';

const App = () => (
  <div className="app-layout">
    <header className="App-header">
      <img src={logo} width="250px" height="250px" className="App-logo" alt="logo" />
      <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button type="primary">Learn React</Button>
      </a>
    </header>
  </div>
);

export default withSplashScreen(App);
