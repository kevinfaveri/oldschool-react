import Carousel from './carousel';

describe('Carousel component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Carousel imageArray={['super-mario-kart.png', 'super-mario-world.jpg', 'top-gear.jpg']} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have at least three images', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.instance().props.imageArray.length).toBeGreaterThanOrEqual(3);
  });

  it('the images should exists in public folder', () => {
    const wrapper = shallow(<Carousel />);
    const publicImagePath = '@public/image/';
    const images = wrapper.instance().props.imageArray;
    for (let index in images) {
      require(publicImagePath + images[index]);
    }
  });

  it('should call rollCarousel() and setInterval during componentDidMount', () => {
    const clock = sinon.useFakeTimers();
    const spy = sinon.spy(Carousel.prototype, 'rollCarousel');
    shallow(<Carousel />);
    expect(spy.calledOnce).toBe(true);
    clock.tick( 10000 );
    expect(spy.calledThrice).toBe(true);
    spy.restore();
  });

  it('should stop calling rollCarousel through setInterval after componentUnmount', () => {
    const clock = sinon.useFakeTimers();
    const spy = sinon.spy(Carousel.prototype, 'rollCarousel');
    const wrapper = shallow(<Carousel />);
    wrapper.unmount();
    clock.tick( 10000 );
    expect(spy.calledOnce).toBe(true);
    spy.restore();
  });
});