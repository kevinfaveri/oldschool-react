import RegisterForm from './register-form';

jest.mock('../../service/auth-service.js', () => ({
  ...jest.requireActual('../../service/auth-service.js'),
  registerUser: jest.fn().mockReturnValueOnce(true),
}));

describe('RegisterForm component', () => {
  const spyHistPush = sinon.spy();
  const historyMock = { push: spyHistPush };

  it('renders correctly', () => {
    const testForm = {
      getFieldValue: jest.fn(opts => c => c),
      getFieldDecorator: jest.fn(opts => c => c),
      validateFields: jest.fn(),
    };
    const wrapper = shallow(
      <RegisterForm.WrappedComponent history={historyMock} form={testForm} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleSubmit and simulate success on register, redirect to dashboard', async (done) => {
    const testForm = {
      getFieldValue: jest.fn(opts => c => c),
      getFieldDecorator: jest.fn(opts => jest.fn()),
      validateFields: jest.fn(callback => callback(false, [])),
    };

    const wrapper = shallow(
      <RegisterForm.WrappedComponent history={historyMock} form={testForm} />,
    );
    await wrapper.instance().handleSubmit(new Event('submit'));
    expect(spyHistPush.calledOnce).toBe(true);
    expect(spyHistPush.args[0][0]).toBe('/dashboard');
    done();
  });
});
