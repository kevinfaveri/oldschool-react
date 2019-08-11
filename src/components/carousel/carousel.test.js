import Carousel from './carousel';

describe('Carousel component', () => {
  it('renders correctly', () => {
    const snapshot = snapRender(<Carousel />);
    expect(snapshot).toMatchSnapshot();
  });

  it('should have a default image when there is no prop', () => {
    const wrapper = render(<Carousel />);

    expect(
      wrapper.container.querySelector(
        `img[id="previous-image"][src="${process.env.PUBLIC_URL}/image/super-mario-kart.png"]`,
      ),
    ).toBeTruthy();

    expect(
      wrapper.container.querySelector(
        `img[id="current-image"][src="${process.env.PUBLIC_URL}/image/super-mario-world.jpg"]`,
      ),
    ).toBeTruthy();

    expect(
      wrapper.container.querySelector(
        `img[id="next-image"][src="${process.env.PUBLIC_URL}/image/top-gear.jpg"]`,
      ),
    ).toBeTruthy();
  });

  it('should call rollCarousel() every 1 second', () => {
    const clock = sinon.useFakeTimers();
    const wrapper = render(<Carousel intervalSeconds={1} />);
    expect(
      wrapper.container.querySelector(
        'img[id="previous-image"][data-index="0"]',
      ),
    ).toBeTruthy();

    act(() => {
      clock.tick(1000);
    });

    expect(
      wrapper.container.querySelector(
        'img[id="previous-image"][data-index="1"]',
      ),
    ).toBeTruthy();

    act(() => {
      clock.tick(1000);
    });

    expect(
      wrapper.container.querySelector(
        'img[id="previous-image"][data-index="2"]',
      ),
    ).toBeTruthy();
  });
});
