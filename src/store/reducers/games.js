const INITIAL_STATE = {
  isLoading: true,
  gamesData: {},
  favsData: {},
  gameList: [],
  favList: [],
};

const games = (state = INITIAL_STATE, action) => {
  console.log('action', action);
  if (action.type === 'LOADING_GAMES_STORE') {
    state = { ...state, isLoading: !state.isLoading };
  }

  if (action.type === 'SUCCESS_GAMES_DATA') {
    state = { ...state, gamesData: action.payload.data };
  }
  return state;
};

export default games;
