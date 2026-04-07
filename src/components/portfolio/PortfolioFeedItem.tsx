// TODO: refactor some I'im not passing props through so many components
import { MarkdownWrapper } from "components/MarkdownWrapper"
import { useEffect, useState } from "react"
import { BlogPost } from "services/blogService"
import { twMerge } from "tailwind-merge"
import { PortfolioProject } from "./projects"

export type PortfolioFeedProjectProps = {
    project: PortfolioProject,
    needsViewed?: string
}

export const PortfolioFeedItem = ({project, needsViewed}: PortfolioFeedProjectProps) => 
{
    const [isOpen, setIsOpen] = useState(needsViewed != undefined && needsViewed === project.id)
    useEffect(() => {
        setIsOpen(needsViewed != undefined && needsViewed === project.id)
    }, [needsViewed, project.id])
    return (
        <div id={project.id} className={twMerge('relative flex flex-col w-4/5 md:w-3/5 bg-slate-100 shadow-md rounded-lg p-2 md:p-8 transition-all duration-1000', !isOpen && 'min-h-48 overflow-hidden')}>
                <div className="flex flex-row justify-between py-2">
                    <p><em><b>{project.title}</b> || {project.year} </em></p>
                </div>
            <div className="flex w-full flex-row justify-center p-6">
                {project.imageSrc ? <img src={project.imageSrc} alt={project.title} className="h-full w-auto rounded-md"/> : <div className="bg-gray-300 w-full h-64 rounded-md flex items-center justify-center"><p>No image available</p></div>}
            </div>
            <MarkdownWrapper>{project.description}</MarkdownWrapper>
        </div>
    )
}