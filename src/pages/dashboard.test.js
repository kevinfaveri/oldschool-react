import Dashboard from './dashboard';

describe('Dashboard page component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Dashboard/>);
    expect(wrapper).toMatchSnapshot();
  });
});
