import React from 'react'
import Markdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import remarkMath from "remark-math"
import { twMerge } from 'tailwind-merge'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';


export type MarkdownWrapperProps = {
    children?: string
    className?: string
}

export const MarkdownWrapper = ({children, className}: MarkdownWrapperProps) => {
    return (
        <Markdown 
        children={children}
        skipHtml={false} 
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]} 
        className={twMerge('prose', className)}
        components={{
            code(props) {
              const {children, className, node, ...rest} = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                showLineNumbers
                customStyle={{border: 'none', backgroundColor: "#1F2937"}}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={dark}
              />
              ) : (
                <code {...rest} className={twMerge(className, 'p-64')}>
                  {children}
                </code>
              )
            }
          }}
        />
    )
}