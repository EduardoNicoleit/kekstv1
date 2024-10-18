import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact, MainBorder } from "../components";
import { Link } from "react-router-dom";

const CopReport = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            {/* Welcome Section */}
            <div className="relative text-white welcome" ref={element}>
                {/* Desktop Image */}
                <img
                    src="/assets/img/copreport/cop27_header.png"
                    alt="keskt..."
                    className="w-full hidden md:block"
                />
                {/* Mobile Image */}
                <img
                    src="/assets/img/copreport/cop27_mobile.png"
                    alt="keskt..."
                    className="w-full block md:hidden"
                />
                {/* Overlay Content */}
                <div className="w-full absolute bottom-0 font-Helvetica">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                        <div className="flex">
                            <div className="w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                            <div>
                                <div className="font-Helvetica font-normal text-[17px] md:text-2xl lg:text-4xl xl:text-[70px] xl:leading-[80px]">
                                    Kekst CNC
                                </div>
                                <div
                                    className="font-Helvetica font-bold mt-auto
                                    text-[30px] leading-[34px] md:text-[50px] md:leading-[57px]
                                    lg:text-[70px]
                                    xl:text-[160px]
                                    lg:leading-[80px] xl:leading-[184px]
                                    pb-14 sm:pb-6 md:pb-10 lg:pb-10 xl:pb-5
                                    2xl:pb-16 3xl:pb-20"
                                >
                                    COP 27 Report
                                </div>
                            </div>
                        </div>
                        {/* Desktop Overview */}
                        <div className="hidden lg:block">
                            <div
                                className="lg:flex-col 2xl:flex-row flex border-white border-y-[1px]
                                sm:text-4xl md:text-3xl lg:text-[22px] lg:h-[220px]
                                xl:h-[188px] 2xl:h-[128px] items-start 2xl:items-center"
                            >
                                <div
                                    className="lg:pl-[60px] lg:py-4 xl:py-5 2xl:py-0
                                    w-[300px] lg:w-[200px] 2xl:w-[318px] mb-0
                                    2xl:mb-12"
                                >
                                    Overview
                                </div>
                                <div className="lg:grid grid-cols-3 w-full items-start 2xl:items-center">
                                    <div className="pl-[60px] 2xl:pl-8 2xl:pr-20 3xl:pr-40 xl:border-l-0 2xl:border-l-[1px] leading-tight h-full">
                                        Analyzed over 2 million
                                        content pieces globally.
                                    </div>
                                    <div className="pl-8 2xl:pr-20 3xl:pr-40 border-l-[1px] leading-tight h-full">
                                        Derived insights from daily
                                        conversations and executive discussions
                                        on LinkedIn.
                                    </div>
                                    <div className="pl-8 2xl:pr-20 3xl:pr-40 border-l-[1px] leading-tight h-full">
                                        Enhanced understanding through data
                                        visualization and visual storytelling.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                {/* Mobile Overview */}
                <div className="block lg:hidden font-Helvetica font-normal py-[41px] text-white pl-6 sm:pl-[33px]">
                    <div className="text-[12px] leading-[14px] uppercase">
                        Overview
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Analyzed over 2 million
                        content pieces globally.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Derived insights from daily
                        conversations and executive discussions
                        on LinkedIn.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Enhanced understanding through data
                        visualization and visual storytelling.
                    </div>
                </div>

                {/* Partnership Section */}
                <div
                    className="flex flex-col 2xl:flex-row md:pt-[10px] lg:pt-10
                    xl:pt-[156px] 2xl:pt-[211px] pb-10 lg:pb-20 xl:pb-[106px]
                    2xl:pb-[134px] w-full font-Helvetica text-white"
                >
                    <div
                        className="text-start 2xl:text-center font-normal
                        text-[12px] md:text-lg 2xl:text-2xl
                        pt-3
                        xl:w-full 2xl:w-[299px]
                        flex-none
                        px-[33px] lg:px-[60px] 2xl:px-0
                        py-6 2xl:py-0"
                    >
                        The partnership:
                    </div>
                    <div
                        className="font-bold md:font-normal text-[17px] md:text-[28px]
                        2xl:text-[40px] px-[33px] lg:px-[60px] 2xl:px-0 w-full leading-tight"
                    >
                        We launched a report for COP 27, grounded in an analysis of over 2 million content pieces from various regions and media sources. Our analysis included earned media, trade press, and social media content from Europe, the Middle East, and the US.
                    </div>
                </div>

                {/* Image and Video Sections */}
                <div>
                    <img src="/assets/img/copreport/bp_1.png" className="w-full" alt="keskt..." />
                </div>
                {/* Description Section */}
                <div
                    className="py-10 2xl:py-[114px] text-[17px] lg:text-[18px]
                    xl:text-2xl flex font-normal font-Helvetica text-white"
                >
                    <div className="md:w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                    <div className="px-6 md:px-0">
                        <div className="pb-5">
                            By analyzing and correlating the most distinct and interesting data points, we crafted a compelling global narrative. Data visualization and visual storytelling in the report played a crucial role in enhancing understanding, discovering insights, and informing decision-making.
                        </div>
                        <div className="pb-5">
                            We examined key stakeholder perceptions—investors, activists/policy makers, the general public, top executives, and journalists—across 11 key sectors: Extractives, Financials, Food & Beverage, Healthcare, Infrastructure, Resource Transformation, Services, Technology, Transportation, and Renewables. We categorized content sentiment as positive, neutral, or negative.
                        </div>
                        <div>
                            This approach enabled us to calculate daily conversation volumes and Net Polarized Sentiment—a ratio of positive to negative sentiment adjusted for materiality. Insights were further enriched by LinkedIn conversations among top executives.
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/assets/img/copreport/cop27_2.png" className="w-full" alt="keskt..." />
                </div>
                <div className="pt-8 2xl:pt-16 flex border-b-0 md:border-b-[1px]">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <video
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/cop27/COP27_movie_2.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="pt-8 2xl:pt-16 flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/copreport/cop27_3.png" className="w-full" alt="keskt..." />
                    </div>
                </div>
                <div className="pt-8 2xl:pt-16 flex border-b-0 md:border-b-[1px]">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <video
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/cop27/COP27_movie_3.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="pt-8 2xl:pt-16">
                    <img src="/assets/img/copreport/cop27_4.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/copreport/cop27_5.png" className="w-full" alt="keskt..." />
                </div>

                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full">
                            {/* First Image Container */}
                            <div className="overflow-hidden md:border-r md:border-white">
                                <Link to="/works/deutsche">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px]
                                        px-[15px] md:px-10 flex flex-col h-full
                                        bg-[url('assets/img/copreport/DB_2.png')] md:bg-[url('assets/img/copreport/DB_4.png')]
                                        bg-no-repeat bg-cover transition duration-300 ease-in-out hover:scale-105"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                            DB
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] py-[26px] lg:py-[43px]
                                                xl:py-[67px] font-normal text-[12px] lg:text-[21px]
                                                xl:text-[32px] 2xl:text-[40px] leading-tight"
                                            >
                                                Crafting inclusive campaigns through strategic messaging and innovative visuals to redefine perceptions and engage diverse audiences.
                                            </div>
                                        </div>
                                        <div className="flex py-8 items-center pl-4">
                                            <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">
                                                read more
                                            </div>
                                            <div>
                                                <svg
                                                    className="ml-3 pt-[2px] w-6 h-6"
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
                                <Link to="/works/bpl">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px]
                                        px-[15px] md:px-10 flex flex-col h-full
                                        bg-[url('assets/img/copreport/BP_2.png')] md:bg-[url('assets/img/copreport/BP_1.png')]
                                        bg-no-repeat bg-cover transition duration-300 ease-in-out hover:scale-105"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                            BPI
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] py-[26px] lg:py-[43px]
                                                xl:py-[67px] font-normal text-[12px] lg:text-[21px]
                                                xl:text-[32px] 2xl:text-[40px] leading-tight"
                                            >
                                                Partnering with BPI to spotlight its crucial role in advancing the pharmaceutical industry through engaging narratives and innovative visual strategies.
                                            </div>
                                        </div>
                                        <div className="flex py-8 items-center pl-4">
                                            <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">
                                                read more
                                            </div>
                                            <div>
                                                <svg
                                                    className="ml-3 pt-[2px] w-6 h-6"
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

export default CopReport;
