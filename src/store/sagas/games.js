import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  getGamesData,
  getFavsData,
  getAllFavs,
  getAllGames,
  searchInAllGames,
  searchInFavs,
} from '../../service/games-service';
import {
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

export function* requestDashboardData() {
  try {
    const [gamesData, favsData] = yield all([
      call(getGamesData),
      call(getFavsData),
    ]);
    yield put({
      type: SUCCESS_DASHBOARD_DATA,
      payload: { gamesData, favsData },
    });
  } catch (err) {
    yield put({ type: FAILURE_DASHBOARD_DATA });
  }
}

export function* requestGameList(action) {
  try {
    const gameList = yield call(getAllGames, action.payload.sizeLimit);
    yield put({ type: SUCCESS_GAME_LIST, payload: { gameList } });
  } catch (err) {
    yield put({ type: FAILURE_GAME_LIST });
  }
}

export function* searchGameList(action) {
  try {
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

function* gameListSaga(action) {
  if (action.type === REQUEST_GAME_LIST) {
    yield call(requestGameList, action);
  } else {
    yield call(searchGameList, action);
  }
}

export function* requestFavList(action) {
  try {
    const favList = yield call(getAllFavs, action.payload.sizeLimit);
    yield put({ type: SUCCESS_FAV_LIST, payload: { favList } });
  } catch (err) {
    yield put({ type: FAILURE_FAV_LIST });
  }
}

export function* searchFavList(action) {
  try {
    const favList = yield call(
      searchInFavs,
      action.payload.searchTerm,
      action.payload.sizeLimit,
    );
    yield put({ type: SUCCESS_FAV_LIST, payload: { favList } });
  } catch (err) {
    yield put({ type: FAILURE_FAV_LIST });
  }
}

function* favListSaga(action) {
  if (action.type === REQUEST_FAV_LIST) {
    yield call(requestFavList, action);
  } else {
    yield call(searchFavList, action);
  }
}

export default function* root() {
  yield all([
    takeLatest(REQUEST_DASHBOARD_DATA, requestDashboardData),
    takeLatest([REQUEST_GAME_LIST, SEARCH_GAME_LIST], gameListSaga),
    takeLatest([REQUEST_FAV_LIST, SEARCH_FAV_LIST], favListSaga),
  ]);
}
