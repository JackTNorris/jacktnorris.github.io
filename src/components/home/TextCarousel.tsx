import { useState } from "react"

export type TextCarouselProps = {
    items: string[]
}
export const TextCarousel = ({items}: TextCarouselProps) => {
    const [currentItem, setCurrentItem] = useState(0)
    const tempItems = items.slice(0).concat(items).concat(items.slice(0, 1))
    return (
    <div className='w-64 h-8 overflow-hidden text-center -z-10'>
        {tempItems.map((item, index) => <p key={index} className='text-2xl font-bold animate-snap-slide-down text-blue text-blue-500'>{item}</p>)}
    </div>)
}