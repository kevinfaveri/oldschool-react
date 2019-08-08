import React, { useCallback } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { getActiveMenuItem } from '../../../utils/routes';

export default () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(
    ({ key }) => {
      switch (key) {
        case '1':
          console.log('Will Push NOW');
          dispatch(push('/dashboard'));
          console.log('HAS PUSHED');
          break;
        case '2':
          dispatch(push('/library'));
          break;
        case '3':
          dispatch(push('/favs'));
          break;
        case '4':
          dispatch(push('/about'));
          break;
        default:
          dispatch(push('/dashboard'));
      }
    },
    [dispatch],
  );

  const pathname = useSelector(state => state.router.location.pathname);
  const isSiderCollapsed = useSelector(state => state.sider.isCollapsed);

  return (
    <Layout.Sider collapsedWidth={0} trigger={null} collapsible collapsed={isSiderCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[...getActiveMenuItem(pathname)]}
        onClick={handleClick}
      >
        <Menu.Item key="1">
          <Icon type="home" theme="filled" />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="file-search" theme="outlined" />
          <span>Library</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="star" theme="filled" />
          <span>Your List</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="info-circle" theme="filled" />
          <span>About</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};
