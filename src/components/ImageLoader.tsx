import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import './ImageLoader.css'

export type ImageLoaderProps = {
    className?: string;
    src: string;
    alt?: string;
    onClick?: () => void;
    onMouseLeave?: () => void;
    onMouseEnter?: () => void;
}
export const ImageLoader = ({src, className, alt, onClick, onMouseLeave, onMouseEnter}: ImageLoaderProps) => {
    const [imgSrc, setImgSrc] = useState('');
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImgSrc(src);
        };
      }, [src]);

    return imgSrc != '' ? <img onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} src={imgSrc} className={twMerge(className)} onClick={onClick} alt={alt} /> : <div className={twMerge(className, 'bg-gray-100 gradient-shine')}></div>
    
}