import React from 'react'
import Markdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import remarkMath from "remark-math"

export type MarkdownWrapperProps = {
    children: React.ReactNode
}

export const MarkdownWrapper = ({children}: MarkdownWrapperProps) => {
    return (
        <Markdown 
        skipHtml={false} 
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]} 
        className='prose w-full p-1 max-w-[50rem] h-96 border rounded-md overflow-scroll'
        >children</Markdown>
    )
}