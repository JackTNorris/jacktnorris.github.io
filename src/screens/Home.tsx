import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { auth } from '../loaders/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuth } from '../hooks/useAuth';
import { AboutMe } from '../components/home/AboutMe';
import { ConwayBoard } from 'components/animations/ConwayBoard';
import { Boids } from 'components/animations/Boids';
import { random } from 'lodash';
import { Travel } from 'components/home/Travel';
import { TBP } from 'components/animations/TBP';
const Home = () => {
    return (
        <>
        {random(0, 1) ? <ConwayBoard /> : <Boids />}
        <div className='site-container'>
            <Hero />
            <AboutMe />
            <Travel />
        </div>
        </>
        
    );
};

export default Home;
