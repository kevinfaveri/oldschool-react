import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Favs from './favs';

const mockStore = configureStore();

describe('Favs page component', () => {
  it('renders correctly when loading', () => {
    const store = mockStore({
      games: {
        isLoadingFavList: true,
        favList: [],
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Favs />
      </Provider>,
    );
    expect(wrapper.find('Favs')).toMatchSnapshot();
  });
  it('renders correctly when not loading and has games', () => {
    const store = mockStore({
      games: {
        isLoadingFavList: false,
        favList: [
          {
            VideoURL: undefined,
            Name: 'Game',
            Platform: 'Game',
            Overview: 'Overview',
          },
        ],
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Favs />
      </Provider>,
    );
    expect(wrapper.find('Favs')).toMatchSnapshot();
  });
  it('renders correctly when not loading and not has games', () => {
    const store = mockStore({
      games: {
        isLoadingFavList: false,
        favList: [],
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Favs />
      </Provider>,
    );
    expect(wrapper.find('Favs')).toMatchSnapshot();
  });
});
