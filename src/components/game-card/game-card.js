import React from 'react';
import PropTypes from 'prop-types';

const GameCard = ({ imageUrl, name, description }) => (
  <div className="game-card" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
    <p className="text-center">
      <img src={imageUrl} alt="Game" />
    </p>
    <p className="text-center">
      <strong>{name}</strong>
    </p>
    <p className="text-center">
      <strong>{description}</strong>
    </p>
  </div>
);

GameCard.defaultProps = {
  imageUrl: `${process.env.PUBLIC_URL}/image/super-mario-kart.png`,
  name: 'Super Mario Kart',
  description: "The best kart game in the world, y' now",
};

GameCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default GameCard;
