import React, { useState, useEffect } from 'react';
import Markdown from '../common/markdown/Markdown.js';
import Request from '../tools/fetch_api';

function Detail() { 
  const [content, setContent] = useState("");

  useEffect(() => {
    // const request = new Request('/skill-courses/java-reactive-course/main/courses/1.%20%E5%93%8D%E5%BA%94%E5%BC%8F%E6%A6%82%E8%BF%B0.md');
    const request = new Request('skill-courses/java-reactive-course/main/courses/2.%20Java%20Reactive%20Streams.md');
    request.get().then((text) => setContent(text));
  }, []);

  return (
    <section className="col col-sm-9 opacity-9 mb-4">
      <div className="card bg-white shadow">
        <div className="card-body p-4">
          <Markdown source={content}></Markdown>
        </div>
        {/* <div className="card-footer text-right">
          {lession.behind !== '' && lession.behind !== undefined ? (
            <Link to="/detail" className="text-dark mr-sm-4">
              {lession.behind}
              <img src={leftArrow} alt="" className="ml-1 img-mt-2"></img>
            </Link>
          ) : (
            ''
          )}
        </div> */}
      </div>
    </section>
  );
}

export default Detail;
