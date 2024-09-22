import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";

const Mars = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white bg-cover bg-center w-full h-full" ref={element}>
                <img src="/src/assets/img/mars/Mar.png" alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="font-Helvetica sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold sm:px-[300px] md:px-[300px] lg:px-[270px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        Mars
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 sm:text-4xl md:text-3xl lg:text-[22px] h-[256px] lg:h-[128px]">
                        <div className="w-[300px] lg:w-[200px] border-r-[1px] my-5 lg:my-2 px-4 lg:px-0">
                            Overview
                        </div>
                        <div className="hidden lg:grid grid-cols-3 w-full">
                            <div className="border-r-[1px] px-10 my-2">
                                Developed a holistic video campaign,<br />
                                showcasing Mars as an AI research<br />
                                pioneer.
                            </div>
                            <div className="border-r-[1px] px-10 my-2">
                                Used single-shot technique for immersive<br />
                                video innovation.
                            </div>
                            <div className="px-10 my-2">
                                Crafted compelling narrative with<br />
                                meticulous storyboarding to highlight<br />
                                Mars' AI leadership.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:hidden w-full items-center">
                            <div className="px-10">
                                Developed a holistic video campaign,
                                showcasing Mars as an AI research
                                pioneer.
                            </div>
                            <div className="px-10">
                                Used single-shot technique for immersive
                                video innovation.
                            </div>
                            <div className="px-10">
                                Crafted compelling narrative with
                                meticulous storyboarding to highlight
                                Mars' AI leadership.
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
                        For our Mars video campaign, we were tasked with a significant challenge; to showcase how artificial intelligence tools are revolutionizing research methodologies within Mars and emphasizing the pioneering strides the company has made in this domain. This objective required us to not only illustrate the transformative impact of AI on our research processes, but also to highlight Mars as a trailblazer in leveraging such technologies.
                    </div>
                </div>
            </div>
            <div className="w-full px-[50px] relative box-border">
                <div className="pt-[128px]">
                    <img src="/src/assets/img/mars/mars_movie.png">
                    </img>
                </div>
                <div className="py-[114px] px-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    For the Mars video campaign, we were tasked with a significant challenge: to showcase how artificial intelligence tools are revolutionizing research methodologies within Mars and emphasizing the pioneering strides the company has made in this domain. This objective required us to illustrate the transformative impact of AI on the research processes and also highlight Mars as a trailblazer in leveraging such technologies.
                    <br /><br />
                    At the core of our campaign was the innovative execution of a video shot in a single and continuous take this approach was aimed at maximizing the viewer's immersion, ensuring their engagement from the first frame to the last.
                    <br /><br />
                    The storyboard functioned as a strategic visual blueprint, with each scene deliberately designed to convey the narrative's progression. Our commitment to a singular, uninterrupted shot allowed us to craft a seamless journey through the world of Mars, showcasing our forward-thinking approach and the transformative power of AI in research.
                </div>
                <div className="flex justify-end">
                    <img src="/src/assets/img/mars/mars.png">
                    </img>
                </div>
                <div className="w-full flex pt-[56px]">
                    <div className="w-1/2">
                        <div className="w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/mars/bp4.png')]">
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className=" w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/mars/bp5.png')]">
                        </div>
                    </div>
                </div>
                <div className="w-full flex pt-[56px]">
                    <div className="w-1/2">
                        <div className="w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/mars/bp3.png')]">
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className=" w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/mars/bp2.png')]">
                        </div>
                    </div>
                </div>
                <div className="w-full flex pt-[56px]">
                    <div className="w-1/2">
                        <div className="w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/mars/bp_13.png')]">
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className=" w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/mars/bp_14.png')]">
                        </div>
                    </div>
                </div>
                <div className="w-full flex pt-[56px]">
                    <div className="w-1/2">
                        <div className="w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/mars/bp_13(1).png')]">
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className=" w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/mars/bp_14(1).png')]">
                        </div>
                    </div>
                </div>
                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/mars/uniper_1.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    NetClean
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Reinventing how annual data reports can be transformed into impactful narrative communication tools.
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
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/mars/uniper_2.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    Uniper
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Shaping Uniper's campaign to position them as the heartbeat of an evolving energy landscape.
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

export default Mars;