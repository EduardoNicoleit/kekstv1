import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Navbar from "./Navbar";
import Expertise from './Expertise';
import Works from './Works';
import Process from './Process';
import CreativeCompo from './Creative';
// import Manifesto from './Manifesto';
import { Footer, MainBorder } from '../components';
import Welcome from './Welcome';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top when the component loads
        window.scrollTo(0, 0);

        // If there's a hash in the URL, scroll to the corresponding section
        if (location.hash) {
            const target = location.hash.replace('#', '');
            scroller.scrollTo(target, {
                smooth: true,
                duration: 500,
                offset: -100, // Adjust this offset based on your navbar height
            });
        }
    }, [location]);

    return (
        <div className="relative">
            {/* Fullscreen Video Divider */}
            <div className="absolute z-10 mt-[95vh] hidden sm:block overflow-hidden w-full pr-2 lg:pr-4 xl:pr-[25px] 2xl:pr-[45px] 3xl:pr-[45px] pl-2 lg:pl-4 xl:pl-[25px] 2xl:pl-[45px] 3xl:pl-[45px]">
                <img
                    src="../assets/img/home/linhas.svg"
                    alt="line"
                    className="object-cover w-full h-auto"
                />
            </div>

            <video
                className="w-full h-screen object-cover hidden sm:block"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="assets/video/kekst.mp4" type="video/mp4" />
            </video>

            {/* Mobile Video */}
            <div className='z-10 mt-[468px] absolute overflow-hidden h-[150px] mr-2 ml-2 block sm:hidden'>
                <img src="../assets/img/home/divider.svg" alt="line" className='w-full object-cover scale-150' />
            </div>

            <video
                className="w-full h-[531px] object-cover block sm:hidden"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="../../assets/video/kekst.mp4" type="video/mp4" />
            </video>

            <Navbar />

            {/* Sections with IDs for scrolling */}
            <div id="welcome" className="section">
                <Welcome />
            </div>
            <div id="expertise" className="section">
                <Expertise />
            </div>
            <div id="works" className="section">
                <Works />
            </div>
            <div id="process" className="section">
                <Process />
            </div>
            <div id="creative" className="section">
                <CreativeCompo />
            </div>
            {/* <div id="manifesto" className="section">
                <Manifesto />
            </div> */}
            <div id="lets-talk" className="section">
                <Footer />
            </div>
            <MainBorder />
        </div>
    );
};

export default Home;
