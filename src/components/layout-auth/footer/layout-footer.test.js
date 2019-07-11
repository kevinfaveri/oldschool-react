import LayoutFooter from './layout-footer';

describe('LayoutFooter component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LayoutFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
