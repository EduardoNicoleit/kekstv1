import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact, MainBorder } from "../components";
import { Link } from "react-router-dom";

const Netclean = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white welcome" ref={element}>
                <img src="/assets/img/netclean/netclean.png" alt="keskt..." className="w-full hidden md:block" />
                <img src="/assets/img/netclean/netclean_mobile.png" alt="keskt..." className="w-full block md:hidden" />
                <div className="w-full absolute bottom-0 font-Helvetica">
                    <div className="flex flex-col font-Helvetica px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                        <div className="flex">
                            <div className="w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                            <div>
                                <div className="font-Helvetica font-bold mt-auto
                        text-[30px] leading-[34px] md:text-[50px] md:leading-[57px]
                        lg:text-[70px]
                        xl:text-[160px]       
                        lg:leading-[80px] xl:leading-[184px]                                         
                        py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 2xl:py-16 3xl:py-20">
                                    Netclean
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
                                        Reinvented NetClean's
                                        Annual Reports strategy.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Crafted a multi-channel, visual approach
                                        to communicate results and core values.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Converted data into dynamic stories
                                        for stakeholder engagement.
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
                        Reinvented NetClean's
                        Annual Reports strategy.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Crafted a multi-channel, visual approach
                        to communicate results and core values.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Converted data into dynamic stories
                        for stakeholder engagement.
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
                        In our partnership with NetClean, we revolutionized the concept of Annual Reports. We initiated a narrative strategy that resonated with the company's modern and bold ethos, marking a fundamental shift in how NetClean communicates its core values and achievements.
                    </div>
                </div>
                <div className="flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none border-b-[1px] border-white"></div>
                    <div className="w-full">
                        <video
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/netclean/NetClean_movie_1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="py-10 2xl:py-[114px] text-[17px] lg:text-[18px] xl:text-2xl flex font-normal font-Helvetica text-white">
                    <div className="md:w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                    <div className="px-6 md:px-0">
                        <div className="pb-5">
                            Our strategy wove this narrative across various channels, creating a dialogue with stakeholders that went beyond the traditional confines of reporting. The aim was to transform static data into a compelling visual narrative, utilizing infographics, illustrations and animations not just to capture attention, but to make complex information engaging and relatable.
                        </div>
                        <div className="pb-5">
                            This multi-platform execution spanned from the tangible touch of print to the interactive engagement of digital media.
                        </div>
                        <div>
                            The result was a case study in innovation. By communicating NetClean's results and objectives through an array of narrative-driven, visually engaging content, we didn’t just report on the company's year – we brought it to life. This approach proved instrumental in driving stakeholder engagement and aligning the company’s communication strategy with its forward-thinking identity.
                        </div>
                    </div>
                </div>
                <div className="pb-0 md:pb-8 2xl:pb-16">
                    <img src="/assets/img/netclean/netclean_1.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-8 md:py-0">
                    <img src="/assets/img/netclean/netclean_2.png" className="w-full" alt="keskt..." />
                </div>
                <div className="flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/netclean/netclean_3.png" className="w-full" alt="keskt..." />
                    </div>
                </div>
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none border-b-[1px]"></div>
                    <div className="w-full flex">
                        <div>
                            <video
                                className="w-full h-auto object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/assets/video/netclean/NetClean_movie_2.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div>
                            <video
                                className="w-full h-auto object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/assets/video/netclean/NetClean_movie_3.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="pb-8 md:pb-0">
                    <img src="/assets/img/netclean/netclean_4.png" className="w-full" alt="keskt..." />
                </div>
                <div className="pb-8 2xl:pb-16 flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/netclean/netclean_5.png" className="w-full" alt="keskt..." />
                    </div>
                </div>
                <div className="flex text-white font-Helvetica">
                    <div className="grid grid-cols-2 w-full overflow-hidden">
                        <div className="py-[26px] 2xl:py-[100px] px-[15px] md:px-10 flex flex-col h-full 
                        bg-[url('assets/img/netclean/vw_02.png')] md:bg-[url('assets/img/netclean/vw.png')] bg-no-repeat bg-cover transition duration-300 ease-in-out hover:scale-105">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                VW
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Partnering with netclean to enhance their global ESG narrative, from strategic audience engagement to shaping future sustainability pathways.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <Link to="/works/volkswagen">
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
                        bg-[url('assets/img/netclean/mars_2.png')] md:bg-[url('assets/img/netclean/mars_1.png')] bg-no-repeat bg-cover transition duration-300 ease-in-out hover:scale-105">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                Mars
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Crafting a video campaign that showcases how artificial intelligence tools are revolutionizing research methodologies within Mars, positioning them at the forefront of innovative exploration.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <Link to="/works/mars">
                                    <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">
                                        read more
                                    </div>
                                </Link>
                                <div>
                                    <svg className="ml-3 pt-[2px] w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="">
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

export default Netclean;