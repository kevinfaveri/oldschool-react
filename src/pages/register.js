import React from 'react';
import { Row, Col } from 'antd';
import HomeCard from '../components/home-card/home-card';
import RegisterFormComponent from '../components/register-form/register-form';

const Register = () => (
  <Row>
    <Col span={6} offset={9} style={{ marginTop: '10%' }}>
      <HomeCard>
        <RegisterFormComponent />
      </HomeCard>
    </Col>
  </Row>
);

export default Register;
