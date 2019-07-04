import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

class LayoutSider extends Component {
  state = {
    collapsed: false,
  };

  render() {
    const { Sider } = Layout;
    const { collapsed } = this.state;

    return (
      <Sider collapsedWidth={0} trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline">
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
      </Sider>
    );
  }
}

export default LayoutSider;
