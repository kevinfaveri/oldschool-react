import withSplashScreen from './with-splash-screen';

jest.mock('../../service/auth-service.js', () => ({
  ...jest.requireActual('../../service/auth-service.js'),
  registerUser: jest.fn().mockReturnValueOnce(true),
}));

describe('SplashScreen component', () => {
  it('renders correctly', () => {
    const clock = sinon.useFakeTimers();
    const SplashScreenComponent = withSplashScreen(React.Fragment);
    const wrapper = shallow(<SplashScreenComponent />);
    expect(wrapper).toMatchSnapshot();
    clock.tick(5000);
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState loading = false after 5 seconds mounted', () => {
    const clock = sinon.useFakeTimers();
    const SplashScreenComponent = withSplashScreen(React.Fragment);
    const wrapper = shallow(<SplashScreenComponent />);
    wrapper.setState({ loading: true });
    expect(wrapper.state().loading).toBe(true);
    clock.tick(5000);
    expect(wrapper.state().loading).toBe(false);
  });
});
