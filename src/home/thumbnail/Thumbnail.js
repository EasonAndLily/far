import React from 'react';

function Thumbnail(props) {
  return (
    <div className="card shadow">
      <img
        classNames="card-img-top"
        src={props.poster}
        alt="recent"
        height="90px"></img>
      <div class="card-body pt-0 p-1">
        <h5 class="card-title mb-0">
          <a href="##" className="text-dark">
            {props.title}
          </a>
        </h5>
        <p class="card-text abstract">{props.description}</p>
        <a href="##" class="btn btn-outline-dark btn-sm mt-1">
          开始学习
        </a>
      </div>
    </div>
  );
}

export default Thumbnail;
