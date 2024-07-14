import SkydivePicture from '../../assets/images/skydive.jpeg'
export const AboutMe = () => {
    return (
        <div className='site-container flex-col sm:flex-row flex w-screen sm:h-screen px-8 gap-5'>
            <div className='flex flex-col h-full w-full justify-center items-center gap-3'>
                <div className='flex w-full flex-row justify-center sm:justify-start'>
                    <h1 className='underline text-4xl font-extrabold'>A little about me...</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='font-bold text-sm sm:text-xl'>
                    I'm currently a Peace Corps Health Volunteer in Paraguay, putting into practice my belief that service is a responsibility that extends beyond the domain of doctors and social workers -- it's also the duty of scientists and engineers as well.
                    </p>
                    <p className='font-bold text-sm sm:text-xl'>
                    In my freetime, I love to go an adventure outside, play my violin, read, or write code!
                    </p>
                    <p className='font-bold text-sm sm:text-xl'>
                    Upon to my return to the states, I plan to attend graduate school for computer science, ideally doing research that hybridizes computer science with medicine. Scroll down to know a little bit more about me!
                    </p>
                </div>
            </div>
            <div className='h-full w-full flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center relative h-56 aspect-square rotate-0 transition-all sm:h-96'>
                <div className='rounded-lg absolute translate-y-5 translate-x-5 border-2 border-blue-400 h-56 aspect-square -z-10 sm:h-96'></div>
                    <img alt='Me skydiving' src={SkydivePicture} className='h-56 aspect-square grayscale hover:grayscale-0 hover:translate-x-3 hover:translate-y-3 rounded-lg transition-all sm:h-96 shadow-[35px_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-blue-500' />
                </div>
            </div>
        </div>
    );
}