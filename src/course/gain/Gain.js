import React from 'react';
import gain from './gain.svg';
import './Gain.css';

function Gain({ course }) {
  return (
    <div className="card border-0">
      <div className="card-body">
        <h5 className="card-title">
          <img src={gain} alt="" className="chapter-img"></img>
          你将收获：
        </h5>
        <p className="card-text">
          <ul className="list-unstyled pl-2 pl-sm-4">
            {course.gains.map((gain) => (
              <li>{gain}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Gain;
