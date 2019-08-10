import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Row, Col, Alert } from 'antd';
import { useSelector } from 'react-redux';
import HomeCard from '../components/home-card/home-card';
import LoginForm from '../components/login-form/login-form';

export default function Login() {
  const [{ showExpiredAlert }, setState] = useState({
    showExpiredAlert: false,
  });
  const searchString = useSelector((state) => state.router.location.search);

  const expiredLoginAlert = () => {
    setState((prevState) => ({ ...prevState, showExpiredAlert: false }));
    const queryParams = queryString.parse(searchString);
    if (queryParams && queryParams.loginExpired === 'true') {
      setState((prevState) => ({ ...prevState, showExpiredAlert: true }));
    }
  };

  useEffect(() => {
    expiredLoginAlert();
    // eslint-disable-next-line
  }, []);

  const renderAlert = () => {
    if (showExpiredAlert) {
      return (
        <Alert
          message="Your login has expired!"
          type="error"
          closable
          style={{ marginBottom: '10px' }}
        />
      );
    }
    return null;
  };

  return (
    <Row>
      <Col span={6} offset={9} style={{ marginTop: '10%' }}>
        {renderAlert()}
        <HomeCard>
          <LoginForm style={{ marginTop: '15px' }} />
        </HomeCard>
      </Col>
    </Row>
  );
}
