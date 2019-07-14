const INITIAL_STATE = { collapsed: false };

const sider = (state = INITIAL_STATE, action) => {
  if (action.type === 'TOGGLE_SIDER') {
    return { ...state, collapsed: !state.collapsed };
  }
  return state;
};

export default sider;
