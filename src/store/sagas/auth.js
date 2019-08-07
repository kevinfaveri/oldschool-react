import {
  all, put, call, takeLatest,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { logoutUser } from '../../service/auth-service';
import { INIT_LOGOUT, SUCCESS_LOGOUT, FAILURE_LOGOUT } from '../actions/auth';

function* initLogout() {
  try {
    const loginResult = yield call(logoutUser);
    yield put({ type: SUCCESS_LOGOUT });
    if (loginResult) {
      yield put(push('/'));
    }
  } catch (err) {
    yield put({ type: FAILURE_LOGOUT });
  }
}

export default function* root() {
  yield all([takeLatest(INIT_LOGOUT, initLogout)]);
}
