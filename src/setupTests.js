import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { act } from 'react-dom/test-utils';
import 'jest-styled-components';

// Define globals to cut down on imports in test files
global.React = React;

global.render = render;
global.fireEvent = fireEvent;
global.waitForElement = waitForElement;

global.snapRender = (component) => {
  return renderer.create(component).toJSON();
};
global.snapRenderObj = (component) => {
  return renderer.create(component);
};

global.sinon = sinon;
global.act = act;

// Fix for error with HTML Media Element
window.HTMLAudioElement.prototype.load = () => {
  /* do nothing */
};
window.HTMLAudioElement.prototype.play = () => {
  /* do nothing */
};
window.HTMLAudioElement.prototype.pause = () => {
  /* do nothing */
};
window.HTMLAudioElement.prototype.addTextTrack = () => {
  /* do nothing */
};
