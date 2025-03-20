import { ImageLoader } from 'components/ImageLoader';
import SkydivePicture from '../../assets/images/skydive.jpeg'
export const AboutMe = () => {
    return (
        <div className='flex-col min-h-screen lg:flex-row flex w-screen md:h-screen px-8 py-10 lg:px-36 gap-3'>
            <div className='flex flex-col h-full w-full justify-center items-center gap-3'>
                <div className='flex w-full flex-row justify-center md:justify-start'>
                    <h1 className='text-lg md:text-3xl font-extrabold press-start text-blue-500'>A little about me...</h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='font-bold text-sm sm:text-xl'>
                    At the moment, I'm serving as a Peace Corps Health Volunteer in rural Paraguay, putting into practice my belief that service is a responsibility that extends beyond the domain of doctors and social workers -- it's the duty of scientists and engineers as well.
                    </p>
                    <p className='font-bold text-sm sm:text-xl'>
                    When I'm not writing code, I love adventuring outside, tinkering with small electronics, or fiddling around with my violin. 
                    </p>
                    <p className='font-bold text-sm sm:text-xl'>
                    Upon to my return to the states, I plan to attend graduate school for computer science. This site is a pet project during service (and therefore a work-in-progress). Feel free to poke around!
                    </p>
                </div>
            </div>
            <div className='h-full w-full flex flex-col justify-center items-center lg:items-end'>
                <div className='flex flex-col justify-center items-center relative h-56 aspect-square rotate-0 transition-all lg:h-96'>
                <div className='rounded-lg absolute translate-y-5 translate-x-5 border-2 border-blue-400 h-56 aspect-square -z-10 lg:h-96'></div>
                    <ImageLoader alt='Me skydiving' src={SkydivePicture} className='h-56 aspect-square grayscale hover:grayscale-0 hover:translate-x-3 hover:translate-y-3 rounded-lg transition-all md:h-96 shadow-[35px_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-blue-500' />
                </div>
            </div>
        </div>
    );
}