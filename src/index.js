import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import Header from './header/Header';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from './detail/detail';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <main className="container mt-5 pt-4">
      <article className="row">
        <Sidebar></Sidebar>
        <Router>
          <Switch>
            <Route path="/detail">
              <Detail></Detail>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </article>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
