import ModalGame from './modal-game';
import React from 'react';

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  Modal: ({ children }) => <div id="problematic-modal">{children}</div>,
}));

describe('ModalGame component', () => {
  it('renders correctly', () => {
    const snapshot = snapRender(
      <ModalGame
        visible
        onCancel={() => {}}
        game={{ Name: '', Overview: '', Platform: '' }}
      />,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
