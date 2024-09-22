import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";

const CeoTracker = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white bg-cover bg-center w-full h-full" ref={element}>
                <img src="/src/assets/img/ceotracker/ceo_header.png" alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20 sm:px-[300px] md:px-[300px] lg:px-[270px] xl:px-[308px] ">
                        <div className="sm:text-2xl md;text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] 3xl:text-[70px] py-3">
                            Kekst CNC
                        </div>
                        <div className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold">
                            CEO Tracker
                        </div>
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 sm:text-4xl md:text-3xl lg:text-[22px] h-[256px] lg:h-[128px]">
                        <div className="w-[300px] lg:w-[200px] border-r-[1px] my-8 lg:my-2">
                            Overview
                        </div>
                        <div className="hidden lg:grid grid-cols-2 w-full">
                            <div className="border-r-[1px] px-10 my-2">
                                Launched a report revealing how CEOs<br />
                                managed communication during the world's<br />
                                tumultuous times.
                            </div>
                            <div className="px-10 my-2">
                                Developed a visual narrative around distinct CEO<br />
                                personas, illustrating various leadership approaches<br />
                                amidst economic, political and societal challenges.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:hidden w-full items-center">
                            <div className="px-10">
                                Launched a report revealing how CEOs
                                managed communication during the world's
                                tumultuous times.
                            </div>
                            <div className="px-10">
                                Developed a visual narrative around distinct CEO
                                personas, illustrating various leadership approaches
                                amidst economic, political and societal challenges.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[128px] lg:pt-[280px] pl-[110px] pr-[264px] flex relative">
                <div className="w-[16%] text-white text-2xl font-Helvetica font-[400] leading-[28px] box-border">
                    The partnership:
                </div>
                <div className="w-[84%] flex flex-col">
                    <div className=" text-white text-[40px] font-Helvetica font-[400] leading-[46px] box-border">
                        We have released a report derived from an analysis conducted by our Keskt CNC team, revealing how executive communications teams managed during the world's tumultuous times. Thousands of posts have provided insights into how the LinkedIn algorithm operates, the top priorities for CEOs, and how executive communications adjusted amidst ongoing conflict in Europe.
                    </div>
                </div>
            </div>

            <div className="w-full px-[50px] pt-[150px] relative box-border">

                <div>
                    <img src="/src/assets/img/ceotracker/ceo_1.png">
                    </img>
                </div>

                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    <div className="pr-[300px]">
                        With governments, media, and social media platforms amplifying polarization and politicization on critical societal issues, businesses and CEOs find themselves increasingly vulnerable. CEOs are seen as vital contributors to discussions on diversity, equity, and inclusion (DE&I) and sustainability, necessitating their engagement. However, they must ensure that their statements are grounded in factual information and yield tangible results rather than mere rhetoric.
                        <br /><br />
                        The report employs visual storytelling, crafted around distinct CEO personas, illustrating various leadership approaches amidst economic, political and societal challenges. This underscores CEOs' adaptability and diverse communication strategies, as they navigate through today's complex landscape of shifting expectations and adversities.
                    </div>
                </div>

                <div className="pt-32">
                    <img src="/src/assets/img/ceotracker/ceo_2.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/ceotracker/ceo_3.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/ceotracker/ceo_movie.png">
                    </img>
                </div>

                <div className="flex justify-end">
                    <img src="/src/assets/img/ceotracker/ceo_movie2.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/ceotracker/ceo_4.png">
                    </img>
                </div>

                <div>
                    <img src="/src/assets/img/ceotracker/ceo_5.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/ceotracker/bp_3b.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    bp
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Creating culturally tailored infographics to showcase bp's Greater Tortue Ahmeyim (GTA) FLNG project's achievements, fostering global understanding and engagement.
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
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/ceotracker/DB_4.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    DB
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Crafting inclusive campaigns through strategic messaging and innovative visuals to redefine perceptions and engage diverse audiences.
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

export default CeoTracker;