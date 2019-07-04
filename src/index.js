import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));

serviceWorker.unregister();
