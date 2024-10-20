export type TopicSelectorProps = {
    topics: string[]
}
export const TopicSelector = ({topics}: TopicSelectorProps) => {
    return (
    <div>
        <select className="border rounded-md p-3">
           {topics.map(topic => <option>{topic.toUpperCase()}</option>)}
        </select>
    </div>
    )
}