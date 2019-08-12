import React, { memo, useState, useEffect } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Container from './styles';
import {
  isGameFavorited,
  saveToFavs,
  removeFromFavs,
} from '../../service/games-service';

function ModalGame({ game, visible, onCancel, onOk }) {
  const [{ favLabel }, setState] = useState({ favLabel: '' });

  const revalidateGame = () => {
    setState((prevState) => ({
      ...prevState,
      favLabel: isGameFavorited(game) ? 'UNFAV' : 'FAV',
    }));
  };

  useEffect(() => {
    revalidateGame();
    // eslint-disable-next-line
  }, []);

  const saveFav = () => {
    saveToFavs(game);
    revalidateGame(game);
  };

  const removeFav = () => {
    removeFromFavs(game);
    revalidateGame(game);
  };

  return (
    <Container
      title={game.Name}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <Button
        type="primary"
        onClick={
          favLabel === 'UNFAV' ? () => removeFav(game) : () => saveFav(game)
        }
      >
        {favLabel}
      </Button>
      <h1>{game.Name}</h1>
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

ModalGame.defaultProps = {
  onOk: () => {},
  game: {
    VideoURL: null,
  },
};

ModalGame.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
  game: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Overview: PropTypes.string.isRequired,
    Platform: PropTypes.string.isRequired,
    VideoURL: PropTypes.string,
  }),
};

export default memo(ModalGame);
