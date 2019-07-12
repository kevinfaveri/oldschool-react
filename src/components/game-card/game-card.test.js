import GameCard from './game-card';

describe('GameCard component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GameCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
