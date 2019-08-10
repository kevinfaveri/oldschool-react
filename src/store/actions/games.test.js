import * as GamesActions from './games';

describe('GamesActions', () => {
  it('should create an action to request Dashboard Data', () => {
    const expectedAction = {
      type: GamesActions.REQUEST_DASHBOARD_DATA,
    };
    expect(GamesActions.requestDashboardData()).toEqual(expectedAction);
  });

  it('should create an action to request game list', () => {
    const expectedAction = {
      type: GamesActions.REQUEST_GAME_LIST,
      payload: { sizeLimit: 5 },
    };
    expect(GamesActions.requestGameList(5)).toEqual(expectedAction);
  });

  it('should create an action to search game list', () => {
    const expectedAction = {
      type: GamesActions.SEARCH_GAME_LIST,
      payload: { searchTerm: 'game', sizeLimit: 5 },
    };
    expect(GamesActions.searchGameList('game', 5)).toEqual(expectedAction);
  });

  it('should create an action to request fav list', () => {
    const expectedAction = {
      type: GamesActions.REQUEST_FAV_LIST,
      payload: { sizeLimit: 5 },
    };
    expect(GamesActions.requestFavList(5)).toEqual(expectedAction);
  });

  it('should create an action to search fav list', () => {
    const expectedAction = {
      type: GamesActions.SEARCH_FAV_LIST,
      payload: { searchTerm: 'game', sizeLimit: 5 },
    };
    expect(GamesActions.searchFavList('game', 5)).toEqual(expectedAction);
  });
});
