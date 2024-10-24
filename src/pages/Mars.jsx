/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Contact, MainBorder } from "../components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Mars = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative">
            {/* Navbar */}
            <Navbar sticky={isSticky} />

            {/* Welcome Section with Images */}
            <div className="relative text-white welcome" ref={element}>
                {/* Desktop Image */}
                <img
                    src="/assets/img/mars/Mar.png"
                    alt="Mars Desktop"
                    className="w-full hidden md:block"
                />
                {/* Mobile Image */}
                <img
                    src="/assets/img/mars/Mars_mobile.png"
                    alt="Mars Mobile"
                    className="w-full block md:hidden"
                />
                {/* Overlay Content */}
                <div className="w-full absolute bottom-0">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                        {/* Title */}
                        <div className="flex">
                            <div className="w-[33px] lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                            <div>
                                <div
                                    className="font-Helvetica font-bold mt-auto
                                    text-[50px] leading-[34px] md:text-[50px] md:leading-[57px]
                                    lg:text-[70px]
                                    xl:text-[160px]
                                    lg:leading-[80px] xl:leading-[184px]
                                    py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 2xl:py-16 
                                    3xl:py-[6vw] 5xl:py-[8vw]
                                    3xl:text-[6.5vw] 5xl:text-[8vw]"
                                >
                                    Mars
                                </div>
                            </div>
                        </div>
                        {/* Desktop Overview */}
                        <div className="hidden lg:block">
                            <div
                                className="lg:flex-col 2xl:flex-row flex border-white border-y-[1px]
                                sm:text-4xl md:text-3xl lg:text-[22px] 3xl:text-[1.2vw] 5xl:text-[1vw]
                                lg:h-[220px] xl:h-[188px] 2xl:h-[128px] 3xl:h-[15vh] 5xl:h-[18vh]
                                items-start 2xl:items-center"
                            >
                                <div
                                    className="text-normal lg:pl-[60px] lg:pr-0 lg:py-4 xl:py-5 2xl:py-[2vw] 
                                    w-[300px] lg:w-[200px] 2xl:w-[318px] 3xl:w-[14vw] 
                                    mb-0 2xl:mb-12 
                                    3xl:pl-[2vw] 3xl:pr-[2vw] 3xl:py-[2vw] 5xl:pl-[3vw] 5xl:pr-[3vw] 5xl:py-[3vw]"
                                >
                                    Overview:
                                </div>
                                <div className="text-normal lg:grid grid-cols-3 w-full items-start 2xl:items-center">
                                    <div className="pl-[60px] 2xl:pl-8 pr-4 xl:border-l-0 2xl:border-l-[1px] 
                                                leading-tight h-full 
                                                3xl:pl-[2.15vw] 3xl:pr-[1vw] 5xl:pl-[2.5vw] 5xl:pr-[1.2vw]">
                                        Developed a holistic video campaign, showcasing Mars as an AI research pioneer.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full 
                                                3xl:pl-[2vw] 3xl:pr-[2vw] 5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Used single-shot technique for immersive video innovation.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full 
                                                3xl:pl-[2vw] 2xl:pr-[3vw] 5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Crafted compelling narrative with meticulous storyboarding to highlight Mars' AI leadership.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                {/* Mobile Overview */}
                <div className="block lg:hidden font-Helvetica font-normal py-[41px] text-white 
                                pl-6 sm:pl-[33px] 3xl:pl-[4vw] 5xl:pl-[6vw]">
                    <div className="text-[12px] leading-[14px] uppercase 3xl:text-[1vw] 5xl:text-[1.2vw]">Overview</div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px] 
                                3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Developed a holistic video campaign, showcasing Mars as an AI research pioneer.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px] 
                                3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Used single-shot technique for immersive video innovation.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px] 
                                3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Crafted compelling narrative with meticulous storyboarding to highlight Mars' AI leadership.
                    </div>
                </div>

                {/* Partnership Section */}
                <div
                    className="flex flex-col 2xl:flex-row md:pt-[10px] lg:pt-10 xl:pt-[156px] 2xl:pt-[211px] 
                    pb-10 lg:pb-20 xl:pb-[106px] 2xl:pb-[134px] w-full font-Helvetica text-white"
                >
                    <div
                        className="uppercase xl:normal-case text-start 2xl:text-left font-normal 
                        text-[12px] md:text-lg 2xl:text-2xl 3xl:text-[1.2vw] 5xl:text-[1vw] 
                        pt-3 xl:w-full 2xl:w-[299px] 3xl:w-[15vw] 
                        flex-none 
                        px-6 lg:px-[60px] 2xl:px-0 
                        py-6 2xl:py-0 
                        3xl:px-[2vw] 5xl:px-[3vw] 
                        3xl:py-[2vw] 5xl:py-[3vw]"
                    >
                        The partnership:
                    </div>
                    <div
                        className="font-bold md:font-normal text-[17px] md:text-[28px] 2xl:text-[40px] 
                        3xl:text-[2vw] 5xl:text-[2.5vw] 
                        px-6 lg:px-[60px] 2xl:px-0 2xl:pr-[3.5vw] 
                        w-full leading-tight"
                    >
                        For our Mars video campaign, we were tasked with a significant challenge: to showcase how artificial intelligence tools are revolutionizing research methodologies within Mars and emphasizing the pioneering strides the company has made in this domain. This objective required us to not only illustrate the transformative impact of AI on our research processes but also to highlight Mars as a trailblazer in leveraging such technologies.
                    </div>
                </div>

                {/* Video Section 1 */}
                <div>
                    <video
                        className="w-full h-auto object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/assets/video/mars/mars.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Description Section */}
                <div
                    className="py-10 2xl:py-[5vw] text-[17px] lg:text-[18px] xl:text-[1.2vw] 
                    flex font-normal font-Helvetica text-white 
                    3xl:text-[1.5vw] 5xl:text-[2vw] 
                    3xl:py-[6vw] 5xl:py-[8vw]"
                >
                    <div className="w-6 lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="px-0 pr-6 sm:px-6 lg:px-0 lg:pr-10 2xl:pr-[3.5vw]">
                        <div className="pb-5 3xl:pb-[2.5vw]">
                            For the Mars video campaign, we were tasked with a significant challenge: to showcase how artificial intelligence tools are revolutionizing research methodologies within Mars and emphasizing the pioneering strides the company has made in this domain. This objective required us to illustrate the transformative impact of AI on the research processes and also highlight Mars as a trailblazer in leveraging such technologies.
                        </div>
                        <div className="pb-5 3xl:pb-[2.5vw]">
                            At the core of our campaign was the innovative execution of a video shot in a single and continuous take. This approach was aimed at maximizing the viewer's immersion, ensuring their engagement from the first frame to the last.
                        </div>
                        <div>
                            The storyboard functioned as a strategic visual blueprint, with each scene deliberately designed to convey the narrative's progression. Our commitment to a singular, uninterrupted shot allowed us to craft a seamless journey through the world of Mars, showcasing our forward-thinking approach and the transformative power of AI in research.
                        </div>
                    </div>
                </div>

                {/* Image Section 1 */}
                <div className="flex">
                    <div className="hidden lg:block w-6 lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/mars/mars.png" className="w-full" alt="Mars Image" />
                    </div>
                </div>

                {/* Image Section 2 */}
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block flex-none"></div>
                    <div className="w-full flex">
                        <div className="w-1/2">
                            <img src="/assets/img/mars/bp4.png" className="w-full" alt="Mars Image 1" />
                        </div>
                        <div className="w-1/2">
                            <img src="/assets/img/mars/bp5.png" className="w-full" alt="Mars Image 2" />
                        </div>
                    </div>
                </div>

                {/* Image Section 3 */}
                <div className="flex">
                    <div className="hidden lg:block flex-none"></div>
                    <div className="w-full flex">
                        <div className="w-1/2">
                            <img src="/assets/img/mars/bp3.png" className="w-full" alt="Mars Image 3" />
                        </div>
                        <div className="w-1/2">
                            <img src="/assets/img/mars/bp2.png" className="w-full" alt="Mars Image 4" />
                        </div>
                    </div>
                </div>

                {/* Image Section 4 */}
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block flex-none"></div>
                    <div className="w-full flex">
                        <div className="w-1/2">
                            <img src="/assets/img/mars/bp_13.png" className="w-full" alt="Mars Image 5" />
                        </div>
                        <div className="w-1/2">
                            <img src="/assets/img/mars/bp_14.png" className="w-full" alt="Mars Image 6" />
                        </div>
                    </div>
                </div>

                {/* Image Section 5 */}
                <div className="pb-8 2xl:pb-16 flex">
                    <div className="hidden lg:block flex-none"></div>
                    <div className="w-full flex">
                        <div className="w-1/2">
                            <img src="/assets/img/mars/bp_13(1).png" className="w-full" alt="Mars Image 7" />
                        </div>
                        <div className="w-1/2">
                            <img src="/assets/img/mars/bp_14(1).png" className="w-full" alt="Mars Image 8" />
                        </div>
                    </div>
                </div>

                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white pt-0">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full">
                            {/* First Image Container */}
                            <div className="overflow-hidden md:border-r md:border-white">
                                <Link to="/works/netClean">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] 
                                        px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full 
                                        bg-[url('assets/img/mars/uniper_3.png')] bg-no-repeat bg-cover 
                                        transition duration-300 ease-in-out hover:scale-105 
                                        5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                        3xl:text-[1.5vw] 5xl:text-[1vw]">
                                            NetClean
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] 
                                                xl:py-[67px] 3xl:py-[4vw] font-normal text-[12px] 
                                                lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 
                                                3xl:text-[1.3vw] 5xl:text-[1.2vw] leading-tight 
                                                5xl:py-[5vw]"
                                            >
                                                Reinventing how annual data reports can be transformed into impactful narrative communication tools.
                                            </div>
                                        </div>
                                        {/* "Read More" Link */}
                                        <div className="flex py-8 items-center pl-4 3xl:py-[2vw] 5xl:py-[2.5vw]">
                                            <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg 3xl:text-[1.1vw] 5xl:text-[1.2vw]">
                                                read more
                                            </div>
                                            <div>
                                                <svg
                                                    className="ml-3 pt-[2px] w-6 h-6 3xl:w-[1.5vw] 3xl:h-[1.5vw] 5xl:w-[1vw] 5xl:h-[1vw]"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g id="arrow_outward">
                                                        <path
                                                            id="Vector"
                                                            d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* Second Image Container */}
                            <div className="overflow-hidden border-l border-white">
                                <Link to="/works/uniper">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] 
                                        px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full 
                                        bg-[url('assets/img/mars/netclean.png')] 
                                        md:bg-[url('assets/img/mars/uniper_2.png')] 
                                        bg-no-repeat bg-cover 
                                        transition duration-300 ease-in-out hover:scale-105 
                                        5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                        3xl:text-[1.5vw] 5xl:text-[1vw]">
                                            Uniper
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] 
                                                xl:py-[67px] 3xl:py-[4vw] font-normal text-[12px] 
                                                lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 
                                                3xl:text-[1.3vw] 5xl:text-[1.2vw] leading-tight 
                                                5xl:py-[5vw]"
                                            >
                                                Shaping Uniper's campaign to position them as the heartbeat of an evolving energy landscape.
                                            </div>
                                        </div>
                                        {/* "Read More" Link */}
                                        <div className="flex py-8 items-center pl-4 
                                                        3xl:py-[2vw] 5xl:py-[2.5vw]">
                                            <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg 
                                                            3xl:text-[1.1vw] 5xl:text-[1.2vw]">
                                                read more
                                            </div>
                                            <div>
                                                <svg
                                                    className="ml-3 pt-[2px] w-6 h-6 
                                                               3xl:w-[1.5vw] 3xl:h-[1.5vw] 
                                                               5xl:w-[1vw] 5xl:h-[1vw]"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g id="arrow_outward">
                                                        <path
                                                            id="Vector"
                                                            d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact and MainBorder Components */}
            <Contact />
            <MainBorder />
        </div>
    );
};

export default Mars;
