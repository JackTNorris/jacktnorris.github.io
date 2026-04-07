// # TODO: add prettier
// # TODO: consistently using tag vs topic
import { PortfolioFeed } from 'components/portfolio/PortfolioFeed';
import { TopicSelector } from 'components/TopicSelector';
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { emojiTopicToUrl, urlToEmojiTopic } from 'utils/blogEmojiEncoder';
export const Portfolio = () => {
    const DEFAULT_TOPIC = 'research' // URL form
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        document.title = 'Jack Norris | Portfolio'
        const topicInUrl = searchParams.get("topic")
        if (!topicInUrl) {
            const next = new URLSearchParams(searchParams)
            next.set("topic", DEFAULT_TOPIC)
            setSearchParams(next, { replace: true })
        }
    }, [searchParams])
    const topicParam = searchParams.get("topic") ?? DEFAULT_TOPIC
    const selectedTopic = urlToEmojiTopic(topicParam) // emoji version used by UI + BlogFeed

    const handleSelectTopic = (t: string) => {
        const next = new URLSearchParams(searchParams)
        next.set("topic", emojiTopicToUrl(t))
        setSearchParams(next)
    }
    return (

        <div className="site-container flex flex-col items-center min-h-screen">
            <TopicSelector
                onSelectTopic={handleSelectTopic}
                topics={["🧪 research", "🧠 general software", "💪 hardware", "🕹️ games", "🔮 other" ]}
                defaultTopic='🧪 research'
            />
            <PortfolioFeed topic={selectedTopic} />
        </div>
        
    );
}
