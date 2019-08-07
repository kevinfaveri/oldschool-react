import { fork } from 'redux-saga/effects';
import GamesSaga from './games';

export default function* root() {
  yield fork(GamesSaga);
}
