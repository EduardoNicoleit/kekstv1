import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";

const Newwaters = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-[1920px] relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white bg-cover bg-center w-full h-full" ref={element}>
                <img src="/src/assets/img/newwaters/newwaters.png" alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col font-Arial">
                    <div className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] 3xl:text-[160px] font-bold sm:px-[300px] md:px-[300px] lg:px-[270px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        Newwaters
                    </div>
                    <div className="flex border-y-[1px] border-white px-12 sm:text-4xl md:text-3xl lg:text-[22px] h-[256px] lg:h-[128px]">
                        <div className="w-[300px] lg:w-[200px] border-r-[1px] my-5 lg:my-2 px-4 lg:px-0">
                            Overview
                        </div>
                        <div className="hidden lg:grid grid-cols-3 w-full">
                            <div className="border-r-[1px] px-10 my-2">
                                Developed NewWaters' corporate identity,<br />
                                capturing its essence with a modern and <br />
                                adaptable design.
                            </div>
                            <div className="border-r-[1px] px-10 my-2">
                                Defined strategic brand positioning,<br />
                                ensuring alignment with NewWaters'<br />
                                evolving business objectives.
                            </div>
                            <div className="px-10 my-2">
                                Streamlined brand communication,<br />
                                establishing a clear, compelling brand <br />
                                voice and visual narrative.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:hidden w-full items-center">
                            <div className="px-10">
                                Developed NewWaters' corporate identity,
                                capturing its essence with a modern and
                                adaptable design.
                            </div>
                            <div className="px-10">
                                Defined strategic brand positioning,
                                ensuring alignment with NewWaters'
                                evolving business objectives.
                            </div>
                            <div className="px-10">
                                Streamlined brand communication,
                                establishing a clear, compelling brand
                                voice and visual narrative.
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
                        Embarking on a journey of transformation, we partnered with NewWaters, an American firm at the cusp of a significant shift due to the owner's commencement on new business horizons. Our mission was to reimagine and redefine its corporate identity, resulting in a captivating visual language that mirrors the essence and ambitions of NewWaters.
                    </div>
                </div>
            </div>
            <div className="w-full px-[50px] relative box-border">
                <div className="pt-[128px]">
                    <img src="/src/assets/img/newwaters/newwaters_movie.png">
                    </img>
                </div>
                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-normal leading-[32px] box-border">
                    <div className="pr-[300px]">
                        By weaving together elegance and symbolism, we introduced a wave pattern that not only signifies fluidity and adaptability but also encapsulates the transformative power of water. The clever interplay between the letters 'N' and 'W' within this design serves as a testament to the brand's innovative spirit, seamlessly blending the initials of NewWaters into the fabric of its new identity, thereby enhancing its aquatic narrative in a manner that is both understated and striking.
                        <br /> <br />
                        This reimagined identity goes beyond mere aesthetics; it is a strategic embodiment of NewWaters' renewed vision and values. The design process was underpinned by a deep understanding of the company's strategic direction and the industry landscape, ensuring that the new identity would not only resonate with its target audience but also stand as a beacon of innovation and resilience in the face of change.
                    </div>
                    <div className="w-full h-[850px] mt-[114px] bg-white"></div>
                </div>
                <div className="flex justify-end pt-16">
                    <img src="/src/assets/img/newwaters/newwaters_1.png">
                    </img>
                </div>
                <div className="flex justify-end pt-16">
                    <img src="/src/assets/img/newwaters/newwaters_5.png">
                    </img>
                </div>
                <div className="flex justify-end pt-16">
                    <img src="/src/assets/img/newwaters/newwaters_2.png">
                    </img>
                </div>
                <div className="pt-16">
                    <img src="/src/assets/img/newwaters/newwaters_3.png">
                    </img>
                </div>
                <div className="flex justify-end pt-16">
                    <img src="/src/assets/img/newwaters/newwaters_4.png">
                    </img>
                </div>
                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/newwaters/uniper_2.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-bold">
                                    Uniper
                                </div>
                                <div className="text-[40px] font-normal leading-[50px] font-Arial">
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
                    <div className="w-1/2">
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/newwaters/farmer_header.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-bold">
                                    Farmer
                                </div>
                                <div className="text-[40px] font-normal leading-[50px] font-Arial">
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
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Newwaters;