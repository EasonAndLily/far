import React from 'react';
import './Banner.css';
import leftArrow from './left_arrow.svg';
import rightArrow from './right_arrow.svg';
import { Link } from 'react-router-dom';

function Banner({ course }) {
  return (
    <div className="card text-white banner">
      <img src={course.poster} className="card-img" alt="..." />
      <div className="card-img-overlay opacity-7 bg-dark d-flex flex-column">
        <div className="d-flex flex-column justify-content-center flex-grow-1">
          <h1 className="card-title text-center d-none d-sm-block">
            {course.title}
          </h1>
          <h4 className="d-sm-none text-center">{course.title}</h4>
          <h5 className="d-none d-sm-block text-center">{course.subTitle}</h5>
          <h6 className="d-sm-none text-center">{course.subTitle}</h6>
          <div className="text-center">
            <ul className="banner-attr p-0 font-12 d-flex justify-content-center">
              <li>难度:{course.difficulty}</li>
              <li>时长:{course.duration}</li>
              <li>人数:{course.learningNumbers}</li>
              <li>作者:{course.author}</li>
              <li>评分:{course.score}</li>
            </ul>
          </div>
        </div>
        <div className="mt-auto d-flex justify-content-between footer-size pl-sm-4 pr-sm-4">
          {course.previous !== '' && course.previous !== undefined ? (
            <Link to="/detail" className="text-white">
              <img src={rightArrow} alt="" className="mr-1 img-mt-2"></img>
              {course.behind}
            </Link>
          ) : (
            ''
          )}
          {course.behind !== '' && course.behind !== undefined ? (
            <Link to="/detail" className="text-white">
              {course.behind}
              <img src={leftArrow} alt="" className="ml-1 img-mt-2"></img>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
