import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  Alert: () => <>This is an alert!!!</>,
}));

import Login from './login';

const mockStore = configureStore();

describe('Login page component', () => {
  it('renders correctly login not expired', () => {
    const store = mockStore({
      router: { location: { search: '?loginExpired=false' } },
    });
    const snapshot = snapRender(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly login expired', () => {
    const store = mockStore({
      router: { location: { search: '?loginExpired=true' } },
    });
    const snapshot = snapRender(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
