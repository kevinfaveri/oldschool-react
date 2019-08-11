import HomeCard from './home-card';
import { MemoryRouter } from 'react-router-dom';

describe('HomeCard component', () => {
  it('renders correctly', () => {
    const snapshot = snapRender(
      <MemoryRouter>
        <HomeCard>Test</HomeCard>
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
