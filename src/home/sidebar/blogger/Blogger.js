import React from 'react';
import logo from './myself.jpg';
import location from './location.svg';
import github from './github.svg';
import gitlab from './gitlab.svg';
import wechat from './we-chat.svg';
import microBlog from './micro-blog.svg';

function Blogger() {
  return (
    <header className="card border-0 shadow">
      <figure>
        <img
          src={logo}
          className="figure-img img-fluid rounded-circle w-50 mx-auto d-block"
          alt="李景华头像"
        />
        <figcaption className="figure-caption">
          <h5 className="card-title text-center">李景华</h5>
          <h6 class="card-subtitle mb-2 text-muted text-center">
            <small class="text-muted">IT咨询师/培训师</small>
          </h6>
          <h6 class="card-subtitle mb-2 text-muted text-center">
            <img src={location} alt="location" />
            <small class="text-muted">武汉，中国湖北</small>
          </h6>
        </figcaption>
        <div className="card-body pb-0">
          <button
            type="button"
            class="btn btn-primary btn-sm btn-block rounded-pill">
            了解我
          </button>
          <ul class="list-inline mb-0 mt-2 text-center">
            <li class="list-inline-item">
              <a href="https://github.com/EasonAndLily">
                <img src={github} alt="github"></img>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://tw-baseline-exam.gitlab.io/to-do-list-front-end/">
                <img src={gitlab} alt="gitlab"></img>
              </a>
            </li>
            <li class="list-inline-item">
              <img src={wechat} alt="github"></img>
            </li>
            <li class="list-inline-item">
              <img src={microBlog} alt="github"></img>
            </li>
          </ul>
        </div>
      </figure>
    </header>
  );
}

export default Blogger;
