import Dashboard from './dashboard';

describe('Dashboard page component', () => {
  it('renders correctly if game list is empty', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.setState({
      gamesArray: [],
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly if game list is not empty', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.setState({
      gamesArray: [1, 2, 3],
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});
