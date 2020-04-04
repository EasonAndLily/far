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
      <a href="##">
        <img
          src={blog.poster}
          className="card-img-top headline-poster"
          alt="..."
        />
      </a>

      <div class="card-body pb-1 pt-1">
        <h5 class="card-title m-0">
          <a href="#" class="card-link">
            {blog.title}
          </a>
        </h5>
        <p class="card-text">{blog.abstract}</p>
        <a href="#" class="btn btn-primary mt-2 btn-sm">
          阅读更多
        </a>
      </div>
    </header>
  );
}

export default Headline;
