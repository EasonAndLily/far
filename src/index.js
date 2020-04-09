import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import Header from './header/Header';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from './sidebar/Sidebar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './detail/detail';
import Course from './course/Course';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <main className="container mt-5 pt-4">
      <article className="row">
        <Router basename="/">
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/detail">
              <Detail></Detail>
            </Route>
            <Route path="/course">
              <Course></Course>
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
