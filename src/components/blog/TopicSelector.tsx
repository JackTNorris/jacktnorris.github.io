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
    <div className="flex flex-col gap-2 mt-8 absolute">
    {/*
        <select onChange={t => onSelectTopic(t.target.value)} className="appearance-none border rounded-md p-3 border-green-200">
           {topics.map(topic => <option selected={topic == "peace corps"} value={topic}>{topic.toUpperCase()}</option>)}
        </select>
    */}
        <button className="select-button border w-52 p-2 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
            <span className='flex flex-row items-center justify-between'>
                <span className="selected-value">{currTopic.split(' ').map(i => capitalize(i)).join(' ')}</span>
                <span className="arrow"><img className={twMerge('transition-all h-3 w-3', isOpen && 'rotate-180')} src={chevron} /></span>
            </span>
        </button>
        <div className={twMerge('transition-all shadow-md w-52 bg-white rounded-xl h-0 overflow-hidden', isOpen && 'border h-36 overflow-scroll')}>
            {topics.map(topic => <div onClick={() => {setCurrTopic(topic); onSelectTopic(topic); setIsOpen(false)} } className='py-2 border hover:bg-slate-200 hover:cursor-pointer'>{topic.split(' ').map(i => capitalize(i)).join(' ') }</div>)}
        </div>
    </div>
    ) : <></>
}