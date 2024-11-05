import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Footer, MainBorder } from "../components";
import { Link } from 'react-router-dom';

const Bpl = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white welcome" ref={element}>
                <img src="../assets/img/bpl/header_bPI.png" alt="keskt..." className="w-full hidden md:block" />
                <img src="../assets/img/bpl/bpi_mobile.png" alt="keskt..." className="w-full block md:hidden" />
                <div className="w-full absolute bottom-0 font-Helvetica">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                        <div className="flex">
                            <div className="w-6 lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                            <div>
                                <div
                                    className="font-Helvetica font-bold mt-auto
                                    text-[50px] leading-[34px] md:text-[50px] md:leading-[57px]
                                    lg:text-[70px]
                                    xl:text-[160px]
                                    lg:leading-[80px] xl:leading-[184px]
                                    py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 
                                    2xl:py-16 
                                    3xl:py-[6vw] 5xl:py-[8vw]
                                    3xl:text-[6.5vw] "
                                >
                                    BPI
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div
                                className="lg:flex-col 2xl:flex-row flex border-white border-y-[1px]
                                sm:text-4xl md:text-3xl lg:text-[22px] 3xl:text-[1.2vw] 5xl:text-[1vw]
                                lg:h-[220px] xl:h-[188px] 2xl:h-[200px] 3xl:h-[18vh] 5xl:h-[20vh]
                                items-start 2xl:items-center"
                            >
                                <div
                                    className="font-normal lg:pl-[60px] lg:pr-0 lg:pb-4 lg:pt-4 xl:pt-4 xl:pb-4 2xl:pt-0 2xl:pb-[2.2vw] w-[300px] lg:w-[200px] 2xl:w-[308px] 3xl:w-[14vw] mb-0 3xl:pl-[2vw] 3xl:pr-[2vw] 2xl:px-[2vw]"
                                >
                                    Overview:
                                </div>
                                <div className="lg:grid grid-cols-3 w-full items-start 2xl:items-center ">
                                    <div className="pl-[60px] 2xl:pl-8 pr-4 
                                                    xl:border-l-0 2xl:border-l-[1px] 
                                                    leading-tight h-full 
                                                    3xl:pl-[2.15vw] 3xl:pr-[1vw] 
                                                    5xl:pl-[2.5vw] 5xl:pr-[1.2vw]">
                                        Developed a creative strategy and
                                        visual identity for BPI's social media
                                        communication.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] 
                                                    leading-tight h-full 
                                                    3xl:pl-[2vw] 3xl:pr-[2vw] 
                                                    5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Devised a unique, modern approach for
                                        narrative delivery, avoiding generic
                                        stock images.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] 
                                                    leading-tight h-full 
                                                    3xl:pl-[2vw] 3xl:pr-[2vw] 
                                                    5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Produced a versatile video campaign
                                        suitable for both the AGM and social
                                        media engagement.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                {/* Mobile Overview: */}
                <div className="block lg:hidden font-Helvetica font-normal 
                                py-[41px] text-white pl-6
                                3xl:pl-[4vw] 5xl:pl-[6vw]">
                    <div className="text-[12px] leading-[14px] uppercase 
                                    3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Overview:
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 
                                    border-b-[1px] 
                                    3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Developed a creative strategy and
                        visual identity for BPI's social media
                        communication.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 
                                    border-b-[1px] 
                                    3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Devised a unique, modern approach for
                        narrative delivery, avoiding generic
                        stock images.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 
                                    border-b-[1px] 
                                    3xl:text-[1vw] 5xl:text-[1.2vw]">
                        Produced a versatile video campaign
                        suitable for both the AGM and social
                        media engagement.
                    </div>
                </div>

                {/* Partnership Section */}
                <div className="flex flex-col 2xl:flex-row md:pt-[10px] 
                    lg:pt-10 xl:pt-[156px] 2xl:pt-[211px] 
                    pb-10 lg:pb-20 xl:pb-[106px] 2xl:pb-[134px] 
                    w-full font-Helvetica text-white">
                    <div
                        className="uppercase xl:normal-case text-start 2xl:text-left font-normal text-[12px] md:text-lg 2xl:text-2xl 3xl:text-[1.2vw] pt-3 xl:w-full 2xl:w-[308px] 3xl:w-[15vw] flex-none px-6 lg:px-[60px] 2xl:px-[2vw] py-6 2xl:py-0.2"
                    >
                        The partnership:
                    </div>
                    <div className="font-bold md:font-normal text-[17px] md:text-[28px] 2xl:text-[40px] 3xl:text-[1.8vw] px-6 lg:px-[60px] 2xl:px-[0] 2xl:pr-[3.5vw] w-full leading-tight">
                        In collaboration with BPI, we embarked on a mission to highlight the transformative impact of the pharmaceutical industry on health and innovation.
                    </div>
                </div>

                {/* Video Section */}
                <div>
                    <video
                        className="w-full h-full object-cover cursor-pointer max-h-[95vh]"
                        controls
                        preload="auto"
                    >
                        <source src="/assets/video/BPI/240416_BPINarrativ2024_VID_02.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Description Section */}
                <div className="py-10 2xl:py-[5vw] text-[17px] lg:text-[18px] xl:text-[1.2vw] flex font-normal font-Helvetica text-white">
                    <div className="md:w-6 lg:w-[60px] 
                                    2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="px-6 md:px-0 pr-6 sm:px-6 lg:px-0 
                                    lg:pr-10 2xl:pr-[3.5vw]">
                        <div className="pb-5">
                            The video campaign we produced for BPI brought to life the association's influential role in the global health industry. Through an animated journey, we vividly highlighted Germany's significant contributions, from its prestigious research initiatives to its substantial investments in innovative pharmaceuticals and effective therapeutics.
                        </div>
                        <div className="pb-5">
                            Our strategic approach ensured that the video was versatile, suitable for both the Annual General Meeting and widespread social media engagement.
                        </div>
                        <div>
                            To maintain a consistent and impactful presence, we developed a comprehensive creative strategy and visual identity for BPI's social media communication. This approach resonated with diverse audiences, making BPI's contributions to the health industry both accessible and impactful.
                        </div>
                    </div>
                </div>

                {/* Image and Video Sections */}
                <div>
                    <img src="/assets/img/bpl/BPI_3.png" className="w-full" alt="keskt..." />
                </div>
                <div className="pt-0 md:pt-0">
                    <img src="/assets/img/bpl/BPI_2.png" className="w-full pb-8 3xl:pb-[6vw]" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full flex-initial md:flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <video
                                className="w-full h-auto object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/assets/video/BPI/240417_BPIamMorgen_Animation_V03.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="pt-8 md:pt-0 w-full">
                            <video
                                className="w-full h-auto object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/assets/video/BPI/240409_BPIPost_5Fakten_Animation_V04.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="py-8 3xl:py-[6vw]">
                    <img src="/assets/img/bpl/BPI_1.png" className="w-full" alt="keskt..." />
                </div>
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full flex-initial md:flex flex-col md:flex-row gap-6">
                        <div>
                            <div className="pb-8 md:pb-0">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="/assets/video/BPI/240606_BPIOfficeBrussels_v06.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="h-[230px] 3xl:h-[15vw] w-full hidden xl:block "></div>
                        </div>
                        <div>
                            <div className="h-[230px] 3xl:h-[15vw] w-full hidden xl:block"></div>
                            <div>
                                <video
                                    className="w-full h-auto object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="/assets/video/BPI/240617_BPIInnfoTVPost_Animation.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 2xl:py-16 3xl:py-[6vw]">
                    <img src="/assets/img/bpl/BPI_4.png" className="w-full" alt="keskt..." />
                </div>

                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full min-h-[300px] md:min-h-[400px]">
                            {/* First Image Container */}
                            <div className="overflow-hidden border-r border-white relative group">
                                <Link to="/works/copReport">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 
                                   3xl:py-[6vw] 5xl:py-[10vw] 
                                   px-[15px] md:px-10 3xl:px-[2vw] 5xl:px-[3vw] 
                                   flex flex-col h-full relative"
                                    >
                                        {/* Background image using pseudo-element */}
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out 
                                        bg-[url('assets/img/bpl/cop27_2.png')] md:bg-[url('assets/img/bpl/cop27_1.png')] 
                                        group-hover:scale-110 
                                        before:content-[''] before:absolute before:inset-0 
                                        before:bg-cover before:bg-center before:bg-no-repeat 
                                        before:transition-transform before:duration-300 
                                        before:ease-in-out before:scale-100 group-hover:before:scale-110" />

                                        {/* Content overlay */}
                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                            {/* Title and Description */}
                                            <div>
                                                <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                3xl:text-[1.5vw] 5xl:text-[1vw]">
                                                    COP 27
                                                </div>
                                                <div className="flex-1">
                                                    <div
                                                        className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px]
                                                   xl:py-[67px] 3xl:py-[4vw] 5xl:py-[5vw] 
                                                   font-normal text-[12px] lg:text-[21px]
                                                   xl:text-[32px] 2xl:text-[40px] 
                                                   3xl:text-[1.3vw] 5xl:text-[1.2vw] 
                                                   leading-tight"
                                                    >
                                                        Shaping COP 27's global narrative through data-driven insights and visual storytelling, capturing diverse stakeholder sentiments.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Read More Section */}
                                            <div className="flex py-8 items-center pl-4 
                                            3xl:py-[2vw] 5xl:py-[2.5vw]">
                                                <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg 
                                                3xl:text-[1.1vw] 5xl:text-[1.2vw]">
                                                    read more
                                                </div>
                                                <div>
                                                    <svg
                                                        className="ml-3 pt-[2px] w-6 h-6 
                                               3xl:w-[1.5vw] 5xl:w-[1vw] 
                                               3xl:h-[1.5vw] 5xl:h-[1vw]"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g id="arrow_outward">
                                                            <path
                                                                id="Vector"
                                                                d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z"
                                                                fill="white"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* Second Image Container */}
                            <div className="overflow-hidden relative group">
                                <Link to="/works/volkswagen">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 
                                   3xl:py-[6vw] 5xl:py-[10vw] 
                                   px-[15px] md:px-10 3xl:px-[2vw] 5xl:px-[3vw] 
                                   flex flex-col h-full relative"
                                    >
                                        {/* Background image using pseudo-element */}
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out 
                                        bg-[url('assets/img/netclean/VW_new_img.jpg')] 
                                        md:bg-[url('assets/img/bpl/vw.png')] 
                                        group-hover:scale-110 
                                        before:content-[''] before:absolute before:inset-0 
                                        before:bg-cover before:bg-center before:bg-no-repeat 
                                        before:transition-transform before:duration-300 
                                        before:ease-in-out before:scale-100 group-hover:before:scale-110" />

                                        {/* Content overlay */}
                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                            {/* Title and Description */}
                                            <div>
                                                <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                3xl:text-[1.5vw] 5xl:text-[1vw]">
                                                    Volkswagen
                                                </div>
                                                <div className="flex-1">
                                                    <div
                                                        className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px]
                                                   xl:py-[67px] 3xl:py-[4vw] 5xl:py-[5vw] 
                                                   font-normal text-[12px] lg:text-[21px]
                                                   xl:text-[32px] 2xl:text-[40px] 
                                                   3xl:text-[1.3vw] 5xl:text-[1.2vw] 
                                                   leading-tight"
                                                    >
                                                        Partnering with Volkswagen to enhance their global ESG narrative, from strategic audience engagement to shaping future sustainability pathways.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Read More Section */}
                                            <div className="flex py-8 items-center pl-4 
                                            3xl:py-[2vw] 5xl:py-[2.5vw]">
                                                <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg 
                                                3xl:text-[1.1vw] 5xl:text-[1.2vw]">
                                                    read more
                                                </div>
                                                <div>
                                                    <svg
                                                        className="ml-3 pt-[2px] w-6 h-6 
                                               3xl:w-[1.5vw] 5xl:w-[1vw] 
                                               3xl:h-[1.5vw] 5xl:h-[1vw]"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g id="arrow_outward">
                                                            <path
                                                                id="Vector"
                                                                d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z"
                                                                fill="white"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
            <MainBorder />
        </div>
    );
};

export default Bpl;
