import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import HomeCard from '../components/home-card/home-card';

storiesOf('HomeCard', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('with some text as a child', () => (
    <HomeCard>
      <h1 className="text-center text-primary">STORYBOOKING HOME CARD</h1>
    </HomeCard>
  ));
