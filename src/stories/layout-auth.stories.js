import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
// eslint-disable-next-line
import { store } from '../store/index';
import LayoutAuth from '../components/layout-auth/layout-auth';

storiesOf('LayoutAuth', module)
  .add('default rendering with some text as a child', () => (
    <MemoryRouter>
      <Provider store={store}>
        <LayoutAuth>
          <h1 className="text-center text-primary">STORYBOOKING LAYOUT AUTH</h1>
        </LayoutAuth>
      </Provider>
    </MemoryRouter>
  ));
