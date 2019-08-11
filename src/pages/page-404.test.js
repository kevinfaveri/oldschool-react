import Page404 from './page-404';
import { MemoryRouter } from 'react-router-dom';

describe('Page404 component', () => {
  it('renders correctly Page404', () => {
    const snapshot = snapRender(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
