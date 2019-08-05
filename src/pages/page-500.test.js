import Page500 from './page-500';

describe('Page500 component', () => {
  it('renders correctly Page500', () => {
    const wrapper = shallow(<Page500 />);
    expect(wrapper).toMatchSnapshot();
  });
});
