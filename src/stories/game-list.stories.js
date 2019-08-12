import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import { Row } from 'antd';
import GameList from '../components/game-list/game-list';

storiesOf('GameList', module)
  .add('loading', () => (
    <GameList
      gameOnClick={() => console.log('GAME_LIST_CLICKED')}
      isLoading
      maxTotalGames={1}
      gamesArray={[]}
    />
  ))
  .add('with three games loaded', () => (
    <Row gutter={24}>
      <GameList
        gameOnClick={() => console.log('GAME_LIST_CLICKED')}
        isLoading={false}
        maxTotalGames={12}
        gamesArray={[
          {
            Name: 'Super Mario Kart',
            Overview: "The best kart game in the world, y' now",
            Platform: 'Super Nintendo Entertainment System',
            VideoURL: null,
          },
          {
            Name: 'Super Mario Kart',
            Overview: "The best kart game in the world, y' now",
            Platform: 'Super Nintendo Entertainment System',
            VideoURL: null,
          },
          {
            Name: 'Super Mario Kart',
            Overview: "The best kart game in the world, y' now",
            Platform: 'Super Nintendo Entertainment System',
            VideoURL: null,
          },
        ]}
      />
    </Row>
  ))
  .add('with three games but limited in 3 games', () => (
    <Row gutter={24}>
      <GameList
        gameOnClick={() => console.log('GAME_LIST_CLICKED')}
        isLoading={false}
        maxTotalGames={3}
        gamesArray={[
          {
            Name: 'Super Mario Kart',
            Overview: "The best kart game in the world, y' now",
            Platform: 'Super Nintendo Entertainment System',
            VideoURL: null,
          },
          {
            Name: 'Super Mario Kart',
            Overview: "The best kart game in the world, y' now",
            Platform: 'Super Nintendo Entertainment System',
            VideoURL: null,
          },
          {
            Name: 'Super Mario Kart',
            Overview: "The best kart game in the world, y' now",
            Platform: 'Super Nintendo Entertainment System',
            VideoURL: null,
          },
        ]}
      />
    </Row>
  ))
  .add('with no games found in database', () => (
    <Row gutter={24}>
      <GameList
        gameOnClick={() => console.log('GAME_LIST_CLICKED')}
        isLoading={false}
        maxTotalGames={1}
        gamesArray={[]}
      />
    </Row>
  ));
