import { Hero } from '../components/home/Hero';
import { AboutMe } from '../components/home/AboutMe';
import { ConwayBoard } from 'components/animations/ConwayBoard';
import { Boids } from 'components/animations/Boids';
import { random } from 'lodash';
import { TBP } from 'components/animations/TBP';
import { useEffect } from 'react';
const Home = () => {
    useEffect(() => {
        document.title = 'Jack Norris | Home'
    })
    let r = random(2)
    return (
        <>
        {r === 2 ? <TBP /> : (r === 1 ? <ConwayBoard /> : <Boids />)}
        <div className='site-container'>
            <Hero />
            <AboutMe />
        </div>
        </>
        
    );
};

export default Home;
