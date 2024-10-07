/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import Expertise from './Expertise';
import Works from './Works';
import Process from './Process';
import CreativeCompo from './Creative';
import Manifesto from './Manifesto';
import { Contact, MainBorder } from '../components';
import Welcome from './Welcome';

const Home = ({ element }) => {
    const [isSticky, setIsSticky] = useState(false);

    const getScrollThreshold = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1080) {
            return 1180; // Scroll threshold for screens above 1080px
        } else if (screenWidth >= 768 && screenWidth <= 1079) {
            return 867; // Scroll threshold for screens between 768px and 1079px
        } else {
            return 632; // Scroll threshold for mobile screens
        }
    };

    const handleScroll = () => {
        const threshold = getScrollThreshold();
        if (window.scrollY > threshold) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component loads
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='relative'>
            {/* Fullscreen Video */}
            <div className='z-10 mt-[935px] absolute overflow-hidden h-[150px] hidden sm:block pt-[40px] pr-2 lg:pr-6 xl:pr-[30px] 2xl:pr-[45px] 3xl:pr-[50px] pl-2 lg:pl-6 xl:pl-[30px] 2xl:pl-[45px] 3xl:pl-[50px]'>
                <img src="../assets/img/home/divider.svg" alt="line" className='object-cover' />
            </div>
            <video
                className="w-[1920px] h-[1080px] object-cover hidden sm:block"
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

            <Navbar sticky={isSticky} />
            <div>
                <Welcome className="welcome" />
                <Expertise />
                <Works />
                <Process />
                <CreativeCompo />
                <Manifesto />
                <Contact />
            </div>
            <MainBorder />
        </div>
    );
};

export default Home;
