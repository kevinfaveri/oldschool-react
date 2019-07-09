/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import { Button } from 'antd';

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

  audio = new Audio(`${process.env.PUBLIC_URL}/audio/top-gear.mp3`);

  constructor(props) {
    super(props);
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
    this.graduallyPause();
  }

  play() {
    this.audio.play();
    this.setState({ playing: true });
  }

  pause() {
    this.audio.pause();
    this.setState({ playing: false });
  }

  graduallyPause() {
    const gradualPause = setInterval(() => {
      if (this.audio.volume > 0.001) {
        this.audio.volume = Number(this.audio.volume - 0.004).toFixed(3);
      } else {
        this.audio.pause();
        clearInterval(gradualPause);
      }
    }, 300);
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

export default AudioToggle;
