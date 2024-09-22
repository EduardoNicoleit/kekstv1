import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";
import UniperImg from '../assets/img/uniper/uniper.png';

const Uniper = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white bg-cover bg-center w-full h-full" >
                <img src={UniperImg} alt="" className="w-full" ref={element} />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="font-Helvetica sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold sm:px-[300px] md:px-[300px] lg:px-[270px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        Uniper
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 sm:text-4xl md:text-3xl lg:text-[22px] h-[256px] lg:h-[128px]">
                        <div className="w-[300px] lg:w-[200px] border-r-[1px] my-5 lg:my-5 px-4 lg:px-0">
                            Overview
                        </div>
                        <div className="hidden lg:grid grid-cols-3 w-full">
                            <div className="border-r-[1px] px-10 my-5">
                                Launched Uniper's 'Beating Heart of<br />
                                Energy' Campaign.
                            </div>
                            <div className="border-r-[1px] px-10 my-5">
                                Developed a unified visual identity and<br />
                                strategic messaging.
                            </div>
                            <div className="px-10 my-5">
                                Transformed Uniper's energy narrative into<br />
                                engaging and dynamic content.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:hidden w-full items-center">
                            <div className="px-10">
                                Launched Uniper's 'Beating Heart of
                                Energy' Campaign.
                            </div>
                            <div className="px-10">
                                Developed a unified visual identity and
                                strategic messaging.
                            </div>
                            <div className="px-10">
                                Transformed Uniper's energy narrative into
                                engaging and dynamic content.
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
                        In 2023, we launched an ambitious campaign for Uniper, developing a unique visual identity alongside a diverse range of outputs. From the creation of a compelling concept slogan, to strategic deployment and execution across various media, including video and in-house channels, the "Beating Heart of Energy" campaign positions Uniper as the linchpin of the energy infrastructure. This initiative underscores Uniper's durability, dedication to sustainability and significant efforts towards facilitating a seamless and green energy shift.
                    </div>
                </div>
            </div>
            <div className="w-full px-[50px] relative box-border">
                <div className="pt-[128px]">
                    <img src="/src/assets/img/uniper/uniper_movie.png">
                    </img>
                </div>
                <div className="py-[114px] px-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    The beating heart, a vibrant force essential for life serves as a powerful metaphor for Uniper's role in the energy system. Just as the heart meticulously orchestrates the delivery of life-sustaining blood through an intricate network of vessels, Uniper ensures the seamless distribution of energy across its vast network. The heart's relentless rhythm, critical for survival, mirrors Uniper's commitment to providing an uninterrupted energy supply to its customers across Europe, highlighting the profound consequences of even brief interruptions.
                    <br /><br />
                    This comparison extends further when considering adaptability and resilience. Like a heart that strengthens through exercise, Uniper has evolved by learning from past challenges, adapting to market demands to become more resilient and efficient. Similarly, Uniper's remarkable flexibility in meeting customers' energy needs mirrors the heart's dynamic response to the body's demands, ensuring that energy flows seamlessly to match the fluctuating demands of the market and the evolving needs of consumers.
                    <br /><br />
                    The "Beating Heart of Energy" campaign not only captures Uniper's vital role in the energy ecosystem, but also embodies the passion, vitality and unfailing reliability at the core of Uniper's mission. This vivid analogy serves as a reminder of the indispensable role Uniper plays in powering lives, reflecting its vision to be the enduring, transformative force within the energy sector.
                </div>
                <div className="flex justify-end">
                    <img src="/src/assets/img/uniper/uniper_1.png">
                    </img>
                </div>
                <div className="w-full flex justify-end pt-[56px]">
                    <div className="w-[688px]">
                        <div className="w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/uniper/uniper_2.png')]">
                        </div>
                    </div>
                    <div className="w-[825px]">
                        <div className=" w-full h-[664px] bg-no-repeat bg-cover bg-center bg-[url('assets/img/uniper/uniper_3.png')]">
                        </div>
                    </div>
                </div>
                <div className="flex justify-end pt-16">
                    <img src="/src/assets/img/uniper/uniper_movie2.png">
                    </img>
                </div>
                <div className="flex justify-end pt-16">
                    <img src="/src/assets/img/uniper/uniper_4.png">
                    </img>
                </div>
                <div className="pt-16">
                    <img src="/src/assets/img/uniper/uniper_5.png">
                    </img>
                </div>
                <div className="flex justify-end">
                    <img src="/src/assets/img/uniper/uniper_6.png">
                    </img>
                </div>
                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/uniper/header_0.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    Mars
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
                    <div className="w-1/2">
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/uniper/newwaters_4.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    Newwaters
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Crafting NewWaters' corporate identity to embody fluid innovation in a transforming market.
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

export default Uniper;