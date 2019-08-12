import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Container from './styles';

function GameCard({ game, onClick }) {
  return (
    <Container
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onClick}
    >
      <div>
        {game.VideoURL !== undefined ? (
          <ReactPlayer url={game.VideoURL} />
        ) : (
          <div>
            <strong>No video available for this game.</strong>
          </div>
        )}
      </div>
      <div>
        <strong>Title: </strong>
        <span>{game.Name}</span>
      </div>
      <div>
        <strong>Platform: </strong>
        <span>{game.Platform}</span>
      </div>
      <div>
        <strong>Overview: </strong>
        <span>{game.Overview}</span>
      </div>
    </Container>
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
