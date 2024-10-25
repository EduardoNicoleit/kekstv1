/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Footer, MainBorder } from "../components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Malteser = ({ isSticky, element }) => {
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
                    src="/assets/img/malteser/malteser.png"
                    alt="Malteser International Desktop"
                    className="w-full hidden md:block"
                />
                {/* Mobile Image */}
                <img
                    src="/assets/img/malteser/malteser_mobile.png"
                    alt="Malteser International Mobile"
                    className="w-full block md:hidden"
                />
                {/* Overlay Content */}
                <div className="w-full absolute bottom-0">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                        {/* Title */}
                        <div className="flex">
                            <div className="w-[33px] lg:w-[60px] 2xl:w-[299px] 
                                            3xl:w-[15vw] flex-none"></div>
                            <div>
                                <div
                                    className="font-Helvetica font-bold mt-auto
                                    text-[50px] leading-[34px] md:text-[50px] md:leading-[57px]
                                    lg:text-[70px]
                                    xl:text-[160px]
                                    lg:leading-[80px] xl:leading-[184px]
                                    py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 
                                    2xl:py-16 
                                    3xl:py-[6vw] 5xl:py-[8vw]
                                    3xl:text-[6.5vw] 5xl:text-[8vw]"
                                >
                                    Malteser
                                </div>
                            </div>
                        </div>
                        {/* Desktop Overview */}
                        <div className="hidden lg:block">
                            <div
                                className="lg:flex-col 2xl:flex-row flex border-white border-y-[1px]
                                sm:text-4xl md:text-3xl lg:text-[22px] 
                                3xl:text-[1.2vw] 5xl:text-[1vw]
                                lg:h-[220px] xl:h-[188px] 2xl:h-[128px] 
                                3xl:h-[15vh] 5xl:h-[18vh]
                                items-start 2xl:items-center"
                            >
                                <div
                                    className="lg:pl-[60px] lg:py-4 xl:py-5 
                                    2xl:py-0 3xl:py-[2vw] 5xl:py-[3vw]
                                    w-[300px] lg:w-[200px] 2xl:w-[318px] 
                                    3xl:w-[14vw] mb-0 2xl:mb-12"
                                >
                                    Overview
                                </div>
                                <div className="lg:grid grid-cols-3 w-full items-start 
                                                2xl:items-center">
                                    <div className="pl-[60px] 2xl:pl-8 pr-4 
                                                    xl:border-l-0 2xl:border-l-[1px] 
                                                    leading-tight h-full 
                                                    3xl:pl-[2.15vw] 3xl:pr-[1vw] 
                                                    5xl:pl-[2.5vw] 5xl:pr-[1.2vw]">
                                        Enhanced Design Identity through
                                        innovative data visualization.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] 
                                                    leading-tight h-full 
                                                    3xl:pl-[2vw] 3xl:pr-[2vw] 
                                                    5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Fostered inclusive visual communication
                                        reflecting global support.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] 
                                                    leading-tight h-full 
                                                    3xl:pl-[2vw] 2xl:pr-[3vw] 
                                                    5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Simplified intricate data into
                                        compelling infographics.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Overview */}
            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                <div className="block lg:hidden font-Helvetica font-normal 
                                py-[41px] text-white pl-6 sm:pl-[33px] 
                                3xl:pl-[4vw] 5xl:pl-[6vw]">
                    <div className="text-[12px] leading-[14px] uppercase 
                                    3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Overview
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 
                                    border-b-[1px] 
                                    3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Enhanced Design Identity through
                        innovative data visualization.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 
                                    border-b-[1px] 
                                    3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Fostered inclusive visual communication
                        reflecting global support.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 
                                    border-b-[1px] 
                                    3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Simplified intricate data into
                        compelling infographics.
                    </div>
                </div>

                {/* Partnership Section */}
                <div
                    className="flex flex-col 2xl:flex-row md:pt-[10px] 
                    lg:pt-10 xl:pt-[156px] 2xl:pt-[211px] 
                    pb-10 lg:pb-20 xl:pb-[106px] 2xl:pb-[134px] 
                    w-full font-Helvetica text-white"
                >
                    <div
                        className="uppercase xl:normal-case text-start 
                        2xl:text-left font-normal text-[12px] md:text-lg 
                        2xl:text-2xl 3xl:text-[1.2vw] 5xl:text-[1vw] 
                        pt-3 xl:w-full 2xl:w-[299px] 3xl:w-[15vw] 
                        flex-none px-6 lg:px-[60px] 2xl:px-[2vw] 
                        py-6 2xl:py-0 3xl:px-[2vw] 5xl:px-[3vw] 
                        3xl:py-[2vw] 5xl:py-[3vw]"
                    >
                        The partnership:
                    </div>
                    <div
                        className="font-bold md:font-normal text-[17px] 
                        md:text-[28px] 2xl:text-[40px] 3xl:text-[2vw] 
                        5xl:text-[2.5vw] px-6 lg:px-[60px] 
                        2xl:px-0 2xl:pr-[3.5vw] w-full leading-tight"
                    >
                        In refining the Design Identity for Malteser reports, we harnessed the transformative power of infographics to effectively communicate complex information in a clear and engaging way. This approach reimagined dense datasets and detailed narratives as visually compelling stories, significantly enhancing the reports' aesthetic appeal and comprehensibility.
                    </div>
                </div>

                {/* Video Section 1 */}
                <div className="flex">
                    <div className="hidden lg:block lg:w-[299px] 
                                    3xl:w-[15vw] flex-none border-b-[1px]"></div>
                    <div className="w-full">
                        <video
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/malteser/malteser_movie_1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Description Section */}
                <div
                    className="py-10 2xl:py-[5vw] text-[17px] lg:text-[18px] 
                    xl:text-[1.2vw] 3xl:text-[1.5vw] 5xl:text-[2vw] 
                    flex font-normal font-Helvetica text-white 
                    3xl:py-[6vw] 5xl:py-[8vw]"
                >
                    <div className="md:w-[33px] lg:w-[60px] 
                                    2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="px-6 md:px-0 pr-6 sm:px-6 lg:px-0 
                                    lg:pr-10 2xl:pr-[3.5vw]">
                        <div className="pb-5 3xl:pb-[2.5vw]">
                            Malteser International, as a global humanitarian aid organization, is dedicated to supporting individuals—regardless of gender, political belief, origin, or faith—striving to ensure they live a life of health and dignity. This ethos of inclusivity and support is mirrored in our communication strategy.
                        </div>
                        <div>
                            By blending design with precise data, the infographics transform the report into a memorable and informative visual journey, effectively bridging the gap between the complexity of data and the clarity of communication.
                        </div>
                    </div>
                </div>

                {/* Image Sections */}
                <div className="py-8 2xl:py-16 3xl:py-[6vw] 5xl:py-[8vw]">
                    <img
                        src="/assets/img/malteser/malteser_1.png"
                        className="w-full h-auto object-cover"
                        alt="Malteser Design Identity"

                    />
                </div>
                <div className="pb-8 md:pb-0">
                    <img
                        src="/assets/img/malteser/malteser_2.png"
                        className="w-full h-auto object-cover"
                        alt="Malteser Data Visualization"

                    />
                </div>
                <div className="flex">
                    <div className="hidden lg:block lg:w-[299px] 
                                    3xl:w-[15vw] flex-none"></div>
                    <div className="w-full">
                        <img
                            src="/assets/img/malteser/malteser_3.png"
                            className="w-full h-auto object-cover"
                            alt="Malteser Infographics"

                        />
                    </div>
                </div>
                <div className="pt-8 md:pt-0 flex">
                    <div className="hidden lg:block lg:w-[299px] 
                                    3xl:w-[15vw] flex-none border-b-[1px]"></div>
                    <div className="w-full">
                        <video
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/malteser/malteser_movie_2.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="pt-8 2xl:pt-16 pb-8 md:pb-0 
                                3xl:pt-[6vw] 5xl:pt-[8vw]">
                    <img
                        src="/assets/img/malteser/malteser_4.png"
                        className="w-full h-auto object-cover"
                        alt="Malteser Communication Strategy"

                    />
                </div>
                <div className="pb-8 2xl:pb-16 flex 
                                3xl:pb-[6vw] 5xl:pb-[8vw]">
                    <div className="hidden lg:block lg:w-[299px] 
                                    3xl:w-[15vw] flex-none"></div>
                    <div className="w-full">
                        <img
                            src="/assets/img/malteser/malteser_5.png"
                            className="w-full h-auto object-cover"
                            alt="Malteser Visual Narrative"

                        />
                    </div>
                </div>

                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white pt-0">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full">
                            {/* First Image Container */}
                            <div className="overflow-hidden md:border-r md:border-white">
                                <Link to="/works/farmerVoice">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] 
                                   px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full
                                   bg-[url('assets/img/malteser/FarmerVoice.jpg')] 
                                   md:bg-[url('assets/img/malteser/farmer_header.png')] 
                                   bg-no-repeat bg-cover
                                   transition duration-300 ease-in-out hover:scale-105 
                                   5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base 
                                        xl:text-2xl 3xl:text-[1.5vw] 5xl:text-[1vw]">
                                            Farmer Voice
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] 
                                           py-[26px] lg:py-[43px] xl:py-[67px] 3xl:py-[4vw] 
                                           font-normal text-[12px] lg:text-[21px] 
                                           xl:text-[32px] 2xl:text-[40px] 
                                           3xl:text-[1.3vw] 5xl:text-[1.2vw] 
                                           leading-tight 5xl:py-[5vw]"
                                            >
                                                Blending tradition with innovation to empower agriculture, creating a narrative-driven, stakeholder-engaging identity.
                                            </div>
                                        </div>
                                        <div className="flex py-8 items-center pl-4 
                                        3xl:py-[2vw] 5xl:py-[2.5vw]">
                                            <div className="uppercase font-normal text-[13px] 
                                            lg:text-xs xl:text-lg 
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
                            {/* Second Image Container */}
                            <div className="overflow-hidden">
                                <Link to="/works/dtcp">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] 
                                   px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full
                                   bg-[url('assets/img/malteser/dtcp_header_1.png')] 
                                   md:bg-[url('assets/img/malteser/dtcp_header.png')] 
                                   bg-no-repeat bg-cover
                                   transition duration-300 ease-in-out hover:scale-105 
                                   5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base 
                                        xl:text-2xl 3xl:text-[1.5vw] 5xl:text-[1vw]">
                                            DTCP
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] 
                                           py-[26px] lg:py-[43px] xl:py-[67px] 3xl:py-[4vw] 
                                           font-normal text-[12px] lg:text-[21px] 
                                           xl:text-[32px] 2xl:text-[40px] 
                                           3xl:text-[1.3vw] 5xl:text-[1.2vw] 
                                           leading-tight 5xl:py-[5vw]"
                                            >
                                                Infusing dynamic visual narratives and data insights to craft a trustworthy, stakeholder-engaging brand identity for DTCP.
                                            </div>
                                        </div>
                                        <div className="flex py-8 items-center pl-4 
                                        3xl:py-[2vw] 5xl:py-[2.5vw]">
                                            <div className="uppercase font-normal text-[13px] 
                                            lg:text-xs xl:text-lg 
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

            {/* Footer and MainBorder Components */}
            <Footer />
            <MainBorder />
        </div>
    );
};

export default Malteser;
