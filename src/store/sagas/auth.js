import { all, put, call, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { logoutUser } from '../../service/auth-service';
import { INIT_LOGOUT, SUCCESS_LOGOUT, FAILURE_LOGOUT } from '../actions/auth';

export function* initLogout() {
  try {
    const loginResult = yield call(logoutUser);
    if (loginResult) {
      yield put({ type: SUCCESS_LOGOUT });
      yield put(push('/'));
    } else {
      yield put({ type: FAILURE_LOGOUT });
    }
  } catch (err) {
    yield put({ type: FAILURE_LOGOUT });
  }
}

export default function* root() {
  yield all([takeLatest(INIT_LOGOUT, initLogout)]);
}
