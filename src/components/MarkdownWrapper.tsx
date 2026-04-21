import {memo, useMemo} from 'react'
import Markdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import remarkMath from "remark-math"
import { twMerge } from 'tailwind-merge'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// 4. Register the languages
SyntaxHighlighter.registerLanguage('cpp', cpp)
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('js', javascript) // Alias
SyntaxHighlighter.registerLanguage('jsx', jsx)


export type MarkdownWrapperProps = {
    children?: string
    className?: string
}

export const MarkdownWrapper = memo(({children, className}: MarkdownWrapperProps) => {

    const markdownComponents = useMemo(() => ({
        code(props: any) {
            // node is extracted to avoid passing it to the DOM element
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            
            return match ? (
                <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={oneDark} // Changed to oneDark for better aesthetics with these languages
                    customStyle={{
                        margin: 0,
                        borderRadius: '0.5rem',
                        backgroundColor: "#1F2937"
                    }}
                />
            ) : (
                <code {...rest} className={twMerge(className, 'bg-gray-800 px-1 py-0.5 rounded')}>
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