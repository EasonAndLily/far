import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock.js';

function Markdown({ source }) {
  return (
    // <ReactMarkdown
    //   source={source}
    //   escapeHtml={false}
    //   renderers={{ code: CodeBlock }}></ReactMarkdown>
    <ReactMarkdown components={{
      img(props) {
        return <img {...props} style={{maxWidth: '100%'}}></img>
      }
    }}>{source}</ReactMarkdown>
  );
}

export default Markdown;
