import React from 'react';
import './Headline.css';
import { Link } from 'react-router-dom';

function Headline(props) {
  return (
    <header className="card bg-white shadow headline mb-3">
      <Link to={`/articles/${props.article.id}`}>
        <img
          src={props.article.poster}
          className="card-img-top headline-poster"
          alt="..."
        />
      </Link>

      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/articles/${props.article.id}`} className="card-link text-dark">
            {props.article.title}
          </Link>
        </h5>
        <p className="card-text abstract">{props.article.summary}</p>
        <Link
          to={`/articles?articleId=${props.article.id}`}
          className="btn btn-outline-dark mt-2 btn-sm">
          开始学习
        </Link>
      </div>
    </header>
  );
}

export default Headline;
