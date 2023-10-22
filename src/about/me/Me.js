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
import feature from './feature.svg';
import evaluation from './evaluation.svg';

function Me() {
  return (
    <div className="row p-3">
      <div className="col-4">
        <div className="card shadow rounded">
          <img src={me} className="card-image img-fluid" alt=""></img>
        </div>
        <div className="card mt-3 shadow">
          <h5 className="card-header pb-0 pt-1 pl-2 pr-1 font-weight-bold">
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
          <h5 className="card-header pb-1 pt-1 pl-2 pr-1 font-weight-bold">
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
          <h5 className="card-header pb-1 pt-1 pl-2 pr-1 font-weight-bold">
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
        <div className="card mt-3 shadow">
          <h5 className="card-header pb-1 pt-1 pl-2 pr-1 font-weight-bold">
            <img src={feature} alt="" className="img-mt-4 mr-2"></img>
            个人特色
          </h5>
          <div className="card-body p-2">
            <ul className="font-14 mb-2 pl-4">
              <li>热爱敏捷，追求精益，拥抱开源，喜欢变化。</li>
              <li>沉醉于简洁代码，乐于重构。</li>
              <li>
                喜欢授课，对培训有独到见解，开创“段子驱动教学法”，致力于成为优质IT讲师。
              </li>
              <li>推崇优雅简洁的架构设计。</li>
              <li>热爱阅读，每月至少阅读一本书，该习惯已经保持了5年。</li>
            </ul>
          </div>
        </div>
        <div className="card mt-3 shadow">
          <h5 className="card-header pb-1 pt-1 pl-2 pr-1 font-weight-bold">
            <img src={evaluation} alt="" className="img-mt-4 mr-2"></img>
            自我评价
          </h5>
          <div className="card-body p-2">
            <ul className="font-14 mb-2 pl-4">
              <li>喜欢捣腾技术，勇于攻克技术难题。</li>
              <li>性格开朗，善于交际。</li>
              <li>偶然脾气急躁且自以为是。</li>
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
          <h5 className="card-header p-2 font-weight-bold">
            <img src={skills} alt="" className="img-mt-4 mr-2"></img>
            基本技能
          </h5>
          <div class="card-body p-2">
            <h6 class="card-title mb-1 font-weight-bold">
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
            <h6 class="card-title mb-1 font-weight-bold mt-2">
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
          <h5 className="card-header p-2 font-weight-bold">
            <img src={experience} alt="" className="img-mt-4 mr-2"></img>
            培训工作经验--1.5年
          </h5>
          <div class="card-body p-2">
            <h6 class="card-title mb-1 font-weight-bold">
              <img src={project} alt="" className="img-mt-4 mr-2"></img>
              TW非计算机毕业生培训
              <img src={time} alt="" className="img-mt-4 mr-1 ml-5"></img>
              2018/11 ~ 2020/06
            </h6>
            <hr className="border border-dark m-0"></hr>
            <h6 className="mb-0 font-weight-bold">项目描述：</h6>
            <p class="card-text mb-1 font-14 text-indent-2">
              非计培训是《TW
              零基础IT人才战略》的重要组成部分，在公司规模化扩张的道路上，形成对不同背景的毕业生进行规模化的培养体系，是TW快速发展的后勤保障，为公司差异化的竞争提供能量补给。培训内容为Web基础技能入门，包括前端(HTML/HTML5/CSS/CSS3/JS/ES6)、后端（Restful/Java/MySQL)、软件工程等。本人连续做了两期，第一期为讲师，第二期为PM。
            </p>
            <h6 className="mb-0 font-weight-bold">主要职责：非计PM/讲师</h6>
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
            <h6 class="card-title mb-1 mt-2 font-weight-bold">
              <img src={project} alt="" className="img-mt-4 mr-2"></img>
              OOCL应届毕业生培训
              <img src={time} alt="" className="img-mt-4 mr-1 ml-5"></img>
              2019/07 ~ 2019/08
            </h6>
            <hr className="border border-dark m-0"></hr>
            <h6 className="mb-0 font-weight-bold">项目描述：</h6>
            <p class="card-text mb-1 font-14 text-indent-2">
              OOCL计算机专业应届毕业生入职后培训，总共学员80人，分为4个班，本人作为其中一个班的班主任。主要培训课程包括前端(HTML/CSS/JS/ES6/Vue)、后端(Java/Spring
              Boot/Spring Data
              JPA/Flyway)、编程思想(Restful/TDD/Tasking/概念图)、敏捷实践等。
            </p>
            <h6 className="mb-0 font-weight-bold">主要职责：班主任/讲师</h6>
            <ul className="font-14 mb-1">
              <li>
                作为班主任，负责整个班培训目标的制定、培训体系的搭建、验收标准的制定、流程把控等。
              </li>
              <li>负责课程内容开发、教学场景、教学形式的设计和实施。</li>
              <li>负责教学结果的呈现、客户关系的管理、教学成果的汇报。</li>
              <li>负责新讲师的培养、讲师能力提升体系的搭建等。</li>
              <li>负责部分课程的授课、作业批改、答疑等。</li>
              <li>负责风险学员的追踪管理。</li>
            </ul>
          </div>
        </div>
        <div className="card shadow rounded mt-3">
          <h5 className="card-header p-2 font-weight-bold">
            <img src={experience} alt="" className="img-mt-4 mr-2"></img>
            软件开发工作经验--3.5年
          </h5>
          <div class="card-body p-2">
            <h6 class="card-title mb-1 font-weight-bold">
              <img src={project} alt="" className="img-mt-4 mr-2"></img>
              招商银行协同工作平台
              <img src={time} alt="" className="img-mt-2 mr-1 ml-5"></img>
              2018/04 ~ 2018/11
            </h6>
            <hr className="border border-dark m-0"></hr>
            <h6 className="mb-0 font-weight-bold">项目描述：</h6>
            <p class="card-text mb-1 font-14 text-indent-2">
              招商银行协同工作平台旨在为业务人员、管理人员、开发人员提供易用的电子看板功能、透明的产品管理流程、立体的组织研发管理体系、智能化的研发管理场景，目的是提升项目管理效率，提高管理透明度和降低协作成本，并支持精益研发管理的实施落地。致力于建设对标互联网业界领先的协同工作平台，打造成为招行轻型高效的管理协作平台。
            </p>
            <h6 className="mb-0 font-weight-bold">
              技术栈：Java/RESTful API/Spring boot/Spring Data JPA/Spring Could
              Contract/BFF/DDD/Microservice/TDD
            </h6>
            <h6 className="mb-0 font-weight-bold">主要职责：后端开发工程师</h6>
            <ul className="font-14 mb-1">
              <li>负责后端架构的设计，搭建以及技术的选型。</li>
              <li>负责平台功能的开发，Bug的修复。</li>
              <li>负责后端服务的上线，产品环境的showcase。</li>
            </ul>
            <h6 class="card-title mb-1 font-weight-bold mt-2">
              <img src={project} alt="" className="img-mt-4 mr-2"></img>
              <a
                href="https://newtonsoftware.com/"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer">
                Newton
              </a>
              <img src={time} alt="" className="img-mt-2 mr-1 ml-5"></img>
              2016/06 ~ 2018/03
            </h6>
            <hr className="border border-dark m-0"></hr>
            <h6 className="mb-0 font-weight-bold">项目描述：</h6>
            <p class="card-text mb-1 font-14 text-indent-2">
              Newton是美国排名前三的招聘的公司,主要业务为人力招聘，猎头，企业人力培训等，累积用户超过100万，涉及2000多家公司，1万多个行业的招聘活动。本来自进入项目以来，一直负责从Action到RestFul的转型，以及新功能的实现。
            </p>
            <h6 className="mb-0 font-weight-bold">
              技术栈：HTML/CSS/JS/Angular/Java/SSH/RESTful API/Jboss
            </h6>
            <h6 className="mb-0 font-weight-bold">主要职责：全栈开发工程师</h6>
            <ul className="font-14 mb-1">
              <li>负责前后端新功能的开发以及实现。</li>
              <li>负责旧功能的重构，架构的转型以及Bug修复。</li>
              <li>部分负责和客户沟通，对接需求等。</li>
              <li>
                负责培训新进项目组的开发人员，帮助其快速适应项目，完成工作。
              </li>
            </ul>
            <h6 class="card-title mb-1 font-weight-bold mt-2">
              <img src={project} alt="" className="img-mt-4 mr-2"></img>
              <a
                href="https://www.xataxrs.com"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer">
                XRS
              </a>
              <img src={time} alt="" className="img-mt-2 mr-1 ml-5"></img>
              2015/03 ~ 2016/05
            </h6>
            <hr className="border border-dark m-0"></hr>
            <h6 className="mb-0 font-weight-bold">项目描述：</h6>
            <p class="card-text mb-1 font-14 text-indent-2">
              Omnitracs是北美的一家以汽车物流为主营业务的公司,业务涉及汽车租赁，货物实时监控，汽车调度，路况检测等，并支持各种浏览设备进行实时监控。本人从2015年初进入该项目组，经历了整个项目的一次完整重构，参与了整个项目的设计、规划、编码、测试、上线等。
            </p>
            <h6 className="mb-0 font-weight-bold">
              技术栈：Asp.net/C#/Jasper/React
            </h6>
            <h6 className="mb-0 font-weight-bold">主要职责：全栈开发工程师</h6>
            <ul className="font-14 mb-1">
              <li>参与整个Report功能的重构。</li>
              <li>负责该系统中所有Report的设计、实现、展示、单元测试。</li>
              <li>负责Report的部署、实施、技术支持。</li>
              <li>部分负责和客户沟通，对接需求等。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
