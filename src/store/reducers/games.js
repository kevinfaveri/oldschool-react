import {
  REQUEST_DASHBOARD_DATA,
  SUCCESS_DASHBOARD_DATA,
  FAILURE_DASHBOARD_DATA,
  REQUEST_GAME_LIST,
  SEARCH_GAME_LIST,
  SUCCESS_GAME_LIST,
  FAILURE_GAME_LIST,
  REQUEST_FAV_LIST,
  SEARCH_FAV_LIST,
  SUCCESS_FAV_LIST,
  FAILURE_FAV_LIST,
} from '../actions/games';

const INITIAL_STATE = {
  isLoadingDashboard: false,
  gamesData: { total: 0, list: [] },
  favsData: { total: 0, list: [] },

  isLoadingGameList: false,
  gameList: [],

  isLoadingFavList: false,
  favList: [],
};

const games = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DASHBOARD_DATA:
      state = { ...state, isLoadingDashboard: true };
      break;
    case SUCCESS_DASHBOARD_DATA:
      state = {
        ...state,
        gamesData: action.payload.gamesData,
        favsData: action.payload.favsData,
        isLoadingDashboard: false,
      };
      break;
    case FAILURE_DASHBOARD_DATA:
      state = { ...state, isLoadingDashboard: false };
      break;

    case REQUEST_GAME_LIST:
    case SEARCH_GAME_LIST:
      state = { ...state, isLoadingGameList: true };
      break;
    case SUCCESS_GAME_LIST:
      state = {
        ...state,
        gameList: action.payload.gameList,
        isLoadingGameList: false,
      };
      break;
    case FAILURE_GAME_LIST:
      state = { ...state, isLoadingGameList: false };
      break;

    case REQUEST_FAV_LIST:
    case SEARCH_FAV_LIST:
      state = { ...state, isLoadingFavList: true };
      break;
    case SUCCESS_FAV_LIST:
      state = {
        ...state,
        favList: action.payload.favList,
        isLoadingFavList: false,
      };
      break;
    case FAILURE_FAV_LIST:
      state = { ...state, isLoadingFavList: false };
      break;
    default:
      break;
  }

  return state;
};

export default games;
