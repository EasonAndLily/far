import React from 'react';
import './Course.css';

function Course() {
  return (
    <section className="col col-sm-9 opacity-9">
      <div className="card border-0 shadow">
        <div className="jumbotron jumbotron-fluid course-bg rounded card-img-top mb-0">
          <div className="container">
            <h1 className="display-4 text-center text-white">
              Java SE 基础课程
            </h1>
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
        <div className="row row-cols-1 row-cols-md-2 p-1">
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">课程介绍：</h5>
                <p className="card-text pl-2">
                  本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s
                  go!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">你将收获：</h5>
                <p className="card-text">
                  <ul className="you-will-get">
                    <li>零基础入门Java开发</li>
                    <li>储备基本的编程思维</li>
                    <li>使用面向对象的思维处理常见问题</li>
                    <li>使用面向对象的思维处理常见问题</li>
                    <li>使用面向对象的思维处理常见问题</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
