import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../common/banner/Banner';
import Intro from './intro/Intro.js';
import Gain from './gain/Gain.js';
import Growth from './growth/Growth';
import Chapter from './chapter/Chapter.js';
import Request from '../tools/fetch_api';

function Course() {
  const [course, setCourse] = useState({
    gains: [],
    title: '',
    subTitle: '',
    intro: '',
    sections: [],
    growth: [],
  });
  useEffect(() => {
    const request = new Request('/courses/5ead8b7394705455836fdb7d');
    request.get().then((data) => {
      setCourse(data);
    });
  }, []);
  return (
    <section className="col col-sm-9 opacity-9 mb-4">
      <div className="card border-0 shadow">
        <Banner course={course}></Banner>
        <div className="row row-cols-1 row-cols-md-2 p-1">
          <div className="col">
            <Intro course={course}></Intro>
          </div>
          <div className="col">
            <Gain course={course}></Gain>
          </div>
        </div>
        <Growth course={course}></Growth>
        <Chapter course={course}></Chapter>
        <div className="p-3">
          <Link
            className="btn btn-outline-dark btn-lg btn-block rounded-pill"
            to="/detail">
            点击这里开始学习啦!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Course;
