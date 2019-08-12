import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
// eslint-disable-next-line
import { store } from '../store/index';
import RegisterForm from '../components/register-form/register-form';

storiesOf('RegisterForm', module)
  .add('default rendering', () => (
    <MemoryRouter>
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    </MemoryRouter>
  ));
