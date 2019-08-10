import * as AuthActions from './auth';

describe('AuthActions', () => {
  it('should create an action to initiate logout', () => {
    const expectedAction = {
      type: AuthActions.INIT_LOGOUT,
    };
    expect(AuthActions.initLogout()).toEqual(expectedAction);
  });
});
