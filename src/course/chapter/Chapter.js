import React from 'react';
import { Link } from 'react-router-dom';
import chapter from './chapter.svg';
import haveRead from './have_read.svg';
import notRead from './not_read.svg';
import './Chapter.css';

function Chapter({ course }) {
  return (
    <div className="accordion" id="courseOutline">
      <h5 className="pl-4">
        <img src={chapter} alt="" className="chapter-img"></img>
        课程章节
      </h5>
      {course.outline.map((outline) => (
        <div className="card border-0">
          <div
            className="card-header p-0 bg-white border-0"
            id={outline.header}>
            <button
              className="btn bg-white btn-sm btn-block pl-4 pl-sm-5 text-left font-15"
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
            className="collapse bg-white"
            aria-labelledby={outline.header}
            data-parent="#courseOutline">
            <div className="card-body p-0">
              <ol className="ml-0 ml-sm-5 font-14 pt-1">
                {outline.nodes.map((node) => (
                  <li className="p-1 node mr-1 mr-sm-5">
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
  );
}

export default Chapter;
