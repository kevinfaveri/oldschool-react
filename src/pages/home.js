import React from 'react';
// Components
import { Row, Button, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';
import Carousel from '../components/carousel/carousel';

// Assets
import Logo from '../assets/logo.png';

export default function Home() {
  return (
    <div style={{ marginTop: '5%' }}>
      <Row className="text-center">
        <div className="header-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header-description">The best game library app!</div>
      </Row>
      <Row className="text-center">
        <Carousel />
      </Row>
      <Row className="text-center">
        <Link to="/login">
          <Button
            className="br"
            type="primary"
            size="large"
            style={{ marginRight: '15px' }}
          >
            <Icon type="login" />
            Login
          </Button>
        </Link>
        <Divider type="vertical" className="divider-primary" />
        <Link to="/register">
          <Button
            type="primary"
            size="large"
            icon="edit"
            style={{ marginLeft: '15px' }}
          >
            Register
            <Icon type="edit" theme="filled" />
          </Button>
        </Link>
      </Row>
    </div>
  );
}
