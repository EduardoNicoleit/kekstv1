import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { expertiseData3, expertiseTableData1, expertiseListData } from '../../data/selections';
import { ServicesTable, Contact, MainBorder } from "../../components";
import ExpertiseTable from "./ExpertiseTable";
import Footer from './Footer';
import ExpertiseCustomCompo from "../../components/ExpertiseCustomCompo";

const ExpertiseCompo = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative">
            <div className="hidden lg:block">
                <Navbar sticky={isSticky} />
                <div className="relative text-white welcome">
                    <video
                        className="w-full"
                        ref={element}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="assets/video/expertise_01.mp4" type="video/mp4" />
                    </video>
                    <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px] w-full absolute bottom-0">
                        <div className="flex flex-col ">
                            <div className="font-Helvetica text-[30px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[5.5vw] 5xl:text-[4.5vw] font-bold sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] 2xl:pl-[308px] 3xl:pl-[15vw] mt-auto py-14 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-[6vw]">
                                Creative <br /> Communication & Strategy
                            </div>
                            <div className="hidden sm:block 2xl:hidden font-Helvetica text-base sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] py-2">
                                Our Services:
                            </div>
                            <div className="hidden sm:block border-y-[1px] xl:border-x-0 border-white">
                                <ServicesTable serviceData={expertiseData3} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                    <div className="">
                        <p className="sm:px-8 md:px-[33px] lg:px-[46px] xl:px-[154px] 2xl:px-[308px] 3xl:px-[15vw] font-Helvetica font-normal text-[16px] sm:text-[20px] md:text-[24px] lg:text-[40px] xl:text-[36px] 2xl:text-[42px] 3xl:text-[2.5vw] 5xl:text-[2.2vw] sm:py-10 md:py-[74px] 2xl:py-[2vw] text-white leading-tight 3xl:leading-[3vw]">
                            <span className="text-[#9F81BF] font-bold">Crafting narratives to engage and inspire in an age where stories define brands and shape opinions,</span> we step forward as a guide in the world of creative communication. From the inception of an idea to its grand realization, our journey is about making narratives resonate.
                        </p>
                        <ExpertiseTable />
                        <Footer />
                    </div>
                </div>
                <Contact />
            </div>
            <div className="block lg:hidden">
                <ExpertiseCustomCompo
                    title1="Creative"
                    title2="Communication & Strategy"
                    videoSrc="assets/video/expertise_01.mp4"
                    mainText1="Crafting narratives to engage and inspire in an age where stories define brands and shape opinions,"
                    mainText2="we step forward as a guide in the world of creative communication. From the inception of an idea to its grand realization, our journey is about making narratives resonate."
                    expertiseTableData={expertiseTableData1}
                    expertiseData={expertiseListData}
                />

            </div>
            <MainBorder />
        </div>
    )
}

export default ExpertiseCompo;
