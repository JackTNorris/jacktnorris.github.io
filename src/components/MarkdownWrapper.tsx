import {memo, useMemo} from 'react'
import Markdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import remarkMath from "remark-math"
import { twMerge } from 'tailwind-merge'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'


export type MarkdownWrapperProps = {
    children?: string
    className?: string
}

export const MarkdownWrapper = memo(({children, className}: MarkdownWrapperProps) => {

    const markdownComponents = useMemo(() => ({
        code(props: any) {
            const {children, className, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
                <SyntaxHighlighter
                    customStyle={{border: 'none', backgroundColor: "#1F2937"}}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={dark}
                    showLineNumbers
                    {...rest}
                />
            ) : (
                <code {...rest} className={twMerge(className, 'p-64')}>
                    {children}
                </code>
            )
        }
    }), [])

    const remarkPlugins = useMemo(() => [remarkMath], [])
    const rehypePlugins = useMemo(() => [rehypeRaw, rehypeKatex], [])

    return (
        <Markdown 
            children={children}
            skipHtml={false} 
            remarkPlugins={remarkPlugins}
            rehypePlugins={rehypePlugins}
            className={twMerge('prose font-normal', className)}
            components={markdownComponents}
        />
    )
})