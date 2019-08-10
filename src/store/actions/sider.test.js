import * as SiderActions from './sider';

describe('SiderActions', () => {
  it('should create an action to toggle sider', () => {
    const expectedAction = {
      type: SiderActions.TOGGLE_SIDER,
    };
    expect(SiderActions.toggleSider()).toEqual(expectedAction);
  });
});
