import React, { Component } from 'react';

import './splash-screen.css';

// Components
import { Row, Spin } from 'antd';
import Carousel from '../carousel/carousel';
import AudioToggle from '../audio-toggle/audio-toggle';

// Assets
import Logo from '../../assets/logo.png';

// TODO: Mudar variavel loading dependendo no download do arquivo static Games.json
// TODO: Adicionar também caso validação de login demorar jogar aqui
const withSplashScreen = WrappedComponent => class extends Component {
    state = {
      loading: true,
    };

    async componentDidMount() {
      await new Promise((resolve) => {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
          resolve();
        }, 5000);
      });
    }

    render() {
      const { loading } = this.state;
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
              <AudioToggle audioArray={['top-gear.mp3']} />
            </Row>
            <Row className="text-center">
              <div className="header-description">
                Meanwhile, please enjoy some nostalgia (turn on sound)!
              </div>
            </Row>
          </div>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
};

export default withSplashScreen;
