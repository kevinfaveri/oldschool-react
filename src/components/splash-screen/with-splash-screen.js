import React, { useState, useEffect } from 'react';
import './splash-screen.css';

// Components
import { Row, Spin, Button } from 'antd';
import Carousel from '../carousel/carousel';
import AudioToggle from '../audio-toggle/audio-toggle';

// Assets
import Logo from '../../assets/logo.png';

const withSplashScreen = (WrappedComponent) => (props) => {
  const [{ isLoading, showClose }, setState] = useState({
    isLoading: true,
    showClose: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, showClose: true }));
    }, 5000);
  }, []);

  const disableSplash = () => {
    setState((prevState) => ({ ...prevState, isLoading: false }));
  };

  if (isLoading) {
    return (
      <div className="splash-screen" id="splash-screen">
        <Row className="text-center">
          <div className="header-logo">
            <img src={Logo} alt="Logo" /> <Spin size="large" />
          </div>
          <div className="header-description">The best game library app!</div>
        </Row>
        <Row className="text-center">
          <Carousel />
        </Row>
        <Row className="text-center">
          <AudioToggle
            audioArray={[
              'top-gear.mp3',
              'super-mario-world.mp3',
              'super-mario-kart.mp3',
            ]}
          />
        </Row>
        <Row className="text-center">
          <div className="header-description">
            Meanwhile, please enjoy some nostalgia (turn on sound)!
          </div>
        </Row>
        <Row className="text-center">
          {showClose ? (
            <Button id="close-splash" type="primary" onClick={disableSplash}>
              Click to Continue
            </Button>
          ) : (
            ''
          )}
        </Row>
      </div>
    );
  }
  return <WrappedComponent {...props} />;
};

export default withSplashScreen;
