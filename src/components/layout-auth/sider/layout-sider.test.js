import LayoutSider from './layout-sider';

describe('LayoutSider component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LayoutSider />);
    expect(wrapper).toMatchSnapshot();
  });
});
