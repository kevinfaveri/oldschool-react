import { configure } from '@storybook/react';

const reqStyles = require.context('../build/static/css', true, /\.css$/);
reqStyles.keys().forEach((filename) => reqStyles(filename));

import './style.css';

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
