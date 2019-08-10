import Register from './register';

describe('Register page component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
  });
});
