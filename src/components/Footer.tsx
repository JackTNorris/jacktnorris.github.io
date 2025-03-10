import github from 'assets/images/socials/github.png';
import linkedin from 'assets/images/socials/linkedin.png';
import instagram from 'assets/images/socials/instagram.png';
export const Footer = () => {
    return (
    <div className="flex gap-3 flex-col justify-center items-center w-screen h-36 bg-white shadow-[0_35px_80px_-15px_rgba(0,0,0,0.3)]">
        <p className='bottom-border px-9 text-xs'>Built by Jack Norris</p>
        <div className='flex flex-row gap-4 justify-center'>
            <a href="https://github.com/JackTNorris"><img className='w-8 transition-all h-8 hover:opacity-25 hover:cursor-pointer hover:-translate-y-1' src={github} /></a>
            <a href="https://www.linkedin.com/in/jack-t-norris/"><img className='w-8 transition-all h-8 hover:opacity-25 hover:cursor-pointer hover:-translate-y-1' src={linkedin} /></a>
            <a href="https://www.instagram.com/jacktnorris_01/"><img className='w-8 transition-all h-8 hover:opacity-25 hover:cursor-pointer hover:-translate-y-1' src={instagram} /></a>
        </div>
    </div>
    );
}