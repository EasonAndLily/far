import React from 'react';
import me from './me.jpg';
import info from './info.svg';
import name from './name.svg';
import phone from './phone.svg';
import email from './email.svg';
import location from './location.svg';
import job from './job.svg';
import skills from './skills.svg';
import software from './software.svg';
import training from './training.svg';
import education from './education.svg';
import school from './school.svg';
import profession from './profession.svg';
import certificate from './certificate.svg';
import CET from './CET.svg';

function Me() {
  return (
    <div className="row p-3">
      <div className="col-4">
        <div className="card shadow rounded">
          <img src={me} className="card-image img-fluid" alt=""></img>
        </div>
        <div className="card mt-3 shadow">
          <h5 className="card-header pb-0 pt-1 pl-2 pr-1">
            <img src={info} alt="" className="img-mt-4"></img>
            基本信息
          </h5>
          <div className="card-body pl-2 pt-2 pr-0 pb-2">
            <h6 class="card-title p-1 mb-0">
              <img src={name} alt="" className="img-mt-4 mr-2"></img>李景华
            </h6>
            <h6 class="card-title p-1  mb-0">
              <img src={phone} alt="" className="img-mt-4 mr-2"></img>
              &nbsp;15342349100
            </h6>
            <h6 class="card-title p-1  mb-0">
              <img src={email} alt="" className="img-mt-4 mr-2"></img>
              15342349100@163.com
            </h6>
            <h6 class="card-title p-1  mb-0">
              <img src={location} alt="" className="img-mt-4 mr-2"></img>
              湖北省武汉市江夏区
            </h6>
          </div>
        </div>
        <div className="card mt-3 shadow">
          <h5 className="card-header pb-0 pt-1 pl-2 pr-1">
            <img src={education} alt="" className="img-mt-4 mr-2"></img>
            教育背景
          </h5>
          <div className="card-body pl-2 pt-2 pr-0 pb-2">
            <h6 class="card-title p-1 mb-0">
              <img src={school} alt="" className="img-mt-4 mr-2"></img>
              湖北工业大学
            </h6>
            <h6 class="card-title p-1  mb-0">
              <img src={profession} alt="" className="img-mt-4 mr-2"></img>
              信息管理与信息系统
            </h6>
            <h6 class="card-title p-1  mb-0">
              <img src={certificate} alt="" className="img-mt-4 mr-2"></img>
              软件设计师/计算机三级
            </h6>
            <h6 class="card-title p-1  mb-0">
              <img src={CET} alt="" className="img-mt-4 mr-2"></img>
              英语四级
            </h6>
          </div>
        </div>
      </div>
      <div className="col-8 pl-0">
        <h4 className="font-weight-bold">
          <img src={job} alt="" className="img-mt-5 mr-2 ml-1"></img>
          软件咨询师/IT培训师/全栈开发工程师
        </h4>
        <hr className="border border-dark m-0"></hr>
        <div className="card shadow rounded mt-3">
          <h5 className="card-header p-2">
            <img src={skills} alt="" className="img-mt-4 mr-2"></img>
            基本技能
          </h5>
          <div class="card-body p-2">
            <h6 class="card-title mb-1">
              <img src={software} alt="" className="img-mt-2 mr-2"></img>
              软件工程基本技能
            </h6>
            <hr className="border border-dark m-0"></hr>
            <p class="card-text mb-1">
              <ul className="font-14 mb-1">
                <li>
                  前端：HTML/CSS/Less/JavaScript/ES6/JQuery/React/Vue/Webpack
                </li>
                <li>
                  后端：Java/Spring Boot/Spring Data JPA/Struts/Hibernate/Flyway
                </li>
                <li>测试：TDD/Junit/单元测试/集成测试/契约测试</li>
                <li>数据库：MySQL/SQLServer/MongoDB/Redis</li>
                <li>架构设计：MVC/微服务/领域驱动设计/Restful架构/设计模式</li>
                <li>Devops: Git/Jenkins/Docker/K8s/Nginx</li>
                <li>操作系统：Windows/Linux/Mac</li>
              </ul>
            </p>
            <h6 class="card-title mb-1">
              <img src={training} alt="" className="img-mt-2 mr-2"></img>
              IT培训基本技能
            </h6>
            <hr className="border border-dark m-0"></hr>
            <p class="card-text mb-1">
              <ul className="font-14 mb-1">
                <li>
                  能够根据公司战略及市场需求来定位培训的目标，制定培训的验收标准
                </li>
                <li>
                  能够根据培训目标，设计合理的课程内容、流程、体系、教学场景等。
                </li>
                <li>掌握常用的基本授课技能：表达力、引导力、控场力等。</li>
                <li>
                  擅长以学员为主体的培训模式，翻转课堂，善于激发学员学习的参与性、积极性，注重个体对知识思考和理解差异性，让学员从内心深处发生积极而持久的改变。
                </li>
                <li>擅长以段子驱动的教学方式。</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
