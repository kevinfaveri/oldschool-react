import {
  all, put, call, takeLatest,
} from 'redux-saga/effects';
import {
  getGamesData,
  getFavsData,
  getAllFavs,
  getAllGames,
  searchInAllGames,
  searchInFavs,
} from '../../service/games-service';
import {
  LOADING_GAMES_STORE,
  REQUEST_DASHBOARD_DATA,
  SUCCESS_DASHBOARD_DATA,
  FAILURE_DASHBOARD_DATA,
  REQUEST_GAME_LIST,
  SEARCH_GAME_LIST,
  SUCCESS_GAME_LIST,
  FAILURE_GAME_LIST,
  REQUEST_FAV_LIST,
  SEARCH_FAV_LIST,
  SUCCESS_FAV_LIST,
  FAILURE_FAV_LIST,
} from '../actions/games';

function* requestDashboardDataSaga() {
  try {
    yield put({ type: LOADING_GAMES_STORE });
    const [gamesData, favsData] = yield all([call(getGamesData), call(getFavsData)]);
    yield put({ type: SUCCESS_DASHBOARD_DATA, payload: { gamesData, favsData } });
  } catch (err) {
    yield put({ type: FAILURE_DASHBOARD_DATA });
  }
}

function* requestGameListSaga(action) {
  try {
    yield put({ type: LOADING_GAMES_STORE });
    const gameList = yield call(getAllGames, action.payload.sizeLimit);
    yield put({ type: SUCCESS_GAME_LIST, payload: { gameList } });
  } catch (err) {
    yield put({ type: FAILURE_GAME_LIST });
  }
}

function* searchGameList(action) {
  try {
    yield put({ type: LOADING_GAMES_STORE });
    const gameList = yield call(
      searchInAllGames,
      action.payload.searchTerm,
      action.payload.sizeLimit,
    );
    yield put({ type: SUCCESS_GAME_LIST, payload: { gameList } });
  } catch (err) {
    yield put({ type: FAILURE_GAME_LIST });
  }
}

function* requestFavListSaga(action) {
  try {
    yield put({ type: LOADING_GAMES_STORE });
    const favList = yield call(getAllFavs, action.payload.sizeLimit);
    yield put({ type: SUCCESS_FAV_LIST, payload: { favList } });
  } catch (err) {
    yield put({ type: FAILURE_FAV_LIST });
  }
}

function* searchFavList(action) {
  try {
    yield put({ type: LOADING_GAMES_STORE });
    const favList = yield call(searchInFavs, action.payload.searchTerm, action.payload.sizeLimit);
    yield put({ type: SUCCESS_FAV_LIST, payload: { favList } });
  } catch (err) {
    yield put({ type: FAILURE_FAV_LIST });
  }
}

export default function* root() {
  yield all([
    takeLatest(REQUEST_DASHBOARD_DATA, requestDashboardDataSaga),
    takeLatest(REQUEST_GAME_LIST, requestGameListSaga),
    takeLatest(SEARCH_GAME_LIST, searchGameList),
    takeLatest(REQUEST_FAV_LIST, requestFavListSaga),
    takeLatest(SEARCH_FAV_LIST, searchFavList),
  ]);
}
