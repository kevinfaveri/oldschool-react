import SiderReducer from './sider';
import * as SiderActions from '../actions/sider';

describe('SiderReducer', () => {
  it('should return the initial state', () => {
    expect(SiderReducer(undefined, {})).toEqual({
      isCollapsed: false,
    });
  });

  it('should handle TOGGLE_SIDER', () => {
    expect(
      SiderReducer(
        {},
        {
          type: SiderActions.TOGGLE_SIDER,
        },
      ),
    ).toEqual({
      isCollapsed: true,
    });

    expect(
      SiderReducer(
        {
          isCollapsed: false,
        },
        {
          type: SiderActions.TOGGLE_SIDER,
        },
      ),
    ).toEqual({
      isCollapsed: true,
    });

    expect(
      SiderReducer(
        {
          isCollapsed: true,
        },
        {
          type: SiderActions.TOGGLE_SIDER,
        },
      ),
    ).toEqual({
      isCollapsed: false,
    });
  });
});
