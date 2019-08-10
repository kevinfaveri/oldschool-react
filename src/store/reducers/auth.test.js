import AuthReducer from './auth';
import * as AuthActions from '../actions/auth';

describe('AuthReducer', () => {
  it('should return the initial state', () => {
    expect(AuthReducer(undefined, {})).toEqual({
      isLoadingLogout: false,
    });
  });

  it('should handle INIT_LOGOUT', () => {
    expect(
      AuthReducer(
        {},
        {
          type: AuthActions.INIT_LOGOUT,
        },
      ),
    ).toEqual({
      isLoadingLogout: true,
    });

    expect(
      AuthReducer(
        {
          isLoadingLogout: false,
        },
        {
          type: AuthActions.INIT_LOGOUT,
        },
      ),
    ).toEqual({
      isLoadingLogout: true,
    });
  });

  it('should handle SUCCESS_LOGOUT', () => {
    expect(
      AuthReducer(
        {},
        {
          type: AuthActions.SUCCESS_LOGOUT,
        },
      ),
    ).toEqual({
      isLoadingLogout: false,
    });

    expect(
      AuthReducer(
        {
          isLoadingLogout: true,
        },
        {
          type: AuthActions.SUCCESS_LOGOUT,
        },
      ),
    ).toEqual({
      isLoadingLogout: false,
    });
  });

  it('should handle FAILURE_LOGOUT', () => {
    expect(
      AuthReducer(
        {},
        {
          type: AuthActions.FAILURE_LOGOUT,
        },
      ),
    ).toEqual({
      isLoadingLogout: false,
    });

    expect(
      AuthReducer(
        {
          isLoadingLogout: true,
        },
        {
          type: AuthActions.FAILURE_LOGOUT,
        },
      ),
    ).toEqual({
      isLoadingLogout: false,
    });
  });
});
