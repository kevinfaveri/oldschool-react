import LayoutHeader from './layout-header';

describe('LayoutHeader component', () => {
  it('renders correctly sider collapsed', () => {
    const spy = sinon.spy();
    const historyMock = { push: spy };
    const spyToggleSider = sinon.spy();
    const wrapper = shallow(
      <LayoutHeader.WrappedComponent
        history={historyMock}
        siderCollapsed
        toggleSider={spyToggleSider}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly sider uncollapsed', () => {
    const spy = sinon.spy();
    const historyMock = { push: spy };
    const spyToggleSider = sinon.spy();
    const wrapper = shallow(
      <LayoutHeader.WrappedComponent
        history={historyMock}
        siderCollapsed={false}
        toggleSider={spyToggleSider}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState of loadingLogout on logout-btn Click', async (done) => {
    const spy = sinon.spy();
    const historyMock = { push: spy };
    const spyToggleSider = sinon.spy();
    const wrapper = shallow(
      <LayoutHeader.WrappedComponent
        history={historyMock}
        siderCollapsed
        toggleSider={spyToggleSider}
      />,
    );

    wrapper.setState({ loadingLogout: false });

    await wrapper.instance().logout();
    expect(spy.calledOnce).toBe(true);
    expect(spy.args[0][0]).toBe('/');
    expect(wrapper.state().loadingLogout).toBe(false);
    done();
  });

  it('should work call method toggleSider', () => {
    const spy = sinon.spy();
    const historyMock = { push: spy };
    const spyToggleSider = sinon.spy();
    const wrapper = shallow(
      <LayoutHeader.WrappedComponent
        history={historyMock}
        siderCollapsed
        toggleSider={spyToggleSider}
      />,
    );

    wrapper.find('#toggle-sider').simulate('click');
    expect(spyToggleSider.calledOnce).toBe(true);
  });
});
