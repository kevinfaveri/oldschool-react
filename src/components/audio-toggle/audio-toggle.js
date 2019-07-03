/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import { Button, Icon } from 'antd';

import './audio-toggle.css';
import TopGearMp3 from '../../assets/top-gear.mp3';

class AudioToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
    this.audio = new Audio(TopGearMp3);
    this.audio.volume = 0.1;
    this.audio.loop = true;
    this.audio.play();
  }

  play = () => {
    this.setState({ playing: true });
    this.audio.play();
  };

  pause = () => {
    this.setState({ playing: false });
    this.audio.pause();
  };

  render() {
    const { playing } = this.state;
    return (
      <div className="audio-toggle">
        <Button
          type="primary"
          shape="circle"
          icon={playing ? 'pause' : 'caret-right'}
          size="large"
          onClick={playing ? this.pause : this.play}
        >
          <Icon type="caret-right" theme="filled" />
        </Button>
      </div>
    );
  }
}

export default AudioToggle;
