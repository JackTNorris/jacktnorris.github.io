import logo from '../assets/images/logo.png';
import { NavigationMenu } from './NavigationMenu';
import './Header.css'
import { useRef } from 'react';

export const Header = () => {
    const progressScroll = useRef<HTMLDivElement>(null);
    window.addEventListener('scroll', () => {
        if (progressScroll.current)
        {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressScroll.current.style.width = scrollPercent + "%"
        }
      });
    return (
    <div>
        <div className='bg-white absolute flex flex-col w-screen items-center justify-center sm:justify-start h-20 shadow-lg gap-2 z-20'>
            <div ref={progressScroll} className='progress'></div>
            <div className='flex flex-row w-full'>
                <a className='z-10' href='/login'><img className='h-20 w-20 sticky hover:rotate-6 transition-all' src={logo} alt='my-logo'/></a>
                <NavigationMenu />
            </div>
        </div>
    </div>)
}