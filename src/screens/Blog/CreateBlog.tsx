//TODO: add types for this shit
import { ImageUpload } from '../../components/forms/ImageUpload'
import { ChangeEvent, useState } from "react"

export const CreateBlog = () => {
    
    const blogCategories = {
        'Life': ['Random', 'Family', 'Unfiltered', 'Travel'],
        'Learning': ['AI', 'Algorithms & Data Structures', 'Network Security', 'Low-Level Learnings'],
    }

    const [formValue, setFormValue] = useState<any & {images: File}>({
        title: '',
        category: '',
        subCategory: '',
        content: '',
        images: [],
    })


    const onPressPublish = () => {
        const wantsPublished = window.confirm('Are you sure you want to publish this blog?')
        if (wantsPublished) {
            //publish the blog
        }
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const uploadedPhotos = event.target.files;
        const newPhotos = [];
        for (const photo of uploadedPhotos as FileList) {
          newPhotos.push(photo);
        }
        setFormValue({...formValue, images: [...formValue.images, ...newPhotos]})
    }

    return (
        <div className='site-container'>
            <div className='flex flex-col items-center p-5 gap-3 px-8'>
                <input className='p-1 w-full max-w-[50rem] h-10 border rounded-md required' placeholder="Title" />
                <select className='p-1 w-full max-w-[50rem] h-10 border rounded-md' aria-placeholder="Category" defaultValue={""} onChange={event => setFormValue({...formValue, category: event.target.value})}>
                    <option value="" disabled>Category</option>
                    {Object.keys(blogCategories).map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <select className='p-1 w-full max-w-[50rem] h-10 border rounded-md' aria-placeholder="Category" defaultValue={""}>
                    <option value="" disabled>Sub-Category</option>
                    {blogCategories[formValue.category as keyof typeof blogCategories]?.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <textarea className='w-full p-1 max-w-[50rem] h-96 border rounded-md' placeholder="Content"></textarea>
                    <ImageUpload handleFileChange={handleFileChange} images={formValue.images} />
                <button className='w-full max-w-[50rem] h-8 border-blue-500 hover:bg-blue-200 border text-black rounded-md'>Save</button>
                <button className='w-full max-w-[50rem] h-8 bg-blue-500 hover:bg-blue-400 text-white rounded-md' onClick={onPressPublish}>Publish</button>
            </div>
        </div>
    )
}