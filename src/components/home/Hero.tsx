//TODO: migrate completely over to vanilla html, css, and js
import ProfilePicture from '../../assets/images/pfp.jpeg';
import { TextCarousel } from './TextCarousel';

export const Hero = () => {
    return (
        <div className='pt-20 flex flex-col w-screen min-h-screen items-center justify-center'>
            <h1 className='text-3xl font-extrabold p-3'>Hi! I'm Jack</h1>
            <img src={ProfilePicture} alt='me' className='rounded-full w-96 object-scale-down p-3'/>
            {/*<h3 className='text-xl font-extrabold underline p-3'>I'm a</h3>*/}
            <TextCarousel items={['Peace Corps Volunteer', 'Developer', 'Violinist', 'Outdoors-Lover']}/>
        </div>
    )
}