import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import Header from './header/Header';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './detail/detail';
import Course from './course/Course';
import About from './about/About.js';
import Search from './home/search/Search.js';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <Header></Header>
      <main className="container mt-5 pt-4 bg">
        <div className='row'>
        <aside className="col-md-3 d-none d-md-block opacity-9">
          <Sidebar></Sidebar>
        </aside>
        <article className="col-md-9 opacity-9 mb-4">
          <Switch>
            <Route path="/categories" component={Search}>
            </Route>
            <Route path="/search" component={Search}>
            </Route>
            <Route path="/articles/:id" component={Detail}>
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
        </div>
        
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
