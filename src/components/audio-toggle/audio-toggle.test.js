import AudioToggle from './audio-toggle';

describe('AudioToggle component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AudioToggle />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have correct properties for audio', () => {
    const wrapper = shallow(<AudioToggle />);

    expect(wrapper.instance().audio.volume).toBe(0.1);

    expect(wrapper.instance().audio.loop).toBe(true);
  });

  it('should call play() during componentDidMount', () => {
    const spy = sinon.spy(AudioToggle.prototype, 'play');
    const wrapper = shallow(<AudioToggle />);
    expect(spy.calledOnce).toBe(true);
    expect(wrapper.state().playing).toBe(true);

    spy.restore();
  });

  it('should call graduallyPause() during componentWillUnmount', () => {
    const spy = sinon.spy(AudioToggle.prototype, 'graduallyPause');
    const wrapper = shallow(<AudioToggle />);
    wrapper.unmount();
    expect(spy.calledOnce).toBe(true);

    spy.restore();
  });

  it('should call play() and pause() methods onClick', () => {
    const wrapper = shallow(<AudioToggle />);
    const spyPlay = sinon.spy(wrapper.instance(), 'play');
    const spyPause = sinon.spy(wrapper.instance(), 'pause');
    // TODO: Fix this test: https://github.com/airbnb/enzyme/issues/1081
    wrapper.find('#audio-btn').prop('onClick');
    expect(spyPlay.callCount).toBe(true);

    wrapper.find('#audio-btn').prop('onClick');
    expect(spyPlay.callCount).toBe(true);

    spyPlay.restore();
    spyPause.restore();
  });

  it('should switch playing state onClick', () => {
    const wrapper = shallow(<AudioToggle />);

    expect(wrapper.state().playing).toBe(true);

    wrapper.find('#audio-btn').simulate('click');

    expect(wrapper.state().playing).toBe(false);

    wrapper.find('#audio-btn').simulate('click');

    expect(wrapper.state().playing).toBe(true);
  });

  it('should switch btn icon onClick', () => {
    const wrapper = shallow(<AudioToggle />);

    expect(wrapper.find('#audio-btn').props().icon).toBe('pause');

    wrapper.find('#audio-btn').simulate('click');

    wrapper.update();

    expect(wrapper.find('#audio-btn').props().icon).toBe('caret-right');

    wrapper.find('#audio-btn').simulate('click');

    wrapper.update();

    expect(wrapper.find('#audio-btn').props().icon).toBe('pause');
  });
});
