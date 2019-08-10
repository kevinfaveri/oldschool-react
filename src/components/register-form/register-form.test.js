import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import RegisterForm from './register-form';

const store = configureStore([])();

jest.mock('../../service/auth-service.js', () => ({
  ...jest.requireActual('../../service/auth-service.js'),
  registerUser: jest.fn().mockReturnValueOnce(true),
}));

describe('RegisterForm component', () => {
  it('renders correctly', () => {
    const testForm = {
      getFieldValue: jest.fn((opts) => (c) => c),
      getFieldDecorator: jest.fn((opts) => (c) => c),
      validateFields: jest.fn(),
    };
    const wrapper = mount(
      <Provider store={store}>
        <RegisterForm form={testForm} />
      </Provider>,
    );
    expect(wrapper.find('RegisterForm')).toMatchSnapshot();
  });

  it('should handleSubmit and simulate failure on register', async (done) => {
    const spy = sinon.spy((action) => action);
    store.dispatch = spy;

    const testForm = {
      getFieldValue: jest.fn((opts) => (c) => c),
      getFieldDecorator: jest.fn((opts) => jest.fn()),
      validateFields: jest.fn((callback) => callback(true, [])),
    };

    const wrapper = mount(
      <Provider store={store}>
        <RegisterForm form={testForm} />
      </Provider>,
    );
    await wrapper
      .find('#register-form')
      .at(0)
      .props()
      .onSubmit(new Event('submit'));
    expect(spy.callCount).toBe(0);
    done();
  });

  it('should handleSubmit and simulate success on register', async (done) => {
    const spy = sinon.spy((action) => action);
    store.dispatch = spy;

    const testForm = {
      getFieldValue: jest.fn((opts) => (c) => c),
      getFieldDecorator: jest.fn((opts) => jest.fn()),
      validateFields: jest.fn((callback) => callback(false, [])),
    };

    const wrapper = mount(
      <Provider store={store}>
        <RegisterForm form={testForm} />
      </Provider>,
    );

    await wrapper
      .find('#register-form')
      .at(0)
      .props()
      .onSubmit(new Event('submit'));
    expect(spy.args[0][0].payload.args[0]).toBe('/dashboard');
    expect(spy.callCount).toBe(1);
    done();
  });
});
