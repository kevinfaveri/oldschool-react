import React, { Component } from 'react';
import { Button } from 'antd';
import { validateStringArray, validateNumberInterval } from '../../utils/props-validate';

// TODO: Adicionar audio toggle para passar a música e voltar
// TODO: Ao usar o audio toggle para mudar a música,
// mudar a artwork também para a seguinte ou anterior de acordo com a mudança da música...
class AudioToggle extends Component {
  state = {
    playing: true,
  };

  audioDefs = {
    volume: 0.1,
    loop: true,
  };

  constructor(props) {
    super(props);
    const { audioArray } = this.props;
    this.audio = new Audio(
      `${process.env.PUBLIC_URL}/audio/${
        audioArray[Math.floor(Math.random() * audioArray.length)]
      }`,
    );
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
    await this.graduallyPause();
  }

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
    const { playing } = this.state;
    return (
      <div id="audio-toggle">
        <Button
          id="audio-btn"
          type="primary"
          shape="circle"
          icon={playing ? 'pause' : 'caret-right'}
          size="large"
          onClick={playing ? this.pause : this.play}
        />
      </div>
    );
  }
}

AudioToggle.defaultProps = {
  audioArray: ['top-gear.mp3'],
  gradualSpeed: 3,
};

AudioToggle.propTypes = {
  audioArray: (props, propName) => validateStringArray(props, propName, 'audio', 1),
  gradualSpeed: (props, propName) => validateNumberInterval(props, propName, 3, 3),
};

export default AudioToggle;
