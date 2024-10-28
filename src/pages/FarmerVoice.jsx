/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Footer, MainBorder } from "../components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const FarmerVoice = ({ isSticky, element }) => {
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
                    src="/assets/img/farmervoice/farmer.png"
                    alt="Farmer Voice Desktop"
                    className="w-full hidden md:block"
                />
                {/* Mobile Image */}
                <img
                    src="/assets/img/farmervoice/farmer_mobile.png"
                    alt="Farmer Voice Mobile"
                    className="w-full block md:hidden"
                />
                {/* Overlay Content */}
                <div className="w-full absolute bottom-0 font-Helvetica">
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
                                    3xl:text-[6.5vw] "
                                >
                                    Farmer Voice
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
                                    className="lg:pl-[60px] lg:py-4 xl:py-5 2xl:py-[2vw] 
                                    w-[300px] lg:w-[200px] 2xl:w-[318px] 3xl:w-[14vw] 
                                    mb-0 2xl:mb-12 
                                    3xl:pl-[2vw] 3xl:pr-[2vw] 3xl:py-[2vw] 5xl:pl-[3vw] 5xl:pr-[3vw] 5xl:py-[3vw]"
                                >
                                    Overview:
                                </div>
                                <div className="text-normal lg:grid grid-cols-3 w-full items-start 2xl:items-center 
                                                3xl:gap-[1vw] 5xl:gap-[1.5vw]">
                                    <div className="pl-[60px] 2xl:pl-8 pr-4 xl:border-l-0 2xl:border-l-[1px] 
                                                leading-tight h-full 
                                                3xl:pl-[2.15vw] 3xl:pr-[1vw] 5xl:pl-[2.5vw] 5xl:pr-[1.2vw]">
                                        Conceptualized the "Farmers Voice" brand,
                                        drawing on genuine global farmer insights.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full 
                                                3xl:pl-[2vw] 3xl:pr-[2vw] 5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Crafted a Corporate Identity merging
                                        traditional agriculture and innovation.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full 
                                                3xl:pl-[2vw] 2xl:pr-[3vw] 5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Launched a report, transforming complex
                                        data into engaging stories.
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
                        Conceptualized the "Farmers Voice" brand,
                        drawing on genuine global farmer insights.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px] 
                                3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Crafted a Corporate Identity merging
                        traditional agriculture and innovation.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px] 
                                3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Launched a report, transforming complex
                        data into engaging stories.
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
                        px-6 lg:px-[60px] 2xl:px-[2vw] 
                        py-6 2xl:py-0 
                        3xl:px-[2vw] 5xl:px-[3vw] 
                        3xl:py-[2vw] 5xl:py-[3vw]"
                    >
                        The partnership:
                    </div>
                    <div
                        className="font-bold md:font-normal text-[17px] md:text-[28px] 2xl:text-[40px] 3xl:text-[1.8vw] px-6 lg:px-[60px] 2xl:px-[0] 2xl:pr-[3.5vw] w-full leading-tight"
                    >
                        Launched in September 2023, the Branding and Corporate Identity for Bayer's "Farmers Voice" initiative artfully merges traditional agricultural motifs with modern elements, encapsulating the synergy of longstanding farming traditions with contemporary agricultural innovations. The scope of our work spanned from the initial naming of the initiative to the comprehensive creation of its Corporate Design.
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
                        <source src="/assets/video/farmer/Farmer_movie_1.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Description Section */}
                <div
                    className="py-10 2xl:py-[5vw] text-[17px] lg:text-[18px] xl:text-[1.2vw] flex font-normal font-Helvetica text-white"
                >
                    <div className="w-6 lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="px-0 pr-6 sm:px-6 lg:px-0 lg:pr-10 2xl:pr-[3.5vw]">
                        <div className="pb-5 3xl:pb-[2.5vw]">
                            With its earthy color palette and clean lines, the design vividly embodies the initiative's fundamental values, highlighting Bayer's commitment to agriculture and farmer empowerment. This design framework not only bolsters Bayer’s outreach efforts, but also sets the stage for an insightful annual report that explores shifts in farming practices and challenges, illustrating the initiative's dynamic and responsive nature.
                        </div>
                        <div className="pb-5 3xl:pb-[2.5vw]">
                            The annual report, enriched by the "Farmers Voice" survey conducted by Kekst CNC, features infographics and visual storytelling that translate complex data from 800 farmers across eight diverse countries and an additional 2,056 smallholding farmers in India into captivating visual content. This global perspective, gathered from April to July 2023 without the farmers' prior knowledge of Bayer's involvement, ensures authenticity and unbiased insights.
                        </div>
                        <div>
                            The report aims to inform and motivate stakeholders by highlighting the evolving agricultural landscape's intricacies and opportunities. By aligning every design element with the "Farmers Voice" initiative's goals, we've established a Corporate Identity and report that not only serves as a tribute to Bayer's dedication to the farming community, but also redefines how agricultural challenges are communicated, making them accessible and engaging for a broad audience.
                        </div>
                    </div>
                </div>

                {/* Image Sections */}
                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/farmervoice/brand_color.png" className="w-full" alt="Farmers Voice Image 1" />
                </div>
                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/farmervoice/logo-texture.png" className="w-full" alt="Farmers Voice Image 1" />
                </div>

                <div className="flex">
                    <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full overflow-hidden">
                        <video
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/farmer/Farmer_movie_2.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/farmervoice/farmer_1.png" className="w-full" alt="Farmers Voice Image 1" />
                </div>
                <div>
                    <img src="/assets/img/farmervoice/farmer_2.png" className="w-full" alt="Farmers Voice Image 2" />
                </div>
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/farmervoice/farmer_3.png" className="w-full" alt="Farmers Voice Image 5" />
                    </div>
                </div>
                <div>
                    <img src="/assets/img/farmervoice/farmer_4.png" className="w-full" alt="Farmers Voice Image 4" />
                </div>
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/farmervoice/farmer_5.png" className="w-full" alt="Farmers Voice Image 5" />
                    </div>
                </div>

                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white pt-0">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full min-h-[300px] md:min-h-[400px]">
                            {/* First Image Container */}
                            <div className="overflow-hidden md:border-r md:border-white">
                                <Link to="/works/newwaters">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px]  3xl:py-[6vw] px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full
                                        bg-[url('assets/img/farmervoice/newwaters_1.png')] md:bg-[url('assets/img/farmervoice/newwaters.png')] bg-no-repeat bg-cover
                                        transition duration-300 ease-in-out hover:scale-105 5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl 3xl:text-[1.5vw] 5xl:text-[1vw]">Newwaters</div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] xl:py-[67px] 3xl:py-[4vw] font-normal
                                                text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[1.3vw] 5xl:text-[1.2vw] leading-tight 
                                                5xl:py-[5vw]"
                                            >
                                                Crafting NewWater's corporate identity to embody fluid innovation in a transforming market.
                                            </div>
                                        </div>
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
                            <div className="overflow-hidden">
                                <Link to="/works/maltesert">
                                    <div
                                        className="ursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] 
                                        px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full
                                        bg-[url('assets/img/farmervoice/malteser_1.png')] md:bg-[url('assets/img/farmervoice/malteser.png')]
                                        bg-no-repeat bg-cover 
                                        transition duration-300 ease-in-out hover:scale-105 
                                        5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                        3xl:text-[1.5vw] 5xl:text-[1vw]">Malteser</div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] 
                                                xl:py-[67px] 3xl:py-[4vw] font-normal text-[12px] 
                                                lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 
                                                3xl:text-[1.3vw] 5xl:text-[1.2vw] leading-tight 
                                                5xl:py-[5vw]"
                                            >
                                                Merging data with design to democratize information, crafting a visually engaging, universally accessible identity.
                                            </div>
                                        </div>
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

            {/* Footer and MainBorder Components */}
            <Footer />
            <MainBorder />
        </div>
    );
};

export default FarmerVoice;
