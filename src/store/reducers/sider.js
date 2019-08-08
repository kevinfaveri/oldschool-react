const INITIAL_STATE = { isCollapsed: false };

const sider = (state = INITIAL_STATE, action) => {
  if (action.type === 'TOGGLE_SIDER') {
    return { ...state, isCollapsed: !state.isCollapsed };
  }
  return state;
};

export default sider;
