import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getActiveMenuItem } from '../../../utils/routes';

class LayoutSider extends PureComponent {
  onClick = ({ key }) => {
    const { history } = this.props;
    switch (key) {
      case '1':
        history.push('/dashboard');
        break;
      case '2':
        history.push('/library');
        break;
      case '3':
        history.push('/favs');
        break;
      case '4':
        history.push('/about');
        break;
      default:
        history.push('/dashboard');
    }
  };

  render() {
    const { siderCollapsed, location } = this.props;

    return (
      <Layout.Sider collapsedWidth={0} trigger={null} collapsible collapsed={siderCollapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[...getActiveMenuItem(location.pathname)]}
          onClick={this.onClick}
        >
          <Menu.Item key="1">
            <Icon type="home" theme="filled" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="file-search" theme="outlined" />
            <span>Library</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="star" theme="filled" />
            <span>Your List</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="info-circle" theme="filled" />
            <span>About</span>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

const mapStateToProps = state => ({
  siderCollapsed: state.sider.collapsed,
});

LayoutSider.propTypes = {
  siderCollapsed: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect(mapStateToProps)(LayoutSider));
