import React, {useState} from 'react';
import './Header.css';
import logo from '../logo.png';
import searchBtn from './search-btn.svg';
import Category from '../sidebar/category/Category.js';
import { useHistory } from "react-router-dom";

function Header() {
  let [value, setValue] = useState('');
  const history = useHistory();
 
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const search = () => {
    history.push(`/search?value=${value}`);
  }

  const enter = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search?value=${value}`);
    }
  }

  return (
    <header className="bg-white shadow opacity-9 navbar-fixed-top">
      <nav className="container navbar navbar-light bg-white p-0">
        <div className="row flex-fill">
          <div className="col-2 ml-2">
            <a className="navbar-brand" href="##">
              <img src={logo} alt="logo" className="logo ml-1 mr-2" />
              <span className="d-none d-sm-inline-block logo-title">捷登社区</span>
            </a>
          </div>

          <div className="col-8 col-sm-10 row justify-content-end pt-1">
            <div className="row justify-content-end mr-2">
              <input
                className="search-input mt-2"
                type="search"
                placeholder="输入内容检索关键字"
                value={value} 
                onChange={handleChange}
                onKeyDown={enter} 
              />
              <button className="btn btn-sm search-btn" type="submit" onClick={search}>
                <img src={searchBtn} alt="Search"></img>
              </button>
            </div>
          </div>

          <button
            className="d-sm-none d-block border-0 no-outline btn p-1 mt-1 h-75"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse pl-2"
            id="navbarSupportedContent">
            <Category></Category>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
