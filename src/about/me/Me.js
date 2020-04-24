import React from 'react';
import me from './me.jpg';
import info from './info.svg';
import name from './name.svg';
import phone from './phone.svg';
import email from './email.svg';
import location from './location.svg';

function Me() {
  return (
    <div className="row p-3">
      <div className="col-3 p-0">
        <div className="card shadow rounded">
          <img src={me} className="card-image img-fluid" alt=""></img>
        </div>
        <div className="card mt-3 shadow">
          <h5 className="card-header pb-0 pt-1 pl-2 pr-1 bg-white">
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
      </div>
      <div className="col-9">这里是主要部分</div>
    </div>
  );
}

export default Me;
