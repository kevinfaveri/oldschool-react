import { all, fork } from 'redux-saga/effects';
import GamesSaga from './games';
import AuthSaga from './auth';

export default function* root() {
  yield all([fork(GamesSaga), fork(AuthSaga)]);
}
