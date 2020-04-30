import React from 'react';
import Markdown from '../common/markdown/Markdown.js';
import './detail.css';
import Banner from '../common/banner/Banner';

let source = `
# Live demo
Changes are automatically rendered as you type.
## Table of Contents
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

\`\`\`js
  var React = require('react');
  var Markdown = require('react-markdown');
  React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
  );
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)
`;
let course = {
  title: 'Schema与Table操作',
  poster:
    'https://icon.qiantucdn.com/20200428/20ba25d57b0a82909a97adec0c0ba3172',
  subTitle: '入门类课程，面向零基础学员',
  difficulty: '入门',
  duration: '30分钟',
  learningNumbers: 12345,
  author: 'Eason',
  score: 9.8,
  previous: '数据库概述',
  behind: '数据基本操作',
};

function Detail() {
  return (
    <section className="col col-sm-9 opacity-9">
      <div className="card bg-white shadow">
        <Banner course={course}></Banner>
        <div className="card-body p-4">
          <Markdown source={source}></Markdown>
        </div>
        <div className="card-footer">
          <ul className="list-inline m-0 d-flex justify-content-end">
            <li className="list-inline-item">
              <button
                type="button"
                class="p-0 btn btn-default btn-image update-time"
                disabled>
                两天前
              </button>
            </li>
            <li className="list-inline-item">
              <button
                type="button"
                class="p-0 btn btn-default btn-image thumds-up">
                12344
              </button>
            </li>
            <li className="list-inline-item">
              <button
                type="button"
                className="p-0 btn btn-default btn-image share"></button>
            </li>
            <li className="list-inline-item">
              <button
                type="button"
                className="p-0 btn btn-default btn-image comment"></button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Detail;
