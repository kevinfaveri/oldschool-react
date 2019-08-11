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

    const snapshot = snapRender(
      <Provider store={store}>
        <LayoutSider />
      </Provider>,
    );

    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly uncollapsed', () => {
    const store = mockStore({
      router: { location: { pathname: '/dashboard' } },
      sider: { isCollapsed: false },
    });

    const snapshot = snapRender(
      <Provider store={store}>
        <LayoutSider />
      </Provider>,
    );

    expect(snapshot).toMatchSnapshot();
  });

  it('should redirect when click on menu item', () => {
    const spy = sinon.spy((action) => action);

    const store = mockStore({
      router: { location: { pathname: '/dashboard' } },
      sider: { isCollapsed: false },
    });

    store.dispatch = spy;

    const wrapper = render(
      <Provider store={store}>
        <LayoutSider />
      </Provider>,
    );

    fireEvent.click(wrapper.container.querySelector('#menu-item-1'));

    expect(spy.args[0][0].payload.args[0]).toBe('/dashboard');
    expect(spy.callCount).toBe(1);
  });
});
