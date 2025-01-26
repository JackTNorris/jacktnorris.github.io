//TODO: migrate completely over to vanilla html, css, and js
import ProfilePicture from '../../assets/images/pfp.jpeg';
import { TextCarousel } from './TextCarousel';
import '../Header.css';
import { twMerge } from 'tailwind-merge';

export type HeroProps = {
    currBackground: string;
    onSelectBackground: (background: string) => void;
}

export const Hero = ({onSelectBackground, currBackground}: HeroProps) => {
    const backgroundOptions = [{name: 'boids', icon: '🐦‍⬛'}, {name: 'conway', icon: '👾'}, {name: 'tbp', icon: '☄️'}];
    return (
        <div className='-mt-20 pt-20 flex flex-col flex-1 w-screen min-h-screen items-center justify-center'>
            <div className='flex p-4 flex-row justify-end items-end top-20 pb-20 left-0 -z-5 absolute w-full min-h-screen'>
                <div className='p-2 flex flex-row gap-2 text-xl'>
                    {backgroundOptions.map(item => (<button className={twMerge('rounded-md transition-all focus:outline-none hover:-translate-y-2', item.name == currBackground && 'bg-blue-300')} onClick={() => onSelectBackground(item.name)}>{item.icon}</button>))}
                </div>
            </div>
            <h1 className='press-start text-xl md:text-2xl font-extrabold p-3 text-center'>Hi, I'm Jack</h1>
            <img src={ProfilePicture} alt='me' className='rounded-full max-h-[50vh] aspect-square p-3'/>
            {/*<h3 className='text-xl font-extrabold underline p-3'>I'm a</h3>*/}
            <TextCarousel items={['Peace Corps Volunteer', 'Software Developer', 'Violinist', 'Outdoors-Lover']}/>
        </div>
    )
}