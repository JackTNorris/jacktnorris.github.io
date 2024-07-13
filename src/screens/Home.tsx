import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { auth } from '../loaders/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuth } from '../hooks/useAuth';
import { AboutMe } from '../components/home/AboutMe';
const Home = () => {
    return (
        <div className='site-container px'>
            <Hero />
           {/* <AboutMe /> */}
        </div>
    );
};

export default Home;
