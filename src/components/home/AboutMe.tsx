import SkydivePicture from '../../assets/images/skydive.jpeg'
export const AboutMe = () => {
    return (
        <div className='site-container flex w-screen min-h-screen justify-between px-8'>
            <div className='flex w-full'>
                <h1 className='underline text-4xl'>Welcome to my website!</h1>
                <p>
                    I am a software developer with a passion for creating web applications. I have experience with React, Node, Express, and MongoDB. I am always looking to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects.
                </p>
            </div>
            <div className='flex flex-col justify-center items-center w-2/5'>
                <div className='relative h-96 w-96 hover:rotate-3 transition-all'>
                    <div className='rounded-lg absolute translate-y-5 translate-x-5 border-2 border-blue-400 w-96 h-96 -z-10'></div>
                    <img src={SkydivePicture} className='h-96 w-96 grayscale hover:grayscale-0 rounded-lg transition-all' />
                </div>
            </div>
        </div>
    );
}