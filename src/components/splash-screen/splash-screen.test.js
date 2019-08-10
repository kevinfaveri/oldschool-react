import withSplashScreen from './with-splash-screen';

jest.mock('../../service/auth-service.js', () => ({
  ...jest.requireActual('../../service/auth-service.js'),
  registerUser: jest.fn().mockReturnValueOnce(true),
}));

describe('SplashScreen component', () => {
  it('renders correctly', () => {
    const clock = sinon.useFakeTimers();
    const SplashScreenComponent = withSplashScreen(React.Fragment);
    const wrapper = mount(<SplashScreenComponent />);
    expect(wrapper).toMatchSnapshot();
    act(() => {
      clock.tick(5001);
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    act(() => {
      wrapper
        .find('#close-splash')
        .at(1)
        .props()
        .onClick();
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should hide splash onClick', () => {
    const clock = sinon.useFakeTimers();
    const SplashScreenComponent = withSplashScreen(React.Fragment);
    const wrapper = mount(<SplashScreenComponent />);
    act(() => {
      clock.tick(5001);
    });
    wrapper.update();
    act(() => {
      wrapper
        .find('#close-splash')
        .at(1)
        .props()
        .onClick();
    });
    wrapper.update();
    expect(wrapper.find('#splash-screen').exists()).toBe(false);
  });
});
