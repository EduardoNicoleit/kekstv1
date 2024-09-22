import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";

const Netclean = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white bg-cover bg-center w-full h-full">
                <img src="/src/assets/img/netclean/netclean.png" alt="" className="w-full" ref={element} />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="font-Helvetica sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold sm:px-[300px] md:px-[300px] lg:px-[270px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        Netclean
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 sm:text-4xl md:text-3xl lg:text-[22px] h-[256px] lg:h-[128px]">
                        <div className="w-[300px] lg:w-[200px] border-r-[1px] my-5 lg:my-6 px-4 lg:px-0">
                            Overview
                        </div>
                        <div className="hidden lg:grid grid-cols-3 w-full">
                            <div className="border-r-[1px] px-10 my-6">
                                Reinvented NetClean's <br />
                                Annual Reports strategy.
                            </div>
                            <div className="border-r-[1px] px-10 my-6">
                                Crafted a multi-channel, visual approach <br />
                                to communicate results and core values.
                            </div>
                            <div className="px-10 my-6">
                                Converted data into dynamic stories <br />
                                for stakeholder engagement.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:hidden w-full items-center">
                            <div className="px-10">
                                Reinvented NetClean's
                                Annual Reports strategy.
                            </div>
                            <div className="px-10">
                                Crafted a multi-channel, visual approach
                                to communicate results and core values.
                            </div>
                            <div className="px-10">
                                Converted data into dynamic stories
                                for stakeholder engagement.
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
                        In our partnership with NetClean, we revolutionized the concept of Annual Reports. We initiated a narrative strategy that resonated with the company's modern and bold ethos, marking a fundamental shift in how NetClean communicates its core values and achievements.
                    </div>
                </div>
            </div>
            <div className="h-[850px] ml-[360px] mt-[134px] mr-[50px] bg-white"></div>
            <div className="w-full px-[50px] relative box-border">
                <div className="py-[114px] px-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    Our strategy wove this narrative across various channels, creating a dialogue with stakeholders that went beyond the traditional confines of reporting. The aim was to transform static data into a compelling visual narrative, utilizing infographics, illustrations and animations not just to capture attention, but to make complex information engaging and relatable.
                    <br /><br />
                    This multi-platform execution spanned from the tangible touch of print to the interactive engagement of digital media.
                    <br /><br />
                    The result was a case study in innovation. By communicating NetClean's results and objectives through an array of narrative-driven, visually engaging content, we didn’t just report on the company's year – we brought it to life. This approach proved instrumental in driving stakeholder engagement and aligning the company’s communication strategy with its forward-thinking identity.
                </div>
                <div>
                    <img src="/src/assets/img/netclean/netclean_1.png">
                    </img>
                </div>
                <div className="pt-[64px]">
                    <img src="/src/assets/img/netclean/netclean_2.png">
                    </img>
                </div>
                <div className="flex justify-end">
                    <img src="/src/assets/img/netclean/netclean_3.png">
                    </img>
                </div>
                <div className="pt-[64px] flex justify-end">
                    <img src="/src/assets/img/netclean/white.png">
                    </img>
                    <img src="/src/assets/img/netclean/black.png">
                    </img>
                </div>
                <div>
                    <img className="pt-[128px]" src="/src/assets/img/netclean/netclean_4.png">
                    </img>
                </div>
                <div className="flex justify-end">
                    <img src="/src/assets/img/netclean/netclean_5.png">
                    </img>
                </div>
                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/netclean/vw.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    bpl
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Partnering with Volkswagen to enhance their global ESG narrative, from strategic audience engagement to shaping future sustainability pathways.
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
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/netclean/PHI_copy.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    NetClean
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Crafting a video campaign that showcases how artificial intelligence tools are revolutionizing research methodologies within Mars, positioning them at the forefront of innovative exploration.
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

export default Netclean;