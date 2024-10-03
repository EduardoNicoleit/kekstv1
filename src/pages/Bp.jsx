import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact, MainBorder } from "../components";
import { Link } from 'react-router-dom';

const BP = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white welcome" ref={element}>
                <img src="/assets/img/bp/bp_3b.png" alt="keskt..." className="w-full hidden md:block" />
                <img src="/assets/img/bp/bp_mobile.png" alt="keskt..." className="w-full block md:hidden" />
                <div className="w-full absolute bottom-0 font-Arial">
                    <div className="flex flex-col px-[8px] lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                        <div className="flex">
                            <div className="w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                            <div>
                                <div className="font-Helvetica font-bold mt-auto
                        text-[30px] leading-[34px] md:text-[50px] md:leading-[57px]
                        lg:text-[70px]
                        xl:text-[160px]       
                        lg:leading-[80px] xl:leading-[184px]                                         
                        py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 2xl:py-16 3xl:py-20">
                                    bp
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
                                        Developed a series of infographics
                                        for bp's GTA FLNG project.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Adapted content for different regions and languages,
                                        ensuring cultural and regional relevance.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Utilized a visual strategy to enhance
                                        understanding and engagement.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[8px] lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                <div className="block lg:hidden font-Helvetica font-normal py-[41px] text-white pl-6 sm:pl-[33px]">
                    <div className="text-[12px] leading-[14px] uppercase">
                        Overview
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Developed a series of infographics
                        for bp's GTA FLNG project.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Adapted content for different regions and languages,
                        ensuring cultural and regional relevance.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Utilized a visual strategy to enhance
                        understanding and engagement.
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
                        In collaboration with bp, we created a series of static infographics to announce the arrival and berthing of different vessels at the Greater Tortue Ahmeyim (GTA) project. These infographics were designed to be used across bp-owned channels, including bp.com and bp's social media platforms, as part of an integrated communications campaign.
                    </div>
                </div>
                <div>
                    <img src="/assets/img/bp/bp_movie.png" alt="keskt..." className="w-full" />
                </div>
                <div className="py-10 2xl:py-[114px] text-[17px] lg:text-[18px] xl:text-2xl flex font-normal font-Helvetica text-white">
                    <div className="md:w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                    <div className="px-6 md:px-0">
                        <div className="pb-5">
                            Our goal was to engage and educate audiences about the GTA project and the critical role of the FLNG vessels. The infographics showcased the project's scale and complexity, highlighting the world-class engineering involved.
                        </div>
                        <div className="pb-5">
                            To resonate with diverse audiences, we tailored the visual content to reflect regional and cultural understandings. This approach not only enhanced the relatability of the infographics but also ensured that the information was accessible and engaging for different demographics.
                        </div>
                        <div>
                            Through strategic visual storytelling, we brought the GTA FLNG project to life, emphasizing its significance in meeting the energy needs of Mauritania and Senegal and establishing a world-class LNG hub. The infographics served as a powerful tool in bp's communication strategy, effectively bridging the gap between complex technical information and public understanding.
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/assets/img/bp/bp_1.png" alt="keskt..." className="w-full" />
                </div>
                <div className="hidden md:flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full flex">
                        <div>
                            <img src="/assets/img/bp/bp_3a.png" alt="keskt..." className="w-full" />
                        </div>
                        <div>
                            <img src="/assets/img/bp/bp_14.png" alt="keskt..." className="w-full" />
                            <img src="/assets/img/bp/bp_3d.png" alt="keskt..." className="w-full" />
                        </div>
                    </div>
                </div>
                <div className="block md:hidden py-8 2xl:py-16">
                    <img src="/assets/img/bp/bp_3a.png" alt="keskt..." className="w-full" />
                </div>
                <div className="block md:hidden">
                    <img src="/assets/img/bp/bp_14.png" alt="keskt..." className="w-full" />
                </div>
                <div className="block md:hidden pt-8 2xl:pt-16">
                    <img src="/assets/img/bp/bp_3d.png" alt="keskt..." className="w-full" />
                </div>
                <div className="pt-8 2xl:pt-16">
                    <img src="/assets/img/bp/bp_2.png" alt="keskt..." className="w-full" />
                </div>
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/bp/bp_5.png" alt="keskt..." className="w-full" />
                    </div>
                </div>
                <div className="flex text-white font-Arial">
                    <div className="grid grid-cols-2 w-full">
                        <div className="py-[26px] 2xl:py-[100px] px-[15px] md:px-10 flex flex-col h-full 
                        bg-[url('assets/img/bp/dtcp_geader_1.png')] md:bg-[url('assets/img/bp/dtcp_geader.png')] bg-no-repeat bg-cover">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                DTCP
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Infusing dynamic visual narratives and data insights to craft a trustworthy, stakeholder-engaging brand identity for DTCP.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <Link to="/works/dtcp">
                                    <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">
                                        read more
                                    </div>
                                </Link>
                                <div>
                                    <svg className="ml-3 pt-[2px] hover:w-7 hover:h-7 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="arrow_outward">
                                            <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="py-[26px] 2xl:py-[100px] px-[15px] md:px-10 flex flex-col h-full 
                        bg-[url('assets/img/bp/ceo_2.png')] md:bg-[url('assets/img/bp/ceo_1.png')] bg-no-repeat bg-cover">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                CEO Tracker
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Analyzing CEO communication during turbulent times and crafting visually engaging narratives to showcase diverse leadership strategies amidst complex challenges.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <Link to="/works/ceoTracker">
                                    <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">
                                        read more
                                    </div>
                                </Link>
                                <div>
                                    <svg className="ml-3 pt-[2px] hover:w-7 hover:h-7 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default BP;