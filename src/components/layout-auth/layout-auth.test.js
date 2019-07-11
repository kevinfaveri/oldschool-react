import LayoutAuth from './layout-auth';

describe('LayoutAuth component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LayoutAuth>TEST</LayoutAuth>);
    expect(wrapper).toMatchSnapshot();
  });
});
