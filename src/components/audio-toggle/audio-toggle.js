import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { validateStringArray, validateNumberInterval } from '../../utils/props-validate';

class AudioToggle extends Component {
  state = {
    playing: true,
    currentlyPlaying: '',
  };

  audioDefs = {
    volume: 0.1,
    loop: true,
  };

  currentIndex = 0;

  constructor(props) {
    super(props);
    const { audioArray } = this.props;
    const randomAudio = audioArray[this.currentIndex];
    this.audio = new Audio(`${process.env.PUBLIC_URL}/audio/${randomAudio}`);
    this.state = {
      currentlyPlaying: randomAudio,
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.graduallyPause = this.graduallyPause.bind(this);
  }

  async componentDidMount() {
    this.audio.volume = this.audioDefs.volume;
    this.audio.loop = this.audioDefs.loop;
    this.play();
  }

  async componentWillUnmount() {
    await this.pause();
  }

  previousAudio = () => {
    const { audioArray } = this.props;
    let newAudio = audioArray[this.currentIndex - 1];
    if (newAudio) {
      this.setAudio(newAudio);
      this.currentIndex -= 1;
    } else {
      newAudio = audioArray[audioArray.length - 1];
      this.setAudio(newAudio);
      this.currentIndex = audioArray.length - 1;
    }
  };

  nextAudio = () => {
    const { audioArray } = this.props;
    let newAudio = audioArray[this.currentIndex + 1];
    if (newAudio) {
      this.setAudio(newAudio);
      this.currentIndex += 1;
    } else {
      [newAudio] = audioArray;
      this.setAudio(newAudio);
      this.currentIndex = 0;
    }
  };

  setAudio = (audio) => {
    this.audio.src = `${process.env.PUBLIC_URL}/audio/${audio}`;
    this.audio.load();
    this.audio.play();
    this.setState({ currentlyPlaying: audio });
  };

  play() {
    this.audio.play();
    this.setState({ playing: true });
  }

  pause() {
    this.audio.pause();
    this.setState({ playing: false });
  }

  async graduallyPause() {
    const { gradualSpeed } = this.props;

    await new Promise((resolve) => {
      const gradualInterval = setInterval(() => {
        if (this.audio.volume > 0.001) {
          this.audio.volume = Number(this.audio.volume - 0.004).toFixed(3);
        } else {
          this.audio.pause();
          clearInterval(gradualInterval);
          resolve();
        }
      }, gradualSpeed * 100);
    });
  }

  render() {
    const { playing, currentlyPlaying } = this.state;
    const { inlineMode } = this.props;
    return (
      <div id="audio-toggle">
        <h4
          className="text-center text-primary"
          style={inlineMode ? { display: 'inline', marginRight: '10px' } : {}}
        >
          Playing: {currentlyPlaying}
        </h4>
        <Button
          type="primary"
          shape="circle"
          size="large"
          onClick={this.previousAudio}
          style={{ marginRight: '10px' }}
        >
          <Icon type="backward" theme="filled" />
        </Button>
        <Button
          id="audio-btn"
          type="primary"
          shape="circle"
          icon={playing ? 'pause' : 'caret-right'}
          size="large"
          onClick={playing ? this.pause : this.play}
        />
        <Button
          type="primary"
          shape="circle"
          size="large"
          onClick={this.nextAudio}
          style={{ marginLeft: '10px' }}
        >
          <Icon type="forward" theme="filled" />
        </Button>
      </div>
    );
  }
}

AudioToggle.defaultProps = {
  audioArray: ['top-gear.mp3'], // ['top-gear.mp3', 'super-mario-world.mp3', 'super-mario-kart.mp3']
  gradualSpeed: 3,
  inlineMode: false,
};

AudioToggle.propTypes = {
  audioArray: (props, propName) => validateStringArray(props, propName, 'audio', 1),
  gradualSpeed: (props, propName) => validateNumberInterval(props, propName, 3, 3),
  inlineMode: PropTypes.bool,
};

export default AudioToggle;
