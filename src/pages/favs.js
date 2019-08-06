import React, { Component } from 'react';
import {
  Row, Col, Input, Icon,
} from 'antd';
import LayoutAuth from '../components/layout-auth/layout-auth';
import { getAllFavs, searchInFavs } from '../service/games-service';
import ModalGame from '../components/modal-game/modal-game';
import GameList from '../components/game-list/game-list';

const GAMES_TOTAL = 24;

class Favs extends Component {
  state = {
    isLoading: true,
    gamesArray: [],
    modalGameVisible: false,
    selectedGame: null,
    searchTerm: '',
  };

  async componentDidMount() {
    const gameListFromApi = await getAllFavs(GAMES_TOTAL);
    this.setState({
      gamesArray: [...gameListFromApi],
      isLoading: false,
    });
  }

  gameOnClick = (game) => {
    this.setState({
      modalGameVisible: true,
      selectedGame: game,
    });
  };

  onCancelModal = () => {
    this.setState({
      modalGameVisible: false,
      selectedGame: null,
    });
  };

  searchGame = async () => {
    const { searchTerm } = this.state;

    this.setState({
      isLoading: true,
    });
    const gameListFromApi = await searchInFavs(searchTerm, GAMES_TOTAL);
    this.setState({
      gamesArray: [...gameListFromApi],
      isLoading: false,
    });
  };

  onChangeInput = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  renderModalGame() {
    const { selectedGame, modalGameVisible } = this.state;
    if (selectedGame !== null) {
      return (
        <ModalGame
          className="clean-card"
          visible={modalGameVisible}
          game={selectedGame}
          onCancel={this.onCancelModal}
        />
      );
    }
    return '';
  }

  render() {
    const { searchTerm, isLoading, gamesArray } = this.state;
    return (
      <LayoutAuth>
        <div
          style={{
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Row style={{ marginTop: '2vh' }}>
            <Col span={12} offset={6}>
              <Input
                className="game-search"
                placeholder="Search Fav Games"
                prefix={<Icon type="search" style={{ color: '#b3b3b3' }} />}
                style={{ width: '100%' }}
                size="large"
                onPressEnter={this.searchGame}
                onChange={this.onChangeInput}
                value={searchTerm}
                disabled={isLoading}
              />
            </Col>
          </Row>
          <Row style={{ padding: '30px 15px' }} gutter={24}>
            <GameList
              isLoading={isLoading}
              gamesArray={gamesArray}
              maxTotalGames={GAMES_TOTAL}
              gameOnClick={this.gameOnClick}
            />
          </Row>
        </div>
        {this.renderModalGame()}
      </LayoutAuth>
    );
  }
}

export default Favs;
