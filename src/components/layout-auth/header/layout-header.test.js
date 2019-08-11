import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import LayoutHeader from './layout-header';

const mockStore = configureStore();

describe('LayoutHeader component', () => {
  it('renders correctly sider collapsed', () => {
    const store = mockStore({
      auth: { isLoadingLogout: false },
      sider: { isCollapsed: true },
    });

    const snapshot = snapRender(
      <MemoryRouter>
        <Provider store={store}>
          <LayoutHeader />
        </Provider>
      </MemoryRouter>,
    );

    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly sider uncollapsed', () => {
    const store = mockStore({
      auth: { isLoadingLogout: false },
      sider: { isCollapsed: false },
    });

    const snapshot = snapRender(
      <MemoryRouter>
        <Provider store={store}>
          <LayoutHeader />
        </Provider>
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('should call push method after logout', () => {
    const spy = sinon.spy((action) => action);
    const clock = sinon.useFakeTimers();

    const store = mockStore({
      auth: { isLoadingLogout: false },
      sider: { isCollapsed: true },
    });

    store.dispatch = spy;

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <LayoutHeader />
        </Provider>
      </MemoryRouter>,
    );

    fireEvent.click(wrapper.container.querySelector('#logout-btn'));

    clock.tick(60 * 1000);

    expect(spy.args[0][0].type).toBe('INIT_LOGOUT');
    expect(spy.callCount).toBe(1);
  });

  it('should call toggleSider onClick', () => {
    const spy = sinon.spy((action) => action);

    const store = mockStore({
      auth: { isLoadingLogout: false },
      sider: { isCollapsed: true },
    });

    store.dispatch = spy;

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <LayoutHeader />
        </Provider>
      </MemoryRouter>,
    );

    fireEvent.click(wrapper.container.querySelector('#toggle-sider'));

    expect(spy.args[0][0].type).toBe('TOGGLE_SIDER');
    expect(spy.callCount).toBe(1);
  });
});
