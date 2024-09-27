import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";

const Deutsche = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white bg-cover bg-center w-full h-full" ref={element}>
                <img src="/src/assets/img/deutsche/DB_header.png" alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold sm:px-[300px] md:px-[300px] lg:px-[270px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        Deutsche Bahn
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 sm:text-4xl md:text-3xl lg:text-[22px] h-[256px] lg:h-[128px]">
                        <div className="w-[300px] lg:w-[200px] border-r-[1px] my-5 lg:my-2 px-4 lg:px-0">
                            Overview
                        </div>
                        <div className="hidden lg:flex flex-cols-3 w-full">
                            <div className="border-l-[1px] px-10 my-2">
                                Conceptualized Deutsche Bahn's messaging on<br />
                                the topic of "diversity" based on factual insights<br />
                                and the company's reality.
                            </div>
                            <div className="border-x-[1px] px-10 my-2">
                                Utilized innovative visual communication to<br />
                                reshape perceptions of diversity.
                            </div>
                            <div className="px-10 my-2">
                                Deployed a strategic approach targeting<br />
                                key stakeholders and the general public.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:hidden w-full items-center">
                            <div className="px-10">
                                Conceptualized Deutsche Bahn's messaging on
                                the topic of "diversity" based on factual insights
                                and the company's reality.
                            </div>
                            <div className="px-10">
                                Utilized innovative visual communication to
                                reshape perceptions of diversity.
                            </div>
                            <div className="px-10">
                                Deployed a strategic approach targeting
                                key stakeholders and the general public.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[128px] lg:pt-[280px] pl-[110px] pr-[264px] flex relative">
                <div className="w-[16%] text-white text-2xl font-Helvetica font-normal leading-[28px] box-border">
                    The partnership:
                </div>
                <div className="w-[84%] flex flex-col">
                    <div className=" text-white text-[40px] font-Helvetica font-normal leading-[46px] box-border">
                        Partnering with Deutsche Bahn, we embarked on a campaign aimed at spotlighting and championing diversity within Germany'slargest railway company.
                    </div>
                </div>
            </div>

            <div className="w-full px-[50px] pt-[150px] relative box-border">

                <div>
                    <img src="/src/assets/img/deutsche/DB_movie.png">
                    </img>
                </div>

                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-normal leading-[32px] box-border">
                    <div className="pr-[300px]">
                        Our approach centered on a communication strategy grounded in factual information and a candid portrayal of the company's current landscape.
                        <br /><br />
                        Employing a distinctive visual language crafted specifically to demystify and engage with the topic, our strategy aimed to present diversity in a refreshing and accessible light. Through modern illustrations, we showcased diversity as a vibrant and integral aspect of the company, steering away from conventional representations. These visuals not only symbolized the campaign's core message but, also marked a significant shift in the company's.
                        <br /><br />
                        We crafted an experience that converted passive viewers into active readers, readers into committed followers and followers into advocates.
                    </div>
                </div>

                <div className="pt-32 flex justify-end">
                    <img src="/src/assets/img/deutsche/DB_1.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/deutsche/DB_2.png">
                    </img>
                </div>

                <div className="pt-16 flex justify-end">
                    <img src="/src/assets/img/deutsche/DB_3.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/deutsche/DB_4.png">
                    </img>
                </div>

                <div className="flex justify-end">
                    <img src="/src/assets/img/deutsche/DB_5.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/deutsche/ceo_1.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-bold">
                                    CEO Tracker
                                </div>
                                <div className="text-[40px] font-normal leading-[50px] font-Arial">
                                    Analyzing CEO communication during turbulent times and crafting visually engaging narratives to showcase diverse leadership strategies amidst complex challenges.
                                </div>
                                <div className="pl-5 absolute bottom-0 flex">
                                    <div>
                                        READ MORE
                                    </div>
                                    <div className="pl-3 flex items-center">
                                        <img src="/src/assets/img/volkswagen/Vector.png" className="w-[13px] h-[13px]">
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/deutsche/Cop27_1.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-bold">
                                    COP 27
                                </div>
                                <div className="text-[40px] font-normal leading-[50px] font-Arial">
                                    Shaping COP 27's global narrative through data-driven insights and visual storytelling, capturing diverse stakeholder sentiments.
                                </div>
                                <div className="pl-5 absolute bottom-0 flex">
                                    <div>
                                        READ MORE
                                    </div>
                                    <div className="pl-3 flex items-center">
                                        <img src="/src/assets/img/volkswagen/Vector.png" className="w-[13px] h-[13px]">
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Deutsche;