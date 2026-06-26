// TODO: cleanup loading logic, refactor this to just display blogs not fetch
import { useEffect, useState } from "react";
import { BlogPost, deleteBlogPost, deleteDraftBlog, fetchBlogPosts, fetchBlogTags, fetchDraftBlogs } from "services/blogService";
import { auth } from 'loaders/firebase'
import { Loader } from "components/Loader";
import { BlogFeedItem } from "./BlogFeedItem";

export type BlogFeedProps = {
    topic: string;
    recentFirst?: boolean;
    isDrafts?: boolean;
    enableFiltering?: boolean;
}
export const BlogFeed = ({topic, isDrafts}: BlogFeedProps) => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [needsViewed, setNeedsViewed] = useState<string | undefined>()

    useEffect(() => {
        if (!isLoading)
        {
            const temp_url = window.location.href
            if (temp_url.includes('#'))
            {
                document.getElementById(temp_url.split('#')[1])?.scrollIntoView();
                setNeedsViewed(temp_url.split('#')[1])
            }
        }
    }, [isLoading])


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
        const blogTitle = blogs.filter(blog => blog.id === id)[0].title
        const wantsDeleted = window.confirm(`Are you sure you want to delete "${blogTitle}"? This decision is not reversible`)
        if (!wantsDeleted)
        {
            return
        }
        if (isDrafts) {
            deleteDraftBlog(id,'guDT9CByeceyrbjRG6hOAnAs4mH3')
            setBlogs(blogs.filter(blog => blog.id !== id))
        }
        else {
            deleteBlogPost(id,'guDT9CByeceyrbjRG6hOAnAs4mH3')
            setBlogs(blogs.filter(blog => blog.id !== id))
        }
    }

    const renderBlogs = () => {
        const topicBlogs = blogs.filter(b => !isDrafts ? b.tag === topic : true);
        return topicBlogs.length > 0 ? topicBlogs.map((blog, index) => 
            <BlogFeedItem needsViewed={needsViewed} isDrafts={!!isDrafts} isAuth={!!auth.currentUser?.uid} blog={blog} onClickDelete={() => deleteDraftOrPost(blog.id)} />
        ) : <p>No blogs of this type for now! Hang tight</p>
    }

    useEffect(() => {
        fetchBlogs()
    }, [])
    console.log(blogs)
    return isLoading ? <Loader /> : (
        <div className='flex flex-col items-center w-full md:w-4/5 min-w-[20rem] pb-8 pt-8 gap-12'>
            {renderBlogs()}
        </div>
    );
}