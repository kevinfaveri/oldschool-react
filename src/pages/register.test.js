import Register from './register';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Register page component', () => {
  it('renders correctly', () => {
    const store = mockStore({});

    const snapshot = snapRender(
      <MemoryRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
