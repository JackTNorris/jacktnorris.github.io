// TODO: add in better handling of loading
import { twMerge } from "tailwind-merge"
import { BlogCreator } from "components/blog/BlogCreator"
import { BlogFeed } from "components/blog/BlogFeed"
import { useAuth } from "hooks/useAuth"
import { TopicSelector } from "components/blog/TopicSelector"
import { useEffect, useState } from "react"
import { fetchBlogTags } from "services/blogService"
import { Notifier } from "components/Notifier"
import { useSearchParams } from "react-router-dom"
import { emojiTopicToUrl, urlToEmojiTopic } from "utils/blogEmojiEncoder"

export const Blog = () => {
    const [blogTopics, setBlogTopics] = useState<string[]>([])
    const [searchParams, setSearchParams] = useSearchParams()
    const DEFAULT_TOPIC = "peace-corps" // URL form

    const currentUser = useAuth()

    const fetchBlogTopicsFromServer = async () => {
        const bT = await fetchBlogTags("guDT9CByeceyrbjRG6hOAnAs4mH3")
        setBlogTopics(bT)
    }

    useEffect(() => {
        const topicInUrl = searchParams.get("topic")
        if (!topicInUrl) {
            const next = new URLSearchParams(searchParams)
            next.set("topic", DEFAULT_TOPIC)
            setSearchParams(next, { replace: true })
        }
    }, [searchParams])

    useEffect(() => {
        fetchBlogTopicsFromServer()
        document.title = "Jack Norris | Blog"
    }, [])

    const topicParam = searchParams.get("topic") ?? DEFAULT_TOPIC
    const selectedTopic = urlToEmojiTopic(topicParam) // emoji version used by UI + BlogFeed

    const handleSelectTopic = (t: string) => {
        const next = new URLSearchParams(searchParams)
        next.set("topic", emojiTopicToUrl(t))
        setSearchParams(next)
    }

    return (
        <div className="site-container flex flex-col items-center min-h-screen">
            <div className="flex flex-row w-screen">
                <div className={twMerge("md:flex flex-row flex-1 m-4 justify-start hidden md:visible")}>
                    <Notifier />
                </div>
                <div className={twMerge("flex flex-row flex-1 m-4 justify-end", !currentUser && "hidden")}>
                    <BlogCreator />
                </div>
            </div>

            <TopicSelector
                onSelectTopic={handleSelectTopic}
                topics={blogTopics}
            />

            <BlogFeed topic={selectedTopic} />
        </div>
    )
}
