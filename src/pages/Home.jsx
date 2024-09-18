import React from 'react'
import Navbar from './Navbar';
import Expertise from './Expertise';
import Works from './Works';
import Process from './Process';

const Home = () => {
    return (
        <div>
            <video width="100%" height="100%" controls>
                <source src="src/assets/video/test.mp4" type="video/mp4" />
            </video>
            <Navbar />
            <Expertise />
            <Works />
            <div className="h-[300px] w-full"></div>
            <Process />
        </div>
    )
}

export default Home