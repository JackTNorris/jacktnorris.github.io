import { twMerge } from "tailwind-merge"
import { BlogCreator } from "../../components/blog/BlogCreator"
import { BlogFeed } from "../../components/blog/BlogFeed"
import { BlogPostNavigator } from "../../components/blog/BlogTopicNavigator"
import { useAuth } from "../../hooks/useAuth"
import { auth } from "../../loaders/firebase"

export const Blog = () => {
    const currentUser = useAuth();
    return (
        <div className='site-container flex flex-col items-center'>
            <div className={twMerge('m-4 self-end', !!!currentUser && 'hidden')}>
                <BlogCreator />
            </div>
            <BlogFeed topic="apples" />
        </div>
    )
}
