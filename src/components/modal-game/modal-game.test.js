import ModalGame from './modal-game';

describe('ModalGame component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ModalGame visible />);
    expect(wrapper).toMatchSnapshot();
  });
});
