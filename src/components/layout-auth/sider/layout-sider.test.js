import LayoutSider from './layout-sider';

describe('LayoutSider component', () => {
  it('renders correctly collapsed', () => {
    const spy = sinon.spy();
    const historyMock = { push: spy };

    const wrapper = shallow(
      <LayoutSider.WrappedComponent
        history={historyMock}
        location={{ pathname: '/' }}
        siderCollapsed
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly uncollapsed', () => {
    const spy = sinon.spy();
    const historyMock = { push: spy };

    const wrapper = shallow(
      <LayoutSider.WrappedComponent
        history={historyMock}
        location={{ pathname: '/' }}
        siderCollapsed={false}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
