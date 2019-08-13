import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Favs from './favs';

const mockStore = configureStore();

jest.mock('rc-queue-anim',() => {
  return jest.fn().mockImplementation(({children}) => {
    return <>{children}</>;
  });
});

describe('Favs page component', () => {
  it('renders correctly when loading', () => {
    const store = mockStore({
      games: {
        isLoadingFavList: true,
        favList: [],
      },
    });

    const snapshot = snapRender(
      <Provider store={store}>
        <Favs />
      </Provider>,
    );

    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly when not loading and has games', () => {
    const store = mockStore({
      games: {
        isLoadingFavList: false,
        favList: [
          {
            VideoURL: undefined,
            Name: 'Super Mario Kart',
            Overview: "The best kart game in the world, y' now",
            Platform: 'Super Nintendo Entertainment System',
          },
        ],
      },
    });

    const snapshot = snapRender(
      <Provider store={store}>
        <Favs />
      </Provider>,
    );

    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly when not loading and not has games', () => {
    const store = mockStore({
      games: {
        isLoadingFavList: false,
        favList: [],
      },
    });

    const snapshot = snapRender(
      <Provider store={store}>
        <Favs />
      </Provider>,
    );

    expect(snapshot).toMatchSnapshot();
  });
});
