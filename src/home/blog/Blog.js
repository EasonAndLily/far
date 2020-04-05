import React from 'react';
import Headline from './headline/HeadLine';

function Blog() {
  return (
    <section className="col opacity-9">
      <Headline></Headline>
      <div className="mt-3 bg-white shadow rounded">
        <p className="h6 btn btn-link font-weight-bold mb-0">
          编程语言基础教程
        </p>
        <nav className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active font-weight-bold"
            id="latest-tab"
            data-toggle="tab"
            href="#latest"
            role="tab"
            aria-controls="latest"
            aria-selected="true">
            最新
          </a>
          <a
            className="nav-item nav-link font-weight-bold"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false">
            Java
          </a>
          <a
            className="nav-item nav-link font-weight-bold"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false">
            JavaScript
          </a>
          <a
            className="nav-item nav-link font-weight-bold"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false">
            Python
          </a>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane active container"
            id="latest"
            role="tabpanel"
            aria-labelledby="rencent-tab">
            <div className="row">
              <div className="col-md-3 col-6 p-1">
                <div className="card shadow">
                  <img
                    classNames="card-img-top"
                    src="https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/flower.jpg"
                    alt="recent"
                    height="90px"></img>
                  <div class="card-body pt-0 p-1">
                    <h5 class="card-title mb-0">
                      <a href="##" className="card-link">
                        Card title
                      </a>
                    </h5>
                    <p class="card-text abstract">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="##" class="btn btn-primary btn-sm">
                      开始学习
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 p-1">
                <div className="card shadow">
                  <img
                    classNames="card-img-top"
                    src="https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/plant.jpg"
                    alt="recent"
                    height="90px"></img>
                  <div class="card-body pt-0 p-1">
                    <h5 class="card-title mb-0">
                      <a href="##" className="card-link">
                        Card title
                      </a>
                    </h5>
                    <p class="card-text abstract">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="##" class="btn btn-primary btn-sm">
                      开始学习
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 p-1">
                <div className="card shadow">
                  <img
                    classNames="card-img-top"
                    src="https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/deer.jpg"
                    alt="recent"
                    height="90px"></img>
                  <div class="card-body pt-0 p-1">
                    <h5 class="card-title mb-0">
                      <a href="##" className="card-link">
                        Card title
                      </a>
                    </h5>
                    <p class="card-text abstract">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="##" class="btn btn-primary btn-sm">
                      开始学习
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 p-1">
                <div className="card shadow">
                  <img
                    classNames="card-img-top"
                    src="https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/sculpture.jpg"
                    alt="recent"
                    height="90px"></img>
                  <div class="card-body pt-0 p-1">
                    <h5 class="card-title mb-0">
                      <a href="##" className="card-link">
                        Card title
                      </a>
                    </h5>
                    <p class="card-text abstract">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="##" class="btn btn-primary btn-sm">
                      开始学习
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab">
            ...
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab">
            ...
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
