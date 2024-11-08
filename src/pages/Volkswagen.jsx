import React, { useEffect } from "react";
import { Footer, MainBorder } from "../components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Volkswagen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative">
            <div className="relative text-white welcome">
                <Navbar />
                {/* Desktop Image */}
                <img
                    src="/assets/img/volkswagen/volkswagen.png"
                    alt="Volkswagen"
                    className="w-full hidden md:block"
                />
                {/* Mobile Image */}
                <img
                    src="/assets/img/volkswagen/volkswagen_mobile.png"
                    alt="Volkswagen Mobile"
                    className="w-full block md:hidden"
                />
                <div className="w-full absolute bottom-0">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                        <div className="flex">
                            <div className="w-6 lg:w-[60px] 2xl:w-[308px] 3xl:w-[15vw] flex-none"></div>
                            <div>
                                <div
                                    className="font-helvetica font-bold mt-auto text-[50px] leading-[34px] md:text-[50px] md:leading-[57px] lg:text-[70px] xl:text-[160px] 2xl:text-[5.5vw] 3xl:text-[6.5vw] lg:leading-[80px] xl:leading-[184px] py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 2xl:py-16 3xl:py-[6vw]"
                                >
                                    Volkswagen
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block font-normal">
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
                                <div className="font-normal lg:grid grid-cols-3 w-full items-start 2xl:items-center 3xl:gap-[1vw] 5xl:gap-[1.5vw]">
                                    <div className="font-normal pl-[60px] 2xl:pl-10 pr-4 xl:border-l-0 2xl:border-l-[1px] leading-tight h-full 3xl:pl-[2.15vw] 3xl:pr-[1vw]">
                                        Crafted a targeted social media campaign for Volkswagen's ESG initiatives.
                                    </div>
                                    <div className="font-normal pl-8 pr-4 border-l-[1px] leading-tight h-full 3xl:pl-[2vw] 3xl:pr-[2vw] 5xl:pl-[3vw] ">
                                        Engaged audiences with creative content over a two-month period.
                                    </div>
                                    <div className="font-normal pl-8 pr-4 border-l-[1px] leading-tight h-full 3xl:pl-[2vw] 2xl:pr-[3vw] 5xl:pl-[3vw] ">
                                        Transformed ESG data into relatable visuals, enhancing audience connection.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                {/* Mobile Overview: */}
                <div className="block lg:hidden font-Helvetica font-normal py-[41px] text-white pl-6">
                    <div className="text-[13px] leading-[14px] uppercase">Overview:</div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px] pr-6">
                        Crafted a targeted social media campaign for Volkswagen's ESG initiatives.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px] pr-6">
                        Engaged audiences with creative content over a two-month period.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px] pr-6">
                        Transformed ESG data into relatable visuals, enhancing audience connection.
                    </div>
                </div>
                {/* Partnership Section */}
                <div
                    className="flex flex-col 2xl:flex-row md:pt-[10px] lg:pt-10 xl:pt-[156px] 2xl:pt-[211px] pb-10 lg:pb-20 xl:pb-[106px] 2xl:pb-[134px] w-full font-Helvetica text-white"
                >
                    <div
                        className="uppercase xl:normal-case text-start 2xl:text-left font-normal text-[13px] md:text-lg 2xl:text-2xl 3xl:text-[1.2vw] pt-3 xl:w-full 2xl:w-[308px] 3xl:w-[15vw] flex-none px-6 lg:px-[60px] 2xl:px-[2vw] py-6 2xl:py-0.2"
                    >
                        The partnership:
                    </div>
                    <div
                        className="font-bold md:font-normal text-[18px] md:text-[28px] 2xl:text-[40px] 3xl:text-[1.8vw] px-6 lg:px-[60px] 2xl:px-[0] 2xl:pr-[3.5vw] w-full leading-tight"
                    >
                        In close collaboration with Volkswagen, we meticulously developed a social media campaign to promote and position the group's global ESG initiatives. Over two months, this campaign engaged audiences through creative posts, aiming to shift perceptions by connecting ESG actions with relatable, real-world scenarios.
                    </div>
                </div>
                {/* Video Section 1 */}
                <div>
                    <video
                        className="w-full h-auto object-cover 2xl:max-w[1920px] 3xl:max-h-[50vw]"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/assets/video/vw/vw_movie_1.mp4" type="video/mp4" />
                    </video>
                </div>
                {/* Description Section */}
                <div
                    className="py-10 2xl:py-[5vw] text-[14px] lg:text-[18px] xl:text-[1.2vw] flex font-normal font-Helvetica text-white"
                >
                    <div className="w-6 lg:w-[60px] 2xl:w-[308px] 3xl:w-[15vw] flex-none"></div>
                    <div className="px-0 pr-6 sm:px-6 lg:px-0 lg:pr-10 2xl:pr-[3.5vw]">
                        <div className="pb-5">
                            Our commitment spanned from concept creation and strategic planning to the execution phase, ensuring a seamless narrative throughout. The visual strategy transformed complex data into engaging visuals, marrying numerical facts about Volkswagen's ESG efforts with elements from everyday life, such as soccer stadiums and natural landscapes, to whimsical motifs like balloons.
                        </div>
                        <div>
                            This approach aimed to create an emotional connection, making the ESG initiatives both accessible and meaningful to the audience. Through careful strategy, creative conceptualization, and diligent execution, we delivered a cohesive and impactful campaign.
                        </div>
                    </div>
                </div>
                {/* Video Section 2 */}
                <div>
                    <video
                        className="w-full h-auto object-cover 2xl:max-w[1920px] 3xl:max-h-[50vw]"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/assets/video/vw/vw_movie_2.mp4" type="video/mp4" />
                    </video>
                </div>
                {/* Image Section */}
                <div className="py-8 2xl:py-16 flex 3xl:py-[6vw]">
                    <div className="hidden lg:block lg:w-[308px] flex-none"></div>
                    <div className="w-full">
                        <img
                            src="/assets/img/volkswagen/vw-mockup.png"
                            className="w-full"
                            alt="Volkswagen Mockup"
                        />
                    </div>
                </div>
                {/* Video Section 3 */}
                <div>
                    <video
                        className="w-full h-auto object-cover 2xl:max-w[1920px] 3xl:max-h-[50vw]"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/assets/video/vw/vw_movie_3.mp4" type="video/mp4" />
                    </video>
                </div>
                {/* Image Section */}
                <div className="py-8 2xl:py-16 3xl:py-[6vw]">
                    <img
                        src="/assets/img/volkswagen/vw-mockup_4 copy.png"
                        className="w-full"
                        alt="Volkswagen Mockup 4"
                    />
                </div>

                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full min-h-[300px] md:min-h-[400px]">
                            {/* First Image Container */}
                            <div className="overflow-hidden md:border-r md:border-white relative group">
                                <Link to="/works/bpl">
                                    <div className="cursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full relative">
                                        {/* Background image using pseudo-element */}
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out bg-[url('assets/img/volkswagen/BPI_1.png')] group-hover:scale-110 before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center before:bg-no-repeat before:transition-transform before:duration-300 before:ease-in-out before:scale-100 group-hover:before:scale-110" />

                                        {/* Content overlay */}
                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                            <div>
                                                <div className="font-bold text-[15px] lg:text-base xl:text-2xl 3xl:text-[1.5vw]">BPI</div>
                                                <div className="flex-1">
                                                    <div className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] xl:py-[67px] 3xl:py-[4vw] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[1.3vw] leading-tight">
                                                        Partnering with BPI to spotlight its crucial role in advancing the pharmaceutical industry through engaging narratives and innovative visual strategies.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex py-8 items-center">
                                                <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg 3xl:text-[1.1vw]">
                                                    read more
                                                </div>
                                                <div>
                                                    <svg
                                                        className="ml-3 pt-[2px] w-6 h-6 3xl:w-[1.5vw] 3xl:h-[1.5vw] 5xl:w-[1vw] 5xl:h-[1vw]"
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
                                <Link to="/works/netClean">
                                    <div className="cursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full relative">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out bg-[url('assets/img/volkswagen/netclean_3.png')] md:bg-[url('assets/img/volkswagen/netclean_2.png')] group-hover:scale-110 before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center before:bg-no-repeat before:transition-transform before:duration-300 before:ease-in-out before:scale-100 group-hover:before:scale-110" />

                                        {/* Content overlay */}
                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                            <div>
                                                <div className="font-bold text-[15px] lg:text-base xl:text-2xl 3xl:text-[1.5vw]">NetClean</div>
                                                <div className="flex-1">
                                                    <div className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] xl:py-[67px] 3xl:py-[4vw] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[1.3vw] leading-tight">
                                                        Reinventing how annual data reports can be transformed into impactful narrative communication tools.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex py-8 items-center">
                                                <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg 3xl:text-[1.1vw]">
                                                    read more
                                                </div>
                                                <div>
                                                    <svg
                                                        className="ml-3 pt-[2px] w-6 h-6 3xl:w-[1.5vw] 3xl:h-[1.5vw] 5xl:w-[1vw] 5xl:h-[1vw]"
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

export default Volkswagen;
