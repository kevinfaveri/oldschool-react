import HomeCard from './home-card';

describe('HomeCard component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HomeCard>Test</HomeCard>);
    expect(wrapper).toMatchSnapshot();
  });
});
