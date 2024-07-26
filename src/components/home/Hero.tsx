//TODO: migrate completely over to vanilla html, css, and js
import ProfilePicture from '../../assets/images/pfp.jpeg';
import { TextCarousel } from './TextCarousel';
import '../Header.css';
export const Hero = () => {
    return (
        <div className='-mt-20 flex flex-col w-screen min-h-screen items-center justify-center'>
            <h1 className='press-start text-2xl font-extrabold p-3 text-center'>Hi, I'm Jack</h1>
            <img src={ProfilePicture} alt='me' className='rounded-full w-[30rem] object-scale-down p-3'/>
            {/*<h3 className='text-xl font-extrabold underline p-3'>I'm a</h3>*/}
            <TextCarousel items={['PCV', 'Software Developer', 'Violinist', 'Aspiring Researcher']}/>
        </div>
    )
}