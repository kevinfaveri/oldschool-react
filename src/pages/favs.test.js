import Favs from './favs';

describe('Favs page component', () => {
  it('renders correctly when loading', () => {
    const wrapper = shallow(
      <Favs.WrappedComponent
        isLoading
        favList={[]}
        requestFavList={() => {}}
        searchFavList={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly when not loading and has games', () => {
    const wrapper = shallow(
      <Favs.WrappedComponent
        isLoading={false}
        favList={[{
          VideoURL: undefined, Name: 'Game', Platform: 'Game', Overview: 'Overview',
        }]}
        requestFavList={() => {}}
        searchFavList={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly when not loading and not has games', () => {
    const wrapper = shallow(
      <Favs.WrappedComponent
        isLoading={false}
        favList={[]}
        requestFavList={() => {}}
        searchFavList={() => {}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

