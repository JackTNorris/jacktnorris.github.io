import SkydivePicture from '../../assets/images/skydive.jpeg'
export const AboutMe = () => {
    return (
        <div className='flex w-screen min-h-screen justify-between px-8'>
            <div className='flex w-full h-full'>
                <h1 className='underline'>About Me</h1>
                <p>
                    I am a software developer with a passion for creating web applications. I have experience with React, Node, Express, and MongoDB. I am always looking to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects.
                </p>
            </div>
            <div className='flex flex-col justify-center items-center w-2/5'>
                <div className='h-96 w-96'>
                    <img src={SkydivePicture} className='h-96 w-96 rounded-lg' />
                    <div className='relative top-0 bg-green-500 h-96 w-96'>
                        hello my dude
                    </div>
                </div>
            </div>
        </div>
    );
}