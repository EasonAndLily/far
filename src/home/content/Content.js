import React from 'react';
import HeadImg from './head-image.jpeg';
import HeadImg2 from './head-image2.jpeg';
import './Content.css';

function Content() {
  return (
    <div className="row mr-0 ml-0 mb-3">
      <div class="card content-card col-12 col-md p-0 mr-0 mr-md-2 mb-3 mb-md-0">
          <img class="card-img-top" src={HeadImg2} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">高效能组织架构</h5>
            <p class="card-text">相比于传统的职能竖井式架构，高效能敏捷架构从业务天然存在的边界出发，将团队构建为四种类型，从而加速了知识的传播，提升了效率！</p>
            <a href="#" class="btn btn-outline-dark btn-sm">开始学习</a>
          </div>
        </div>
      <div class="card content-card col-12 col-md p-0 ml-md-2 ml-0">
        <img class="card-img-top" src={HeadImg} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">高效能测试</h5>
          <p class="card-text">相比于传统的单一自动化测试来说，高效能测试从架构出发，以业务价值为核心，使用TDD，皮下测试，契约测试，视觉测试等，全面提升测试质量！</p>
          <a href="#" class="btn btn-outline-dark btn-sm">开始学习</a>
        </div>
      </div>
    </div>
  );
}

export default Content;
