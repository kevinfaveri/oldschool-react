import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Page401() {
  return (
    <div>
      <Row>
        <Col span={12} offset={6} style={{ paddingTop: '10vh' }}>
          <div className="clean-card text-center">
            <h1 className="text-primary text-baf" style={{ marginBottom: '0' }}>
              401
            </h1>
            <h1 className="text-primary" style={{ marginBottom: '0' }}>
              I am sorry but you do not have permission.
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
