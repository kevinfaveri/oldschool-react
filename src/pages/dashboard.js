import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';
import QueueAnim from 'rc-queue-anim';
import LayoutAuth from '../components/layout-auth/layout-auth';
import GameCard from '../components/game-card/game-card';
import { getAllGames } from '../service/games-service';
import ModalGame from '../components/modal-game/modal-game';

class Dashboard extends Component {
  state = {
    isLoading: true,
    gamesArray: [],
    modalGameVisible: false,
    selectedGame: null,
  };

  async componentDidMount() {
    const gameListFromApi = await getAllGames(25);
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

  renderModalGame() {
    const { selectedGame, modalGameVisible } = this.state;
    if (selectedGame !== null) {
      return (
        <ModalGame visible={modalGameVisible} game={selectedGame} onCancel={this.onCancelModal} />
      );
    }
    return '';
  }

  render() {
    const { gamesArray, isLoading } = this.state;
    if (isLoading) {
      return (
        <LayoutAuth>
          <Row className="text-center">
            <Spin tip="Loading games..." size="large" style={{ marginTop: '25px' }} />
          </Row>
        </LayoutAuth>
      );
    }
    if (gamesArray.length !== 0) {
      return (
        <LayoutAuth>
          <Row style={{ padding: '15px', overflow: 'hidden' }} gutter={16}>
            <QueueAnim type="bottom" component="div" duration={700}>
              {gamesArray.map((item, index) => (
                <Col
                  span={6}
                  style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    height: '470px',
                    minHeight: '470px',
                    maxHeight: '470px',
                  }}
                  key={index}
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
          </Row>
          {this.renderModalGame()}
        </LayoutAuth>
      );
    }
    return (
      <LayoutAuth>
        <h1 className="text-center text-primary" style={{ margin: '15px' }}>
          There are no games available, please try again later...
        </h1>
      </LayoutAuth>
    );
  }
}

export default Dashboard;
