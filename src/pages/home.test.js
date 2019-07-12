import Home from './home';

describe('Home page component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper).toMatchSnapshot();
  });
});
