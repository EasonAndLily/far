import React from 'react';
import './Thumbnail.css';
import { Link } from 'react-router-dom';

function Thumbnail(props) {
  return (
    <div className="card shadow card-height bg-white">
      <div className="row no-gutters">
        <div className="col-4">
          <img
            classNames="card-img"
            width="100%"
            height="160px"
            src={props.poster}
            alt="recent"></img>
        </div>
        <div className="col-8 d-flex flex-column">
          <div className="card-body pt-0 p-1">
            <h5 className="card-title mb-0">
              <a href="##" className="text-dark">
                {props.title}
              </a>
            </h5>
            <p className="card-text line-clamp-4 font-12 mt-2 mb-2">
              {props.description}
            </p>
          </div>
          <div className="mt-auto">
            <Link
              to="/articles?articleId=1.1"
              className="btn btn-outline-dark btn-sm mb-2 float-right mr-2 rounded-pill">
              开始学习
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
