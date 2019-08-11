import GameCard from './game-card';

describe('GameCard component', () => {
  it('renders correctly', () => {
    const snapshot = snapRender(<GameCard onClick={() => {}} />);
    expect(snapshot).toMatchSnapshot();
  });
});
