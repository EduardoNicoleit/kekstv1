import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import Expertise from './Expertise';
import Works from './Works';
import Process from './Process';
import CreativeCompo from './Creative';
import Manifesto from './Manifesto';
import Expand from './Expand';
import { Contact } from '../components';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <video width="100%" height="100%" controls>
                <source src="src/assets/video/test.mp4" type="video/mp4" />
            </video>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div>
                <Expand />
                <Expertise />
                <div className='h-[300px] w-full'></div>
                <Works />
                <div className="h-[300px] w-full"></div>
                <Process />
                <div className="h-[300px] w-full"></div>
                <CreativeCompo />
                <Manifesto />
                <Contact />
            </div>
        </div>
    )
}

export default Home;