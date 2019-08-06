import Dashboard from './dashboard';

jest.mock('shortid', () => ({
  ...jest.requireActual('shortid'),
  generate: jest
    .fn()
    .mockReturnValueOnce('id1')
    .mockReturnValueOnce('id2')
    .mockReturnValueOnce('id3')
    .mockReturnValueOnce('id4'),
}));

describe('Dashboard page component', () => {
  it('renders correctly if game list is loading', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.setState({
      isLoading: true,
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly if has finished loading', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.setState({
      gamesData: {
        total: 2000,
        list: [{ total: 1000, platform: 'SNES' }, { total: 1000, platform: 'PSX' }],
      },
      favsData: {
        total: 1500,
        list: [{ total: 500, platform: 'SNES' }, { total: 1000, platform: 'PSX' }],
      },
      isLoading: false,
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});
