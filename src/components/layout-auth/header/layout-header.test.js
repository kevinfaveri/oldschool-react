import LayoutHeader from './layout-header';

describe('LayoutHeader component', () => {
  it('renders correctly', () => {
    const spy = sinon.spy();
    const historyMock = { push: spy };
    const wrapper = shallow(<LayoutHeader.WrappedComponent history={historyMock} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState of loadingLogout on logout-btn Click', async (done) => {
    const spy = sinon.spy();
    const historyMock = { push: spy };
    const wrapper = shallow(<LayoutHeader.WrappedComponent history={historyMock} />);

    wrapper.setState({ loadingLogout: false });

    await wrapper.instance().logout();
    expect(spy.calledOnce).toBe(true);
    expect(spy.args[0][0]).toBe('/');
    expect(wrapper.state().loadingLogout).toBe(false);
    done();
  });
});
