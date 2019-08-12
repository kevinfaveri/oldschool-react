import React from 'react';
import PropTypes from 'prop-types';

import './layout-auth.css';

// Components
import { Layout } from 'antd';
import LayoutSider from './sider/layout-sider';
import LayoutHeader from './header/layout-header';
import LayoutFooter from './footer/layout-footer';

const { Content } = Layout;

function LayoutAuth({ children }) {
  return (
    <Layout id="layout-auth">
      <LayoutHeader />
      <Layout>
        <LayoutSider />
        <Content>{children}</Content>
      </Layout>
      <LayoutFooter />
    </Layout>
  );
}

LayoutAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutAuth;
