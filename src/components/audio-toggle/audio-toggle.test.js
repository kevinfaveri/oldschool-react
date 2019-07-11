import AudioToggle from './audio-toggle';

describe('AudioToggle component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AudioToggle />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have correct properties for audio', () => {
    const wrapper = shallow(<AudioToggle />);

    expect(wrapper.instance().audioDefs.volume).toBe(0.1);

    expect(wrapper.instance().audioDefs.loop).toBe(true);
  });

  it('the audioArray should be an array', () => {
    const wrapper = shallow(<AudioToggle />);
    expect(Array.isArray(wrapper.instance().props.audioArray)).toBe(true);
  });

  it('should have at least one audio', () => {
    const wrapper = shallow(<AudioToggle />);
    expect(wrapper.instance().props.audioArray.length).toBeGreaterThanOrEqual(1);
  });

  it('the audios should exists in public folder', () => {
    const wrapper = shallow(<AudioToggle />);
    const publicPath = '@public/audio/';
    const { audioArray } = wrapper.instance().props;
    for (const index in audioArray) {
      require(publicPath + audioArray[index]);
    }
  });

  // This is one way to solve the problem, listering for an function before the component is mounted
  // for another approach see: carousel.test.js
  it('should call audio.play() and setState(playing = true) during componentDidMount', () => {
    const spyPlay = sinon.spy(window.HTMLAudioElement.prototype, 'play');
    const wrapper = shallow(<AudioToggle />);
    expect(wrapper.state().playing).toBe(true);
    expect(spyPlay.calledOnce).toBe(true);
    spyPlay.restore();
  });

  // This is one way to solve the problem, calling the componentWillUnmount for testing
  // for another approach see: carousel.test.js
  it('should call graduallyPause() during componentWillUnmount, and after nearly 10s pause the audio', async (done) => {
    const spy = sinon.spy(window.HTMLAudioElement.prototype, 'pause');
    const wrapper = shallow(<AudioToggle />);
    await wrapper.instance().componentWillUnmount();
    expect(spy.calledOnce).toBe(true);
    spy.restore();
    done();
  });

  it('should call audio.play()/ audio.pause() and setState(playing = ?) methods onClick', () => {
    const spyPlay = sinon.spy(window.HTMLAudioElement.prototype, 'play');
    const spyPause = sinon.spy(window.HTMLAudioElement.prototype, 'pause');
    const wrapper = shallow(<AudioToggle />);

    wrapper.setState({ playing: true });

    wrapper
      .find('#audio-btn')
      .props()
      .onClick();
    expect(wrapper.state().playing).toBe(false);
    expect(spyPause.calledOnce).toBe(true);

    wrapper
      .find('#audio-btn')
      .props()
      .onClick();
    expect(wrapper.state().playing).toBe(true);
    expect(spyPlay.calledTwice).toBe(true);

    spyPlay.restore();
    spyPause.restore();
  });

  it('should switch btn icon onClick', () => {
    const wrapper = shallow(<AudioToggle />);

    wrapper.setState({ playing: true });

    wrapper.update();

    expect(wrapper.find('#audio-btn').props().icon).toBe('pause');

    wrapper
      .find('#audio-btn')
      .props()
      .onClick();

    wrapper.update();

    expect(wrapper.find('#audio-btn').props().icon).toBe('caret-right');
  });
});
