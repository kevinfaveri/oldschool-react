import React, { PureComponent } from 'react';

import './splash-screen.css';

// Components
import { Row, Spin, Button } from 'antd';
import Carousel from '../carousel/carousel';
import AudioToggle from '../audio-toggle/audio-toggle';

// Assets
import Logo from '../../assets/logo.png';

const withSplashScreen = WrappedComponent => class extends PureComponent {
    state = {
      loading: true,
      showClose: false,
    };

    async componentDidMount() {
      await new Promise((resolve) => {
        setTimeout(() => {
          this.setState({
            showClose: true,
          });
          resolve();
        }, 5000);
      });
    }

    disableSplash = () => {
      this.setState({ loading: false });
    };

    render() {
      const { loading, showClose } = this.state;
      if (loading) {
        return (
          <div className="splash-screen">
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
                audioArray={['top-gear.mp3', 'super-mario-world.mp3', 'super-mario-kart.mp3']}
              />
            </Row>
            <Row className="text-center">
              <div className="header-description">
                Meanwhile, please enjoy some nostalgia (turn on sound)!
              </div>
            </Row>
            <Row className="text-center">
              {showClose ? (
                <Button id="close-splash" type="primary" onClick={this.disableSplash}>
                  Click to Continue
                </Button>
              ) : (
                ''
              )}
            </Row>
          </div>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
};

export default withSplashScreen;
