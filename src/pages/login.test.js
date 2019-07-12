import Login from './login';

describe('Login page component', () => {
  it('renders correctly login not expired', () => {
    const mockedLocation = { search: '?loginExpired=false' };
    const wrapper = shallow(<Login location={mockedLocation} />);
    expect(wrapper.state().showExpiredAlert).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly login expired', () => {
    const mockedLocation = { search: '?loginExpired=true' };
    const wrapper = shallow(<Login location={mockedLocation} />);
    expect(wrapper.state().showExpiredAlert).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
