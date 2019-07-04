import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './layout-header.css';

// Components
import {
  Layout, Button, Input, Icon,
} from 'antd';

// Assets
import Logo from '../../../assets/logo.png';

class LayoutHeader extends Component {
  state = {
    collapsed: false,
  };

  render() {
    const { Header } = Layout;
    const { collapsed } = this.state;

    return (
      <Header style={{ paddingLeft: '5px', paddingRight: '5px', textAlign: 'center' }}>
        <div className="logo" style={{ float: 'left' }}>
          <Button className="btn-secondary" size="large" icon={collapsed ? 'menu-unfold' : 'menu-fold'} />
          <Link to="/dashboard">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: '120px', marginLeft: '15px', marginRight: '30px' }}
            />
          </Link>
        </div>
        <Input
          id="header-search"
          placeholder="Search Games"
          prefix={<Icon type="search" style={{ color: '#b3b3b3' }} />}
          style={{ width: '50%' }}
          size="large"
        />
        <div className="logo" style={{ float: 'right' }}>
          <Button className="btn-secondary" size="large" icon="logout" />
        </div>
      </Header>
    );
  }
}

export default LayoutHeader;
