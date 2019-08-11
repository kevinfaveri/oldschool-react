import LayoutAuth from './layout-auth';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const mockStore = configureStore();

describe('LayoutAuth component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      router: { location: { pathname: '/dashboard' } },
      auth: { isLoadingLogout: false },
      sider: { isCollapsed: true },
    });

    const snapshot = snapRender(
      <MemoryRouter>
        <Provider store={store}>
          <LayoutAuth>TESTE</LayoutAuth>
        </Provider>
      </MemoryRouter>,
    );

    expect(snapshot).toMatchSnapshot();
  });
});
