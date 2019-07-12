import Library from './library';

describe('Library page component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Library/>);
    expect(wrapper).toMatchSnapshot();
  });
});
