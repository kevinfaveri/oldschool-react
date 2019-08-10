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
import { logoutUser } from '../../service/auth-service';
import { push } from 'connected-react-router';
import { throwError } from 'redux-saga-test-plan/providers';

const error = new Error('error');

describe('Games Root Sagas - ', () => {
  it('requestDashboardData saga work as expected when login result is true', () => {
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
});
