import { Hero } from '../components/home/Hero';
import { AboutMe } from '../components/home/AboutMe';
import { ConwayBoard } from 'components/animations/ConwayBoard';
import { Boids } from 'components/animations/Boids';
import { random } from 'lodash';
import { Travel } from 'components/home/Travel';
import { TBP } from 'components/animations/TBP';
const Home = () => {
    let r = random(2)
    return (
        <>
        {r === 2 ? <TBP /> : (r === 1 ? <ConwayBoard /> : <Boids />)}
        <div className='site-container'>
            <Hero />
            <AboutMe />
            <Travel />
        </div>
        </>
        
    );
};

export default Home;
