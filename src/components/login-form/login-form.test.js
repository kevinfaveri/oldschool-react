import { Modal } from 'antd';
import LoginForm from './login-form';

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  Modal: { error: jest.fn() },
}));

jest.mock('../../service/auth-service.js', () => ({
  ...jest.requireActual('../../service/auth-service.js'),
  loginUser: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
}));

describe('LoginForm component', () => {
  const spyHistPush = sinon.spy();

  const historyMock = { push: spyHistPush };

  it('renders correctly', () => {
    const testForm = {
      getFieldDecorator: jest.fn(opts => c => c),
      validateFields: jest.fn(),
    };
    const wrapper = shallow(<LoginForm.WrappedComponent history={historyMock} form={testForm} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setState({ userLogged: true });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleSubmit and simulate success on login, redirect to dashboard', async (done) => {
    const testForm = {
      getFieldDecorator: jest.fn(opts => jest.fn()),
      validateFields: jest.fn(callback => callback(false, [])),
    };

    const wrapper = shallow(<LoginForm.WrappedComponent history={historyMock} form={testForm} />);
    await wrapper.instance().handleSubmit(new Event('submit'));
    expect(spyHistPush.calledOnce).toBe(true);
    expect(spyHistPush.args[0][0]).toBe('/dashboard');
    done();
  });

  it('should handleSubmit and simulate error on login, then show message', async (done) => {
    const testForm = {
      getFieldDecorator: jest.fn(opts => jest.fn()),
      validateFields: jest.fn(callback => callback(false, [])),
    };
    const wrapper = shallow(<LoginForm.WrappedComponent history={historyMock} form={testForm} />);
    await wrapper.instance().handleSubmit(new Event('submit'));
    expect(Modal.error).toHaveBeenCalled();
    done();
  });
});
