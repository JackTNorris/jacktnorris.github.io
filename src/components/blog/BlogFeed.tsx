import { twMerge } from "tailwind-merge";

export type BlogFeedProps = {
    topic: string
}
export const BlogFeed = ({topic}: BlogFeedProps) => {
    const blogs = [
        {
            title: 'stuff',
            post_content: 'stuff',
            images: ['', '', '']
        },
        {
            title: 'stuff',
            post_content: 'stuff',
            images: ['', '', '']
        },
        {
            title: 'stuff',
            post_content: 'stuff',
            images: ['', '', '']
        },
    ]
    return (
        <div className='flex flex-col w-3/5 min-w-80'>
            {blogs.map((blog, index) => 
            <div className={twMerge('w-full aspect-[5/2] m-12 bg-slate-100 shadow-md rounded-lg', index % 2 ? 'self-start' : 'self-end')}>

            </div>)}
        </div>
    );
}