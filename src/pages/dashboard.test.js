import Dashboard from './dashboard';

describe('Dashboard page component', () => {
  it('renders correctly if game list is loading', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.setState({
      isLoading: true,
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly if game list is empty', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.setState({
      gamesArray: [],
      isLoading: false,
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly if game list is not empty', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.setState({
      gamesArray: [
        {
          Name: 'Super Mario Kart',
          Overview: "The best kart game in the world, y' now",
          Platform: 'Super Nintendo Entertainment System',
          VideoURL: null,
        },
        {
          Name: 'Super Mario Kart',
          Overview: "The best kart game in the world, y' now",
          Platform: 'Super Nintendo Entertainment System',
          VideoURL: null,
        },
        {
          Name: 'Super Mario Kart',
          Overview: "The best kart game in the world, y' now",
          Platform: 'Super Nintendo Entertainment System',
          VideoURL: null,
        },
      ],
      isLoading: false,
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});
