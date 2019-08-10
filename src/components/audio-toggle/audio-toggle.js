import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import {
  validateStringArray,
  validateNumberInterval,
} from '../../utils/props-validate';

const AudioToggle = ({ audioArray, gradualSpeed, inlineMode }) => {
  const randomAudio = audioArray[0];

  const [{ playing, currentlyPlaying, currentIndex }, setState] = useState({
    playing: false,
    currentlyPlaying: randomAudio,
    currentIndex: 0,
  });

  const audioDefs = {
    volume: 0.1,
    loop: true,
  };

  const audio = useMemo(
    () => new Audio(`${process.env.PUBLIC_URL}/audio/${randomAudio}`),
    // eslint-disable-next-line
    [],
  );

  const play = useCallback(() => {
    audio.play();
    setState((prevState) => ({ ...prevState, playing: true }));
  }, [audio]);

  const pause = useCallback(() => {
    audio.pause();
    setState((prevState) => ({ ...prevState, playing: false }));
  }, [audio]);

  const graduallyPause = () => {
    new Promise((resolve) => {
      const gradualInterval = setInterval(() => {
        if (audio.volume > 0.001) {
          audio.volume = Number(audio.volume - 0.004).toFixed(3);
        } else {
          audio.pause();
          clearInterval(gradualInterval);
          resolve();
        }
      }, gradualSpeed * 100);
    }).then();
  };

  useEffect(() => {
    audio.volume = audioDefs.volume;
    audio.loop = audioDefs.loop;
    if (playing) {
      play();
    }

    return () => {
      graduallyPause();
    };
    // eslint-disable-next-line
  }, []);

  const setAudio = (newAudio, newIndex) => {
    audio.src = `${process.env.PUBLIC_URL}/audio/${newAudio}`;
    audio.load();
    audio.play();
    setState((prevState) => ({
      ...prevState,
      currentlyPlaying: newAudio,
      currentIndex: newIndex,
    }));
  };

  const previousAudio = () => {
    let newAudio = audioArray[currentIndex - 1];
    if (newAudio) {
      setAudio(newAudio, currentIndex - 1);
    } else {
      newAudio = audioArray[audioArray.length - 1];
      setAudio(newAudio, audioArray.length - 1);
    }
  };

  const nextAudio = () => {
    let newAudio = audioArray[currentIndex + 1];
    if (newAudio) {
      setAudio(newAudio, currentIndex + 1);
    } else {
      [newAudio] = audioArray;
      setAudio(newAudio, 0);
    }
  };

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
        onClick={previousAudio}
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
        onClick={playing ? pause : play}
      />
      <Button
        type="primary"
        shape="circle"
        size="large"
        onClick={nextAudio}
        style={{ marginLeft: '10px' }}
      >
        <Icon type="forward" theme="filled" />
      </Button>
    </div>
  );
};

AudioToggle.defaultProps = {
  audioArray: ['top-gear.mp3'],
  gradualSpeed: 3,
  inlineMode: false,
};

AudioToggle.propTypes = {
  audioArray: (props, propName) =>
    validateStringArray(props, propName, 'audio', 1),
  gradualSpeed: (props, propName) =>
    validateNumberInterval(props, propName, 3, 3),
  inlineMode: PropTypes.bool,
};

export default memo(AudioToggle);
