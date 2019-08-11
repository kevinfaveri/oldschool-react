import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Library from './library';

const mockStore = configureStore();

describe('Library page component', () => {
  it('renders correctly when loading', () => {
    const store = mockStore({
      games: {
        isLoadingGameList: true,
        gameList: [],
      },
    });

    const snapshot = snapRender(
      <Provider store={store}>
        <Library />
      </Provider>,
    );

    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly when not loading and has games', () => {
    const store = mockStore({
      games: {
        isLoadingGameList: false,
        gameList: [
          {
            VideoURL: undefined,
            Name: 'Game',
            Platform: 'Game',
            Overview: 'Overview',
          },
        ],
      },
    });

    const snapshot = snapRender(
      <Provider store={store}>
        <Library />
      </Provider>,
    );

    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly when not loading and not has games', () => {
    const store = mockStore({
      games: {
        isLoadingGameList: false,
        gameList: [],
      },
    });

    const snapshot = snapRender(
      <Provider store={store}>
        <Library />
      </Provider>,
    );

    expect(snapshot).toMatchSnapshot();
  });
});
