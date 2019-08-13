import React, { memo, useState } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Container from './styles';
import { registerUser } from '../../service/auth-service';

function RegisterForm({ form }) {
  const dispatch = useDispatch();

  const [{ confirmDirty, isLoading, isResolved }, setState] = useState({
    confirmDirty: false,
    isLoading: false,
    isResolved: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValid = await new Promise((resolve) => {
      form.validateFields((err, values) => {
        resolve({ err, values });
      });
    });

    if (!formValid.err) {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      await registerUser(formValid.values);
      setState((prevState) => ({ ...prevState, isLoading: false }));
      dispatch(push('/dashboard'));
    }
    setState((prevState) => ({ ...prevState, isResolved: true }));
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('The passwords are not the same!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const formItemLayout = {
    wrapperCol: {
      span: 24,
    },
    labelAlign: 'left',
  };

  const requiredConfigRules = {
    rules: [
      { type: 'string', required: true, message: 'This field is required!' },
    ],
  };

  const emailRules = {
    rules: [
      ...requiredConfigRules.rules,
      {
        type: 'email',
        message: 'This is not a valid e-mail!',
      },
    ],
  };

  const passwordRules = {
    rules: [
      ...requiredConfigRules.rules,
      {
        validator: validateToNextPassword,
      },
    ],
  };

  const confirmRules = {
    rules: [
      ...requiredConfigRules.rules,
      {
        validator: compareToFirstPassword,
      },
    ],
  };

  const { getFieldDecorator } = form;

  return (
    <Container>
      <Form {...formItemLayout} onSubmit={handleSubmit} id="register-form">
        <Form.Item label="Name">
          {getFieldDecorator('name', requiredConfigRules)(
            <Input prefix={<Icon type="user" />} placeholder="Name" />,
          )}
        </Form.Item>
        <Form.Item label="Username">
          {getFieldDecorator('username', requiredConfigRules)(
            <Input
              prefix={<Icon type="user" />}
              placeholder="Username"
              autoComplete="username"
            />,
          )}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', emailRules)(
            <Input prefix={<Icon type="mail" />} placeholder="E-mail" />,
          )}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', passwordRules)(
            <Input.Password
              prefix={<Icon type="lock" />}
              placeholder="Password"
              autoComplete="new-password"
            />,
          )}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', confirmRules)(
            <Input.Password
              prefix={<Icon type="lock" />}
              placeholder="Confirm Password"
              autoComplete="new-password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            id="submit-register"
            data-loading={isResolved ? 'resolved' : 'loading'}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

RegisterForm.defaultProps = {
  form: {},
};

RegisterForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
    getFieldValue: PropTypes.func.isRequired,
  }),
};

const RegisterFormComponent = Form.create({ name: 'register_form' })(
  RegisterForm,
);

export default memo(RegisterFormComponent);
