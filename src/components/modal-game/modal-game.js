import React, { PureComponent } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { isGameFavorited, saveToFavs, removeFromFavs } from '../../service/games-service';

class ModalGame extends PureComponent {
  state = {
    favLabel: 'fav',
  };

  componentWillMount() {
    const { game } = this.props;
    this.revalidateGame(game);
  }

  revalidateGame(game) {
    this.setState({ favLabel: isGameFavorited(game) ? 'UNFAV' : 'FAV' });
  }

  saveFav(game) {
    saveToFavs(game);
    this.revalidateGame(game);
  }

  removeFav(game) {
    removeFromFavs(game);
    this.revalidateGame(game);
  }

  render() {
    const {
      visible, onOk, onCancel, game,
    } = this.props;

    const { favLabel } = this.state;

    return (
      <Modal title={game.Name} visible={visible} onOk={onOk} onCancel={onCancel} footer={null}>
        <Button
          type="primary"
          style={{ position: 'absolute', top: '15%', left: '85%' }}
          onClick={favLabel === 'UNFAV' ? () => this.removeFav(game) : () => this.saveFav(game)}
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
}

ModalGame.defaultProps = {
  onOk: () => {},
  onCancel: () => {},
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
