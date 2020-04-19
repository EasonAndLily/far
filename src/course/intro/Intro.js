import React from 'react';
import intro from './intro.svg';

function Intro({ course }) {
  return (
    <div className="card border-0">
      <div className="card-body">
        <h5 className="card-title">
          <img src={intro} alt="" className="chapter-img"></img>
          课程介绍：
        </h5>
        <p className="card-text pl-2">{course.intro}</p>
      </div>
    </div>
  );
}

export default Intro;
