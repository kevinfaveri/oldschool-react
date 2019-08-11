import LayoutFooter from './layout-footer';

describe('LayoutFooter component', () => {
  it('renders correctly', () => {
    const snapshot = snapRender(<LayoutFooter />);
    expect(snapshot).toMatchSnapshot();
  });
});
