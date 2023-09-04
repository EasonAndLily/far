import React from 'react';
import './Headline.css';
import { Link } from 'react-router-dom';

let blog = {
  poster:
    'https://icon.qiantucdn.com/20200428/20ba25d57b0a82909a97adec0c0ba3172',
  title: '从零开始学Python',
  abstract:
    'A simple, delicate, and modern theme for the static site generator Hexo. It allows you to set up a single or multiple-column (up to three column) blog with its versatile layout configuration. Additionally, it offers plentiful plugins and pluggable widgets so that you can enable the features you want in no time. And with the all-new API designing, Icarus makes the development of this theme painless for developers and users.',
};

function Headline() {
  return (
    <header className="card bg-white shadow headline mb-3">
      <Link to="/detail">
        <img
          src={blog.poster}
          className="card-img-top headline-poster"
          alt="..."
        />
      </Link>

      <div className="card-body">
        <h5 className="card-title">
          <Link to="/detail" className="card-link text-dark">
            {blog.title}
          </Link>
        </h5>
        <p className="card-text abstract">{blog.abstract}</p>
        <Link
          to="/detail"
          className="btn btn-outline-dark mt-2 btn-sm">
          开始学习
        </Link>
      </div>
    </header>
  );
}

export default Headline;
