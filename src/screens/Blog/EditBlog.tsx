// TODO: add types for this shit
// TODO: refactor this so I'm not using the same thing for edit blog that I am using for create blog
// TODO: add in some loaders
import { useEffect, useState } from "react"
import '@mdxeditor/editor/style.css'
import { createBlogPost, fetchBlogPost, fetchBlogTags, fetchDraftBlog, updateBlogPost, updateDraftBlog } from 'services/blogService'
import { auth } from 'loaders/firebase'
import { MarkdownWrapper } from 'components/MarkdownWrapper'
import { Loader } from 'components/Loader'
import { useToast } from "components/toast/ToastContainerProvider"
import { useNavigate } from "react-router-dom"
export const EditBlog = () => {    
    const [isLoading, setIsLoading] = useState(true);
    const [markdownRender, setMarkdownRender] = useState('')
    const toastContext = useToast();
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        title: '',
        tag: '',
        content: '',
    })
    const [availableTags, setAvailableTags] = useState<string[]>([])
    useEffect(() => {
        const url = window.location.href.split('/')
        const blog_id = url[url.length - 1]
        console.log(blog_id)
        const x = async () => {
            setIsLoading(true);
            const g = await fetchBlogTags(auth.currentUser?.uid ? auth.currentUser.uid : '')
            const blog = window.location.href.indexOf('edit-draft') > -1 ? await fetchDraftBlog(auth.currentUser?.uid ? auth.currentUser.uid : '', blog_id) : await fetchBlogPost(auth.currentUser?.uid ? auth.currentUser.uid : '', blog_id)
            console.log(blog)
            setFormValue({title: blog?.title ? blog.title : '', content: blog?.content ? blog.content : '', tag: blog?.tag ? blog.tag : ''})
            setMarkdownRender(blog?.content ? blog.content : '')
            setAvailableTags(g)
            setIsLoading(false);
        }
        x()
    }, [])

    const onPressSave = async () => {
        const url = window.location.href.split('/')
        const blog_id = url[url.length - 1]
        let saveRes = false
        if (window.location.href.indexOf('edit-draft') > -1)
        {
            saveRes = await updateDraftBlog(blog_id, auth.currentUser?.uid ? auth.currentUser.uid : '', formValue.title, formValue.tag, formValue.content)
        }
        else 
        {
            saveRes = await updateBlogPost(blog_id, auth.currentUser?.uid ? auth.currentUser.uid : '', formValue.title, formValue.tag, formValue.content)
        }
        console.log(saveRes)
        saveRes ? toastContext.addToast("Saved Blog", "Successfully saved the blog!") : toastContext.addToast("Failed to Save Blog", "An error occurred", "error")
    }

    const onPressPublish = async () => {
        const wantsPublished = window.confirm('Are you sure you want to publish this blog?')
        if (wantsPublished) {
            await createBlogPost(formValue.title, formValue.tag, formValue.content, auth.currentUser?.uid ? auth.currentUser.uid : '')
            //publish the blog
        }
        navigate('/blog')
        console.log(formValue)        
    }

    return (
        <div className='site-container min-h-screen -z-10'>
            { !isLoading ?
            <div className='flex flex-col items-center p-5 gap-3 px-8'>
                <div className='w-full max-w-[50rem] font-bold'><p>Title: </p></div>
                <input value={formValue.title} onChange={e => setFormValue({...formValue, title: e.target.value})} className='p-1 w-full max-w-[50rem] h-10 border rounded-md required' placeholder="Title" />
                <div className='w-full max-w-[50rem] font-bold'><p>Tag: </p></div>
                <select value={formValue.tag} className='p-1 w-full max-w-[50rem] h-10 border rounded-md' aria-placeholder="Category" onChange={e => setFormValue({...formValue, tag: e.target.value})}>
                    <option value="" disabled>Select</option>
                    {availableTags.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <div className='flex flex-col w-full max-w-[50rem] font-bold gap-4'>
                    <div className='w-full max-w-[50rem] font-bold'><p>Content: </p></div>
                    <textarea value={formValue.content} onChange={e => setFormValue({...formValue, content: e.target.value})} className='p-1 max-w-[50rem] font-normal border rounded-md overflow-scroll h-96' />
                    <div className='w-full max-w-[50rem] font-bold'><p>Result: </p></div>
                    <button className='w-full max-w-[50rem] h-8 border-blue-500 hover:bg-blue-200 border text-black rounded-md transition-all' onClick={async () => setMarkdownRender(formValue.content)}>Update Result</button>
                    <MarkdownWrapper className='w-full p-1 max-w-[50rem] border rounded-md'>
                        {markdownRender}
                    </MarkdownWrapper>
                    <button className='w-full max-w-[50rem] h-8 border-blue-500 hover:bg-blue-200 border text-black rounded-md transition-all' onClick={async () => await onPressSave()}>Save</button>
                    { window.location.href.indexOf('edit-draft') > -1 &&  <button className='w-full max-w-[50rem] h-8 bg-blue-500 hover:bg-blue-400 text-white rounded-md transition-all' onClick={onPressPublish}>Publish</button>}
                </div>
            </div> : <Loader />
            }
        </div>
    )
}