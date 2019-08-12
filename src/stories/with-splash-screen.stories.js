import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import withSplashScreen from '../components/splash-screen/with-splash-screen';

storiesOf('SplashScreen', module)
  .add('default rendering', () => {
    const SplashScreen = withSplashScreen(() => (
      <>
        <h1 className="text-center text-primary">TEST STORYBOOK</h1>
      </>
    ));
    return <SplashScreen />;
  });
