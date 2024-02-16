import React, { useState, useEffect } from 'react';
import Markdown from '../common/markdown/Markdown.js';
import Request from '../tools/fetch_api';
import categories from '../config/category.json';

function Detail(props) { 
  const [content, setContent] = useState("");

  useEffect(() => {
    const articleId = props.match.params.id;
    const article = categories.flatMap(category => category.articles).find(article => article.id === articleId);
    debugger
    if (article.address) {
      debugger
      const request = new Request(article.address);
      request.get().then((text) => setContent(text));
    }
  }, [props.location]);

  return (
    <section className="opacity-9 mb-4">
      <div className="card bg-white shadow">
        <div className="card-body p-4">
          <Markdown source={content}></Markdown>
        </div>
      </div>
    </section>
  );
}

export default Detail;
