export type TopicSelectorProps = {
    topics: string[]
    onSelectTopic: (topic: string) => void
}
export const TopicSelector = ({onSelectTopic, topics}: TopicSelectorProps) => {
    return topics.length ? (
    <div>
        <select onChange={t => onSelectTopic(t.target.value)} className="border rounded-md p-3">
           {topics.map(topic => <option selected={topic == "peace corps"} value={topic}>{topic.toUpperCase()}</option>)}
        </select>
    </div>
    ) : <></>
}