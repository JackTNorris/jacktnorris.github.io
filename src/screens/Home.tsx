import React from 'react';
import { TextCarousel } from '../components/home/TextCarousel';
import ProfilePicture from '../assets/images/pfp.jpeg';
import { TiArrowDown } from 'react-icons/ti';
const Home = () => {
    const randomShit = () => {
        const x = []
        for(let i = 0; i < 1000; i++) {
            x.push(i)
        }
        return x.map((item, index) => {return <p key={index}>{item}</p>});
    }
    return (
        <div className='pt-20 flex flex-col w-screen min-h-screen items-center justify-center'>
            <h1 className='text-3xl font-extrabold p-3'>Hi! I'm Jack</h1>
            <img src={ProfilePicture} alt='me' className='rounded-full w-96 object-scale-down p-3'/>
            {/*<h3 className='text-xl font-extrabold underline p-3'>I'm a</h3>*/}
            <TextCarousel items={['Student', 'Developer', 'Violinist', 'Outdoors-Lover']}/>
        </div>
    );
};

export default Home;
