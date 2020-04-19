import React from 'react';
import growth from './growth.svg';

function Growth({ course }) {
  return (
    <div className="container">
      <h5 className="card-title ml-2">
        <img src={growth} alt="" className="chapter-img"></img>
        成长路径：
      </h5>
      <div className="card-group row row-cols-2">
        {course.growth.map((item) => (
          <div className="card text-center bg-white border-0">
            <div className="card-header bg-white border-0 font-weight-bold p-1">
              {item.title}
            </div>
            <img src={item.image} alt="..." />
            <div className="card-body pt-2">
              <h6 className="card-title">{item.name}</h6>
              <p className="card-text font-12">{item.brief}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Growth;
