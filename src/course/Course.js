import React from 'react';
import './Course.css';
import gradfather from './gradfather.svg';
import baby from './baby.svg';
import teenager from './teenager.svg';
import student from './student.svg';
import doc from './doc.svg';
import video from './video.svg';
import haveRead from './have_read.svg';
import notRead from './not_read.svg';
import { Link } from 'react-router-dom';
import chapter from './chapter.svg';
import growth from './growth.svg';
import gain from './gain.svg';
import Banner from './banner/Banner.js';
import Intro from './intro/Intro.js';

let course = {
  title: 'JavaSE 基础课程',
  subTitle: '入门类课程，面向零基础学员',
  difficulty: '入门',
  duration: '30分钟',
  learningNumbers: 12345,
  author: 'Eason',
  score: 9.8,
  intro:
    '本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!',
};

let growthPath = [
  {
    title: '第一步：1周',
    name: '入门Java基础语法',
    image: baby,
    brief:
      '此阶段将为你你打造高效的Java开发环境，学会使用Java开发利器，初识Java基础语法',
  },
  {
    title: '第二步：2周',
    name: '初识面向对象编程',
    image: teenager,
    brief:
      '此阶段你将掌握Java面向对象的基础语法，学会用面向对象的思维方式思考问题，解决问题',
  },
  {
    title: '第三步：2周',
    name: 'Java基础语法进阶',
    image: student,
    brief:
      '此阶段你将掌握Java面向对象的基础语法，学会用面向对象的思维方式思考问题，解决问题',
  },
  {
    title: '第四步：2周',
    name: 'Java8 API',
    image: gradfather,
    brief:
      '此阶段你将掌握Java面向对象的基础语法，学会用面向对象的思维方式思考问题，解决问题',
  },
];

let courseOutline = [
  {
    id: 'collapseOne',
    header: 'headingOne',
    name: '第一章：Java基础语法',
    nodes: [
      {
        id: '1001',
        name: '搭建Java开发环境',
        type: doc,
        time: '05:20',
        read: true,
      },
      {
        id: '1002',
        name: '变量与数据类型',
        type: video,
        time: '05:20',
        read: true,
      },
      {
        id: '1003',
        name: 'Java运算符',
        type: doc,
        time: '05:20',
        read: false,
      },
      {
        id: '1004',
        name: '类与函数',
        type: video,
        time: '3min',
        read: true,
      },
      {
        id: '1005',
        name: '流程控制语句',
        type: doc,
        time: '05:20',
        read: false,
      },
    ],
  },
  {
    id: 'collapseTwo',
    header: 'headingTwo',
    name: '第二章：面向对象编程',
    nodes: [
      {
        id: '1001',
        name: '搭建Java开发环境',
        type: doc,
        time: '05:20',
        read: true,
      },
      {
        id: '1002',
        name: '变量与数据类型',
        type: video,
        time: '05:20',
        read: true,
      },
      {
        id: '1003',
        name: 'Java运算符',
        type: doc,
        time: '05:20',
        read: true,
      },
      {
        id: '1004',
        name: '类与函数',
        type: video,
        time: '03:15',
        read: true,
      },
      {
        id: '1005',
        name: '流程控制语句',
        type: doc,
        time: '05:20',
        read: true,
      },
    ],
  },
  {
    id: 'collapseThree',
    header: 'headingThree',
    name: '第三章：java基础进阶',
    nodes: [
      {
        id: '1001',
        name: '搭建Java开发环境',
        type: doc,
        time: '05:20',
        read: true,
      },
      {
        id: '1002',
        name: '变量与数据类型',
        type: video,
        time: '05:20',
        read: true,
      },
      {
        id: '1003',
        name: 'Java运算符',
        type: doc,
        time: '05:20',
        read: true,
      },
      {
        id: '1004',
        name: '类与函数',
        type: video,
        time: '03:10',
        views: '1.5k',
        grade: 9.0,
      },
      {
        id: '1005',
        name: '流程控制语句',
        type: doc,
        time: '05:20',
        views: '1.5k',
        grade: 9.5,
      },
    ],
  },
  {
    id: 'collapseFour',
    header: 'headingFour',
    name: '第四章：Java8 API',
    nodes: [
      {
        id: '1001',
        name: '搭建Java开发环境',
        type: doc,
        time: '05:20',
        read: true,
      },
      {
        id: '1002',
        name: '变量与数据类型',
        type: video,
        time: '05:20',
        views: '1.2k',
        grade: 9.8,
      },
      {
        id: '1003',
        name: 'Java运算符',
        type: doc,
        time: '05:20',
        views: '1.1k',
        grade: 9.8,
      },
      {
        id: '1004',
        name: '类与函数',
        type: video,
        time: '03:20',
        views: '1.0k',
        grade: 9.0,
      },
      {
        id: '1005',
        name: '流程控制语句',
        type: doc,
        time: '05:20',
        views: '3k',
        grade: 9.5,
      },
    ],
  },
];

function Course() {
  return (
    <section className="col col-sm-9 opacity-9 mb-4">
      <div className="card border-0 shadow">
        <Banner course={course}></Banner>
        <div className="row row-cols-1 row-cols-md-2 p-1">
          <div className="col">
            <Intro course={course}></Intro>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">
                  <img src={gain} alt="" className="chapter-img"></img>
                  你将收获：
                </h5>
                <p className="card-text">
                  <ul className="you-will-get pl-2 pl-sm-4">
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
        <div className="container">
          <h5 className="card-title ml-2">
            <img src={growth} alt="" className="chapter-img"></img>
            成长路径：
          </h5>
          <div className="card-group row row-cols-2">
            {growthPath.map((item) => (
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
        <div className="accordion" id="courseOutline">
          <h5 className="pl-4">
            <img src={chapter} alt="" className="chapter-img"></img>
            课程章节
          </h5>
          {courseOutline.map((outline) => (
            <div className="card border-0">
              <div
                className="card-header p-0 bg-white border-0"
                id={outline.header}>
                <button
                  className="btn btn-light btn-sm btn-block pl-4 pl-sm-5 text-left btn-bg font-15"
                  type="button"
                  data-toggle="collapse"
                  data-target={'#' + outline.id}
                  aria-expanded="true"
                  aria-controls={outline.id}>
                  {outline.name}
                </button>
              </div>
              <div
                id={outline.id}
                className="collapse"
                aria-labelledby={outline.header}
                data-parent="#courseOutline">
                <div className="card-body p-0">
                  <ol className="ml-3 ml-sm-5 font-14 pt-1">
                    {outline.nodes.map((node) => (
                      <li className="p-1 node mr-2 mr-sm-5">
                        <img src={node.type} alt="" className="node-img"></img>
                        <Link to="/detail" className="text-dark">
                          {node.name + ' (' + node.time + ')'}
                        </Link>
                        <img
                          src={node.read ? haveRead : notRead}
                          className="float-right pr-1"
                          alt=""></img>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
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
