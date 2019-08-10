import {
  requestDashboardData,
  requestGameList,
  searchGameList,
  requestFavList,
  searchFavList,
} from './games';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import * as GamesActions from '../actions/games';
import {
  getGamesData,
  getFavsData,
  getAllFavs,
  getAllGames,
  searchInAllGames,
  searchInFavs,
} from '../../service/games-service';
import { throwError } from 'redux-saga-test-plan/providers';

const error = new Error('error');

describe('Games Root Sagas - ', () => {
  it('requestDashboardData saga work when success', () => {
    return expectSaga(requestDashboardData, GamesActions.requestDashboardData())
      .provide([
        [matchers.call.fn(getGamesData), {}],
        [matchers.call.fn(getFavsData), {}],
      ])
      .put({
        type: GamesActions.SUCCESS_DASHBOARD_DATA,
        payload: { gamesData: {}, favsData: {} },
      })
      .run();
  });

  it('requestDashboardData saga work when throws error', () => {
    return expectSaga(requestDashboardData, GamesActions.requestDashboardData())
      .provide([
        [matchers.call.fn(getGamesData), throwError(error)],
        [matchers.call.fn(getFavsData), {}],
      ])
      .put({
        type: GamesActions.FAILURE_DASHBOARD_DATA,
      })
      .run();
  });

  it('requestGameList saga work when success', () => {
    return expectSaga(requestGameList, GamesActions.requestGameList())
      .provide([[matchers.call.fn(getAllGames, 5), []]])
      .put({
        type: GamesActions.SUCCESS_GAME_LIST,
        payload: { gameList: [] },
      })
      .run();
  });

  it('requestGameList saga work when throws error', () => {
    return expectSaga(requestGameList, GamesActions.requestGameList())
      .provide([[matchers.call.fn(getAllGames, 5), throwError(error)]])
      .put({
        type: GamesActions.FAILURE_GAME_LIST,
      })
      .run();
  });

  it('searchGameList saga work when success', () => {
    return expectSaga(searchGameList, GamesActions.searchGameList())
      .provide([[matchers.call.fn(searchInAllGames, 'game', 5), []]])
      .put({
        type: GamesActions.SUCCESS_GAME_LIST,
        payload: { gameList: [] },
      })
      .run();
  });

  it('searchGameList saga work when throws error', () => {
    return expectSaga(searchGameList, GamesActions.searchGameList())
      .provide([
        [matchers.call.fn(searchInAllGames, 'game', 5), throwError(error)],
      ])
      .put({
        type: GamesActions.FAILURE_GAME_LIST,
      })
      .run();
  });

  it('requestFavList saga work when success', () => {
    return expectSaga(requestFavList, GamesActions.requestFavList())
      .provide([[matchers.call.fn(getAllFavs, 5), []]])
      .put({
        type: GamesActions.SUCCESS_FAV_LIST,
        payload: { favList: [] },
      })
      .run();
  });

  it('requestFavList saga work when throws error', () => {
    return expectSaga(requestFavList, GamesActions.requestFavList())
      .provide([[matchers.call.fn(getAllFavs, 5), throwError(error)]])
      .put({
        type: GamesActions.FAILURE_FAV_LIST,
      })
      .run();
  });

  it('searchFavList saga work when success', () => {
    return expectSaga(searchFavList, GamesActions.searchFavList())
      .provide([[matchers.call.fn(searchInFavs, 'game', 5), []]])
      .put({
        type: GamesActions.SUCCESS_FAV_LIST,
        payload: { favList: [] },
      })
      .run();
  });

  it('searchFavList saga work when throws error', () => {
    return expectSaga(searchFavList, GamesActions.searchFavList())
      .provide([[matchers.call.fn(searchInFavs, 'game', 5), throwError(error)]])
      .put({
        type: GamesActions.FAILURE_FAV_LIST,
      })
      .run();
  });
});
