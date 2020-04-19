import React from 'react';
import './Header.css';
import logo from './logo.png';
import searchBtn from './search-btn.svg';
import login from './login.svg';
import signUp from './sign-up.svg';
import Category from '../sidebar/category/Category.js';

function Header() {
  return (
    <header className="bg-white shadow opacity-9 navbar-fixed-top">
      <nav className="container navbar navbar-light bg-white p-0">
        <div className="row flex-fill">
          <div className="col-2 ml-2">
            <a className="navbar-brand" href="##">
              <img src={logo} alt="logo" className="logo ml-1 mr-2" />
              <span className="d-none d-sm-inline-block">捷登之旅</span>
            </a>
          </div>

          <div className="col-8 col-sm-10 row justify-content-end pt-1">
            <div className="col-sm-10 row justify-content-end mr-2">
              <input
                className="search-input mt-2"
                type="search"
                placeholder="输入内容检索关键字"
              />
              <button className="btn btn-sm search-btn" type="submit">
                <img src={searchBtn} alt="Search"></img>
              </button>
            </div>
            <div className="col-sm-2 pr-0 d-none d-sm-block pt-2 text-right">
              <a className="m-2" href="##">
                <img src={signUp} alt="sign up"></img>
              </a>
              <a className="m-2" href="##">
                <img src={login} alt="login"></img>
              </a>
            </div>
          </div>
          <button
            class="navbar-toggler d-sm-none d-block"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse pl-2"
            id="navbarSupportedContent">
            <Category></Category>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
