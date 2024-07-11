//TODO: migrate completely over to vanilla html, css, and js
import ProfilePicture from '../../assets/images/pfp.jpeg';
import { TextCarousel } from './TextCarousel';
import '../Header.css';
export const Hero = () => {
    return (
        <div className='-mt-20 site-container flex flex-col w-screen min-h-screen items-center justify-center'>
            <h1 className='text-3xl font-extrabold p-3 text-center'>Jack Norris</h1>
            <img src={ProfilePicture} alt='me' className='rounded-full w-96 object-scale-down p-3'/>
            {/*<h3 className='text-xl font-extrabold underline p-3'>I'm a</h3>*/}
            <TextCarousel items={['Peace Corps Volunteer', 'Software Developer', 'Violinist', 'Outdoors-Lover']}/>
        </div>
    )
}