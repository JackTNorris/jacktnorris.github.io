import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"

export const SpotifyPlayer = () => {

    useEffect(() => {
        const getTrack = async () => {
            const temp = await fetch('https://api.jacktnorris.dev/spotify/getCurrentTrack')
            const data = await temp.json()
            console.log(data)
            setCurrentRecord({name: data?.name, image: data?.image.url, link: data?.link})
        }
        getTrack()  
    }, [])

    const [currentRecord, setCurrentRecord] = useState<{name?: string, image?: string, link?: string}>({})
    const [hoverRecord, setHoverRecord] = useState(false);
    return (
        <div className="md:flex flex-col gap-3 w-36 hidden md:visible items-start">
            <p className="press-start text-sm">What I'm Listening To:</p>
            <div className="h-24 w-24">
                {currentRecord.name ? 
                <>
                    <div className={twMerge('transition-all absolute flex flex-row', hoverRecord && 'ml-14')}>
                        <img className={twMerge("transition-all mt-2 h-20 w-20", hoverRecord && 'animate-spin')} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/LP_Vinyl_Symbol_Icon.png/1200px-LP_Vinyl_Symbol_Icon.png" />
                    </div>
                    <a href={currentRecord.link} target="_blank"><img onMouseLeave={() => setHoverRecord(false)} onMouseEnter={() => setHoverRecord(true)} className="transition-all absolute h-24 w-24 rounded-lg shadow-2xl shadow-blue-300 hover:scale-105 hover:cursor-pointer" src={currentRecord?.image} /></a>
                </>
                : []}
            </div>
        </div>
    )
}