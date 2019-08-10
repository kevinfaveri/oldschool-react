import GameList from './game-list';

jest.mock('shortid', () => ({
  ...jest.requireActual('shortid'),
  generate: jest
    .fn()
    .mockReturnValueOnce('id1')
    .mockReturnValueOnce('id2')
    .mockReturnValueOnce('id3'),
}));

describe('GameList component', () => {
  it('renders correctly when isLoading', () => {
    const wrapper = shallow(
      <GameList
        isLoading
        gamesArray={[]}
        maxTotalGames={24}
        gameOnClick={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly when has games', () => {
    const wrapper = shallow(
      <GameList
        isLoading={false}
        gamesArray={[
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
        ]}
        maxTotalGames={24}
        gameOnClick={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly when don't has games", () => {
    const wrapper = shallow(
      <GameList
        isLoading={false}
        gamesArray={[]}
        maxTotalGames={24}
        gameOnClick={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
