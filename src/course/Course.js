import React from 'react';
import './Course.css';

function Course() {
  return (
    <section className="col col-sm-9 opacity-9">
      <div className="jumbotron jumbotron-fluid jumbotron-bg rounded shadow">
        <div className="container">
          <h1 className="display-4 text-center text-white">Java SE 基础课程</h1>
          <div className="text-center text-white">
            <ul className="course-attr p-0">
              <li>难度：入门</li>
              <li>时长：30分钟</li>
              <li>人数：1235人</li>
              <li>作者：李景华</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
