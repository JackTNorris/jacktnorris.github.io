import { twMerge } from "tailwind-merge"
import { BlogCreator } from "../../components/blog/BlogCreator"
import { BlogFeed } from "../../components/blog/BlogFeed"
import { useAuth } from "../../hooks/useAuth"

export const Blog = () => {
    const currentUser = useAuth();
    return (
        <div className='site-container flex flex-col items-center'>
            <div className={twMerge('m-4 self-end', !currentUser && 'hidden')}>
                <BlogCreator />
            </div>
            <BlogFeed topic="apples" />
        </div>
    )
}
