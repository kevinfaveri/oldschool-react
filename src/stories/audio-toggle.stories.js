import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import AudioToggle from '../components/audio-toggle/audio-toggle';

storiesOf('AudioToggle', module)
  .add('with default props', () => <AudioToggle />)
  .add('with three audios', () => (
    <AudioToggle
      audioArray={[
        'top-gear.mp3',
        'super-mario-kart.mp3',
        'super-mario-world.mp3',
      ]}
    />
  ))
  .add('in inline mode', () => (
    <AudioToggle
      audioArray={[
        'top-gear.mp3',
        'super-mario-kart.mp3',
        'super-mario-world.mp3',
      ]}
      inlineMode
    />
  ));
