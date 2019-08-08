import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div>
      <Row>
        <Col span={12} offset={6} style={{ paddingTop: '10vh' }}>
          <div className="clean-card text-center">
            <h1 className="text-primary text-baf" style={{ marginBottom: '0' }}>
              404
            </h1>
            <h1 className="text-primary" style={{ marginBottom: '0' }}>
              It seems to me that you are lost!
            </h1>
            <Link to="/">
              <Button
                className="btn-secondary"
                size="large"
                icon="rollback"
                style={{ marginBottom: '15px' }}
              >
                Take Me Back Home
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
