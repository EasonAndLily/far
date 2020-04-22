import React from 'react';
import Thumbnail from '../thumbnail/Thumbnail';
import { Link } from 'react-router-dom';

function Overview(props) {
  return (
    <div className="mb-3 bg-white shadow rounded">
      <p className="h6 font-weight-bold mb-0 p-1">
        <a href="##" className="text-dark">
          {props.title}
        </a>
      </p>
      <nav className="nav nav-tabs pl-2" id="nav-tab" role="tablist">
        {props.nav.tabs.map((tab) => (
          <a
            className={
              tab.isActive
                ? 'nav-item active nav-link font-weight-bold text-dark pl-2 pr-2 pt-1 pb-1 pl-md-4 pr-md-4 pt-md-2 pb-md-2'
                : 'nav-item nav-link font-weight-bold text-dark pl-2 pr-2 pt-1 pb-1 pl-md-4 pr-md-4 pt-md-2 pb-md-2'
            }
            id={tab.id}
            data-toggle="tab"
            href={'#' + tab.href}
            role="tab"
            aria-controls={tab.href}
            aria-selected="false">
            {tab.title}
          </a>
        ))}
      </nav>
      <div className="tab-content p-0 p-sm-1" id="nav-tabContent">
        {props.nav.contents.map((content) => (
          <div
            className={
              content.isActive
                ? 'tab-pane active container'
                : 'tab-pane container'
            }
            id={content.id}
            role="tabpanel"
            aria-labelledby={content.tabId}>
            <div className="row">
              {content.thumbnails.map((card) => (
                <div className="col-12 col-md-6 p-0 p-sm-1 pt-2">
                  <Thumbnail
                    poster={card.poster}
                    title={card.title}
                    description={card.description}></Thumbnail>
                </div>
              ))}
              <div className="col-12 text-center">
                <Link
                  className="btn btn-sm btn-outline-dark rounded-pill m-2"
                  to="/search">
                  查看更多···
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
