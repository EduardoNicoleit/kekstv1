import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";

const Malteser = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white bg-cover bg-center w-full h-full">
                <img src="/src/assets/img/malteser/malteser.png" alt="" className="w-full" ref={element} />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold sm:px-[300px] md:px-[300px] lg:px-[270px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        Malteser
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 sm:text-4xl md:text-3xl lg:text-[22px] h-[256px] lg:h-[128px]">
                        <div className="w-[300px] lg:w-[200px] border-r-[1px] my-5 lg:my-6 px-4 lg:px-0">
                            Overview
                        </div>
                        <div className="hidden lg:grid grid-cols-3 w-full">
                            <div className="border-r-[1px] px-10 my-6">
                                Enhanced Design Identity through<br />
                                innovative data visualization.
                            </div>
                            <div className="border-r-[1px] px-10 my-6">
                                Fostered inclusive visual communication<br />
                                reflecting global support.
                            </div>
                            <div className="px-10 my-6">
                                Simplified intricate data into <br />
                                compelling infographics.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:hidden w-full items-center">
                            <div className="px-10">
                                Enhanced Design Identity through
                                innovative data visualization.
                            </div>
                            <div className="px-10">
                                Fostered inclusive visual communication
                                reflecting global support.
                            </div>
                            <div className="px-10">
                                Simplified intricate data into
                                compelling infographics.
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
                        In refining the Design Identity for Malteser reports, we harnessed the transformative power of infographics to effectively communicate complex information in a clear and engaging way. This approach reimagined dense datasets and detailed narratives as visually compelling stories, significantly enhancing the reports' aesthetic appeal and comprehensibility.
                    </div>
                </div>
            </div>

            <div className="w-full px-[50px] relative box-border">

                <div className="ml-[300px] h-[850px] mt-[114px] bg-[#ff0100]"></div>

                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    <div className="pr-[300px]">
                        Malteser International, as a global humanitarian aid organization is dedicated to supporting individuals—regardless of gender, political belief, origin or faith, striving to ensure they live a life of health and dignity. This ethos of inclusivity and support is mirrored in our communication strategy.
                        <br /> <br />
                        By blending design with precise data, the infographics transform the report into a memorable and informative visual journey, effectively bridging the gap between the complexity of data and the clarity of communication.
                    </div>
                </div>
                <div className="pt-32">
                    <img src="/src/assets/img/malteser/malteser_1.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/malteser/malteser_2.png">
                    </img>
                </div>

                <div className="flex justify-end">
                    <img src="/src/assets/img/malteser/malteser_3.png">
                    </img>
                </div>

                <div className="bg-white ml-[307px] h-[850px]"></div>

                <div className="pt-16">
                    <img src="/src/assets/img/malteser/malteser_4.png">
                    </img>
                </div>

                <div className="flex justify-end">
                    <img src="/src/assets/img/malteser/malteser_5.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/malteser/farmer_header.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    Farmer Voice
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Blending tradition with innovation to empower agriculture, creating a narrative-driven, stakeholder-engaging identity.
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
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/malteser/dtcp_header.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    DTCP
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Infusing dynamic visual narratives and data insights to craft a trustworthy, stakeholder-engaging brand identity for DTCP.
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

export default Malteser;