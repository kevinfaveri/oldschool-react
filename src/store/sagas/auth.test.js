import { initLogout } from './auth';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import * as AuthActions from '../actions/auth';
import { logoutUser } from '../../service/auth-service';
import { push } from 'connected-react-router';
import { throwError } from 'redux-saga-test-plan/providers';

const error = new Error('error');

describe('Auth Root Sagas - ', () => {
  it('initLogout saga work as expected when login result is true', () => {
    return expectSaga(initLogout, AuthActions.initLogout())
      .provide([[matchers.call.fn(logoutUser), true]])
      .put({ type: AuthActions.SUCCESS_LOGOUT })
      .put(push('/'))
      .run();
  });

  it('initLogout saga work as expected when login result is false', () => {
    return expectSaga(initLogout, AuthActions.initLogout())
      .provide([[matchers.call.fn(logoutUser), false]])
      .put({ type: AuthActions.FAILURE_LOGOUT })
      .run();
  });

  it('initLogout saga work as expected when error ocurred on API', () => {
    return expectSaga(initLogout, AuthActions.initLogout())
      .provide([[matchers.call.fn(logoutUser), throwError(error)]])
      .put({ type: AuthActions.FAILURE_LOGOUT })
      .run();
  });
});
