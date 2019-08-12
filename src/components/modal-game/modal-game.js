import React, { memo, useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
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
    <Modal
      title={game.Name}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <Button
        type="primary"
        style={{ float: 'right', marginRight: '15px' }}
        onClick={
          favLabel === 'UNFAV' ? () => removeFav(game) : () => saveFav(game)
        }
      >
        {favLabel}
      </Button>
      <h1 className="text-center text-primary">{game.Name}</h1>
      <div className="text-center" style={{ padding: '15px' }}>
        {game.VideoURL !== undefined ? (
          <ReactPlayer url={game.VideoURL} width="inherit" height="inherit" />
        ) : (
          <div style={{ height: 'inherit' }} className="text-center">
            <strong>No video available for this game.</strong>
          </div>
        )}
      </div>
      <div className="text-center">
        <strong>Platform: </strong>
        <span>{game.Platform}</span>
      </div>
      <div className="text-center">
        <strong>Overview: </strong>
        <span>{game.Overview}</span>
      </div>
    </Modal>
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
