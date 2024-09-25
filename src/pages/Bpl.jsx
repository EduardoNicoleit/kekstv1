import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";

const Bpl = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white bg-cover bg-center w-full h-full">
                <img src="/src/assets/img/bpl/header_bPI.png" alt="" className="w-full" ref={element} />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold sm:px-[300px] md:px-[300px] lg:px-[270px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        bpl
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 sm:text-4xl md:text-3xl lg:text-[22px] h-[256px] lg:h-[128px]">
                        <div className="w-[300px] lg:w-[200px] border-r-[1px] my-5 lg:my-2 px-4 lg:px-0">
                            Overview
                        </div>
                        <div className="hidden lg:grid grid-cols-3 w-full">
                            <div className="border-r-[1px] px-10 my-2">
                                Developed a creative strategy and<br />
                                visual identity for bpI's social media<br />
                                communication.
                            </div>
                            <div className="border-r-[1px] px-10 my-2">
                                Devised a unique, modern approach for<br />
                                narrative delivery, avoiding generic<br />
                                stock images.
                            </div>
                            <div className="px-10 my-2">
                                Produced a versatile video campaign<br />
                                suitable for both the AGM and social <br />
                                media engagement.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:hidden w-full items-center">
                            <div className="px-10">
                                Developed a creative strategy and
                                visual identity for bpI's social media
                                communication.
                            </div>
                            <div className="px-10">
                                Devised a unique, modern approach for
                                narrative delivery, avoiding generic
                                stock images.
                            </div>
                            <div className="px-10">
                                Produced a versatile video campaign
                                suitable for both the AGM and social
                                media engagement.
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
                        In collaboration with bpI, we embarked on a mission to highlight the transformative impact of the pharmaceutical industry on health and innovation.
                    </div>
                </div>
            </div>

            <div className="w-full px-[50px] pt-[150px] relative box-border">

                <div>
                    <img src="/src/assets/img/bpl/240226_BPI.png">
                    </img>
                </div>

                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-normal leading-[32px] box-border">
                    <div className="pr-[300px]">
                        The video campaign we produced for bpI brought to life the association's influential role in the global health industry. Through an animated journey, we vividly highlighted Germany's significant contributions, from its prestigious research initiatives to its substantial investments in innovative pharmaceuticals and effective therapeutics.
                        <br /><br />
                        Our strategic approach ensured that the video was versatile, suitable for both the Annual General Meeting and widespread social media engagement.
                        <br /><br />
                        To maintain a consistent and impactful presence, we developed a comprehensive creative strategy and visual identity for bpI's social media communication. This approach resonated with diverse audiences, making bpI's contributions to the health industry both accessible and impactful.
                    </div>
                </div>

                <div className="pt-32">
                    <img src="/src/assets/img/bpl/BPI_3.png">
                    </img>
                </div>

                <div>
                    <img src="/src/assets/img/bpl/BPI_2.png">
                    </img>
                </div>

                <div className="pt-16 flex-col justify-end">
                    <div className=" flex justify-end">
                        <img src="/src/assets/img/bpl/BPI_movie.png">
                        </img>
                    </div>
                    <div className="flex flex-row justify-end pt-16">
                        <div className="pr-8">
                            <img src="/src/assets/img/bpl/240417_BPI.png">
                            </img>
                        </div>
                        <div>
                            <img src="/src/assets/img/bpl/white.png">
                            </img>
                        </div>
                    </div>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/bpl/BPI_1.png">
                    </img>
                </div>

                <div className="flex flex-row justify-end pt-16">
                    <div className="pr-8 pb-[230px]">
                        <img src="/src/assets/img/bpl/white.png">
                        </img>
                    </div>
                    <div className="pt-[230px]">
                        <img src="/src/assets/img/bpl/240617_BPI.png">
                        </img>
                    </div>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/bpl/BPI_4.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/bpl/cop27_1.png')]">
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
                    <div className="w-1/2">
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/bpl/vw.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-bold">
                                    VW
                                </div>
                                <div className="text-[40px] font-normal leading-[50px] font-Arial">
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
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Bpl;