import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact, MainBorder } from "../components";
import { Link } from "react-router-dom";

const DTCP = ({ isSticky, element }) => {
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
                    src="/assets/img/dtcp/dtcp_header.png"
                    alt="DTCP Desktop Header"
                    className="w-full hidden md:block"
                />
                {/* Mobile Image */}
                <img
                    src="/assets/img/dtcp/dtcp_mobile.png"
                    alt="DTCP Mobile Header"
                    className="w-full block md:hidden"
                />
                {/* Overlay Content */}
                <div className="w-full absolute bottom-0">
                    <div className="flex flex-col px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                        {/* Title */}
                        <div className="flex">
                            <div className="w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                            <div>
                                <div
                                    className="font-Helvetica font-bold mt-auto
                                    text-[30px] leading-[34px] md:text-[50px] md:leading-[57px]
                                    lg:text-[70px]
                                    xl:text-[160px]
                                    lg:leading-[80px] xl:leading-[184px]
                                    py-14 sm:py-6 md:py-10 lg:py-10 xl:py-5 2xl:py-16 3xl:py-20"
                                >
                                    DTCP
                                </div>
                            </div>
                        </div>
                        {/* Desktop Overview */}
                        <div className="hidden lg:block">
                            <div
                                className="lg:flex-col 2xl:flex-row flex border-white border-y-[1px]
                                sm:text-4xl md:text-3xl lg:text-[22px] lg:h-[220px] xl:h-[188px] 2xl:h-[128px] items-start 2xl:items-center"
                            >
                                <div
                                    className="lg:pl-[60px] lg:py-4 xl:py-5 2xl:py-0
                                    w-[300px] lg:w-[200px] 2xl:w-[318px] mb-0 2xl:mb-12"
                                >
                                    Overview
                                </div>
                                <div className="lg:grid grid-cols-3 w-full items-start 2xl:items-center">
                                    <div className="pl-[60px] 2xl:pl-8 pr-4 xl:border-l-0 2xl:border-l-[1px] leading-tight h-full">
                                        Elevated the Annual Report with
                                        Dynamic Visual Narratives.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Transformed Complex Data into
                                        Actionable Insights.
                                    </div>
                                    <div className="pl-8 pr-4 border-l-[1px] leading-tight h-full">
                                        Crafted a Visual Identity that Reflects
                                        the Company's Trustworthiness.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Overview */}
            <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                <div className="block lg:hidden font-Helvetica font-normal py-[41px] text-white pl-6 sm:pl-[33px]">
                    <div className="text-[12px] leading-[14px] uppercase">Overview</div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Elevated the Annual Report with
                        Dynamic Visual Narratives.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Transformed Complex Data into
                        Actionable Insights.
                    </div>
                    <div className="text-[13px] leading-[15px] py-3 border-b-[1px]">
                        Crafted a Visual Identity that Reflects
                        the Company's Trustworthiness.
                    </div>
                </div>

                {/* Partnership Section */}
                <div
                    className="flex flex-col 2xl:flex-row md:pt-[10px] lg:pt-10 xl:pt-[156px] 2xl:pt-[211px] pb-10 lg:pb-20 xl:pb-[106px] 2xl:pb-[134px] w-full font-Helvetica text-white"
                >
                    <div
                        className="text-start 2xl:text-center font-normal
                        text-[12px] md:text-lg 2xl:text-2xl
                        pt-3
                        xl:w-full 2xl:w-[299px]
                        flex-none
                        px-[33px] lg:px-[60px] 2xl:px-0
                        py-6 2xl:py-0"
                    >
                        The partnership:
                    </div>
                    <div
                        className="font-bold md:font-normal text-[17px] md:text-[28px] 2xl:text-[40px] px-[33px] lg:px-[60px] 2xl:px-0 w-full leading-tight"
                    >
                        Partnering with DTCP, we've transformed their Annual Reports, infusing them with a narrative that resonates with the company's unique essence; dynamic and innovative. This approach was meticulously crafted to engage stakeholders, effectively conveying the company's accomplishments and future aspirations through a blend of captivating visual storytelling and insightful infographics. By integrating these elements, we ensured that the report not only invigorates readers but also authentically reflects our pioneering ethos.
                    </div>
                </div>

                {/* Video Section */}
                <div className="flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none border-b-[1px]"></div>
                    <div className="w-full">
                        <video
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/video/dtcp/DTCP_movie_1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Description Section */}
                <div
                    className="py-10 2xl:py-[114px] text-[17px] lg:text-[18px] xl:text-2xl flex font-normal font-Helvetica text-white"
                >
                    <div className="md:w-[33px] lg:w-[60px] 2xl:w-[299px] flex-none"></div>
                    <div className="px-6 md:px-0">
                        <div>
                            By presenting complex information in a visually compelling manner, we facilitated a deeper understanding of the company's performance and strategic direction. Whether it's through interactive charts, dynamic graphs, or engaging timelines, our aim was to empower stakeholders with actionable insights that inform decision-making and foster trust in DTCP.
                        </div>
                    </div>
                </div>

                {/* Image Sections */}
                <div>
                    <img src="/assets/img/dtcp/dtcp_header1.png" className="w-full" alt="DTCP Annual Report Header" />
                </div>
                <div className="pt-8 2xl:pt-16 pb-8 md:pb-0">
                    <img src="/assets/img/dtcp/dtcp_3.png" className="w-full" alt="DTCP Data Visualization" />
                </div>
                <div className="flex">
                    <div className="hidden lg:block lg:w-[299px] flex-none"></div>
                    <div className="w-full">
                        <img src="/assets/img/dtcp/dtcp_2.png" className="w-full" alt="DTCP Actionable Insights" />
                    </div>
                </div>
                <div className="pt-8 2xl:pt-16 pb-8 md:pb-0">
                    <img src="/assets/img/dtcp/dtcp_1.png" className="w-full" alt="DTCP Visual Identity" />
                </div>
                <div className="pb-8 2xl:pb-16">
                    <img src="/assets/img/dtcp/dtcp_5.png" className="w-full" alt="DTCP Trustworthiness" />
                </div>

                {/* Two Images with Hover Effect */}
                <div className="w-full border-t border-b border-white">
                    <div className="flex text-white font-Helvetica">
                        <div className="grid grid-cols-2 w-full">
                            {/* First Image Container */}
                            <div className="overflow-hidden md:border-r md:border-white">
                                <Link to="/works/maltesert">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] px-[15px] md:px-10 flex flex-col h-full
                                        bg-[url('assets/img/farmervoice/malteser_1.png')] md:bg-[url('assets/img/dtcp/malteser_header.png')] bg-no-repeat bg-cover
                                        transition duration-300 ease-in-out hover:scale-105"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl">Malteser</div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal
                                                text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight"
                                            >
                                                Merging data with design to democratize information, crafting a visually engaging, universally accessible identity.
                                            </div>
                                        </div>
                                        <div className="flex py-8 items-center pl-4">
                                            <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">read more</div>
                                            <div>
                                                <svg
                                                    className="ml-3 pt-[2px] w-6 h-6"
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
                                <Link to="/works/bp">
                                    <div
                                        className="cursor-pointer py-[26px] 2xl:py-[100px] px-[15px] md:px-10 flex flex-col h-full
                                        bg-[url('assets/img/dtcp/bp_1.png')] md:bg-[url('assets/img/dtcp/bp_3b.png')] bg-no-repeat bg-cover
                                        transition duration-300 ease-in-out hover:scale-105"
                                    >
                                        <div className="font-bold text-[15px] lg:text-base xl:text-2xl">bp</div>
                                        <div className="flex-1">
                                            <div
                                                className="max-w-[440px] py-[26px] lg:py-[43px] xl:py-[67px] font-normal
                                                text-[12px] lg:text-[21px] xl:text-[32px] 2xl:text-[40px] leading-tight"
                                            >
                                                Creating culturally tailored infographics to showcase bp's Greater Tortue Ahmeyim (GTA) FLNG project's achievements, fostering global understanding and engagement.
                                            </div>
                                        </div>
                                        <div className="flex py-8 items-center pl-4">
                                            <div className="uppercase font-normal text-[13px] lg:text-xs xl:text-lg">read more</div>
                                            <div>
                                                <svg
                                                    className="ml-3 pt-[2px] w-6 h-6"
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

            {/* Contact and MainBorder Components */}
            <Contact />
            <MainBorder />
        </div>
    );
};

export default DTCP;
