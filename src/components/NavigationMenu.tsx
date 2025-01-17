import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

export const NavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {name: 'Home', link: '/home'},
        {name: 'Portfolio', link: '/portfolio'},
        {name: 'Blog', link: '/blog', className: 'text-red-500'},
        {name: 'Resume', link: '/resume.pdf'},
    ]
    const getMenuItemsDesktop = () => {
        return menuItems.map((item, index) => {
            if(index === menuItems.length - 1) {
                return <a key={index} href={item.link} target='_blank' rel="noreferrer"><p className='transition duration-500 font-bold bg-blue-300 hover:underline hover:cursor-pointer p-2 border rounded-lg border-blue-600 hover:bg-blue-500 hover:text-white' key={index}>{item.name}</p></a>
            }
            return <a key={index} href={item.link}><p className='font-bold transition duration-800 hover:underline hover:cursor-pointer hover:translate-y-[-20%]' key={index}>{`${item.name}`}</p></a>
        });
    }

    const getMenuItemsMobile = () => {
        return menuItems.map((item, index) => {
            if(index === menuItems.length - 1) {
                return <a key={index} href={item.link}><p className='transition duration-500 font-bold bg-blue-300 hover:underline hover:cursor-pointer p-2 border rounded-lg border-blue-600 hover:bg-blue-500 hover:text-white' key={index}>{item.name}</p></a>
            }
            return <a key={index} href={item.link}><p className='font-bold underline' key={index}>{`${item.name}`}</p></a>
        });
    }
    return (
    <>
    <div className='hidden sm:display-block sm:flex flex-row h-full items-center gap-3 justify-end flex-1 p-3'>
        {getMenuItemsDesktop()}
    </div>
    <div className="absolute sm:hidden w-screen h-full flex flex-row justify-end items-center">
        <div>
            <div onClick={() => setIsOpen((curr_state) => !curr_state)}>
                <TiThMenu className={twMerge('h-10 w-10 text-gray-400 transition duration-500', isOpen && 'rotate-90')}/> 
            </div>
            <div className="absolute mt-20 left-0 top-0 w-screen z-10 p-2">
                <div className={twMerge('flex rounded-md w-full self-start flex-col items-center gap-3 bg-slate-100 shadow-lgx overflow-hidden transition-all duration-500 h-0', isOpen && 'h-40 border border-blue-500')}>
                    {getMenuItemsMobile()}
                </div>
            </div>
        </div>
    </div>
    </>
    )
}