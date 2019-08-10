import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';
import { act } from 'react-dom/test-utils';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
Enzyme.configure({ adapter: new Adapter() });
jest.setTimeout(10000);

// Define globals to cut down on imports in test files
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
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
