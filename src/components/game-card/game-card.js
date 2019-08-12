import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './game-card.css';

function GameCard({ game, onClick }) {
  return (
    <div
      className="game-card"
      style={{ padding: '10px', height: '100%' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={onClick}
    >
      <div className="text-center" style={{ padding: '15px' }}>
        {game.VideoURL !== undefined ? (
          <ReactPlayer url={game.VideoURL} width="inherit" height="250px" />
        ) : (
          <div style={{ height: '250px' }} className="text-center">
            <strong>No video available for this game.</strong>
          </div>
        )}
      </div>
      <div className="text-center">
        <strong>Title: </strong>
        <span className="text-max-size-1">{game.Name}</span>
      </div>
      <div className="text-center">
        <strong>Platform: </strong>
        <span className="text-max-size-1">{game.Platform}</span>
      </div>
      <div className="text-center">
        <strong>Overview: </strong>
        <span className="text-max-size-3">{game.Overview}</span>
      </div>
    </div>
  );
}

GameCard.defaultProps = {
  game: {
    Name: 'Super Mario Kart',
    Overview: "The best kart game in the world, y' now",
    Platform: 'Super Nintendo Entertainment System',
    VideoURL: null,
  },
};

GameCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  game: PropTypes.shape({
    Name: PropTypes.string,
    Overview: PropTypes.string,
    Platform: PropTypes.string,
    VideoURL: PropTypes.string,
  }),
};

export default memo(GameCard);
