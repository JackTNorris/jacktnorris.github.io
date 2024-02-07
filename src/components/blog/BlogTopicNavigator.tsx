import { useState } from "react"
import { twMerge } from "tailwind-merge"

export type BlogPostNavigatorProps = {
    onChangeTopic?: (newTopic: string) => void 
}

export const BlogPostNavigator = ({onChangeTopic}: BlogPostNavigatorProps) => {
    const topics = [
        'Travel',
        'Learning',
        'Random',
    ]
    const [currentTopic, setCurrentTopic] = useState(0)

    const changeTopic = (topic: string, index: number) => {
        setCurrentTopic(index)
        onChangeTopic && onChangeTopic(topic)
    }

    const renderTopicsMenu = () => {
        return topics.map((topic, index) => {
            return <p className={twMerge('transition-all duration-500 border px-5 text-xl hover:cursor-pointer', topics[currentTopic] === topic && 'bg-blue-300')} onClick={() => changeTopic(topic, index)}>{topic}</p>
        })
    }

    return (
    <div className='flex flex-col items-center pt-3'>
        <div className='grid grid-cols-3 grid-rows-1 text-center border rounded-md w-80'>
            {renderTopicsMenu()}
        </div>
        <div style={{transform: `translateX(${currentTopic}00%)`}} className='bg-blue-700 transition-all ease-in-out duration-200 delay-75 h-1 w-[107px] self-start' />
    </div>)
}