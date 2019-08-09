import Carousel from './carousel';

describe('Carousel component', () => {
  it('renders and unmount correctly', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('the imageArray should be an array', () => {
    const wrapper = mount(<Carousel />);
    expect(Array.isArray(wrapper.getElement().props.imageArray)).toBe(true);
  });

  it('should have at least three images', () => {
    const wrapper = mount(<Carousel />);
    expect(wrapper.getElement().props.imageArray.length).toBeGreaterThanOrEqual(3);
  });

  it('the images should exists in public folder', () => {
    const wrapper = shallow(<Carousel />);
    const publicImagePath = '@public/image/';
    const images = wrapper.getElement().props.imageArray;
    for (const index in images) {
      require(publicImagePath + images[index]);
    }
  });

  it('should call rollCarousel() every 1 second', () => {
    const clock = sinon.useFakeTimers();
    const wrapper = mount(<Carousel intervalSeconds={1} />);
    expect(wrapper.find('#previous-image').prop('data-index')).toBe(0);
    clock.tick(1001);
    wrapper.update();
    expect(wrapper.find('#previous-image').prop('data-index')).toBe(1);
    clock.tick(1001);
    wrapper.update();
    expect(wrapper.find('#previous-image').prop('data-index')).toBe(2);
  });
});
