import React from 'react';
import { Link } from 'react-router-dom';
import chapter from './chapter.svg';
import haveRead from './have_read.svg';
import notRead from './not_read.svg';
import './Chapter.css';
import doc from './doc.svg';
import video from './video.svg';

function Chapter({ course }) {
  let id = 1;
  return (
    <div className="accordion" id="courseOutline">
      <h5 className="pl-4">
        <img src={chapter} alt="" className="chapter-img"></img>
        课程章节
      </h5>
      {course.sections
        .map((section) => {
          return { id: 'id' + id++, header: 'h' + id, ...section };
        })
        .map((section) => (
          <div className="card border-0">
            <div
              className="card-header p-0 bg-white border-0"
              id={section.header}>
              <button
                className="btn bg-white btn-sm btn-block pl-4 pl-sm-5 text-left font-15"
                type="button"
                data-toggle="collapse"
                data-target={'#' + section.id}
                aria-expanded="true"
                aria-controls={section.id}>
                {section.name}
              </button>
            </div>
            <div
              id={section.id}
              className="collapse bg-white show"
              aria-labelledby={section.header}
              data-p
              arent="#courseOutline">
              <div className="card-body p-0">
                <ol className="ml-0 ml-sm-5 font-14 pt-1">
                  {section.lessions.map((lession) => (
                    <li className="p-1 node mr-1 mr-sm-5">
                      <img
                        src={
                          lession.type === 'doc'
                            ? doc
                            : lession.type === 'video'
                            ? video
                            : ''
                        }
                        alt=""
                        className="node-img"></img>
                      <Link to={`/detail/${lession._id}`} className="text-dark">
                        {lession.name + ' (' + lession.time + ')'}
                      </Link>
                      <img
                        src={lession.read ? haveRead : notRead}
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
