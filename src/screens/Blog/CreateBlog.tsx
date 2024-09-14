// TODO: add types for this shit
// TODO: change the 
import { ImageUpload } from '../../components/forms/ImageUpload'
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { BoldItalicUnderlineToggles, DiffSourceToggleWrapper, InsertCodeBlock, InsertImage, MDXEditor, MDXEditorMethods, UndoRedo, codeBlockPlugin, codeMirrorPlugin, contentEditableClassName$, diffSourcePlugin, headingsPlugin, imagePlugin, toolbarPlugin } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { MDXEditorWrapper } from 'components/forms/MDXEditorWrapper'
import { createBlogPost, createDraftBlog, fetchBlogTags } from 'services/blogService'
import { auth } from 'loaders/firebase'
import { MarkdownWrapper } from 'components/MarkdownWrapper'
export const CreateBlog = () => {    
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



    const onPressPublish = () => {
        const wantsPublished = window.confirm('Are you sure you want to publish this blog?')
        if (wantsPublished) {
            createBlogPost(formValue.title, formValue.tag, formValue.content, auth.currentUser?.uid ? auth.currentUser.uid : '')
            //publish the blog
        }
        console.log(formValue)        
    }

    const onPressSave = () => {
        createDraftBlog(formValue.title, formValue.tag, formValue.content, auth.currentUser?.uid ? auth.currentUser.uid : '')
        console.log(formValue)        
    }

    return (
        <div className='site-container -z-10'>
            <div className='flex flex-col items-center p-5 gap-3 px-8'>
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
                <MarkdownWrapper
                >{formValue.content}</MarkdownWrapper>
                </div>
                <button className='w-full max-w-[50rem] h-8 border-blue-500 hover:bg-blue-200 border text-black rounded-md transition-all' onClick={onPressSave}>Save</button>
                <button className='w-full max-w-[50rem] h-8 bg-blue-500 hover:bg-blue-400 text-white rounded-md transition-all' onClick={onPressPublish}>Publish</button>
            </div>
        </div>
    )
}