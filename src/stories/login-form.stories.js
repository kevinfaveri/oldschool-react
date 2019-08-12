import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
// eslint-disable-next-line
import { store } from '../store/index';
import LoginForm from '../components/login-form/login-form';

storiesOf('LoginForm', module)
  .add('default rendering', () => (
    <MemoryRouter>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </MemoryRouter>
  ));
