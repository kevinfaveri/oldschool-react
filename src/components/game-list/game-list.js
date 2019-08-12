import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Col, Spin } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Shortid from 'shortid';
import GameCard from '../game-card/game-card';

function GameList({ isLoading, gamesArray, maxTotalGames, gameOnClick }) {
  if (isLoading) {
    return (
      <h1 className="text-center">
        <Spin
          tip="Loading games..."
          size="large"
          style={{ marginTop: '25px' }}
        />
      </h1>
    );
  }

  if (gamesArray.length !== 0) {
    return (
      <>
        <h1 className="text-primary" style={{ margin: '15px' }}>
          Showing a maximum of {maxTotalGames} games...
        </h1>
        <QueueAnim type="bottom" duration={700}>
          {gamesArray.map((item) => (
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
              <GameCard game={item} onClick={() => gameOnClick(item)} />
            </Col>
          ))}
        </QueueAnim>
      </>
    );
  }
  return (
    <>
      <h1 className="text-center text-primary" style={{ margin: '15px' }}>
        There are no games available, please try again later...
      </h1>
    </>
  );
}

GameList.propTypes = {
  gamesArray: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  maxTotalGames: PropTypes.number.isRequired,
  gameOnClick: PropTypes.func.isRequired,
};

export default memo(GameList);
