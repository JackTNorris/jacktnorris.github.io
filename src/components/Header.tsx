import logo from '../assets/images/logo.png';
import { NavigationMenu } from './NavigationMenu';
import './Header.css'
export const Header = () => {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', Math.min((window.scrollY / (document.body.offsetHeight - window.innerHeight)), 0.999999) + '');
      }, false);
    return (
    <div>
        <div className='bg-white fixed flex flex-col w-screen items-center justify-center sm:justify-start h-20 shadow-lg gap-2'>
            <div className='progress'></div>
            <div className='flex flex-row w-full'>
                <a href='/login'><img className='h-20 w-20 sticky hover:rotate-12 transition-all' src={logo} alt='my-logo'/></a>
                <NavigationMenu />
            </div>
        </div>
    </div>)
}