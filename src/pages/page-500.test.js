import Page500 from './page-500';
import { MemoryRouter } from 'react-router-dom';

describe('Page500 component', () => {
  it('renders correctly Page500', () => {
    const snapshot = snapRender(
      <MemoryRouter>
        <Page500 />
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
