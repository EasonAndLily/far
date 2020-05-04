import React from 'react';
import gain from './gain.svg';
import './Gain.css';

function Gain({ course }) {
  let gainId = 0;
  return (
    <div className="card border-0">
      <div className="card-body">
        <h5 className="card-title">
          <img src={gain} alt="" className="chapter-img"></img>
          你将收获：
        </h5>
        <div className="card-text">
          <ul className="list-unstyled pl-2 pl-sm-4">
            {course.gains
              .map((g) => {
                return { id: ++gainId, name: g };
              })
              .map((gain) => (
                <li key={gain.id}>{gain.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gain;
