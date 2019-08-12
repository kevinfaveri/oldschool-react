import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import GameCard from '../components/game-card/game-card';

storiesOf('GameCard', module)
  .add('with default props', () => (
    <GameCard onClick={() => console.log('GAME_CARD_CLICKED')} />
  ))
  .add('with new prop game', () => (
    <GameCard
      onClick={() => console.log('GAME_CARD_CLICKED')}
      game={{
        Name: 'Super Mario World',
        Overview: 'It is the Super Mario World game!',
        Platform: 'Super Nintendo Entertainment System',
        VideoURL: 'https://youtu.be/S6k4hcWSX94',
      }}
    />
  ));
