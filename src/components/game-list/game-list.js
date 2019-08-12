import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Col, Spin } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Shortid from 'shortid';
import GameCard from '../game-card/game-card';
import Container from './styles';

function GameList({ isLoading, gamesArray, maxTotalGames, gameOnClick }) {
  if (isLoading) {
    return (
      <Container>
        <h1>
          <Spin tip="Loading games..." size="large" />
        </h1>
      </Container>
    );
  }

  if (gamesArray.length !== 0) {
    return (
      <Container>
        <h1>Showing a maximum of {maxTotalGames} games...</h1>
        <QueueAnim type="bottom" duration={700}>
          {gamesArray.map((item) => (
            <Col span={6} key={Shortid.generate()}>
              <GameCard game={item} onClick={() => gameOnClick(item)} />
            </Col>
          ))}
        </QueueAnim>
      </Container>
    );
  }
  return (
    <Container>
      <h1>There are no games available, please try again later...</h1>
    </Container>
  );
}

GameList.propTypes = {
  gamesArray: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  maxTotalGames: PropTypes.number.isRequired,
  gameOnClick: PropTypes.func.isRequired,
};

export default memo(GameList);
