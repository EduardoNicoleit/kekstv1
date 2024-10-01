import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact, MainBorder } from "../components";

const CeoTracker = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white welcome" ref={element}>
                <img src="/assets/img/ceotracker/ceo_header.png" alt="keskt..." className="w-full hidden md:block" />
                <img src="/assets/img/ceotracker/ceo_mobile.png" alt="keskt..." className="w-full block md:hidden" />
                <div className="w-full absolute bottom-0 font-Arial">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                        <div className="flex">
                            <div className="w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                            <div>
                                <div className="font-Arial font-normal text-[17px] md:text-2xl lg:text-4xl xl:text-[70px] xl:leading-[80px]">
                                    Kekst CNC
                                </div>
                                <div className="font-Helvetica font-bold mt-auto
                        text-[30px] leading-[34px] md:text-[50px] md:leading-[57px]
                        lg:text-[70px]
                        xl:text-[160px]       
                        lg:leading-[80px] xl:leading-[184px]                                         
                        pb-14 sm:pb-6 md:pb-10 lg:pb-10 xl:pb-5 2xl:pb-16 3xl:pb-20">
                                    CEO Tracker
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
                                <div className="lg:grid grid-cols-2 w-full items-start 2xl:items-center ">
                                    <div className="pl-[60px] 2xl:pl-8 2xl:pr-20 3xl:pr-40 xl:border-l-0 2xl:border-l-[1px] leading-tight h-full">
                                        Launched a report revealing how CEOs
                                        managed communication during the world's
                                        tumultuous times.
                                    </div>
                                    <div className="pl-8 2xl:pr-20 3xl:pr-40 border-l-[1px] leading-tight h-full">
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
            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                <div className="block lg:hidden font-Helvetica font-normal py-[41px] text-white pl-6 sm:pl-[33px]">
                    <div className="text-[12px] leading-[14px] uppercase">
                        Overview
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Launched a report revealing how CEOs
                        managed communication during the world's
                        tumultuous times.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Developed a visual narrative around distinct CEO
                        personas, illustrating various leadership approaches
                        amidst economic, political and societal challenges.
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
                        We have released a report derived from an analysis conducted by our Keskt CNC team, revealing how executive communications teams managed during the world's tumultuous times. Thousands of posts have provided insights into how the LinkedIn algorithm operates, the top priorities for CEOs, and how executive communications adjusted amidst ongoing conflict in Europe.
                    </div>
                </div>
                <div>
                    <img src="/assets/img/ceotracker/ceo_1.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-10 2xl:py-[114px] text-[17px] lg:text-[18px] xl:text-2xl flex font-normal font-Helvetica text-white">
                    <div className="md:w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                    <div className="px-6 md:px-0">
                        <div className="pb-5">
                            With governments, media, and social media platforms amplifying polarization and politicization on critical societal issues, businesses and CEOs find themselves increasingly vulnerable. CEOs are seen as vital contributors to discussions on diversity, equity, and inclusion (DE&I) and sustainability, necessitating their engagement. However, they must ensure that their statements are grounded in factual information and yield tangible results rather than mere rhetoric.
                        </div>
                        <div>
                            The report employs visual storytelling, crafted around distinct CEO personas, illustrating various leadership approaches amidst economic, political and societal challenges. This underscores CEOs' adaptability and diverse communication strategies, as they navigate through today's complex landscape of shifting expectations and adversities.
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/assets/img/ceotracker/ceo_2.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/ceotracker/ceo_3.png" className="w-full" alt="keskt..." />
                </div>
                <div className="hidden md:block border-b-[1px] border-white">
                    <img src="/assets/img/ceotracker/ceo_movie1.png" className="w-full" alt="keskt..." />
                </div>
                <div className="block md:hidden border-white">
                    <img src="/assets/img/ceotracker/white.png" className="w-full" alt="keskt..." />
                </div>
                <div className="block md:hidden border-white pt-8">
                    <img src="/assets/img/ceotracker/blue.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/ceotracker/ceo_4.png" className="w-full" alt="keskt..." />
                    </div>
                </div>
                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/ceotracker/ceo_5.png" className="w-full" alt="keskt..." />
                </div>
                <div className="flex text-white font-Arial">
                    <div className="grid grid-cols-2 w-full">
                        <div className="py-[26px] 2xl:py-[100px] px-[15px] md:px-10 flex flex-col h-full 
                        bg-[url('assets/img/ceotracker/bp.png')] md:bg-[url('assets/img/ceotracker/bp_3b.png')] bg-no-repeat bg-cover">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                bp
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Creating culturally tailored infographics to showcase bp's Greater Tortue Ahmeyim (GTA) FLNG project's achievements, fostering global understanding and engagement.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">
                                    read more
                                </div>
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
                        bg-[url('assets/img/ceotracker/DB_1.png')] md:bg-[url('assets/img/ceotracker/DB_4.png')] bg-no-repeat bg-cover">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                DB
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Crafting inclusive campaigns through strategic messaging and innovative visuals to redefine perceptions and engage diverse audiences.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">
                                    read more
                                </div>
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

export default CeoTracker;