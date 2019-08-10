import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LayoutSider from './layout-sider';

const mockStore = configureStore();

describe('LayoutSider component', () => {
  it('renders correctly collapsed', () => {
    const store = mockStore({
      router: { location: { pathname: '/dashboard' } },
      sider: { isCollapsed: true },
    });
    const wrapper = mount(
      <Provider store={store}>
        <LayoutSider />
      </Provider>,
    );
    expect(wrapper.find('LayoutSider')).toMatchSnapshot();
  });

  it('renders correctly uncollapsed', () => {
    const store = mockStore({
      router: { location: { pathname: '/dashboard' } },
      sider: { isCollapsed: false },
    });
    const wrapper = mount(
      <Provider store={store}>
        <LayoutSider />
      </Provider>,
    );
    expect(wrapper.find('LayoutSider')).toMatchSnapshot();
  });

  it('should redirect when click on menu item', () => {
    const spy = sinon.spy((action) => action);

    const store = mockStore({
      router: { location: { pathname: '/dashboard' } },
      sider: { isCollapsed: false },
    });

    store.dispatch = spy;

    const wrapper = mount(
      <Provider store={store}>
        <LayoutSider />
      </Provider>,
    );

    wrapper
      .find('#sider-menu')
      .at(0)
      .props()
      .onClick({ key: 1 });
    expect(spy.args[0][0].payload.args[0]).toBe('/dashboard');
    expect(spy.callCount).toBe(1);
  });
});
