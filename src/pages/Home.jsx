import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import Expertise from './Expertise';
import Works from './Works';
import Process from './Process';
import CreativeCompo from './Creative';
import Manifesto from './Manifesto';
import Welcome from '../components/Welcome';
import { Contact, Divider, MainBorder } from '../components';
import ExpandImg from '../assets/img/home/background.svg';

const Home = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <video width="100%" height="100%" autoPlay loop muted playsInline>
                <source src="src/assets/video/kekst.mp4" type="video/mp4" />
            </video>

            <Navbar sticky={isSticky} />
            <Welcome />
            <Expertise />
            <div className='hidden xl:block h-[300px] w-full'></div>
            <Works />
            <div className="hidden xl:block h-[300px] w-full"></div>
            <Process />
            <div className="hidden xl:block h-[300px] w-full"></div>
            <CreativeCompo />
            <Manifesto />
            <Contact />
        </div>
    );
};

export default Home;