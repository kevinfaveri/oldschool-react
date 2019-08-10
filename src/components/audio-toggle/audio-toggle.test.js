import AudioToggle from './audio-toggle';

describe('AudioToggle component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AudioToggle />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('the audioArray should be an array', () => {
    const wrapper = mount(<AudioToggle />);
    expect(Array.isArray(wrapper.getElement().props.audioArray)).toBe(true);
  });

  it('should have at least one audio', () => {
    const wrapper = mount(<AudioToggle />);
    expect(wrapper.getElement().props.audioArray.length).toBeGreaterThanOrEqual(
      1,
    );
  });

  it('the audios should exists in public folder', () => {
    const wrapper = mount(<AudioToggle />);
    const publicPath = '@public/audio/';
    const { audioArray } = wrapper.getElement().props;
    for (const index in audioArray) {
      require(publicPath + audioArray[index]);
    }
  });

  it('should pause the audio some seconds after unmount', () => {
    const clock = sinon.useFakeTimers();
    const spy = sinon.spy(window.HTMLAudioElement.prototype, 'pause');
    const wrapper = mount(<AudioToggle />);
    wrapper.unmount();
    clock.tick(30 * 1000);
    expect(spy.calledOnce).toBe(true);
    spy.restore();
  });

  it('should call audio.play()/ audio.pause() methods onClick', () => {
    const spyPlay = sinon.spy(window.HTMLAudioElement.prototype, 'play');
    const spyPause = sinon.spy(window.HTMLAudioElement.prototype, 'pause');
    const wrapper = mount(<AudioToggle />);

    wrapper
      .find('#audio-btn')
      .at(0)
      .props()
      .onClick();
    expect(spyPlay.calledOnce).toBe(true);

    wrapper.update();

    wrapper
      .find('#audio-btn')
      .at(0)
      .props()
      .onClick();

    expect(spyPause.calledOnce).toBe(true);
    spyPlay.restore();
    spyPause.restore();
  });

  it('should switch btn icon onClick', () => {
    const wrapper = mount(<AudioToggle />);

    expect(
      wrapper
        .find('#audio-btn')
        .at(0)
        .props().icon,
    ).toBe('caret-right');

    wrapper
      .find('#audio-btn')
      .at(0)
      .props()
      .onClick();

    wrapper.update();

    expect(
      wrapper
        .find('#audio-btn')
        .at(0)
        .props().icon,
    ).toBe('pause');
  });
});
