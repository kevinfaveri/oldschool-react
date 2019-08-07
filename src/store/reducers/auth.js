import {
  INIT_LOGOUT,
  SUCCESS_LOGOUT,
  FAILURE_LOGOUT,
} from '../actions/auth';

const INITIAL_STATE = {
  isLoadingLogout: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_LOGOUT:
      state = { ...state, isLoadingLogout: true };
      break;
    case SUCCESS_LOGOUT:
      state = { ...state, isLoadingLogout: false };
      break;
    case FAILURE_LOGOUT:
      state = { ...state, isLoadingLogout: false };
      break;
    default:
      break;
  }

  return state;
};

export default auth;
