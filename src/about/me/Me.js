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
import experience from './experience.svg';
import company from './company.svg';
import project from './project.svg';
import time from './time.svg';

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
          <h5 className="card-header pb-1 pt-1 pl-2 pr-1">
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
        <div className="card mt-3 shadow">
          <h5 className="card-header pb-1 pt-1 pl-2 pr-1">
            <img src={experience} alt="" className="img-mt-4 mr-2"></img>
            工作经历--5年
          </h5>
          <div className="card-body p-2">
            <h6 class="card-title p-1 mb-0">
              <img src={company} alt="" className="img-mt-4 mr-2"></img>
              ThoughtWorks--2年
            </h6>
            <hr className="m-0"></hr>
            <ul className="font-14 mb-2">
              <li>2018 ~ 现在</li>
              <li>软件咨询师/IT培训师</li>
            </ul>

            <h6 class="card-title p-1  mb-0">
              <img src={company} alt="" className="img-mt-4 mr-2"></img>
              Augmentum--3年
            </h6>
            <hr className="m-0"></hr>
            <ul className="font-14 mb-2">
              <li>2015/03 ~ 2018/03</li>
              <li>软件全栈开发工程师</li>
            </ul>
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
        <div className="card shadow rounded mt-3">
          <h5 className="card-header p-2">
            <img src={experience} alt="" className="img-mt-4 mr-2"></img>
            培训工作经验--1.5年
          </h5>
          <div class="card-body p-2">
            <h6 class="card-title mb-1">
              <img src={project} alt="" className="img-mt-4 mr-2"></img>
              TW非计算机毕业生培训
              <img src={time} alt="" className="img-mt-4 mr-1 ml-5"></img>
              2018/11 ~ 2020/06
            </h6>
            <hr className="border border-dark m-0"></hr>
            <h6 className="mb-0">项目描述：</h6>
            <p class="card-text mb-1 font-14 text-indent-2">
              非计培训是《TW
              零基础IT人才战略》的重要组成部分，在公司规模化扩张的道路上，形成对不同背景的毕业生进行规模化的培养体系，是TW快速发展的后勤保障，为公司差异化的竞争提供能量补给。培训内容为Web基础技能入门，包括前端(HTML/HTML5/CSS/CSS3/JS/ES6)、后端（Restful/Java/MySQL)、软件工程等。本人连续做了两期，第一期为讲师，第二期为PM。
            </p>
            <h6 className="mb-0">主要职责：</h6>
            <ul className="font-14 mb-1">
              <li>
                作为非计培训PM，负责非计培训产品的设计、规划、人才梯队的搭建、考核标准的制定等。
              </li>
              <li>
                作为非计培训讲师，负责非计课程的研发、教学内容的设计、授课、作业批改、线上答疑等。
              </li>
              <li>
                负责将非计培训成果的给相关Stakeholder展示，拉通，风险学员的追踪等。
              </li>
            </ul>
            <h6 class="card-title mb-1">
              <img src={project} alt="" className="img-mt-4 mr-2"></img>
              OOCL应届毕业生培训
              <img src={time} alt="" className="img-mt-4 mr-1 ml-5"></img>
              2019/07 ~ 2019/08
            </h6>
            <hr className="border border-dark m-0"></hr>
            <h6 className="mb-0">项目描述：</h6>
            <p class="card-text mb-1 font-14 text-indent-2">
              OOCL计算机专业应届毕业生入职后培训，总共学员80人，分为4个班，本人作为其中一个班的班主任。主要培训课程包括前端(HTML/CSS/JS/ES6/Vue)、后端(Java/Spring
              Boot/Spring Data
              JPA/Flyway)、编程思想(Restful/TDD/Tasking/概念图)、敏捷实践等。
            </p>
            <h6 className="mb-0">主要职责：</h6>
            <ul className="font-14 mb-1">
              <li>
                作为班主任，负责整个班培训目标的制定、培训体系的搭建、验收标准的制定、流程把控等。
              </li>
              <li>负责课程内容开发、教学场景、教学形式的设计和实施。</li>
              <li>负责教学结果的呈现、客户关系的管理、教学成果的汇报。</li>
              <li>负责新讲师的培养、讲师能力提升体系的搭建等。</li>
              <li>负责部分课程的授课、作业批改、答疑等。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
