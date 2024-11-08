/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Footer, MainBorder } from "../components";
import { Link } from "react-router-dom";

const CeoTracker = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            {/* Navbar */}
            <Navbar sticky={isSticky} />

            {/* Welcome Section */}
            <div className="relative text-white welcome" ref={element}>
                {/* Desktop Image */}
                <img
                    src="/assets/img/ceotracker/ceo_header.png"
                    alt="CEO Tracker Desktop Header"
                    className="w-full hidden md:block"

                />
                {/* Mobile Image */}
                <img
                    src="/assets/img/ceotracker/ceo_mobile.png"
                    alt="CEO Tracker Mobile Header"
                    className="w-full block md:hidden"

                />
                {/* Overlay Content */}
                <div className="w-full absolute bottom-0 font-Helvetica">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                        {/* Title */}
                        <div className="flex">
                            <div className="w-6 lg:w-[60px] 2xl:w-[299px] 
                                            3xl:w-[15vw] flex-none"></div>
                            <div>
                                <div className="font-Helvetica font-normal text-[25px] 
                                                md:text-2xl lg:text-4xl xl:text-[70px] 3xl:text-[2.8vw] 
                                                xl:leading-[80px] 3xl:leading-[6vw]
                                ">
                                    Kekst CNC
                                </div>
                                <div
                                    className="font-Helvetica font-bold mt-auto
                                            text-[50px] leading-[34px] md:text-[50px] 
                                            md:leading-[57px] lg:text-[70px]
                                            xl:text-[160px]
                                            lg:leading-tight
                                            pb-14 sm:pb-6 md:pb-10 lg:pb-10 
                                            xl:pb-5 2xl:pb-16 
                                            3xl:pb-[6vw] 5xl:pb-[8vw]
                                            3xl:text-[6.5vw] "
                                >
                                    CEO Tracker
                                </div>
                            </div>
                        </div>
                        {/* Desktop Overview: */}
                        <div className="hidden lg:block">
                            <div
                                className="lg:flex-col 2xl:flex-row flex border-white border-y-[1px]
                                sm:text-4xl md:text-3xl lg:text-[22px] 3xl:text-[1.2vw] 5xl:text-[1vw]
                                lg:h-[220px] xl:h-[188px] 2xl:h-[200px] 3xl:h-[18vh] 5xl:h-[20vh]
                                items-start 2xl:items-center"
                            >
                                <div
                                    className="font-normal lg:pl-[60px] lg:pr-0 lg:pb-4 lg:pt-4 xl:pt-4 xl:pb-4 2xl:pt-0 2xl:pb-[2.2vw] w-[300px] lg:w-[200px] 2xl:w-[308px] 3xl:w-[14vw] mb-0 3xl:pl-[2vw] 3xl:pr-[2vw] 2xl:px-[2vw]"
                                >
                                    Overview:
                                </div>
                                <div className="lg:grid grid-cols-2 w-full items-start 
                                                2xl:items-center">
                                    <div className="pl-[60px] 2xl:pl-8 2xl:pr-20 
                                                    3xl:pr-40 xl:border-l-0 
                                                    2xl:border-l-[1px] leading-tight h-full 
                                                    3xl:pl-[2.15vw] 3xl:pr-[1vw] 
                                                    5xl:pl-[2.5vw] 5xl:pr-[1.2vw]">
                                        Launched a report revealing how CEOs
                                        managed communication during the world's
                                        tumultuous times.
                                    </div>
                                    <div className="pl-8 2xl:pr-20 3xl:pr-40 border-l-[1px] 
                                                    leading-tight h-full 
                                                    3xl:pl-[2vw] 3xl:pr-[2vw] 
                                                    5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Developed a visual narrative around distinct CEO
                                        personas, illustrating various leadership approaches
                                        amidst economic, political and societal challenges.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                {/* Mobile Overview: */}
                <div className="block lg:hidden font-Helvetica font-normal 
                                py-[41px] text-white pl-6
                                3xl:pl-[4vw] 5xl:pl-[6vw]">
                    <div className="text-[13px] leading-[14px] uppercase 
                                    3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Overview:
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 
                                    border-b-[1px] 
                                    3xl:text-[1vw] 5xl:text-[1.2vw] pr-6">
                        Launched a report revealing how CEOs
                        managed communication during the world's
                        tumultuous times.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 
                                    border-b-[1px] 
                                    3xl:text-[1vw] 5xl:text-[1.2vw] pr-6">
                        Developed a visual narrative around distinct CEO
                        personas, illustrating various leadership approaches
                        amidst economic, political and societal challenges.
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
                        className="uppercase xl:normal-case text-start 2xl:text-left font-normal text-[13px] md:text-lg 2xl:text-2xl 3xl:text-[1.2vw] pt-3 xl:w-full 2xl:w-[308px] 3xl:w-[15vw] flex-none px-6 lg:px-[60px] 2xl:px-[2vw] py-6 2xl:py-0.2"
                    >
                        The partnership:
                    </div>
                    <div
                        className="font-bold md:font-normal text-[18px] md:text-[28px] 2xl:text-[40px] 3xl:text-[1.8vw] px-6 lg:px-[60px] 2xl:px-[0] 2xl:pr-[3.5vw] w-full leading-tight"
                    >
                        We have released a report derived from an analysis conducted by our Keskt CNC team, revealing how executive communications teams managed during the world's tumultuous times. Thousands of posts have provided insights into how the LinkedIn algorithm operates, the top priorities for CEOs, and how executive communications adjusted amidst ongoing conflict in Europe.
                    </div>
                </div>

                {/* Image Sections */}
                <div className="pt-8 2xl:pt-16 3xl:pt-[6vw] 5xl:pt-[8vw]">
                    <img
                        src="/assets/img/ceotracker/ceo_1.png"
                        className="w-full h-auto object-cover"
                        alt="CEO Tracker Report Cover"

                    />
                </div>

                {/* Description Section */}
                <div
                    className="py-10 2xl:py-[5vw] text-[14px] lg:text-[18px] xl:text-[1.2vw] flex font-normal font-Helvetica text-white"
                >
                    <div className="md:w-6 lg:w-[60px] 
                                    2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="px-6 md:px-0 pr-6 sm:px-6 lg:px-0 
                                    lg:pr-10 2xl:pr-[3.5vw] leading-tight">
                        <div className="pb-5">
                            With governments, media, and social media platforms amplifying polarization and politicization on critical societal issues, businesses and CEOs find themselves increasingly vulnerable. CEOs are seen as vital contributors to discussions on diversity, equity, and inclusion (DE&I) and sustainability, necessitating their engagement. However, they must ensure that their statements are grounded in factual information and yield tangible results rather than mere rhetoric.
                        </div>
                        <div className="pb-5">
                            The report employs visual storytelling, crafted around distinct CEO personas, illustrating various leadership approaches amidst economic, political and societal challenges. This underscores CEOs' adaptability and diverse communication strategies, as they navigate through today's complex landscape of shifting expectations and adversities.
                        </div>
                    </div>
                </div>

                {/* More Image Sections */}
                <div className="pb-8 2xl:pb-16 3xl:pb-[6vw] 5xl:pb-[8vw]">
                    <img
                        src="/assets/img/ceotracker/ceo_2.png"
                        className="w-full h-auto object-cover"
                        alt="CEO Tracker Visual Analysis"

                    />
                </div>
                <div className="">
                    <img
                        src="/assets/img/ceotracker/ceo_3.png"
                        className="w-full h-auto object-cover"
                        alt="CEO Tracker Leadership Strategies"

                    />
                </div>

                {/* Video Sections */}
                <div className="pt-8 2xl:pt-16 flex pb-8 lg:pb-0">
                    <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full flex">
                        <div>
                            <video
                                className="w-full h-auto object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline

                            >
                                <source src="/assets/video/ceo/ceo_movie_1_OK.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div>
                            <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                        </div>
                    </div>
                </div>
                <div className="flex border-b-[1px]">
                    <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full h-full flex">
                        <div>
                            <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                        </div>
                        <div className="ml-auto">
                            <video
                                className="w-full h-auto object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline

                            >
                                <source src="/assets/video/ceo/ceo_movie_2.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                {/* Additional Image Sections */}
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full">
                        <img
                            src="/assets/img/ceotracker/ceo_4.png"
                            className="w-full h-auto object-cover"
                            alt="CEO Tracker Communication Strategy"

                        />
                    </div>
                </div>
                <div className="py-8 2xl:py-16">
                    <img
                        src="/assets/img/ceotracker/ceo_5.png"
                        className="w-full h-auto object-cover"
                        alt="CEO Tracker Public Understanding"

                    />
                </div>

                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full min-h-[300px] md:min-h-[400px]">
                            {/* First Image Container */}
                            <div className="overflow-hidden border-r border-white relative group">
                                <Link to="/works/bp">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 
                                   3xl:py-[6vw] 5xl:py-[10vw] 
                                   px-[15px] md:px-10 3xl:px-[2vw] 5xl:px-[3vw] 
                                   flex flex-col h-full relative"
                                    >
                                        {/* Background image using pseudo-element */}
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out 
                                        bg-[url('assets/img/ceotracker/bp.png')] 
                                        md:bg-[url('assets/img/ceotracker/bp_3b.png')] 
                                        group-hover:scale-110 
                                        before:content-[''] before:absolute before:inset-0 
                                        before:bg-cover before:bg-center before:bg-no-repeat 
                                        before:transition-transform before:duration-300 
                                        before:ease-in-out before:scale-100 group-hover:before:scale-110" />

                                        {/* Content overlay */}
                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                            {/* Title and Description */}
                                            <div>
                                                <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                3xl:text-[1.5vw] 5xl:text-[1vw]">
                                                    bp
                                                </div>
                                                <div className="flex-1">
                                                    <div
                                                        className="max-w-[440px] 3xl:max-w-[20vw] 
                                                   py-[26px] lg:py-[43px] 
                                                   xl:py-[67px] 3xl:py-[4vw] 
                                                   font-normal text-[12px] lg:text-[21px] 
                                                   xl:text-[32px] 2xl:text-[40px] 
                                                   3xl:text-[1.3vw] 5xl:text-[1.2vw] 
                                                   leading-tight 5xl:py-[5vw]"
                                                    >
                                                        Creating culturally tailored infographics to showcase bp's Greater Tortue Ahmeyim (GTA) FLNG project's achievements, fostering global understanding and engagement.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Read More Section */}
                                            <div className="flex py-8 items-center pl-4 
                                            3xl:py-[2vw] 5xl:py-[2.5vw]">
                                                <div
                                                    className="uppercase font-normal text-[13px] 
                                               lg:text-xs xl:text-lg 
                                               3xl:text-[1.1vw] 5xl:text-[1.2vw]"
                                                >
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
                                    </div>
                                </Link>
                            </div>
                            {/* Second Image Container */}
                            <div className="overflow-hidden relative group">
                                <Link to="/works/deutsche">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 
                                   3xl:py-[6vw] 5xl:py-[10vw] 
                                   px-[15px] md:px-10 3xl:px-[2vw] 5xl:px-[3vw] 
                                   flex flex-col h-full relative"
                                    >
                                        {/* Background image using pseudo-element */}
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out 
                                        bg-[url('assets/img/ceotracker/DB_1.png')] 
                                        md:bg-[url('assets/img/ceotracker/DB_4.png')] 
                                        group-hover:scale-110 
                                        before:content-[''] before:absolute before:inset-0 
                                        before:bg-cover before:bg-center before:bg-no-repeat 
                                        before:transition-transform before:duration-300 
                                        before:ease-in-out before:scale-100 group-hover:before:scale-110" />

                                        {/* Content overlay */}
                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                            {/* Title and Description */}
                                            <div>
                                                <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                3xl:text-[1.5vw] 5xl:text-[1vw]">
                                                    Deutsche Bahn
                                                </div>
                                                <div className="flex-1">
                                                    <div
                                                        className="max-w-[440px] 3xl:max-w-[20vw] 
                                                   py-[26px] lg:py-[43px] 
                                                   xl:py-[67px] 3xl:py-[4vw] 
                                                   font-normal text-[12px] lg:text-[21px] 
                                                   xl:text-[32px] 2xl:text-[40px] 
                                                   3xl:text-[1.3vw] 5xl:text-[1.2vw] 
                                                   leading-tight 5xl:py-[5vw]"
                                                    >
                                                        Crafting inclusive campaigns through strategic messaging and innovative visuals to redefine perceptions and engage diverse audiences.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Read More Section */}
                                            <div className="flex py-8 items-center pl-4 
                                            3xl:py-[2vw] 5xl:py-[2.5vw]">
                                                <div
                                                    className="uppercase font-normal text-[13px] 
                                               lg:text-xs xl:text-lg 
                                               3xl:text-[1.1vw] 5xl:text-[1.2vw]"
                                                >
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

export default CeoTracker;
