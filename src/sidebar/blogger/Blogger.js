import React from 'react';
import logo from './myself.jpg';
import location from './location.svg';
import github from './github.svg';
import gitlab from './gitlab.svg';
import wechat from './we-chat.svg';
import microBlog from './micro-blog.svg';
import { Link } from 'react-router-dom';

function Blogger() {
  return (
    <header className="card border-0 shadow">
      <figure className="mt-2">
        <img
          src={logo}
          className="figure-img img-fluid rounded-circle w-50 mx-auto d-block"
          alt="李景华头像"
        />
        <figcaption className="figure-caption">
          <h5 className="card-title text-center">李景华</h5>
          <h6 className="card-subtitle mb-2 text-muted text-center">
            <small className="text-muted">IT咨询师/培训师</small>
          </h6>
          <h6 className="card-subtitle mb-2 text-muted text-center">
            <img src={location} alt="location" />
            <small className="text-muted">武汉，中国湖北</small>
          </h6>
        </figcaption>
        <div className="card-body pb-0">
          <Link
            to="/about_me"
            className="btn btn-outline-dark btn-sm btn-block rounded-pill">
            了解我
          </Link>
          <ul className="list-inline mb-0 mt-2 text-center">
            <li className="list-inline-item">
              <a href="https://github.com/EasonAndLily">
                <img src={github} alt="github"></img>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://tw-baseline-exam.gitlab.io/to-do-list-front-end/">
                <img src={gitlab} alt="gitlab"></img>
              </a>
            </li>
            <li className="list-inline-item">
              <img src={wechat} alt="github"></img>
            </li>
            <li className="list-inline-item">
              <img src={microBlog} alt="github"></img>
            </li>
          </ul>
        </div>
      </figure>
    </header>
  );
}

export default Blogger;
