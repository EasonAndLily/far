import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock.js';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'

function Markdown({ source }) {
  return (
    // <ReactMarkdown
    //   source={source}
    //   escapeHtml={false}
    //   renderers={{ code: CodeBlock }}></ReactMarkdown>
    <ReactMarkdown components={{
      img(props) {
        return <img {...props} style={{ maxWidth: '100%' }}></img>
      },
      code: ({ children = [], className, ...props }) => {
        const match = /language-(\w+)/.exec(className || '')
        return (<SyntaxHighlighter
                language={match?.[1]}
                showLineNumbers={true}
                style={coldarkCold}
                PreTag='div'
                className='syntax-hight-wrapper'
                {...props}
              >
                {children}
              </SyntaxHighlighter>)
    }
    }} children={source}
      renderers={{ code: CodeBlock }}></ReactMarkdown>
  );
}

export default Markdown;
