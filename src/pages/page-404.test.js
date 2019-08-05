import Page404 from './page-404';

describe('Page404 component', () => {
  it('renders correctly Page404', () => {
    const wrapper = shallow(<Page404 />);
    expect(wrapper).toMatchSnapshot();
  });
});
