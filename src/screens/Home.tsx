// cleanup background code
import { Hero } from '../components/home/Hero';
import { AboutMe } from '../components/home/AboutMe';
import { ConwayBoard } from 'components/animations/ConwayBoard';
import { Boids } from 'components/animations/Boids';
import { random } from 'lodash';
import { TBP } from 'components/animations/TBP';
import { useEffect, useState } from 'react';
const Home = () => {
    const [currBackground, setCurrBackground] = useState('conway')
    useEffect(() => {
        document.title = 'Jack Norris | Home'
    })

    return (
        <>
        {currBackground === 'tbp' ? <TBP /> : (currBackground === 'conway' ? <ConwayBoard /> : <Boids />)}
        <div className='site-container'>
            <Hero currBackground={currBackground} onSelectBackground={setCurrBackground} />
            <AboutMe />
        </div>
        </>
        
    );
};

export default Home;
