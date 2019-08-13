import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// Components
import { Layout } from 'antd';
import LayoutSider from './sider/layout-sider';
import LayoutHeader from './header/layout-header';
import LayoutFooter from './footer/layout-footer';
import Container from './styles';

const { Content } = Layout;

function LayoutAuth({ children }) {
  const isSiderCollapsed = useSelector((state) => state.sider.isCollapsed);

  return (
    <Container id="layout-auth">
      <LayoutHeader />
      <Layout>
        <LayoutSider />
        <Content className={!isSiderCollapsed ? 'hide-when-uncollapsed' : ''}>
          {children}
        </Content>
      </Layout>
      <LayoutFooter />
    </Container>
  );
}

LayoutAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutAuth;
