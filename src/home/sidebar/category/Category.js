import React from 'react';
import './Category.css';
import gear from './gear.svg';
import fold from './fold.svg';
import thought from './thought.svg';
import cleanCode from './clean-code.svg';
import openSource from './open-source.svg';

class Category extends React.Component {
  render() {
    return (
      <nav className="bg-white rounded shadow mt-4 nav-max-height">
        <details>
          <summary className="pt-z1 pb-1">
            <img className="mr-3 ml-3" src={gear} alt="gear" />
            编程语言基础
            <img className="fold" src={fold} alt="gear" />
          </summary>
          <p>Java SE 教程</p>
          <p>JavaScript 教程</p>
          <p>Python3 教程</p>
          <p>Node 教程</p>
        </details>
        <details>
          <summary className="pt-1 pb-1">
            <img className="mr-3 ml-3" src={thought} alt="thought" />
            编程设计思维
            <img className="fold" src={fold} alt="gear" />
          </summary>
          <p>Java SE 教程</p>
          <p>JavaScript 教程</p>
          <p>Python3 教程</p>
          <p>Node 教程</p>
        </details>
        <details>
          <summary className="pt-1 pb-1">
            <img className="mr-3 ml-3" src={cleanCode} alt="clean code" />
            整洁代码与重构
            <img className="fold" src={fold} alt="gear" />
          </summary>
          <p>Java SE 教程</p>
          <p>JavaScript 教程</p>
          <p>Python3 教程</p>
          <p>Node 教程</p>
        </details>
        <details>
          <summary className="pt-1 pb-1">
            <img className="mr-3 ml-3" src={openSource} alt="open source" />
            优秀开源项目
            <img className="fold" src={fold} alt="gear" />
          </summary>
          <p>Java SE 教程</p>
          <p>JavaScript 教程</p>
          <p>Python3 教程</p>
          <p>Node 教程</p>
        </details>
      </nav>
    );
  }
}

export default Category;
