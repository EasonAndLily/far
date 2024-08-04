import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

function Content(props) {
  const firstArticle = props.firstArticle;
  const secondArticle = props.secondArticle;
  return (
    <div className="row mr-0 ml-0 mb-3">
      <div className={`card content-card col-12 ${secondArticle === null ? 'col-md-6' : 'col-md'} p-0 mr-0 mr-md-2 mb-3 mb-md-0`}>
        <img className="card-img-top" src={firstArticle.poster} alt="头图" />
        <div className="card-body">
          <h5 className="card-title">{firstArticle.title}</h5>
          <p className="card-text">{firstArticle.summary}</p>
          <Link
            to={`/articles?articleId=${firstArticle.id}`}
            className="btn btn-outline-dark mt-2 btn-sm">
            开始学习
          </Link>
        </div>
      </div>
      {
        secondArticle == null ? "" :
          (<div className="card content-card col-12 col-md p-0 ml-md-2 ml-0">
            <img className="card-img-top" src={secondArticle.poster} alt="头图" />
            <div className="card-body">
              <h5 className="card-title">{secondArticle.title}</h5>
              <p className="card-text">{secondArticle.summary}</p>
              <Link
                to={`/articles?articleId=${secondArticle.id}`}
                className="btn btn-outline-dark mt-2 btn-sm">
                开始学习
              </Link>
            </div>
          </div>)
      }

    </div>
  );
}

export default Content;
