// TODO: add in better handling of loading
import { twMerge } from "tailwind-merge"
import { BlogCreator } from "../../components/blog/BlogCreator"
import { BlogFeed } from "../../components/blog/BlogFeed"
import { useAuth } from "../../hooks/useAuth"
import { TopicSelector } from "components/blog/TopicSelector"
import { useEffect, useState } from "react"
import { fetchBlogTags } from "services/blogService"
import { Notifier } from "components/Notifier"

export const Blog = () => {
    const [blogTopics, setBlogTopics] = useState<string[]>([])
    const [selectedTopic, setSelectedTopic] = useState<string>('🕊️ peace corps');
    const fetchBlogTopics = async () => {
        const bT = await fetchBlogTags('guDT9CByeceyrbjRG6hOAnAs4mH3')
        setBlogTopics(bT);
    }
    const currentUser = useAuth();

    useEffect(() => {
        fetchBlogTopics();
        document.title = 'Jack Norris | Blog'
    }, [])
    
    return (
        <div className='site-container flex flex-col items-center min-h-screen'>
            <div className={twMerge('m-4 self-end', !currentUser && 'hidden')}>
                <BlogCreator />
            </div>
            <div className={twMerge('m-4 self-start hidden md:visible md:block')}>
                <Notifier />
            </div>
            <TopicSelector onSelectTopic={(t) => {setSelectedTopic(t)}} topics={blogTopics} />
            <BlogFeed topic={selectedTopic} />
        </div>
    )
}
