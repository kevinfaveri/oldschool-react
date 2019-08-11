import Home from './home';
import { MemoryRouter } from 'react-router-dom';

describe('Home page component', () => {
  it('renders correctly', () => {
    const snapshot = snapRender(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
