import Markdown from "react-markdown";
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
        <div className='flex flex-col w-3/5 min-w-[20rem]'>
            {blogs.map((blog, index) => 
            <div className={twMerge('w-4/5 aspect-[5/2] mt-12 bg-slate-100 shadow-md rounded-lg', index % 2 ? 'self-end' : 'self-start')}>
                {/*<Markdown skipHtml={false} rehypePlugins={[rehypeRaw]} className='prose'>{formValue.content}</Markdown>*/}
            </div>)}
        </div>
    );
}