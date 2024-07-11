import logo from '../assets/images/logo.png';
import { NavigationMenu } from './NavigationMenu';
import './Header.css'
export const Header = () => {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) + '');
      }, false);
    return (
    <div>
        <div className='bg-white fixed flex flex-col w-screen items-center justify-center sm:justify-start h-20 shadow-lg gap-2'>
            <div className='flex flex-row w-full'>
                <a href='/login'><img className='h-20 w-20 sticky' src={logo} alt='my-logo'/></a>
                <NavigationMenu />
            </div>
            <div className='progress'></div>
        </div>
    </div>)
}