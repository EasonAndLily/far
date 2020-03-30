import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'rsuite/dist/styles/rsuite-default.css';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
