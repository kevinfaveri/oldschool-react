import { Modal } from 'antd';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './login-form';

const store = configureStore([])();

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  Modal: { error: jest.fn() },
}));

jest.mock('../../service/auth-service.js', () => ({
  ...jest.requireActual('../../service/auth-service.js'),
  isUserLogged: jest
    .fn()
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true),
  loginUser: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
}));

describe('LoginForm component', () => {
  function rendersCorrectly() {
    const testForm = {
      getFieldDecorator: jest.fn((opts) => (c) => c),
      validateFields: jest.fn(),
    };
    let snapshot = snapRender(
      <MemoryRouter>
        <Provider store={store}>
          <LoginForm form={testForm} />
        </Provider>
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  }

  it('renders correctly when user not logged', () => {
    rendersCorrectly();
  });

  it('renders correctly when user logged', () => {
    rendersCorrectly();
  });

  // Real Async Example
  it('should handleSubmit and simulate success on login, then redirect to dashboard', async (done) => {
    const spy = sinon.spy((action) => action);
    store.dispatch = spy;

    const testForm = {
      getFieldDecorator: jest.fn((opts) => jest.fn()),
      validateFields: jest.fn((callback) => callback(false, [])),
    };

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginForm form={testForm} />
        </Provider>
      </MemoryRouter>,
    );

    fireEvent.click(wrapper.container.querySelector('#submit-login'));

    await waitForElement(() =>
      wrapper.container.querySelector('#submit-login[data-loading="resolved"'),
    );

    expect(spy.calledOnce).toBe(true);
    expect(spy.args[0][0].payload.args[0]).toBe('/dashboard');
    done();
  });

  it('should handleSubmit and simulate error on login, then show message', async (done) => {
    const testForm = {
      getFieldDecorator: jest.fn((opts) => jest.fn()),
      validateFields: jest.fn((callback) => callback(false, [])),
    };

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginForm form={testForm} />
        </Provider>
      </MemoryRouter>,
    );

    fireEvent.click(wrapper.container.querySelector('#submit-login'));

    await waitForElement(() =>
      wrapper.container.querySelector('#submit-login[data-loading="resolved"'),
    );

    expect(Modal.error).toHaveBeenCalled();
    done();
  });
});
