import React from "react";
import Navbar from "./Navbar";
import Expertise from "./Expertise";
import Works from "./Works";
import Process from "./Process";
import CreativeCompo from "./Creative";
import Manifesto from "./Manifesto";
import Expand from "./Expand";
import { Contact } from "../components";
import useMediaQuery from "../components/hooks/useMediaQuery";

const Home = () => {
    const isLargeScreen = useMediaQuery('(min-width: 1024px)'); // Adjust the breakpoint as needed

    return (
        <div>
            <div>
                <video width="100%" height="100%" controls>
                    <source src="src/assets/video/test.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div>
                <Expand />
                <Expertise />
                <div className='h-[100vh] w-full'></div>
                <Works />
                <div className="h-[100vh] w-full"></div>
                {isLargeScreen && <Process />} {/* Conditionally render Process */}
                <div className="h-[100vh] w-full"></div>
                {isLargeScreen && <CreativeCompo />} {/* Conditionally render CreativeCompo */}
                <Manifesto />
                <Contact />
            </div>
        </div>
    )
}

export default Home;