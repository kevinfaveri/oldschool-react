import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sider from './sider';
import games from './games';
import auth from './auth';

export default history => combineReducers({
  router: connectRouter(history),
  sider,
  games,
  auth,
});
