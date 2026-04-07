// TODO: cleanup loading logic, refactor this to just display blogs not fetch
import { useEffect, useRef, useState } from "react";
import { PortfolioFeedItem } from "./PortfolioFeedItem";
import { projects } from "./projects";
import { filter } from "lodash";

export type PortfolioFeedProps = {
    topic: string;
    recentFirst?: boolean;
    isDrafts?: boolean;
    enableFiltering?: boolean;
}
export const PortfolioFeed = ({topic, isDrafts}: PortfolioFeedProps) => {
    const [needsViewed, setNeedsViewed] = useState<string | undefined>()

    useEffect(() => {
    })


    const renderPortfolioProjects = () => {
        const projectsFiltered = projects.filter(b => !isDrafts ? b.tag == topic : true);
        return projects.length > 0
            ? filter(projectsFiltered, project => project.tag === topic).sort((a, b) => b.year - a.year).map(project => (
                <PortfolioFeedItem key={project.id} project={project} />
            ))
            : <p>No projects of this type for now! Hang tight</p>;
    }


    return  (
        <div className='flex flex-col items-center w-full md:w-4/5 min-w-[20rem] pb-8 pt-8 gap-12'> 
            {renderPortfolioProjects()}
        </div>
    );
}