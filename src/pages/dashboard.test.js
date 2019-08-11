import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from './dashboard';

const mockStore = configureStore();

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
    const store = mockStore({
      games: {
        isLoadingDashboard: true,
        gamesData: { total: 0, list: [] },
        favsData: { total: 0, list: [] },
      },
    });
    const snapshot = snapRender(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly if has finished loading', () => {
    const store = mockStore({
      games: {
        isLoadingDashboard: false,
        gamesData: {
          total: 2000,
          list: [
            { total: 1000, platform: 'SNES' },
            { total: 1000, platform: 'PSX' },
          ],
        },
        favsData: {
          total: 1500,
          list: [
            { total: 500, platform: 'SNES' },
            { total: 1000, platform: 'PSX' },
          ],
        },
      },
    });

    const snapshot = snapRender(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
