import { BlogCreator } from "../components/blog/BlogCreator"
import { BlogFeed } from "../components/blog/BlogFeed"
import { BlogPostNavigator } from "../components/blog/BlogTopicNavigator"

export const Blog = () => {
    return (
        <div className='flex pt-20 flex-col items-center'>
            <div className='m-4 self-end'>
                <BlogCreator />
            </div>
            <BlogPostNavigator />
            <BlogFeed topic="apples" />
        </div>
    )
}
