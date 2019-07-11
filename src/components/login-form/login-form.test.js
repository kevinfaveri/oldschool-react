import LoginForm from './login-form';

describe('LoginForm component', () => {
  const spyValidate = sinon.spy();
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

  it('should handleSubmit and simulate error on login, then show message', async (done) => {
    const testForm = {
      getFieldDecorator: jest.fn(opts => jest.fn()),
      validateFields: jest.fn((opts) => {
        false, [{ field1: 'Teste' }];
      }),
    };
    const wrapper = shallow(<LoginForm.WrappedComponent history={historyMock} form={testForm} />);
    await wrapper.instance().handleSubmit(new Event('submit'));
    console.log('Waiting to finish function', wrapper.instance().props.form);
    expect(spyHistPush.callCount).toBe(true);
    expect(spyHistPush.args[0][0]).toBe('/dashboard');
    spyValidate.restore();
    spyHistPush.restore();
    done();
  });
});
