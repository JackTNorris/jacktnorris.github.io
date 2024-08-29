import { auth } from "loaders/firebase";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from 'remark-math'
import { BlogPost, fetchBlogPosts, fetchDraftBlogs } from "services/blogService";
import { twMerge } from "tailwind-merge";

export type BlogFeedProps = {
    topic: string
    isDrafts?: boolean
}
export const BlogFeed = ({topic, isDrafts}: BlogFeedProps) => {
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    const x = async () => {
        if (isDrafts) {
            const g = await fetchDraftBlogs('guDT9CByeceyrbjRG6hOAnAs4mH3')
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
    useEffect(() => {
        x()
    }, [])
    console.log(blogs)
    return (
        <div className='flex flex-col w-3/5 min-w-[20rem]'>
            {blogs.map((blog, index) => 
            <Link to={isDrafts ? `/blog/edit-draft/${blog.id}` : `/blog/edit-blog/${blog.id}`}>
                <div className={twMerge('flex flex-col gap-4 w-4/5 aspect-[5/2] mt-12 bg-slate-100 shadow-md rounded-lg p-8 transition-all duration-1000', index % 2 ? 'self-end' : 'self-start')}>
                    <p><em><b>{blog.title}</b> || {new Date(blog.createdOn).toDateString()}</em></p>
                    <Markdown skipHtml={false} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeRaw, rehypeKatex]} className='prose'>{blog.content}</Markdown>
                </div>
            </Link>
        )}
        </div>
    );
}