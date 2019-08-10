import About from './about';

describe('About page component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
