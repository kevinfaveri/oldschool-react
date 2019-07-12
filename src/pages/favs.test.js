import Favs from './favs';

describe('Favs page component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Favs/>);
    expect(wrapper).toMatchSnapshot();
  });
});
