import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import Carousel from '../components/carousel/carousel';

storiesOf('Carousel', module)
  .add('with default props', () => <Carousel />)
  .add('so fast', () => <Carousel intervalSeconds={1} />);
