import React, { Component } from 'react';

import './splash-screen.css';

// Components
import { Row, Spin } from 'antd';
import Carousel from '../carousel/carousel';
import AudioToggle from '../audio-toggle/audio-toggle';

// Assets
import Logo from '../../assets/logo.png';

// TODO: Adicionar fav de game e aí salvar em lista em LocalStorage e depois pegar e mostrar no minha lista
// TODO: O que está em DASHBOARD hj irá para library
// TODO: Mostrar qual o ícone ativo de acordo com a URL no sidemenu
// TODO: Tela inicial do DASHBOARD deve ser alguns cards com stats random de qualquer coisa,
// tipo quantidade de games por estilo, por console e quantidade que possuem vídeo ou não possuem
// TODO: Pesquisar no header deve pesquisar de acordo: se está na página inicial pesquisa em
// toda library mudando para page library; se está em página de fav pesquisa em página de fav;
// se for qualquer outra, pesquisa em library
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
