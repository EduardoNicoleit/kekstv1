import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";
import VolkswagenImg from '../assets/img/volkswagen/volkswagen.png';

const Volkswagen = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white bg-cover bg-center w-full h-full" ref={element}>
                <img src={VolkswagenImg} alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="font-Helvetica sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold sm:px-[300px] md:px-[300px] lg:px-[270px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        Volkswagen
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 sm:text-4xl md:text-3xl lg:text-[22px] h-[256px] lg:h-[128px]">
                        <div className="w-[300px] lg:w-[200px] border-r-[1px] my-5 lg:my-6 px-4">
                            Overview
                        </div>
                        <div className="hidden lg:grid grid-cols-3 w-full">
                            <div className="border-r-[1px] px-10 my-6">
                                Crafted a targeted social media <br /> campaign for Volkswagen's ESG initiatives.
                            </div>
                            <div className="border-r-[1px] px-10 my-6">
                                Engaged audiences with creative <br /> content over a two-month period.
                            </div>
                            <div className="px-10 my-6">
                                Transformed ESG data into relatable <br /> visuals, enhancing audience connection.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:hidden w-full items-center">
                            <div className="px-10">
                                Crafted a targeted social media campaign for Volkswagen's ESG initiatives.
                            </div>
                            <div className="px-10">
                                Engaged audiences with creative content over a two-month period.
                            </div>
                            <div className="px-10">
                                Transformed ESG data into relatable visuals, enhancing audience connection.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[128px] lg:pt-[280px] pl-[110px] pr-[264px] pb-[124px] flex relative">
                <div className="w-[16%] text-white text-2xl font-Helvetica font-[400] leading-[28px] box-border">
                    The partnership:
                </div>
                <div className=" w-[84%] text-white text-[40px] font-Helvetica font-[400] leading-[46px] box-border">
                    In close collaboration with Volkswagen, we meticulously developed a social media campaign to promote and position the group's global ESG initiatives. Over two months, this campaign engaged audiences through creative posts, aiming to shift perceptions by connecting ESG actions with relatable, real-world scenarios.
                </div>
            </div>
            <div className="w-full px-[50px] relative box-border">
                <img src="/src/assets/img/volkswagen/Netclean_1.png" className="w-full" />
                <div className="py-[114px] px-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    Our commitment spanned from concept creation and strategic planning to the execution phase, ensuring a seamless narrative throughout. The visual strategy transformed complex data into engaging visuals, marrying numerical facts about Volkswagen's ESG efforts with elements from everyday life, such as soccer stadiums and natural landscapes, to whimsical motifs like balloons.<br /><br />
                    This approach aimed to create an emotional connection, making the ESG initiatives both accessible and meaningful to the audience. Through careful strategy, creative conceptualization, and diligent execution, we delivered a cohesive and impactful campaign.
                </div>
                <img src="/src/assets/img/volkswagen/Netclean_1(1).png">
                </img>
                <div className="pt-[64px] flex justify-end">
                    <img src="/src/assets/img/volkswagen/vw-mockup.png">
                    </img>
                </div>
                <img className="pt-[64px]" src="/src/assets/img/volkswagen/vw_movie_3.png">
                </img>
                <img className="pt-[64px]" src="/src/assets/img/volkswagen/vw-mockup_4 copy.png">
                </img>
                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/volkswagen/BPI_1.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    bpl
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Partnering with bpI to spotlight its crucial role in advancing the pharmaceutical industry through engaging narratives and innovative visual strategies.
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
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/volkswagen/netclean_2.png')]">
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
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Volkswagen;