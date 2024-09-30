import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import Expertise from './Expertise';
import Works from './Works';
import Process from './Process';
import CreativeCompo from './Creative';
import Manifesto from './Manifesto';
import { Contact } from '../components';
import ExpandImg from '../assets/img/home/home_05.png';

const Home = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            {/* Video Section */}
            <section className="relative w-full h-screen">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src="src/assets/video/kekst.mp4" type="video/mp4" />
                </video>
            </section>

            <Navbar sticky={isSticky} />
            <div>
                <div className="welcome">
                    <img src={ExpandImg} alt="" className="w-full h-full" ref={element} />
                </div>
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
        </div>
    )
}

export default Home;