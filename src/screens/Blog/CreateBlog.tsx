import { ChangeEvent } from "react"

export const CreateBlog = () => {
    const blogCategories = [
        'Travel',
        'Learning',
        'Life',
        'Random'
    ]

    const onPressPublish = () => {
        const wantsPublished = window.confirm('Are you sure you want to publish this blog?')
        if (wantsPublished) {
            //publish the blog
        }
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div className='site-container'>
            <div className='flex flex-col items-center p-5 gap-3 px-8'>
                <input className='p-1 w-full max-w-[50rem] h-10 border rounded-md' placeholder="Title" />
                <select className='p-1 w-full max-w-[50rem] h-10 border rounded-md' aria-placeholder="Category" defaultValue={""}>
                    <option value="" disabled>Category</option>
                    {blogCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <textarea className='w-full p-1 max-w-[50rem] h-96 border rounded-md' placeholder="Content"></textarea>
                <label className='w-full max-w-[50rem] h-8 border-blue-500 border text-black rounded-md text-center cursor-pointer'>Upload Image</label>
                <button className='w-full max-w-[50rem] h-8 border-blue-500 border text-black rounded-md'>Save</button>
                <button className='w-full max-w-[50rem] h-8 bg-blue-500 text-white rounded-md' onClick={onPressPublish}>Publish</button>
                <label className='w-full max-w-[50rem] h-8 bg-blue-500'>
                        <div className='text-center text-lg text-white'>Upload Image</div>
                        <input
                            type='file'
                            className='hidden'
                            onChange={event => {
                                handleFileChange(event);
                            }}
                            multiple
                        />
                </label>
            </div>
        </div>
    )
}