import About from './about';

describe('About page component', () => {
  it('renders correctly', () => {
    const snapshot = snapRender(<About />);
    expect(snapshot).toMatchSnapshot();
  });
});
