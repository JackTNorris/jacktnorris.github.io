// TODO: refactor this component to not need it anymore. Can probably refactor BlogFeed instead

import { BlogFeed } from "components/blog/BlogFeed";

export const DraftBlogs = () => {
    return (
        <div className="site-container flex flex-col items-center">
            <BlogFeed isDrafts={true} topic="apple" />
        </div>
    );
}