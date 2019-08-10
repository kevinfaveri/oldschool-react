import GamesReducer from './games';
import * as GamesActions from '../actions/games';

const INITIAL_STATE = {
  isLoadingDashboard: false,
  gamesData: { total: 0, list: [] },
  favsData: { total: 0, list: [] },

  isLoadingGameList: false,
  gameList: [],

  isLoadingFavList: false,
  favList: [],
};

describe('GamesReducer', () => {
  it('should return the initial state', () => {
    expect(GamesReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle REQUEST_DASHBOARD_DATA', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.REQUEST_DASHBOARD_DATA,
        },
      ),
    ).toEqual({ isLoadingDashboard: true });

    expect(
      GamesReducer(
        { isLoadingDashboard: false },
        {
          type: GamesActions.REQUEST_DASHBOARD_DATA,
        },
      ),
    ).toEqual({ isLoadingDashboard: true });
  });

  it('should handle SUCCESS_DASHBOARD_DATA', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.SUCCESS_DASHBOARD_DATA,
          payload: { gamesData: 'POTATO', favsData: 'POTATO' },
        },
      ),
    ).toEqual({
      isLoadingDashboard: false,
      gamesData: 'POTATO',
      favsData: 'POTATO',
    });

    expect(
      GamesReducer(
        {
          isLoadingDashboard: false,
          gamesData: 'TOMATO',
          favsData: 'TOMATO',
        },
        {
          type: GamesActions.SUCCESS_DASHBOARD_DATA,
          payload: { gamesData: 'POTATO', favsData: 'POTATO' },
        },
      ),
    ).toEqual({
      isLoadingDashboard: false,
      gamesData: 'POTATO',
      favsData: 'POTATO',
    });
  });

  it('should handle FAILURE_DASHBOARD_DATA', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.FAILURE_DASHBOARD_DATA,
        },
      ),
    ).toEqual({ isLoadingDashboard: false });

    expect(
      GamesReducer(
        { isLoadingDashboard: true },
        {
          type: GamesActions.FAILURE_DASHBOARD_DATA,
        },
      ),
    ).toEqual({ isLoadingDashboard: false });
  });

  it('should handle REQUEST_GAME_LIST', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.REQUEST_GAME_LIST,
        },
      ),
    ).toEqual({ isLoadingGameList: true });

    expect(
      GamesReducer(
        { isLoadingGameList: false },
        {
          type: GamesActions.REQUEST_GAME_LIST,
        },
      ),
    ).toEqual({ isLoadingGameList: true });
  });

  it('should handle SEARCH_GAME_LIST', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.SEARCH_GAME_LIST,
        },
      ),
    ).toEqual({ isLoadingGameList: true });

    expect(
      GamesReducer(
        { isLoadingGameList: false },
        {
          type: GamesActions.SEARCH_GAME_LIST,
        },
      ),
    ).toEqual({ isLoadingGameList: true });
  });

  it('should handle SUCCESS_GAME_LIST', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.SUCCESS_GAME_LIST,
          payload: { gameList: 'POTATO' },
        },
      ),
    ).toEqual({
      isLoadingGameList: false,
      gameList: 'POTATO',
    });

    expect(
      GamesReducer(
        {
          isLoadingGameList: true,
          gameList: 'TOMATO',
        },
        {
          type: GamesActions.SUCCESS_GAME_LIST,
          payload: { gameList: 'POTATO' },
        },
      ),
    ).toEqual({
      isLoadingGameList: false,
      gameList: 'POTATO',
    });
  });

  it('should handle FAILURE_GAME_LIST', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.FAILURE_GAME_LIST,
        },
      ),
    ).toEqual({ isLoadingGameList: false });

    expect(
      GamesReducer(
        { isLoadingGameList: true },
        {
          type: GamesActions.FAILURE_GAME_LIST,
        },
      ),
    ).toEqual({ isLoadingGameList: false });
  });

  it('should handle REQUEST_FAV_LIST', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.REQUEST_FAV_LIST,
        },
      ),
    ).toEqual({ isLoadingFavList: true });

    expect(
      GamesReducer(
        { isLoadingFavList: false },
        {
          type: GamesActions.REQUEST_FAV_LIST,
        },
      ),
    ).toEqual({ isLoadingFavList: true });
  });

  it('should handle SEARCH_FAV_LIST', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.SEARCH_FAV_LIST,
        },
      ),
    ).toEqual({ isLoadingFavList: true });

    expect(
      GamesReducer(
        { isLoadingFavList: false },
        {
          type: GamesActions.SEARCH_FAV_LIST,
        },
      ),
    ).toEqual({ isLoadingFavList: true });
  });

  it('should handle SUCCESS_FAV_LIST', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.SUCCESS_FAV_LIST,
          payload: { favList: 'POTATO' },
        },
      ),
    ).toEqual({
      isLoadingFavList: false,
      favList: 'POTATO',
    });

    expect(
      GamesReducer(
        {
          isLoadingFavList: true,
          favList: 'TOMATO',
        },
        {
          type: GamesActions.SUCCESS_FAV_LIST,
          payload: { favList: 'POTATO' },
        },
      ),
    ).toEqual({
      isLoadingFavList: false,
      favList: 'POTATO',
    });
  });

  it('should handle FAILURE_FAV_LIST', () => {
    expect(
      GamesReducer(
        {},
        {
          type: GamesActions.FAILURE_FAV_LIST,
        },
      ),
    ).toEqual({ isLoadingFavList: false });

    expect(
      GamesReducer(
        { isLoadingFavList: true },
        {
          type: GamesActions.FAILURE_FAV_LIST,
        },
      ),
    ).toEqual({ isLoadingFavList: false });
  });
});
