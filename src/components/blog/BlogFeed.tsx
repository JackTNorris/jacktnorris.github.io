import { auth } from "loaders/firebase";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { BlogPost, fetchBlogPosts, fetchDraftBlogs } from "services/blogService";
import { twMerge } from "tailwind-merge";

export type BlogFeedProps = {
    topic: string
}
export const BlogFeed = ({topic}: BlogFeedProps) => {
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    const x = async () => {
        const g = await fetchBlogPosts('guDT9CByeceyrbjRG6hOAnAs4mH3')
        setBlogs(g)
    }
    useEffect(() => {
        x()
    }, [])
    console.log(blogs)
    return (
        <div className='flex flex-col w-3/5 min-w-[20rem]'>
            {blogs.map((blog, index) => 
            <div className={twMerge('w-4/5 aspect-[5/2] mt-12 bg-slate-100 shadow-md rounded-lg', index % 2 ? 'self-end' : 'self-start')}>
                <p><em><b>{blog.title}</b> || {new Date(blog.createdOn).toDateString()}</em></p>
                <Markdown skipHtml={false} rehypePlugins={[rehypeRaw]} className='prose'>{blog.content}</Markdown>
            </div>)}
        </div>
    );
}