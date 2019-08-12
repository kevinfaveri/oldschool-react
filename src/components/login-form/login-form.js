import React, { memo, useState } from 'react';
import { Form, Input, Icon, Checkbox, Button, Modal, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import Container from './styles';
import {
  loginUser,
  getRememberMe,
  isUserLogged,
} from '../../service/auth-service';

const { error } = Modal;

function LoginForm({ form }) {
  const dispatch = useDispatch();

  const [
    { isLoading, isResolved, userLogged, rememberMe },
    setState,
  ] = useState({
    isLoading: false,
    userLogged: isUserLogged(),
    rememberMe: getRememberMe(),
    isResolved: false,
  });

  const goToDashboard = () => {
    dispatch(push('/dashboard'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValid = await new Promise((resolve) => {
      form.validateFields((err, values) => {
        resolve({ err, values });
      });
    });
    if (!formValid.err) {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      const loginResult = await loginUser(formValid.values);
      setState((prevState) => ({ ...prevState, isLoading: false }));
      if (loginResult === false) {
        error({
          content: 'Username / Password is invalid!',
        });
      } else {
        goToDashboard();
      }
      setState((prevState) => ({ ...prevState, isResolved: true }));
    }
  };

  const formItemLayout = {
    labelCol: {
      span: 20,
      offset: 2,
    },
    wrapperCol: {
      span: 20,
      offset: 2,
    },
    labelAlign: 'left',
  };

  const requiredConfig = {
    rules: [
      { type: 'string', required: true, message: 'This field is required!' },
    ],
  };

  const { getFieldDecorator } = form;

  if (userLogged) {
    return (
      <Container>
        <Row id="already-logged">
          <Col span={22} offset={2}>
            You are already logged in!
          </Col>
          <Col span={20} offset={2}>
            <Button type="primary" onClick={goToDashboard}>
              Click here to enter.
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Form {...formItemLayout} onSubmit={handleSubmit} id="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            initialValue: rememberMe,
            ...requiredConfig,
          })(
            <Input
              prefix={<Icon type="user" />}
              placeholder="Username"
              autoComplete="username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', requiredConfig)(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox className="text-primary" id="remember-checkbox">
              Remember me
            </Checkbox>,
          )}
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            id="submit-login"
            data-loading={isResolved ? 'resolved' : 'loading'}
          >
            Log in
          </Button>
          <Link to="/register" id="register-link">
            Not registered? Click here!
          </Link>
        </Form.Item>
      </Form>
    </Container>
  );
}

LoginForm.defaultProps = {
  form: {},
};

LoginForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
  }),
};

const LoginFormComponent = Form.create({ name: 'login_form' })(LoginForm);

export default memo(LoginFormComponent);
