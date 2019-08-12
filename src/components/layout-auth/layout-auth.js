import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Layout } from 'antd';
import LayoutSider from './sider/layout-sider';
import LayoutHeader from './header/layout-header';
import LayoutFooter from './footer/layout-footer';
import Container from './styles';

const { Content } = Layout;

function LayoutAuth({ children }) {
  return (
    <Container id="layout-auth">
      <LayoutHeader />
      <Layout>
        <LayoutSider />
        <Content>{children}</Content>
      </Layout>
      <LayoutFooter />
    </Container>
  );
}

LayoutAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutAuth;
