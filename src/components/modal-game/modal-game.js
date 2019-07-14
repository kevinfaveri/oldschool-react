import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const ModalGame = ({
  visible, onOk, onCancel, game,
}) => (
  <Modal title={game.Name} visible={visible} onOk={onOk} onCancel={onCancel} footer={null}>
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

ModalGame.defaultProps = {
  onOk: () => { },
  onCancel: () => { },
  game: {
    Name: 'Super Mario Kart',
    Overview: "The best kart game in the world, y' now",
    Platform: 'Super Nintendo Entertainment System',
    VideoURL: null,
  },
};

ModalGame.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  game: PropTypes.shape({
    Name: PropTypes.string,
    Overview: PropTypes.string,
    Platform: PropTypes.string,
    VideoURL: PropTypes.string,
  }),
};

export default ModalGame;
