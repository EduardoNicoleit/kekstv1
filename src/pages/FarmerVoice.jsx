import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact, MainBorder } from "../components";
import { Link } from "react-router-dom";

const FarmerVoice = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white welcome" ref={element}>
                <img src="/assets/img/farmervoice/farmer.png" alt="keskt..." className="w-full hidden md:block" />
                <img src="/assets/img/farmervoice/farmer_mobile.png" alt="keskt..." className="w-full block md:hidden" />
                <div className="w-full absolute bottom-0 font-Arial">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                        <div className="flex">
                            <div className="w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                            <div>
                                <div className="font-Helvetica font-bold mt-auto
                        text-[30px] leading-[34px] md:text-[50px] md:leading-[57px]
                        lg:text-[70px]
                        xl:text-[160px]       
                        lg:leading-[80px] xl:leading-[184px]                                         
                        py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 2xl:py-16 3xl:py-20">
                                    Farmer Voice
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="lg:flex-col 2xl:flex-row flex border-white border-y-[1px]
                                sm:text-4xl md:text-3xl lg:text-[22px] lg:h-[220px] xl:h-[188px] 2xl:h-[128px] items-start 2xl:items-center"
                            >
                                <div className="lg:pl-[60px] lg:py-4 xl:py-5 2xl:py-0
                            w-[300px] lg:w-[200px] 2xl:w-[318px] mb-0 2xl:mb-12                  
                            ">
                                    Overview
                                </div>
                                <div className="lg:grid grid-cols-3 w-full items-start 2xl:items-center ">
                                    <div className="pl-[60px] 2xl:pl-8 pr-4 xl:border-l-0 2xl:border-l-[1px] leading-tight h-full">
                                        Conceptualized the "Farmers Voice" brand,
                                        drawing on genuine global farmer insights.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Crafted a Corporate Identity merging
                                        traditional agriculture and innovation.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Launched a report, transforming complex
                                        data into engaging stories.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                <div className="block lg:hidden font-Helvetica font-normal py-[41px] text-white pl-6 sm:pl-[33px]">
                    <div className="text-[12px] leading-[14px] uppercase">
                        Overview
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Conceptualized the "Farmers Voice" brand,
                        drawing on genuine global farmer insights.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Crafted a Corporate Identity merging
                        traditional agriculture and innovation.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Launched a report, transforming complex
                        data into engaging stories.
                    </div>
                </div>
                <div className="flex flex-col 2xl:flex-row md:pt-[10px] lg:pt-10 xl:pt-[156px] 2xl:pt-[211px] pb-10 lg:pb-20 xl:pb-[106px] 2xl:pb-[134px] w-full font-Helvetica  text-white ">
                    <div className="text-start 2xl:text-center font-normal
                        text-[12px] md:text-lg 2xl:text-2xl 
                        pt-3
                        xl:w-full 2xl:w-[299px]
                        flex-none
                        px-[33px] lg:px-[60px] 2xl:px-0
                        py-6 2xl:py-0                        
                        ">
                        The partnership:
                    </div>
                    <div className="font-bold md:font-normal text-[17px] md:text-[28px] 2xl:text-[40px] px-[33px] lg:px-[60px] 2xl:px-0 w-full leading-tight">
                        Launched in September 2023, the Branding and Corporate Identity for Bayer's "Farmers Voice" initiative artfully merges traditional agricultural motifs with modern elements, encapsulating the synergy of longstanding farming traditions with contemporary agricultural innovations. The scope of our work spanned from the initial naming of the initiative to the comprehensive creation of its Corporate Design.
                    </div>
                </div>
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
                <div className="py-10 2xl:py-[114px] text-[17px] lg:text-[18px] xl:text-2xl flex font-normal font-Helvetica text-white">
                    <div className="md:w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                    <div className="px-6 md:px-0">
                        <div className="pb-5">
                            With its earthy color palette and clean lines, the design vividly embodies the initiative's fundamental values, highlighting Bayer's commitment to agriculture and farmer empowerment. This design framework not only bolsters Bayer’s outreach efforts, but also sets the stage for an insightful annual report that explores shifts in farming practices and challenges, illustrating the initiative's dynamic and responsive nature.
                        </div>
                        <div className="pb-5">
                            The annual report, enriched by the "Farmers Voice" survey conducted by Kekst CNC, features infographics and visual storytelling that translate complex data from 800 farmers across eight diverse countries and an additional 2,056 smallholding farmers in India into captivating visual content. This global perspective, gathered from April to July 2023 without the farmers' prior knowledge of Bayer's involvement, ensures authenticity and unbiased insights.
                        </div>
                        <div>
                            The report aims to inform and motivate stakeholders by highlighting the evolving agricultural landscape's intricacies and opportunities. By aligning every design element with the "Farmers Voice" initiative's goals, we've established a Corporate Identity and report that not only serves as a tribute to Bayer's dedication to the farming community, but also redefines how agricultural challenges are communicated, making them accessible and engaging for a broad audience.
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/assets/img/farmervoice/brand_color.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/farmervoice/logo-texture.png" className="w-full" alt="keskt..." />
                </div>
                <div>
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
                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/farmervoice/farmer_1.png" className="w-full" alt="keskt..." />
                </div>
                <div>
                    <img src="/assets/img/farmervoice/farmer_2.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/farmervoice/farmer_3.png" className="w-full" alt="keskt..." />
                </div>
                <div>
                    <img src="/assets/img/farmervoice/farmer_4.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/farmervoice/farmer_5.png" className="w-full" alt="keskt..." />
                    </div>
                </div>
                <div className="flex text-white font-Arial">
                    <div className="grid grid-cols-2 w-full overflow-hidden">
                        <div className="py-[26px] 2xl:py-[100px] px-[15px] md:px-10 flex flex-col h-full 
                        bg-[url('assets/img/farmervoice/newwaters_1.png')] md:bg-[url('assets/img/farmervoice/newwaters.png')] bg-no-repeat bg-cover transition duration-300 ease-in-out hover:scale-105">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                Newwaters
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Crafting NewWaters' corporate identity to embody fluid innovation in a transforming market.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <Link to="/works/newwaters">
                                    <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">
                                        read more
                                    </div>
                                </Link>
                                <div>
                                    <svg className="ml-3 pt-[2px]  w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="arrow_outward">
                                            <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="py-[26px] 2xl:py-[100px] px-[15px] md:px-10 flex flex-col h-full 
                        bg-[url('assets/img/farmervoice/malteser_1.png')] md:bg-[url('assets/img/farmervoice/malteser.png')] bg-no-repeat bg-cover transition duration-300 ease-in-out hover:scale-105">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                Malteser
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Merging data with design to democratize information, crafting a visually engaging, universally accessible identity.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <Link to="/works/maltesert">
                                    <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">
                                        read more
                                    </div>
                                </Link>
                                <div>
                                    <svg className="ml-3 pt-[2px]  w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="arrow_outward">
                                            <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <MainBorder />
        </div>
    )
}

export default FarmerVoice;