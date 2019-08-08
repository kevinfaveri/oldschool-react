import {
  LOADING_GAMES_STORE,
  SUCCESS_DASHBOARD_DATA,
  FAILURE_DASHBOARD_DATA,
  SUCCESS_GAME_LIST,
  FAILURE_GAME_LIST,
  SUCCESS_FAV_LIST,
  FAILURE_FAV_LIST,
} from '../actions/games';

const INITIAL_STATE = {
  isLoading: false,
  gamesData: { total: 0, list: [] },
  favsData: { total: 0, list: [] },
  gameList: [],
  favList: [],
};

const games = (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case LOADING_GAMES_STORE:
      state = { ...state, isLoading: true };
      break;
    case SUCCESS_DASHBOARD_DATA:
      state = {
        ...state,
        gamesData: action.payload.gamesData,
        favsData: action.payload.favsData,
        isLoading: false,
      };
      break;
    case FAILURE_DASHBOARD_DATA:
      state = { ...state, isLoading: false };
      break;

    case SUCCESS_GAME_LIST:
      state = {
        ...state,
        gameList: action.payload.gameList,
        isLoading: false,
      };
      break;
    case FAILURE_GAME_LIST:
      state = { ...state, isLoading: false };
      break;

    case SUCCESS_FAV_LIST:
      state = {
        ...state,
        favList: action.payload.favList,
        isLoading: false,
      };
      break;
    case FAILURE_FAV_LIST:
      state = { ...state, isLoading: false };
      break;
    default:
      break;
  }

  return state;
};

export default games;
