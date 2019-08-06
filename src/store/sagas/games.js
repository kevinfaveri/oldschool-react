import { put, call, takeLatest } from 'redux-saga/effects';
import { getGamesData } from '../../service/games-service';

function* requestGamesSaga() {
  console.log('Request SAGA');
  try {
    yield put({ type: 'LOADING_GAMES_STORE' });
    const response = yield call(getGamesData);
    yield put({ type: 'SUCCESS_GAMES_DATA', payload: { data: response } });
    yield put({ type: 'LOADING_GAMES_STORE' });
    console.log('SUCESSO');
  } catch (err) {
    yield put({ type: 'FAILURE_GAMES_DATA' });
    yield put({ type: 'LOADING_GAMES_STORE' });
    console.log('ERROR');
  }
}

export default function* root() {
  yield ([takeLatest('REQUEST_GAMES_DATA', requestGamesSaga)]);
}
