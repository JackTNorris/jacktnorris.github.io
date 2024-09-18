import { useEffect, useState } from "react";

export type ImageLoaderProps = {
    className?: string;
    src: string;
}
export const ImageLoader = ({src, className}: ImageLoaderProps) => {
    const [imgSrc, setImgSrc] = useState('');
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImgSrc(src);
        };
      }, [src]);

    return <></>
}