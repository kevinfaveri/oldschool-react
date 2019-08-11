import withSplashScreen from './with-splash-screen';

describe('SplashScreen component', () => {
  it('renders correctly', () => {
    const SplashScreenComponent = withSplashScreen(() => (<div></div>));
    const snapshot = snapRender(<SplashScreenComponent />);
    expect(snapshot).toMatchSnapshot();
  });

  it('should show continue button after 5 seconds', () => {
    const clock = sinon.useFakeTimers();
    const SplashScreenComponent = withSplashScreen(() => (<div></div>));
    const wrapper = render(<SplashScreenComponent />);

    act(() => {
      clock.tick(5000);
    });

    expect(wrapper.container.querySelector('#close-splash')).toBeTruthy();
  });

  it('should hide splash onClick', () => {
    const clock = sinon.useFakeTimers();
    const SplashScreenComponent = withSplashScreen(() => (<div id="component-test"></div>));
    const wrapper = render(<SplashScreenComponent />);

    act(() => {
      clock.tick(5000);
    });

    fireEvent.click(wrapper.container.querySelector('#close-splash'));

    expect(wrapper.container.querySelector('#component-test')).toBeTruthy();
  });
});
