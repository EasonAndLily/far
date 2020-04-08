import React from 'react';
import './Headline.css';

let blog = {
  poster:
    'https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/desert.jpg',
  title: '从零开始学Python',
  abstract:
    'A simple, delicate, and modern theme for the static site generator Hexo. It allows you to set up a single or multiple-column (up to three column) blog with its versatile layout configuration. Additionally, it offers plentiful plugins and pluggable widgets so that you can enable the features you want in no time. And with the all-new API designing, Icarus makes the development of this theme painless for developers and users.'
};

function Headline() {
  return (
    <header className="card bg-white shadow headline">
      <a href="/detail">
        <img
          src={blog.poster}
          className="card-img-top headline-poster"
          alt="..."
        />
      </a>

      <div class="card-body p-2">
        <h5 class="card-title m-0">
          <a href="/detail" class="card-link text-dark">
            {blog.title}
          </a>
        </h5>
        <p class="card-text abstract m-0">{blog.abstract}</p>
        <a href="/detail" class="btn btn-outline-dark mt-2 btn-sm">
          开始学习
        </a>
      </div>
    </header>
  );
}

export default Headline;
