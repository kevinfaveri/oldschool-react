import React from 'react';
import { Row, Col } from 'antd';
import HomeCard from '../components/home-card/home-card';
import RegisterFormComponent from '../components/register-form/register-form';

export default function Register() {
  return (
    <Row>
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 12, offset: 6 }}
        lg={{ span: 8, offset: 8 }}
        style={{ marginTop: '10%' }}
      >
        <HomeCard>
          <RegisterFormComponent />
        </HomeCard>
      </Col>
    </Row>
  );
}
