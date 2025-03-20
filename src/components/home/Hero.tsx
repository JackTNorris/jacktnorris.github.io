//TODO: migrate completely over to vanilla html, css, and js
import ProfilePicture from '../../assets/images/pfp.jpeg';
import { TextCarousel } from './TextCarousel';
import '../Header.css';
import { twMerge } from 'tailwind-merge';
import { SpotifyPlayer } from 'components/animations/SpotifyPlayer';
import { ImageLoader } from 'components/ImageLoader';

export type HeroProps = {
    currBackground: string;
    onSelectBackground: (background: string) => void;
}

export const Hero = ({onSelectBackground, currBackground}: HeroProps) => {
    const backgroundOptions = [{name: 'boids', icon: '🐦‍⬛'}, {name: 'conway', icon: '👾'}, {name: 'tbp', icon: '☄️'}];
    return (
        <div className='-mt-20 pt-20 flex flex-col flex-1 w-screen min-h-screen items-center justify-center'>
            <div className='flex p-4 flex-row justify-end items-end top-20 pb-20 left-0 -z-5 absolute w-full h-full'>
                <div className='p-2 flex flex-1 flex-row justify-between text-xl h-full'>
                    <div className='flex flex-col items-end justify-end'>
                        <div className='text-left'>
                            <SpotifyPlayer />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-start justify-end h-full gap-2'>
                            {backgroundOptions.map(item => (<button className={twMerge('rounded-md transition-all focus:outline-none hover:-translate-y-2', item.name == currBackground && 'bg-blue-300')} onClick={() => onSelectBackground(item.name)}>{item.icon}</button>))}
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='press-start text-xl md:text-2xl font-extrabold p-3 text-center'>Hi, I'm Jack</h1>
            <ImageLoader alt='me' src={ProfilePicture} className='rounded-full w-full max-w-[50vh] aspect-square p-3'/>
            {/*<h3 className='text-xl font-extrabold underline p-3'>I'm a</h3>*/}
            <TextCarousel items={['Peace Corps Volunteer', 'Software Developer', 'Violinist', 'Outdoors-Lover']}/>
        </div>
    )
}