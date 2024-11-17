// TODO: add in better handling of loading
import { twMerge } from "tailwind-merge"
import { BlogCreator } from "../../components/blog/BlogCreator"
import { BlogFeed } from "../../components/blog/BlogFeed"
import { useAuth } from "../../hooks/useAuth"
import { TopicSelector } from "components/blog/TopicSelector"
import { useEffect, useRef, useState } from "react"
import { fetchBlogTags } from "services/blogService"

export const Blog = () => {
    const [blogTopics, setBlogTopics] = useState<string[]>([])
    const [selectedTopic, setSelectedTopic] = useState<string>('peace corps');
    const fetchBlogTopics = async () => {
        const bT = await fetchBlogTags('guDT9CByeceyrbjRG6hOAnAs4mH3')
        setBlogTopics(bT);
    }
    const currentUser = useAuth();

    useEffect(() => {
        fetchBlogTopics();
    }, [])
    
    return (
        <div className='site-container flex flex-col items-center'>
            <div className={twMerge('m-4 self-end', !currentUser && 'hidden')}>
                <BlogCreator />
            </div>
            <TopicSelector onSelectTopic={(t) => {setSelectedTopic(t)}} topics={blogTopics} />
            <BlogFeed topic={selectedTopic} />
        </div>
    )
}
