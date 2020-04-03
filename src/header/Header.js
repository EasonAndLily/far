import React from 'react';
import './Header.css';
import logo from './logo.svg';
import searchBtn from './search-btn.svg';
import login from './login.svg';
import signUp from './sign-up.svg';

function Header() {
  return (
    <header className="bg-white shadow opacity-9">
      <nav className="container navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
          致远学堂
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse row justify-content-end"
          id="navbarSupportedContent">
          <div className="col-10 row justify-content-end pr-0">
            <input
              className="search-input"
              type="search"
              placeholder="输入内容检索关键字"
            />
            <button className="btn btn-sm search-btn" type="submit">
              <img src={searchBtn} alt="Search"></img>
            </button>
          </div>
          <ul class="navbar-nav col-2 justify-content-end pr-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <img src={signUp} alt="sign up"></img>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <img src={login} alt="login"></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
