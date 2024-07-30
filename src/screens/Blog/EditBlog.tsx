//TODO: add types for this shit
import { ImageUpload } from '../../components/forms/ImageUpload'
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { BoldItalicUnderlineToggles, DiffSourceToggleWrapper, InsertCodeBlock, InsertImage, MDXEditor, MDXEditorMethods, UndoRedo, codeBlockPlugin, codeMirrorPlugin, contentEditableClassName$, diffSourcePlugin, headingsPlugin, imagePlugin, toolbarPlugin } from '@mdxeditor/editor'
import { listsPlugin, quotePlugin, thematicBreakPlugin } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { MDXEditorWrapper } from 'components/forms/MDXEditorWrapper'
import { createBlogPost, fetchBlogTags, updateDraftBlog } from 'services/blogService'
import { auth } from 'loaders/firebase'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
export const EditBlog = () => {    
    const tags = ['Random', 'Family', 'Unfiltered', 'Travel', 'AI', 'Algorithms & Data Structures', 'Network Security', 'Low-Level Learnings']
    const ref = useRef<MDXEditorMethods>(null);
    const [formValue, setFormValue] = useState({
        title: '',
        tag: '',
        content: '',
    })
    const [availableTags, setAvailableTags] = useState<string[]>([])

    useEffect(() => {
        const x = async () => {
            const g = await fetchBlogTags(auth.currentUser?.uid ? auth.currentUser.uid : '')
            setAvailableTags(g)
        }
        x()
    })

    const onPressSave = () => {
        updateDraftBlog('', auth.currentUser?.uid ? auth.currentUser.uid : '', formValue.title, formValue.tag, formValue.content)
        console.log(formValue)        
    }

    return (
        <div className='site-container -z-10'>
            <div className='flex flex-col items-center p-5 gap-3 px-8'>
                <p>EDIT THIS: </p>

                <div className='w-full max-w-[50rem] font-bold'><p>Title: </p></div>
                <input onChange={e => setFormValue({...formValue, title: e.target.value})} className='p-1 w-full max-w-[50rem] h-10 border rounded-md required' placeholder="Title" />
                <div className='w-full max-w-[50rem] font-bold'><p>Tag: </p></div>
                <select className='p-1 w-full max-w-[50rem] h-10 border rounded-md' aria-placeholder="Category" defaultValue={""} onChange={e => setFormValue({...formValue, tag: e.target.value})}>
                    <option value="" disabled>Select</option>
                    {availableTags.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <div className='w-full max-w-[50rem] font-bold'>
                <div className='w-full max-w-[50rem] font-bold'><p>Content: </p></div>
                <MDXEditorWrapper className='-z-10 prose w-full p-1 max-w-[50rem] h-96 border rounded-md overflow-scroll' onChange={val => setFormValue({...formValue, content: val})} />
                <div className='w-full max-w-[50rem] font-bold'><p>Result: </p></div>
                <Markdown 
                    skipHtml={false} 
                    rehypePlugins={[rehypeRaw, rehypeKatex]} 
                    remarkPlugins={[remarkMath]}
                    className='prose w-full p-1 max-w-[50rem] h-96 border rounded-md overflow-scroll'
                >{formValue.content}</Markdown>
                </div>
                <button className='w-full max-w-[50rem] h-8 border-blue-500 hover:bg-blue-200 border text-black rounded-md transition-all' onClick={onPressSave}>Save</button>
            </div>
        </div>
    )
}