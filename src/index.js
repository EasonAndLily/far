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
import About from './about/About.js';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <Header></Header>
      <main className="container mt-5 pt-4">
        <article className="row">
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/detail/:id">
              <Detail></Detail>
            </Route>
            <Route path="/course">
              <Course></Course>
            </Route>
            <Route path="/about_me">
              <About></About>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </article>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
