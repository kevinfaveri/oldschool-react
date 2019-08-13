import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes/routes';
import { history, store } from './store';
import { GlobalStyle } from './styles';
import { WebWorker } from './utils/worker-utils';
import AppWorker from './app.worker';

export default function App() {
  const worker = new WebWorker(AppWorker);
  worker.addEventListener('message', (event) => {
    const resultCalc = event.data;
    console.log('RESULT WEB WORKER:', resultCalc);
  });
  worker.postMessage(14);
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </>
  );
}
