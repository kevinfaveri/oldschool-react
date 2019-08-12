import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
// eslint-disable-next-line
import { store } from '../store/index';
import LayoutSider from '../components/layout-auth/sider/layout-sider';

storiesOf('LayoutSider', module)
  .add('with some text as a child', () => (
    <Provider store={store}>
      <LayoutSider />
    </Provider>
  ));
