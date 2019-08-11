import Page401 from './page-401';
import { MemoryRouter } from 'react-router-dom';

describe('Page401 component', () => {
  it('renders correctly Page401', () => {
    const snapshot = snapRender(
      <MemoryRouter>
        <Page401 />
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
