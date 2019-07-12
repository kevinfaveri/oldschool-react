import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from './private-route';

jest.mock('../service/auth-service.js', () => ({
  ...jest.requireActual('../service/auth-service.js'),
  isUserLogged: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
}));

describe('PrivateRoute component', () => {
  it('renders correctly if user is logged', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute component={() => <div>Teste</div>} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly if user is not logged', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute component={() => <div>Teste</div>} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
