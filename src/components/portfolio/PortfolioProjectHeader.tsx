import { twMerge } from "tailwind-merge"

export type PortfolioProjectHeader = {
    title: string,
    year: number,
    inProgress?: boolean,
    link: string,
    technologies: string[]
}
export const PortfolioProjectHeader = ({title, year, link, technologies, inProgress}: PortfolioProjectHeader) => {
    return (
            <div className="flex flex-row justify-between py-2">
                <p><em><b>{title}</b> || {year} </em></p>
                <p>{technologies.map(() => 'hi ')}</p>
            </div>
    );
}