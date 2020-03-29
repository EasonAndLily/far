import React from 'react';
import logo from './myself.jpg';

function Blogger() {
  return (
    <header className="card border-0">
      <figure>
        <img
          src={logo}
          className="figure-img img-fluid rounded-circle w-50 mx-auto d-block"
          alt="李景华头像"
        />
        <figcaption className="figure-caption">
          <h5 className="card-title text-center">李景华</h5>
          <h6 class="card-subtitle mb-2 text-muted text-center">
            软件咨询师/培训师
          </h6>
          <h6 class="card-subtitle mb-2 text-muted text-center">
            中国湖北武汉
          </h6>
        </figcaption>
      </figure>
    </header>
  );
}

export default Blogger;
