// TODO: fix messy state update
import chevron from 'assets/images/chevron.png'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import _, { capitalize } from 'lodash'
export type TopicSelectorProps = {
    topics: string[]
    onSelectTopic: (topic: string) => void
}
export const TopicSelector = ({onSelectTopic, topics}: TopicSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [currTopic, setCurrTopic] = useState('🕊️ peace corps')
    return topics.length ? (
    <div className="flex flex-row justify-center h-26 my-6 relative z-10">
        <div className='h-26 absolute'>
            <button className="border w-52 p-2 rounded-lg focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <span className='flex flex-row items-center justify-between'>
                    <span className="selected-value">{currTopic.split(' ').map(i => capitalize(i)).join(' ')}</span>
                    <span className="arrow"><img className={twMerge('transition-all h-3 w-3', isOpen && 'rotate-180')} src={chevron} /></span>
                </span>
            </button>
            <div className={twMerge('transition-all shadow-md w-52 bg-white rounded-xl h-0 overflow-hidden', isOpen && 'border h-36 overflow-scroll')}>
                {topics.map(topic => <div onClick={() => {setCurrTopic(topic); onSelectTopic(topic); setIsOpen(false)} } className='p-2 border hover:bg-slate-200 hover:cursor-pointer'>{topic.split(' ').map(i => capitalize(i)).join(' ') }</div>)}
            </div>
        </div>
    </div>
    ) : <></>
}