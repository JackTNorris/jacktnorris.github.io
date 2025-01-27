import { useState } from "react";
import { twMerge } from "tailwind-merge"

export const SpotifyPlayer = () => {
    const [hoverRecord, setHoverRecord] = useState(false);
    return (
        <div className="md:flex flex-col gap-3 w-36 hidden md:visible items-end">
            <p className="press-start text-sm">What I'm Listening To:</p>
            <div className="h-24 w-24">
                <img className={twMerge("transition-all absolute mt-2 h-20 w-20", hoverRecord && '-ml-10 animate-spin')} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/LP_Vinyl_Symbol_Icon.png/1200px-LP_Vinyl_Symbol_Icon.png" />
                <img onMouseLeave={() => setHoverRecord(false)} onMouseEnter={() => setHoverRecord(true)} className="transition-all absolute h-24 w-24 rounded-lg shadow-2xl shadow-blue-300 hover:scale-105 hover:cursor-pointer" src="https://fiu-original.b-cdn.net/fontsinuse.com/use-images/51/51192/51192.jpeg?filename=C9H8-PWUIAAzbQ2-jpg-large-e.jpeg" />  
            </div>
        </div>
    )
}