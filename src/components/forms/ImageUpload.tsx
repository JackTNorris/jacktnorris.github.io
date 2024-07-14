import { ChangeEvent } from "react";
import { TiUpload } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

export type ImageUploadProps = {
    handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void
    images?: File[]
}
export const ImageUpload = ({handleFileChange, images}: ImageUploadProps) => {
    return (
        <label className='flex flex-col justify-center items-center w-full rounded-md max-w-[50rem] min-h-28 border border-dashed hover:bg-slate-200 transition-all hover:cursor-pointer'>
            {
                images && images.length > 0 ? 
                <div className='flex flex-row gap-2 overflow-scroll'>
                    {images.map(img => {
                        return (
                            <img src={URL.createObjectURL(img as any)} className='w-36' alt='New Uploaded Image' />
                        )
                    })}
                </div> : <><TiUpload className={twMerge('h-10 w-10 text-gray-400 transition duration-500')}/>             <p className='text-sm'>Upload Images</p>
                </>

            }
            <input
                type='file'
                className='hidden'
                onChange={event => {
                    handleFileChange(event);
                }}
                multiple
            />
        </label>
    )
}