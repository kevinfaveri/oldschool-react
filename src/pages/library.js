import React, { Component } from 'react';
import {
  Row, Col, Spin, Input, Icon,
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import Shortid from 'shortid';
import LayoutAuth from '../components/layout-auth/layout-auth';
import GameCard from '../components/game-card/game-card';
import { getAllGames, searchInAllGames } from '../service/games-service';
import ModalGame from '../components/modal-game/modal-game';

const GAMES_TOTAL = 24;

class Library extends Component {
  state = {
    isLoading: true,
    gamesArray: [],
    modalGameVisible: false,
    selectedGame: null,
    searchTerm: '',
  };

  async componentDidMount() {
    const gameListFromApi = await getAllGames(GAMES_TOTAL);
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
    const gameListFromApi = await searchInAllGames(searchTerm, GAMES_TOTAL);
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
        <ModalGame visible={modalGameVisible} game={selectedGame} onCancel={this.onCancelModal} />
      );
    }
    return '';
  }

  renderGameList() {
    const { isLoading, gamesArray } = this.state;
    if (isLoading) {
      return (
        <h1 className="text-center">
          <Spin tip="Loading games..." size="large" style={{ marginTop: '25px' }} />
        </h1>
      );
    }
    if (gamesArray.length !== 0) {
      return (
        <>
          <h1 className="text-primary" style={{ margin: '15px' }}>
            Showing only {GAMES_TOTAL} games...
          </h1>
          <QueueAnim type="bottom" duration={700}>
            {gamesArray.map(item => (
              <Col
                span={6}
                style={{
                  marginTop: '20px',
                  marginBottom: '20px',
                  height: '470px',
                  minHeight: '470px',
                  maxHeight: '470px',
                }}
                key={Shortid.generate()}
              >
                <GameCard
                  game={item}
                  onClick={() => {
                    this.gameOnClick(item);
                  }}
                />
              </Col>
            ))}
          </QueueAnim>
        </>
      );
    }
    return (
      <h1 className="text-center text-primary" style={{ margin: '15px' }}>
        There are no games available, please try again later...
      </h1>
    );
  }

  render() {
    const { searchTerm, isLoading } = this.state;
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
                placeholder="Search Games"
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
            {this.renderGameList()}
          </Row>
        </div>
        {this.renderModalGame()}
      </LayoutAuth>
    );
  }
}

export default Library;
