import React from 'react';
import './Banner.css';

function Banner({ course }) {
  return (
    <div className="jumbotron jumbotron-fluid banner rounded card-img-top mb-0">
      <div className="container">
        <h1 className="display-4 d-none d-sm-block text-center text-white">
          {course.title}
        </h1>
        <h2 className="d-sm-none text-center text-white">{course.title}</h2>
        <h5 className="d-none d-sm-block text-center text-white">
          {course.subTitle}
        </h5>
        <h6 className="d-sm-none text-center text-white">{course.subTitle}</h6>
        <div className="text-center text-white">
          <ul className="banner-attr p-0 font-12">
            <li>难度:{course.difficulty}</li>
            <li>时长:{course.duration}</li>
            <li>人数:{course.learningNumbers}</li>
            <li>作者:{course.author}</li>
            <li>评分:{course.score}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
