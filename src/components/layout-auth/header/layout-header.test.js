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

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <LayoutHeader />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find('LayoutHeader')).toMatchSnapshot();
  });

  it('renders correctly sider uncollapsed', () => {
    const store = mockStore({
      auth: { isLoadingLogout: false },
      sider: { isCollapsed: false },
    });

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <LayoutHeader />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find('LayoutHeader')).toMatchSnapshot();
  });

  it('should call push method after logout', async (done) => {
    const spy = sinon.spy((action) => action);

    const store = mockStore({
      auth: { isLoadingLogout: false },
      sider: { isCollapsed: true },
    });

    store.dispatch = spy;

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <LayoutHeader />
        </Provider>
      </MemoryRouter>,
    );

    await wrapper
      .find('#logout-btn')
      .at(1)
      .props()
      .onClick();

    expect(spy.args[0][0].type).toBe('INIT_LOGOUT');
    expect(spy.callCount).toBe(1);
    done();
  });

  it('should call toggleSider onClick', () => {
    const spy = sinon.spy((action) => action);

    const store = mockStore({
      auth: { isLoadingLogout: false },
      sider: { isCollapsed: true },
    });

    store.dispatch = spy;

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <LayoutHeader />
        </Provider>
      </MemoryRouter>,
    );

    wrapper
      .find('#toggle-sider')
      .at(1)
      .props()
      .onClick();

    expect(spy.args[0][0].type).toBe('TOGGLE_SIDER');
    expect(spy.callCount).toBe(1);
  });
});
