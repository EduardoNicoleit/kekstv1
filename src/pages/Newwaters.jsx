/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Footer, MainBorder } from "../components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Newwaters = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative">
            {/* Navbar */}
            <Navbar sticky={isSticky} />

            {/* Welcome Section with Images */}
            <div className="relative text-white welcome" ref={element}>
                {/* Desktop Image */}
                <img
                    src="/assets/img/newwaters/newwaters.png"
                    alt="Newwaters Desktop"
                    className="w-full hidden md:block"
                />
                {/* Mobile Image */}
                <img
                    src="/assets/img/newwaters/newwaters_mobile.png"
                    alt="Newwaters Mobile"
                    className="w-full block md:hidden"
                />
                {/* Overlay Content */}
                <div className="w-full absolute bottom-0">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                        {/* Title */}
                        <div className="flex">
                            <div className="w-6 lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                            <div>
                                <div
                                    className="font-Helvetica font-bold mt-auto
                                    text-[50px] leading-[34px] md:text-[50px] md:leading-[57px]
                                    lg:text-[70px]
                                    xl:text-[160px]
                                    lg:leading-[80px] xl:leading-[184px]
                                    py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 2xl:py-16 
                                    3xl:py-[6vw] 5xl:py-[8vw]
                                    3xl:text-[6.5vw] "
                                >
                                    Newwaters
                                </div>
                            </div>
                        </div>
                        {/* Desktop Overview */}
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
                                    Overview
                                </div>
                                <div className="font-normal lg:grid grid-cols-3 w-full items-start 2xl:items-center">
                                    <div className="font-normal pl-[60px] 2xl:pl-8 pr-4 xl:border-l-0 2xl:border-l-[1px] 
                                                leading-tight h-full 
                                                3xl:pl-[2.15vw] 3xl:pr-[1vw] 5xl:pl-[2.5vw] 5xl:pr-[1.2vw]">
                                        Developed NewWaters' corporate identity,
                                        capturing its essence with a modern and
                                        adaptable design.
                                    </div>
                                    <div className="font-normal pl-8 pr-4 border-l-[1px] leading-tight h-full 
                                                3xl:pl-[2vw] 3xl:pr-[2vw] 5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Defined strategic brand positioning,
                                        ensuring alignment with NewWaters'
                                        evolving business objectives.
                                    </div>
                                    <div className="font-normal pl-8 pr-4 border-l-[1px] leading-tight h-full 
                                                3xl:pl-[2vw] 2xl:pr-[3vw] 5xl:pl-[3vw] 5xl:pr-[2vw]">
                                        Streamlined brand communication,
                                        establishing a clear, compelling brand
                                        voice and visual narrative.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Overview */}
            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                <div className="block lg:hidden font-Helvetica font-normal py-[41px] text-white pl-6">
                    <div className="text-[12px] leading-[14px] uppercase">Overview</div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Developed NewWaters' corporate identity,
                        capturing its essence with a modern and
                        adaptable design.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Defined strategic brand positioning,
                        ensuring alignment with NewWaters'
                        evolving business objectives.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Streamlined brand communication,
                        establishing a clear, compelling brand
                        voice and visual narrative.
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
                        Embarking on a journey of transformation, we partnered with NewWaters, an American firm at the cusp of a significant shift due to the owner's commencement on new business horizons. Our mission was to reimagine and redefine its corporate identity, resulting in a captivating visual language that mirrors the essence and ambitions of NewWaters.
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
                        <source src="/assets/video/newwaters/newwaters_movie_1.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Description Section */}
                <div
                    className="py-10 2xl:py-[5vw] text-[17px] lg:text-[18px] xl:text-[1.2vw] flex font-normal font-Helvetica text-white"
                >
                    <div className="w-6 lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="px-0 pr-6 sm:px-6 lg:px-0 lg:pr-10 2xl:pr-[3.5vw] 3xl:pb-[2.5vw]">
                        <div className="pb-5">
                            By weaving together elegance and symbolism, we introduced a wave pattern that not only signifies fluidity and adaptability but also encapsulates the transformative power of water. The clever interplay between the letters 'N' and 'W' within this design serves as a testament to the brand's innovative spirit, seamlessly blending the initials of NewWaters into the fabric of its new identity, thereby enhancing its aquatic narrative in a manner that is both understated and striking.
                        </div>
                        <div>
                            This reimagined identity goes beyond mere aesthetics; it is a strategic embodiment of NewWaters' renewed vision and values. The design process was underpinned by a deep understanding of the company's strategic direction and the industry landscape, ensuring that the new identity would not only resonate with its target audience but also stand as a beacon of innovation and resilience in the face of change.
                        </div>
                    </div>
                </div>

                {/* Video Section 2 */}
                <div className="flex">
                    <div className="hidden lg:block w-6 lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none border-b-[1px]"></div>
                    <div className="w-full overflow-hidden">
                        <video
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/newwaters/newwaters_movie_2.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Image Sections */}
                <div className="py-8 2xl:py-16 flex">
                    <div className="hidden lg:block w-6 lg:w-[60px] 2xl:w-[299px] 3xl:w-[15vw] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/newwaters/newwaters_5.png" className="w-full" alt="Newwaters Image 1" />
                    </div>
                </div>

                {/* Image Grid */}
                <div className="ml-0 lg:ml-[60px] 2xl:ml-[299px] 3xl:ml-[15vw] grid grid-cols-1 md:grid-cols-2 gap-y-8 3xl:gap-y-[2vw] border-white pt-4 pb-12 2xl:pt-[2vw] 2xl:pb-[10vw]">
                    {/* Image 1 */}
                    <div className="flex">
                        <div className="w-full">
                            <img
                                src="/assets/img/newwaters/newwaters_1.png"
                                className="w-full h-full object-cover"
                                alt="Newwaters Image 1"

                            />
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="flex">
                        <div className="w-full">
                            <img
                                src="/assets/img/newwaters/newwaters_2.png"
                                className="w-full h-full object-cover"
                                alt="Newwaters Image 2"

                            />
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="flex">
                        <div className="w-full">
                            <img
                                src="/assets/img/newwaters/newwaters_3.png"
                                className="w-full h-full object-cover"
                                alt="Newwaters Image 3"

                            />
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className="flex">
                        <div className="w-full h-full">
                            <img
                                src="/assets/img/newwaters/newwaters_4.png"
                                className="w-full h-full object-cover"
                                alt="Newwaters Image 4"

                            />
                        </div>
                    </div>
                </div>



                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white pt-0">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full min-h-[300px] md:min-h-[400px]">
                            {/* First Image Container */}
                            <div className="overflow-hidden md:border-r md:border-white">
                                <Link to="/works/uniper">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px]  3xl:py-[6vw] px-[15px] md:px-10 3xl:px-[2vw] flex flex-col h-full
                                        bg-[url('assets/img/newwaters/Uniper_new_img.jpg')] bg-no-repeat bg-cover
                                        transition duration-300 ease-in-out hover:scale-105 5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl 3xl:text-[1.5vw] 5xl:text-[1vw]">Uniper</div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] xl:py-[67px] 3xl:py-[4vw] font-normal text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[1.3vw] 5xl:text-[1.2vw] leading-tight 5xl:py-[5vw]"
                                            >
                                                Shaping Uniper's campaign to position them as the heartbeat of an evolving energy landscape.
                                            </div>
                                        </div>
                                        <div className="flex py-8 items-center pl-4 3xl:py-[2vw] 5xl:py-[2.5vw]">
                                            <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg 3xl:text-[1.1vw] 5xl:text-[1.2vw]">
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
                                </Link>
                            </div>
                            {/* Second Image Container */}
                            <div className="overflow-hidden">
                                <Link to="/works/farmerVoice">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] 3xl:py-[6vw] 
                                        px-[15px] md:px-10 3xl:px-[2vw] flex flex-col w-auto h-full
                                        bg-[url('assets/img/newwaters/Farmer_new_img.jpg')] md:bg-[url('assets/img/newwaters/farmer_header.png')]
                                        bg-no-repeat bg-cover bg-
                                        transition duration-300 ease-in-out hover:scale-105 
                                        5xl:py-[10vw] 5xl:px-[3vw]"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl 
                                                        3xl:text-[1.5vw] 5xl:text-[1vw]">Farmer</div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] 3xl:max-w-[20vw] py-[26px] lg:py-[43px] 
                                                xl:py-[67px] 3xl:py-[4vw] font-normal text-[12px] 
                                                lg:text-[21px] xl:text-[32px] 2xl:text-[40px] 
                                                3xl:text-[1.3vw] 5xl:text-[1.2vw] leading-tight 
                                                5xl:py-[5vw]"
                                            >
                                                Blending tradition with innovation to empower agriculture, creating a narrative-driven, stakeholder-engaging identity.
                                            </div>
                                        </div>
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

export default Newwaters;
