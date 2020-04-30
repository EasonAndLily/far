import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock.js';

function Markdown({ source }) {
  return (
    <ReactMarkdown
      source={source}
      escapeHtml={false}
      renderers={{ code: CodeBlock }}></ReactMarkdown>
  );
}

export default Markdown;
