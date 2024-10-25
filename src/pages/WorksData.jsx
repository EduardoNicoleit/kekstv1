import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { WorkDataSelection, Footer, MainBorder } from "../components";
import { selectionsData } from "../data/selections";

const WorksDataCompo = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white welcome">
                {/*Fullscreen Video */}
                <video
                    className="w-full hidden sm:block"
                    ref={element}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="../../assets/video/REELShowcases.mp4" type="video/mp4" />
                </video>
                {/*Mobile Video */}
                <video
                    className="w-full h-[531px] object-cover block sm:hidden"
                    ref={element}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="../../assets/video/REELShowcases.mp4" type="video/mp4" />
                </video>
                <div className="absolute block sm:hidden bottom-[56px] pl-[41px] font-Helvetica font-bold text-[30px] leading-[34px]">
                </div>
            </div>
            <div className="w-full text-white px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                <div className="border-b-0 lg:border-b-[1px]">
                    <div className="font-Helvetica font-bold text-[32px] sm:text-[45px] lg:text-[68px] xl:text-[90px] 2xl:text-[120px] 3xl:text-[5.5vw] pt-8 sm:pt-8 lg:pt-[88px]xl:pt-[134px] 2xl:pt-[170px] pb-10 sm:pb-8 lg:pb-[67px] xl:pb-9 2xl:pb-[50px] pl-[33px] lg:pl-[41px] xl:pl-[65px] 2xl:pl-[308px]">
                        A selection of work
                    </div>
                </div>
            </div>
            <div className="">
                <div className="px-2 lg:px-0">
                    <div className="text-white border-b-[1px] md:border-b-0 pl-[33px] lg:pl-[49px] xl:pl-[90px] 2xl:pl-[356px] pr-[33px] lg:pr-[49px] xl:pr-[90px] 2xl:pr-[7vw]">
                        <p className="font-Helvetica font-bold sm:font-normal text-[17px] lg:text-[30px] 2xl:text-[37px] 3xl:text-[2vw] py-0 lg:py-[78px] 2xl:py-[4vw] pb-[58px] md:pb-0 2xl:pb-[10vw] leading-tight">
                            Unlocking new narratives in a digital age. The digital landscape is vast, constantly evolving, and ever-challenging. But with challenges come opportunities. Through Strategic Visual Communications, Product & Platform Creation, and Data Visualization, we empower brands to seize these opportunities. With a blend of creativity, technology, and strategy, we're not just designing for the present but envisioning the future.
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-0 2xl:pt-12 px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[2vw]">
                <div className="border-b-[1px] border-white 3xl:pb-[5.5vw]">
                    <WorkDataSelection selectionsData={selectionsData} />
                </div>
            </div>
            <pr />
            <Footer />
            <MainBorder />
        </div>
    )
}

export default WorksDataCompo;