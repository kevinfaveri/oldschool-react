export const LOADING_GAMES_STORE = 'LOADING_GAMES_STORE';

export const REQUEST_DASHBOARD_DATA = 'REQUEST_DASHBOARD_DATA';
export const SUCCESS_DASHBOARD_DATA = 'SUCCESS_DASHBOARD_DATA';
export const FAILURE_DASHBOARD_DATA = 'FAILURE_DASHBOARD_DATA';

export const REQUEST_GAME_LIST = 'REQUEST_GAME_LIST';
export const SEARCH_GAME_LIST = 'SEARCH_GAME_LIST';
export const SUCCESS_GAME_LIST = 'SUCCESS_GAME_LIST';
export const FAILURE_GAME_LIST = 'FAILURE_GAME_LIST';

export const REQUEST_FAV_LIST = 'REQUEST_FAV_LIST';
export const SEARCH_FAV_LIST = 'SEARCH_FAV_LIST';
export const SUCCESS_FAV_LIST = 'SUCCESS_FAV_LIST';
export const FAILURE_FAV_LIST = 'FAILURE_FAV_LIST';

export const requestDashboardData = () => ({
  type: REQUEST_DASHBOARD_DATA,
});

export const requestGameList = sizeLimit => ({
  type: REQUEST_GAME_LIST,
  payload: { sizeLimit },
});

export const searchGameList = (searchTerm, sizeLimit) => ({
  type: SEARCH_GAME_LIST,
  payload: { searchTerm, sizeLimit },
});

export const requestFavList = sizeLimit => ({
  type: REQUEST_FAV_LIST,
  payload: { sizeLimit },
});

export const searchFavList = (searchTerm, sizeLimit) => ({
  type: SEARCH_FAV_LIST,
  payload: { searchTerm, sizeLimit },
});
