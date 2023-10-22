import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'

function Markdown({ source }) {
  return (
    <ReactMarkdown components={{
      h1: ({ node, ...props }) => <div>
        <h1 {...props} />
        <hr></hr>
      </div>,
      h2: ({ node, ...props }) => <div>
        <h2 {...props} />
        <hr></hr>
      </div>,
      img(props) {
        return <img {...props} style={{ maxWidth: '100%' }} alt=""></img>
      },
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");

        return !inline && match ? (
          <SyntaxHighlighter
            style={coldarkCold}
            PreTag="div"
            language={match[1]}
            children={String(children).replace(/\n$/, "")}
            showLineNumbers={true}
            {...props}
          />
        ) : (
          <code className={className ? className : ""} {...props}>
            {children}
          </code>
        );
      }
    }} children={source} remarkPlugins={[remarkGfm]}></ReactMarkdown>
  );
}

export default Markdown;
