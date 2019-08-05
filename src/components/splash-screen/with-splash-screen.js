import React, { Component } from 'react';

import './splash-screen.css';

// Components
import { Row, Spin, Button } from 'antd';
import Carousel from '../carousel/carousel';
import AudioToggle from '../audio-toggle/audio-toggle';

// Assets
import Logo from '../../assets/logo.png';

// TODO: Adicionar fav de game e aí salvar em lista em LocalStorage e depois pegar e mostrar no minha lista
// TODO: O que está em DASHBOARD hj irá para library
// TODO: Mostrar qual o ícone ativo de acordo com a URL no sidemenu
// TODO: Tela inicial do DASHBOARD deve ser alguns cards com stats random de qualquer coisa,
// tipo quantidade de games por estilo, por console e quantidade que possuem vídeo ou não possuem
// TODO: Pesquisa em Página de FAV e Página de LIBRARY
const withSplashScreen = WrappedComponent => class extends Component {
    state = {
      loading: false,
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
                <Button type="primary" onClick={this.disableSplash}>
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
