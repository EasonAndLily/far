import React, { useState, useEffect } from 'react';
import Markdown from '../common/markdown/Markdown.js';
import Banner from '../common/banner/Banner';
import { Link } from 'react-router-dom';
import leftArrow from './left_arrow.svg';
import Request from '../tools/fetch_api';

function Detail() {
  const [lession, setLession] = useState({
    title: '',
    poster: '',
    subTitle: '',
    difficulty: '',
    duration: '',
    learningNumbers: 12345,
    author: '',
    score: 9.9,
    previous: '',
    behind: '',
    content: '',
  });
  useEffect(() => {
    const request = new Request('/lessions/5eb00460ffb764c000a7d90d');
    request.get().then((data) => {
      setLession(data);
    });
  }, []);
  return (
    <section className="col col-sm-9 opacity-9 mb-4">
      <div className="card bg-white shadow">
        <Banner course={lession}></Banner>
        <div className="card-body p-4">
          <Markdown source={lession.content}></Markdown>
        </div>
        <div className="card-footer text-right">
          {lession.behind !== '' && lession.behind !== undefined ? (
            <Link to="/detail" className="text-dark mr-sm-4">
              {lession.behind}
              <img src={leftArrow} alt="" className="ml-1 img-mt-2"></img>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
}

export default Detail;
