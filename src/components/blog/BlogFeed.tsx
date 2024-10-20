// TODO: cleanup loading logic, refactor this to just display blogs not fetch
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost, deleteBlogPost, deleteDraftBlog, fetchBlogPosts, fetchBlogTags, fetchDraftBlogs } from "services/blogService";
import { twMerge } from "tailwind-merge";
import { TiTrash, TiEdit } from "react-icons/ti";
import { auth } from 'loaders/firebase'
import { MarkdownWrapper } from "components/MarkdownWrapper";
import { Loader } from "components/Loader";

export type BlogFeedProps = {
    topic: string;
    recentFirst?: boolean;
    isDrafts?: boolean;
    enableFiltering?: boolean;
}
export const BlogFeed = ({topic, isDrafts}: BlogFeedProps) => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [blogTopics, setBlogTopics] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchBlogs = async () => {
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
        setIsLoading(false);
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
        fetchBlogs()
    }, [])
    console.log(blogs)
    return isLoading ? <Loader /> : (
        <div className='flex flex-col items-center w-full md:w-4/5 min-w-[20rem] pb-8 pt-8 gap-12'>
            {blogs.filter(b => !isDrafts ? b.tag == topic : true).map((blog, index) => 
                <div id={index.toString()} className={twMerge('flex flex-col w-4/5 aspect-[5/2] bg-slate-100 shadow-md rounded-lg p-8 transition-all duration-1000')}>
                    <div className="flex flex-row justify-between py-2">
                        <p><em><b>{blog.title}</b> || {new Date(blog.createdOn).toDateString()} </em></p>
                        <div className={twMerge("flex flex-row", auth.currentUser ? 'visible' : 'hidden')}>
                            <Link to={isDrafts ? `/blog/edit-draft/${blog.id}` : `/blog/edit-blog/${blog.id}`}><TiEdit className="hover:text-blue-500 hover:cursor-pointer" /></Link>
                            <TiTrash onClick={() => deleteDraftOrPost(blog.id)} className="hover:text-red-500 hover:cursor-pointer" />
                        </div>
                    </div>
                    <MarkdownWrapper>{blog.content}</MarkdownWrapper>
                </div>
        )}
        </div>
    );
}