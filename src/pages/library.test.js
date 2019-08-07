import Library from './library';

describe('Library page component', () => {
  it('renders correctly when loading', () => {
    const wrapper = shallow(
      <Library.WrappedComponent
        isLoading
        gameList={[]}
        requestGameList={() => {}}
        searchGameList={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly when not loading and has games', () => {
    const wrapper = shallow(
      <Library.WrappedComponent
        isLoading={false}
        gameList={[{
          VideoURL: undefined, Name: 'Game', Platform: 'Game', Overview: 'Overview',
        }]}
        requestGameList={() => {}}
        searchGameList={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly when not loading and not has games', () => {
    const wrapper = shallow(
      <Library.WrappedComponent
        isLoading={false}
        gameList={[]}
        requestGameList={() => {}}
        searchGameList={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
