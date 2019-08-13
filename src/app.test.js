import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

jest.mock('./utils/worker-utils', () => ({
  ...jest.requireActual('./utils/worker-utils'),
  WebWorker: jest.fn().mockImplementation(() => ({
    addEventListener: jest.fn(),
    postMessage: jest.fn(),
  })),
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
