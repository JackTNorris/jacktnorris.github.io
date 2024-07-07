import logo from '../assets/images/logo.png';
import { NavigationMenu } from './NavigationMenu';
export const Header = () => {
    return (
    <div className='bg-white fixed flex flex-row w-screen items-center justify-center sm:justify-start h-20 shadow-lg gap-2'>
        <a href='/login'><img className='h-20 w-20 sticky' src={logo} alt='my-logo'/></a>
        <NavigationMenu />
    </div>)
}