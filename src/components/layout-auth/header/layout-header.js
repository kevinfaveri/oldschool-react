import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import Container from './styles';
import * as SiderActions from '../../../store/actions/sider';
import * as AuthActions from '../../../store/actions/auth';
import AudioToggle from '../../audio-toggle/audio-toggle';

// Assets
import Logo from '../../../assets/logo.png';

export default function LayoutHeader() {
  const dispatch = useDispatch();

  const isLoadingLogout = useSelector((state) => state.auth.isLoadingLogout);
  const initLogout = () => dispatch(AuthActions.initLogout());

  const isSiderCollapsed = useSelector((state) => state.sider.isCollapsed);
  const toggleSider = () => dispatch(SiderActions.toggleSider());

  return (
    <Container>
      <div>
        <Button
          id="toggle-sider"
          className="btn-secondary"
          size="large"
          icon={isSiderCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggleSider}
        />
        <Link to="/dashboard">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <Button
          id="logout-btn"
          className="btn-secondary"
          size="large"
          icon="logout"
          loading={isLoadingLogout}
          onClick={initLogout}
        />
      </div>
      <div>
        <AudioToggle
          inlineMode
          audioArray={[
            'top-gear.mp3',
            'super-mario-world.mp3',
            'super-mario-kart.mp3',
          ]}
        />
      </div>
    </Container>
  );
}
