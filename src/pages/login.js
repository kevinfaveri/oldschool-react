import React, { Component } from 'react';
import queryString from 'query-string';
import { Row, Col, Alert } from 'antd';
import PropTypes from 'prop-types';
import HomeCard from '../components/home-card/home-card';
import LoginForm from '../components/login-form/login-form';

class Login extends Component {
  constructor(props) {
    super(props);
    this.showExpiredAlert = false;
  }

  componentWillMount() {
    this.expiredLoginAlert();
  }

  expiredLoginAlert = () => {
    const { location } = this.props;
    const { search } = location;
    this.showExpiredAlert = false;
    const queryParams = queryString.parse(search);
    if (queryParams && queryParams.loginExpired === 'true') {
      this.showExpiredAlert = true;
    }
  };

  renderAlert() {
    if (this.showExpiredAlert) {
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
  }

  render() {
    return (
      <Row>
        <Col span={6} offset={9} style={{ marginTop: '10%' }}>
          {this.renderAlert()}
          <HomeCard>
            <LoginForm />
          </HomeCard>
        </Col>
      </Row>
    );
  }
}

Login.defaultProps = {
  location: {},
};

Login.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
};

export default Login;
