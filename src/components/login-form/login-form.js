import React, { Component } from 'react';
import {
  Form, Input, Icon, Checkbox, Button, Modal, Row, Col,
} from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser, getRememberMe, isUserLogged } from '../../service/auth-service';

const { error } = Modal;

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, history } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const loginResult = loginUser(values);
        if (loginResult === false) {
          error({
            content: 'Username / Password is invalid!',
          });
        } else {
          history.push('/dashboard');
        }
      }
    });
  };

  goToDashboard = () => {
    const { history } = this.props;
    history.push('/dashboard');
  };

  render() {
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
      rules: [{ type: 'string', required: true, message: 'This field is required!' }],
    };

    const { form } = this.props;
    const { getFieldDecorator } = form;

    const rememberMe = getRememberMe();
    const userLogged = isUserLogged();

    if (userLogged) {
      return (
        <Row>
          <Col span={22} offset={2} className="text-center">
            You are already logged in!
          </Col>
          <Col span={20} offset={2}>
            <Button type="primary" onClick={this.goToDashboard} style={{ width: '100%' }}>
              Click here to enter.
            </Button>
          </Col>
        </Row>
      );
    }

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', { initialValue: rememberMe, ...requiredConfig })(
            <Input prefix={<Icon type="user" />} placeholder="Username" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', requiredConfig)(
            <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox className="text-primary">Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
          <Link to="/register">Not registered? Click here!</Link>
        </Form.Item>
      </Form>
    );
  }
}

LoginForm.defaultProps = {
  form: {},
  history: {},
};

LoginForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

const LoginFormComponent = Form.create({ name: 'login_form' })(LoginForm);

export default withRouter(LoginFormComponent);
