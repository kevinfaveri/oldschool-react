import AudioToggle from './audio-toggle';

describe('AudioToggle component', () => {
  it('renders correctly', () => {
    const snapshot = snapRender(<AudioToggle />);
    expect(snapshot).toMatchSnapshot();
  });

  it('should have a default audio when there is no prop', () => {
    const wrapper = render(<AudioToggle />);
    expect(wrapper.getByText('Playing:', { exact: false })).toHaveTextContent(
      'Playing: top-gear.mp3',
    );
  });

  it('should pause the audio some seconds after unmount', () => {
    const clock = sinon.useFakeTimers();
    const spy = sinon.spy(window.HTMLAudioElement.prototype, 'pause');
    const wrapper = render(<AudioToggle />);
    wrapper.unmount();
    clock.tick(30 * 1000);
    expect(spy.calledOnce).toBe(true);
    spy.restore();
  });

  it('should call audio.play()/ audio.pause() methods onClick', () => {
    const spyPlay = sinon.spy(window.HTMLAudioElement.prototype, 'play');
    const spyPause = sinon.spy(window.HTMLAudioElement.prototype, 'pause');
    const wrapper = render(<AudioToggle />);

    fireEvent.click(wrapper.container.querySelector('#audio-btn'));

    expect(spyPlay.calledOnce).toBe(true);

    fireEvent.click(wrapper.container.querySelector('#audio-btn'));

    expect(spyPause.calledOnce).toBe(true);
    spyPlay.restore();
    spyPause.restore();
  });

  it('should switch btn icon onClick', () => {
    const wrapper = render(<AudioToggle />);

    expect(
      wrapper.container.querySelector('i[aria-label="icon: caret-right"]'),
    ).toBeTruthy();

    fireEvent.click(wrapper.container.querySelector('#audio-btn'));

    expect(
      wrapper.container.querySelector('i[aria-label="icon: pause"]'),
    ).toBeTruthy();
  });
});
