/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Footer, MainBorder } from "../components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Netclean = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white welcome" ref={element}>
                {/* Desktop Image */}
                <img
                    src="/assets/img/netclean/netclean.png"
                    alt="Netclean Desktop"
                    className="w-full hidden md:block"
                />
                {/* Mobile Image */}
                <img
                    src="/assets/img/netclean/netclean_mobile.png"
                    alt="Netclean Mobile"
                    className="w-full block md:hidden"
                />
                <div className="w-full absolute bottom-0 font-Helvetica">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                        <div className="flex">
                            <div className="w-6 lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                            <div>
                                <div
                                    className="font-helvetica font-bold mt-auto text-[50px] leading-[34px] md:text-[50px] md:leading-[57px] lg:text-[70px] xl:text-[160px] 2xl:text-[5.5vw] 3xl:text-[6.5vw] lg:leading-[80px] xl:leading-[184px] py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 2xl:py-16 3xl:py-[6vw]"
                                >
                                    Netclean
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div
                                className="lg:flex-col 2xl:flex-row flex border-white border-y-[1px]
                                sm:text-4xl md:text-3xl lg:text-[22px] 3xl:text-[1.2vw] 5xl:text-[1vw]
                                lg:h-[220px] xl:h-[188px] 2xl:h-[128px] 3xl:h-[15vh] 5xl:h-[18vh]
                                items-start 2xl:items-center"
                            >
                                <div
                                    className="font-normal lg:pl-[60px] lg:pr-0 lg:pb-4 lg:pt-4 xl:pt-4 xl:pb-4 2xl:pt-0 2xl:pb-[2.2vw] w-[300px] lg:w-[200px] 2xl:w-[308px] 3xl:w-[14vw] mb-0 3xl:pl-[2vw] 3xl:pr-[2vw] 2xl:px-[2vw]"
                                >
                                    Overview:
                                </div>
                                <div className="font-normal lg:grid grid-cols-3 w-full items-start 2xl:items-center 
                                                3xl:gap-[1vw] 5xl:gap-[1.5vw]">
                                    <div className="pl-[60px] 2xl:pl-8 pr-4 xl:border-l-0 2xl:border-l-[1px] 
                                                leading-tight h-full 
                                                3xl:pl-[2.15vw] 3xl:pr-[1vw] 5xl:pl-[2.5vw] 5xl:pr-[1.2vw]">
                                        Reinvented NetClean's Annual Reports strategy.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full 
                                                3xl:pl-[2vw] 3xl:pr-[2vw] 5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Crafted a multi-channel, visual approach to communicate results and core values.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full 
                                                3xl:pl-[2vw] 2xl:pr-[3vw] 5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Converted data into dynamic stories for stakeholder engagement.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                {/* Mobile Overview */}
                <div className="block lg:hidden font-Helvetica font-normal py-[41px] text-white pl-6">
                    <div className="text-[12px] leading-[14px] uppercase">Overview</div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Reinvented NetClean's Annual Reports strategy.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Crafted a multi-channel, visual approach to communicate results and core values.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Converted data into dynamic stories for stakeholder engagement.
                    </div>
                </div>
                {/* Partnership Section */}
                <div
                    className="flex flex-col 2xl:flex-row md:pt-[10px] lg:pt-10 xl:pt-[156px] 2xl:pt-[211px] 
                    pb-10 lg:pb-20 xl:pb-[106px] 2xl:pb-[134px] w-full font-Helvetica text-white"
                >
                    <div
                        className="uppercase xl:normal-case text-start 2xl:text-left font-normal text-[12px] md:text-lg 2xl:text-2xl 3xl:text-[1.2vw] pt-3 xl:w-full 2xl:w-[308px] 3xl:w-[15vw] flex-none px-6 lg:px-[60px] 2xl:px-[2vw] py-6 2xl:py-0.2"
                    >
                        The partnership:
                    </div>
                    <div
                        className="font-bold md:font-normal text-[17px] md:text-[28px] 2xl:text-[40px] 3xl:text-[1.8vw] px-6 lg:px-[60px] 2xl:px-[0] 2xl:pr-[3.5vw] w-full leading-tight"
                    >
                        In our partnership with NetClean, we revolutionized the concept of Annual Reports. We initiated a narrative strategy that resonated with the company's modern and bold ethos, marking a fundamental shift in how NetClean communicates its core values and achievements.
                    </div>
                </div>
                {/* Video Section 1 */}
                <div>
                    <video
                        className="w-full h-auto object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/assets/video/netclean/NetClean_movie_1.mp4" type="video/mp4" />
                    </video>
                </div>
                {/* Description Section */}
                <div
                    className="py-10 2xl:py-[5vw] text-[17px] lg:text-[18px] xl:text-[1.2vw] flex font-normal font-Helvetica text-white"
                >
                    <div className="w-6 lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="px-0 pr-6 sm:px-6 lg:px-0 lg:pr-10 2xl:pr-[3.5vw]">
                        <div className="pb-5">
                            Our strategy wove this narrative across various channels, creating a dialogue with stakeholders that went beyond the traditional confines of reporting. The aim was to transform static data into a compelling visual narrative, utilizing infographics, illustrations, and animations not just to capture attention, but to make complex information engaging and relatable.
                        </div>
                        <div className="pb-5">
                            This multi-platform execution spanned from the tangible touch of print to the interactive engagement of digital media.
                        </div>
                        <div>
                            The result was a case study in innovation. By communicating NetClean's results and objectives through an array of narrative-driven, visually engaging content, we didn’t just report on the company's year – we brought it to life. This approach proved instrumental in driving stakeholder engagement and aligning the company’s communication strategy with its forward-thinking identity.
                        </div>
                    </div>
                </div>
                {/* Image Section 1 */}
                <div className="pb-0 md:pb-8 2xl:pb-16">
                    <img src="/assets/img/netclean/netclean_1.png" className="w-full" alt="Netclean Image 1" />
                </div>
                {/* Image Section 2 */}
                <div className="py-8 md:py-0">
                    <img src="/assets/img/netclean/netclean_2.png" className="w-full" alt="Netclean Image 2" />
                </div>
                {/* Image Section 3 */}
                <div className="flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/netclean/netclean_3.png" className="w-full" alt="Netclean Image 3" />
                    </div>
                </div>

                {/* Video Section 2 */}
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none border-b-[1px]"></div>
                    <div className="w-full flex flex-col lg:flex-row">
                        <video
                            className="w-full lg:w-1/2 h-auto object-cover mb-8 lg:mb-0 3xl:max-h-[25vw] 5xl:max-h-[30vw]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/netclean/NetClean_movie_2.mp4" type="video/mp4" />
                        </video>
                        <video
                            className="w-auto lg:w-1/2 h-auto object-cover pt-8 lg:pt-0 3xl:max-h-[25vw] 5xl:max-h-[30vw]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/netclean/NetClean_movie_3.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>


                {/* Image Section 4 */}
                <div className="pb-8 md:pb-0">
                    <img src="/assets/img/netclean/netclean_4.png" className="w-full" alt="Netclean Image 4" />
                </div>
                {/* Image Section 5 */}
                <div className="pb-8 2xl:pb-16 flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/netclean/netclean_5.png" className="w-full" alt="Netclean Image 5" />
                    </div>
                </div>
                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white pt-0">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full min-h-[300px] md:min-h-[400px]">
                            {/* First Image Container */}
                            <div className="overflow-hidden md:border-r md:border-white">
                                <Link to="/works/volkswagen">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] 
                                        px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full 
                                        bg-[url('assets/img/netclean/VW_new_img.jpg')] bg-no-repeat bg-cover 
                                        transition duration-300 ease-in-out hover:scale-105 
                                        5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                        3xl:text-[1.5vw] 5xl:text-[1vw]">
                                            Volkswagen
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] 
                                                xl:py-[67px] 3xl:py-[4vw] font-normal text-[12px] 
                                                lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 
                                                3xl:text-[1.3vw] 5xl:text-[1.2vw] leading-tight 
                                                5xl:py-[5vw]"
                                            >
                                                Partnering with BPI to spotlight its crucial role in advancing the pharmaceutical industry through engaging narratives and innovative visual strategies.
                                            </div>
                                        </div>
                                        {/* "Read More" Link */}
                                        <div className="flex py-8 items-center pl-4 
                                                        3xl:py-[2vw] 5xl:py-[2.5vw]">
                                            <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg 
                                                            3xl:text-[1.1vw] 5xl:text-[1.2vw]">
                                                read more
                                            </div>
                                            <div>
                                                <svg
                                                    className="ml-3 pt-[2px] w-6 h-6 
                                                               3xl:w-[1.5vw] 3xl:h-[1.5vw] 
                                                               5xl:w-[1vw] 5xl:h-[1vw]"
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
                                </Link>
                            </div>
                            {/* Second Image Container */}
                            <div className="overflow-hidden border-l border-white">
                                <Link to="/works/mars">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] 
                                        px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full 
                                        bg-[url('assets/img/uniper/header_0.png')] 
                                        md:bg-[url('assets/img/netclean/mars_1.png')] 
                                        bg-no-repeat bg-cover 
                                        transition duration-300 ease-in-out hover:scale-105 
                                        5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                        3xl:text-[1.5vw] 5xl:text-[1vw]">
                                            Mars
                                        </div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] 
                                                xl:py-[67px] 3xl:py-[4vw] font-normal text-[12px] 
                                                lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 
                                                3xl:text-[1.3vw] 5xl:text-[1.2vw] leading-tight 
                                                5xl:py-[5vw]"
                                            >
                                                Crafting a video campaign that showcases how artificial intelligence tools are revolutionizing research methodologies within Mars, positioning them at the forefront of innovative exploration.
                                            </div>
                                        </div>
                                        {/* "Read More" Link */}
                                        <div className="flex py-8 items-center pl-4 
                                                        3xl:py-[2vw] 5xl:py-[2.5vw]">
                                            <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg 
                                                            3xl:text-[1.1vw] 5xl:text-[1.2vw]">
                                                read more
                                            </div>
                                            <div>
                                                <svg
                                                    className="ml-3 pt-[2px] w-6 h-6 
                                                               3xl:w-[1.5vw] 3xl:h-[1.5vw] 
                                                               5xl:w-[1vw] 5xl:h-[1vw]"
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
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer and MainBorder Components */}
            <Footer />
            <MainBorder />
        </div>
    );
};

export default Netclean;
