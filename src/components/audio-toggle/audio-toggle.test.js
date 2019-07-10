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

  it('should have at least one audio', () => {
    const wrapper = shallow(<AudioToggle />);
    expect(wrapper.instance().props.audioArray.length).toBeGreaterThanOrEqual(1);
  });

  it('the audios should exists in public folder', () => {
    const wrapper = shallow(<AudioToggle />);
    const publicPath = '@public/audio/';
    const audioArray = wrapper.instance().props.audioArray;
    for (let index in audioArray) {
      require(publicPath + audioArray[index]);
    }
  });

  it('should call audio.play() and setState(playing = true) during componentDidMount', () => {
    const spyPlay = sinon.spy(window.HTMLAudioElement.prototype, 'play');
    const wrapper = shallow(<AudioToggle />);
    expect(wrapper.state().playing).toBe(true);
    expect(spyPlay.calledOnce).toBe(true);
    spyPlay.restore();
  });

  it('should call graduallyPause() during componentWillUnmount, and after nearly 10s pause the audio', () => {
    const clock = sinon.useFakeTimers();
    const spy = sinon.spy(window.HTMLAudioElement.prototype, 'pause');
    const wrapper = shallow(<AudioToggle />);
    wrapper.unmount();
    clock.tick( 10000 );
    expect(spy.calledOnce).toBe(true);

    spy.restore();
  });

  it('should call audio.play()/ audio.pause() and setState(playing = ?) methods onClick', () => {
    const spyPlay = sinon.spy(window.HTMLAudioElement.prototype, 'play');
    const spyPause = sinon.spy(window.HTMLAudioElement.prototype, 'pause');
    const wrapper = shallow(<AudioToggle />);

    wrapper.setState({ playing: true });

    wrapper.find('#audio-btn').props().onClick();
    expect(wrapper.state().playing).toBe(false);
    expect(spyPause.calledOnce).toBe(true);

    wrapper.find('#audio-btn').props().onClick();
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

    wrapper.find('#audio-btn').props().onClick();

    wrapper.update();

    expect(wrapper.find('#audio-btn').props().icon).toBe('caret-right');
  });
});
