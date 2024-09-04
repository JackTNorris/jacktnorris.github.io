import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from 'remark-math'
import { BlogPost, deleteBlogPost, deleteDraftBlog, fetchBlogPosts, fetchDraftBlogs } from "services/blogService";
import { twMerge } from "tailwind-merge";
import { TiTrash, TiEdit } from "react-icons/ti";
import { auth } from 'loaders/firebase'

export type BlogFeedProps = {
    topic: string
    isDrafts?: boolean
}
export const BlogFeed = ({topic, isDrafts}: BlogFeedProps) => {
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    const x = async () => {
        if (isDrafts) {
            const g = await fetchDraftBlogs(auth.currentUser?.uid || '')
            g.sort((a, b) => {return b.createdOn - a.createdOn})
            setBlogs(g)
        }
        else {
            const g = await fetchBlogPosts('guDT9CByeceyrbjRG6hOAnAs4mH3')
            g.sort((a, b) => {return b.createdOn - a.createdOn})
            //const g = await fetchBlogPosts(auth.currentUser?.uid ? auth.currentUser.uid : '')
            setBlogs(g)
        }
    }

    const deleteDraftOrPost = (id: string) => {
        const blogTitle = blogs.filter(blog => blog.id == id)[0].title
        const wantsDeleted = window.confirm(`Are you sure you want to delete "${blogTitle}"? This decision is not reversible`)
        if (!wantsDeleted)
        {
            return
        }
        if (isDrafts) {
            deleteDraftBlog(id,'guDT9CByeceyrbjRG6hOAnAs4mH3')
            setBlogs(blogs.filter(blog => blog.id != id))
        }
        else {
            deleteBlogPost(id,'guDT9CByeceyrbjRG6hOAnAs4mH3')
            setBlogs(blogs.filter(blog => blog.id != id))
        }
    }

    useEffect(() => {
        x()
    }, [])
    console.log(blogs)
    return (
        <div className='flex flex-col items-center w-3/5 min-w-[20rem] pb-8 gap-12'>
            {blogs.map((blog, index) => 
                <div id={index.toString()} className={twMerge('flex flex-col w-4/5 aspect-[5/2] bg-slate-100 shadow-md rounded-lg p-8 transition-all duration-1000')}>
                    <div className="flex flex-row justify-between items-center flex-1">
                        <p><em><b>{blog.title}</b> || {new Date(blog.createdOn).toDateString()} </em></p>
                        <div className={twMerge("flex flex-row", auth.currentUser ? 'visible' : 'hidden')}>
                            <Link to={isDrafts ? `/blog/edit-draft/${blog.id}` : `/blog/edit-blog/${blog.id}`}><TiEdit className="hover:text-blue-500 hover:cursor-pointer" /></Link>
                            <TiTrash onClick={() => deleteDraftOrPost(blog.id)} className="hover:text-red-500 hover:cursor-pointer" />
                        </div>
                    </div>
                    <Markdown skipHtml={false} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeRaw, rehypeKatex]} className='prose'>{blog.content}</Markdown>
                </div>
        )}
        </div>
    );
}