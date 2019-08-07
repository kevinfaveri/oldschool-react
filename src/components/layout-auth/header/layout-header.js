import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Button } from 'antd';
import * as SiderActions from '../../../store/actions/sider';
import * as AuthActions from '../../../store/actions/auth';
import AudioToggle from '../../audio-toggle/audio-toggle';

// Assets
import Logo from '../../../assets/logo.png';

export default () => {
  const { Header } = Layout;
  const dispatch = useDispatch();

  const isLoadingLogout = useSelector(state => state.auth.isLoadingLogout);
  // Verificar aqui no caso da Arrow Function estar sendo criado toda vez
  const initLogout = () => dispatch(AuthActions.initLogout());

  const siderCollapsed = useSelector(state => state.sider.collapsed);
  const toggleSider = () => dispatch(SiderActions.toggleSider());

  return (
    <Header style={{ paddingLeft: '5px', paddingRight: '5px', textAlign: 'center' }}>
      <div className="logo" style={{ float: 'left' }}>
        <Button
          id="toggle-sider"
          className="btn-secondary"
          size="large"
          icon={siderCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggleSider}
        />
        <Link to="/dashboard">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: '120px', marginLeft: '15px', marginRight: '30px' }}
          />
        </Link>
      </div>
      <div className="logo" style={{ float: 'right' }}>
        <Button
          id="logout-btn"
          className="btn-secondary"
          size="large"
          icon="logout"
          loading={isLoadingLogout}
          onClick={initLogout}
        />
      </div>
      <div style={{ float: 'right', marginRight: '35px' }}>
        <AudioToggle
          inlineMode
          audioArray={['top-gear.mp3', 'super-mario-world.mp3', 'super-mario-kart.mp3']}
        />
      </div>
    </Header>
  );
};
