// TODO: refactor some I'im not passing props through so many components
import { MarkdownWrapper } from "components/MarkdownWrapper"
import { useState } from "react"
import { TiArrowDown, TiBell, TiEdit, TiTrash } from "react-icons/ti"
import { Link } from "react-router-dom"
import { BlogPost } from "services/blogService"
import { twMerge } from "tailwind-merge"

export type BlogFeedItemProps = {
    blog: BlogPost,
    isDrafts: boolean,
    isAuth: boolean,
    onClickDelete: (blogId: string) => void,
    needsViewed: string | undefined
}

export const BlogFeedItem = ({blog, isDrafts, isAuth, onClickDelete, needsViewed}: BlogFeedItemProps) => 
{
    const [isOpen, setIsOpen] = useState(needsViewed != undefined && needsViewed == blog.id)
    return (
        <div id={blog.id} className={twMerge('relative flex flex-col w-4/5 aspect-[5/2] bg-slate-100 shadow-md rounded-lg p-8 transition-all duration-1000', !isOpen && 'h-96 overflow-hidden')}>
                <div className={twMerge("bottom-0 left-0 absolute flex flex-row justify-center w-full")}>
                    <div className={twMerge("flex flex-col flex-1 items-end justify-end w-full", !isOpen && "bg-gradient-to-b from-transparent opacity-90 to-white h-[22rem]")}>
                       <p onClick={() => setIsOpen((currVal) => !currVal)} className="p-3 transition-all text-xs hover:text-blue-400 hover:cursor-pointer underline hover:-translate-y-1">See {isOpen ? "Less" : "More"}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between py-2">
                    <p><em><b>{blog.title}</b> || {new Date(blog.createdOn).toDateString()} </em></p>
                    <div className={twMerge("flex flex-row", isAuth ? 'visible' : 'hidden')}>
                        <Link to={isDrafts ? `/blog/edit-draft/${blog.id}` : `/blog/edit-blog/${blog.id}`}><TiEdit className="hover:text-blue-500 hover:cursor-pointer" /></Link>
                        <TiTrash onClick={() => onClickDelete(blog.id)} className="hover:text-red-500 hover:cursor-pointer" />
                    </div>
                </div>
            <MarkdownWrapper>{blog.content}</MarkdownWrapper>
        </div>
    )
}