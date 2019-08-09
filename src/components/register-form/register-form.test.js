import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import * as ConnectedReactRouter from 'connected-react-router';
import RegisterForm from './register-form';

const store = configureStore([])();
// TODO: Corrigir este mocking aqui...
jest.mock('../../service/auth-service.js', () => ({
  ...jest.requireActual('../../service/auth-service.js'),
  registerUser: jest.fn().mockReturnValueOnce(true),
}));

jest.mock('connected-react-router', () => ({
  ...jest.requireActual('connected-react-router'),
  push: () => ({
    type: 'MOCK_IMPL',
  }),
}));

describe('RegisterForm component', () => {
  it('renders correctly', () => {
    const testForm = {
      getFieldValue: jest.fn(opts => c => c),
      getFieldDecorator: jest.fn(opts => c => c),
      validateFields: jest.fn(),
    };
    const wrapper = shallow(<RegisterForm form={testForm} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleSubmit and simulate success on register', async (done) => {
    const spy = jest.fn();
    jest.spyOn(ConnectedReactRouter, 'push').mockImplementation(() => ({
      type: 'MOCK_IMPL',
    }));

    const testForm = {
      getFieldValue: jest.fn(opts => c => c),
      getFieldDecorator: jest.fn(opts => jest.fn()),
      validateFields: jest.fn(callback => callback(false, [])),
    };

    const wrapper = mount(
      <Provider store={store}>
        <RegisterForm form={testForm} id="register-form" />
      </Provider>,
    );

    await wrapper
      .find('#register-form')
      .at(2)
      .props()
      .onSubmit(new Event('submit'));
    expect(spy).toHaveBeenCalledTimes(2);
    done();
  });
});
