import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import ModalGame from '../components/modal-game/modal-game';

storiesOf('ModalGame', module)
  .add('with visible prop false', () => (
    <ModalGame
      visible={false}
      onCancel={() => console.log('CANCEL_CLICKED')}
      game={{
        Name: 'Super Mario World',
        Overview: 'It is the Super Mario World game!',
        Platform: 'Super Nintendo Entertainment System',
        VideoURL: 'https://youtu.be/S6k4hcWSX94',
      }}
    />
  ))
  .add('with visible prop true and videoURL', () => (
    <ModalGame
      visible
      onCancel={() => console.log('CANCEL_CLICKED')}
      game={{
        Name: 'Super Mario World',
        Overview: 'It is the Super Mario World game!',
        Platform: 'Super Nintendo Entertainment System',
        VideoURL: 'https://youtu.be/S6k4hcWSX94',
      }}
    />
  ))
  .add('with visible prop false and no video URL', () => (
    <ModalGame
      visible
      onCancel={() => console.log('CANCEL_CLICKED')}
      game={{
        Name: 'Super Mario World',
        Overview: 'It is the Super Mario World game!',
        Platform: 'Super Nintendo Entertainment System',
      }}
    />
  ));
