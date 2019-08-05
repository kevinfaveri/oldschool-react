import Page401 from './page-401';

describe('Page401 component', () => {
  it('renders correctly Page401', () => {
    const wrapper = shallow(<Page401 />);
    expect(wrapper).toMatchSnapshot();
  });
});
