import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";

const FarmerVoice = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="relative text-white bg-cover bg-center w-full h-full">
                <img src="/src/assets/img/farmervoice/farmer.png" alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold sm:px-[270px] md:px-[270px] lg:px-[270px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        Farmer Voice
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 text-[22px] h-[128px]">
                        <div className="w-[200px] border-r-[1px] my-8">
                            Overview
                        </div>
                        <div className="grid grid-cols-3 w-full">
                            <div className="border-r-[1px] px-10 my-8">
                                Conceptualized the "Farmers Voice" brand,<br />
                                drawing on genuine global farmer insights.
                            </div>
                            <div className="border-r-[1px] px-10 my-8">
                                Crafted a Corporate Identity merging<br />
                                traditional agriculture and innovation.
                            </div>
                            <div className="px-10 my-8">
                                Launched a report, transforming complex<br />
                                data into engaging stories.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[280px] pl-[110px] pr-[264px] flex relative">
                <div className="w-[16%] text-white text-2xl font-Helvetica font-[400] leading-[28px] box-border">
                    The partnership:
                </div>
                <div className="w-[84%] flex flex-col">
                    <div className=" text-white text-[40px] font-Helvetica font-[400] leading-[46px] box-border">
                        Launched in September 2023, the Branding and Corporate Identity for Bayer's "Farmers Voice" initiative artfully merges traditional agricultural motifs with modern elements, encapsulating the synergy of longstanding farming traditions with contemporary agricultural innovations. The scope of our work spanned from the initial naming of the initiative to the comprehensive creation of its Corporate Design.
                    </div>
                </div>
            </div>

            <div className="ml-[350px] h-[850px] mt-[114px] bg-white"></div>

            <div className="w-full px-[50px] relative box-border">
                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    <div className="pr-[300px]">
                        With its earthy color palette and clean lines, the design vividly embodies the initiative's fundamental values, highlighting Bayer's commitment to agriculture and farmer empowerment. This design framework not only bolsters Bayer’s outreach efforts, but also sets the stage for an insightful annual report that explores shifts in farming practices and challenges, illustrating the initiative's dynamic and responsive nature.
                        <br /> <br />
                        The annual report, enriched by the "Farmers Voice" survey conducted by Kekst CNC, features infographics and visual storytelling that translate complex data from 800 farmers across eight diverse countries and an additional 2,056 smallholding farmers in India into captivating visual content. This global perspective, gathered from April to July 2023 without the farmers' prior knowledge of Bayer's involvement, ensures authenticity and unbiased insights.
                        <br /> <br />
                        The report aims to inform and motivate stakeholders by highlighting the evolving agricultural landscape's intricacies and opportunities. By aligning every design element with the "Farmers Voice" initiative's goals, we've established a Corporate Identity and report that not only serves as a tribute to Bayer's dedication to the farming community, but also redefines how agricultural challenges are communicated, making them accessible and engaging for a broad audience.
                    </div>
                </div>
                <div className="pt-32">
                    <img src="/src/assets/img/farmervoice/brand_color.png">
                    </img>
                </div>
                <div className="pt-16">
                    <img src="/src/assets/img/farmervoice/logo-texture.png">
                    </img>
                </div>

                <div className="ml-[350px] h-[666px] mt-[114px] bg-white"></div>

                <div className="pt-16">
                    <img src="/src/assets/img/farmervoice/farmer_1.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/farmervoice/farmer_2.png">
                    </img>
                </div>

                <div className="flex justify-end pt-16">
                    <img src="/src/assets/img/farmervoice/farmer_3.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/farmervoice/farmer_4.png">
                    </img>
                </div>

                <div className="flex justify-end">
                    <img src="/src/assets/img/farmervoice/farmer_5.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/farmervoice/newwaters.png')]">
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
                    <div className="w-1/2">
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/farmervoice/malteser.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    Malteser
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Merging data with design to democratize information, crafting a visually engaging, universally accessible identity.                                </div>
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

export default FarmerVoice;