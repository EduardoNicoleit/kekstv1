import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact, MainBorder } from "../components";
import { Link } from "react-router-dom";

const Volkswagen = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white welcome">
                <img src="/assets/img/volkswagen/volkswagen.png" alt="keskt..." className="w-full hidden md:block" ref={element} />
                <img src="/assets/img/volkswagen/volkswagen_mobile.png" alt="keskt..." className="w-full block md:hidden" ref={element} />
                <div className="w-full absolute bottom-0">
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
                                    Volkswagen
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
                                        Crafted a targeted social media campaign for Volkswagen's ESG initiatives.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Engaged audiences with creative content over a two-month period.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Transformed ESG data into relatable visuals, enhancing audience connection.
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
                        Crafted a targeted social media campaign for Volkswagen's ESG initiatives.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Engaged audiences with creative content over a two-month period.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Transformed ESG data into relatable visuals, enhancing audience connection.
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
                        In close collaboration with Volkswagen, we meticulously developed a social media campaign to promote and position the group's global ESG initiatives. Over two months, this campaign engaged audiences through creative posts, aiming to shift perceptions by connecting ESG actions with relatable, real-world scenarios.
                    </div>
                </div>
                <div>
                    <img src="/assets/img/volkswagen/Netclean_1.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-10 2xl:py-[114px] text-[17px] lg:text-[18px] xl:text-2xl flex font-normal font-Helvetica text-white">
                    <div className="md:w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                    <div className="px-6 md:px-0">
                        <div className="pb-5">
                            Our commitment spanned from concept creation and strategic planning to the execution phase, ensuring a seamless narrative throughout. The visual strategy transformed complex data into engaging visuals, marrying numerical facts about Volkswagen's ESG efforts with elements from everyday life, such as soccer stadiums and natural landscapes, to whimsical motifs like balloons.
                        </div>
                        <div>
                            This approach aimed to create an emotional connection, making the ESG initiatives both accessible and meaningful to the audience. Through careful strategy, creative conceptualization, and diligent execution, we delivered a cohesive and impactful campaign.
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/assets/img/volkswagen/Netclean_1(1).png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/volkswagen/vw-mockup.png" className="w-full" alt="keskt..." />
                    </div>
                </div>
                <div>
                    <img className="w-full" src="/assets/img/volkswagen/vw_movie_3.png" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16">
                    <img src="/assets/img/volkswagen/vw-mockup_4 copy.png" className="w-full" alt="keskt..." />
                </div>
                <div className="flex text-white font-Arial">
                    <div className="grid grid-cols-2 w-full">
                        <div className="py-[26px] 2xl:py-[100px] px-[15px] md:px-10 flex flex-col h-full bg-[url('assets/img/volkswagen/BPI_1.png')] bg-no-repeat bg-cover">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                bpl
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Partnering with bpI to spotlight its crucial role in advancing the pharmaceutical industry through engaging narratives and innovative visual strategies.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <Link to="/works/bpl">
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
                        bg-[url('assets/img/volkswagen/netclean_3.png')] md:bg-[url('assets/img/volkswagen/netclean_2.png')] bg-no-repeat bg-cover">
                            <div className="font-bold text-[15px] lg:text-base xl:text-2xl">
                                NetClean
                            </div>
                            <div className="flex-1">
                                <div className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight
                            ">
                                    Reinventing how annual data reports can be transformed into impactful narrative communication tools.
                                </div>
                            </div>
                            <div className="flex py-8 items-center pl-4">
                                <Link to="/works/netClean">
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

export default Volkswagen;