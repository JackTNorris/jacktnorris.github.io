import { useState } from "react"

export type TextCarouselProps = {
    items: string[]
}
export const TextCarousel = ({items}: TextCarouselProps) => {
    const [currentItem, setCurrentItem] = useState(0)
    const tempItems = items.slice(0).concat(items).concat(items.slice(0, 1))
    return (
    <div className='w-48 h-8 overflow-hidden text-center'>
        {tempItems.map((item, index) => <p key={index} className='text-2xl text-blue-500 font-bold animate-snap-slide-down'>{item}</p>)}
    </div>)
}