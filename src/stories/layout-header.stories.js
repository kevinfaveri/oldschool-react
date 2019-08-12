import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
// eslint-disable-next-line
import { store } from '../store/index';
import LayoutHeader from '../components/layout-auth/header/layout-header';

storiesOf('LayoutHeader', module)
  .add('default rendering', () => (
    <MemoryRouter>
      <Provider store={store}>
        <LayoutHeader />
      </Provider>
    </MemoryRouter>
  ));
