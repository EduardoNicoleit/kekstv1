import React from "react";
import Navbar from "../Navbar";
import { ServicesTable, Contact, ExpertiseCustomCompo, MainBorder } from "../../components";
import Footer from './Footer';
import { expertiseData5, expertiseTableData3, expertiseDataList } from '../../data/selections';


const ExpertiseDataCompo = ({ isSticky, element }) => {
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
                        <source src="../../assets/video/expertise_03.mp4" type="video/mp4" />
                    </video>
                    <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px] w-full absolute bottom-0">
                        <div className="flex flex-col ">
                            <div className="font-Helvetica text-[30px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[90px] font-bold sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] 2xl:pl-[308px] mt-auto py-14 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                                Data <br />Visualization
                            </div>
                            <div className="hidden sm:block 2xl:hidden font-Helvetica text-base sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] py-2">
                                Our Services:
                            </div>
                            <div className="hidden sm:block border-y-[1px] xl:border-x-0 border-white">
                                <ServicesTable serviceData={expertiseData5} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[50px]">
                    <div>
                        <p className="sm:px-8 md:px-[33px] lg:px-[46px] xl:px-[154px] 2xl:px-[308px] font-Helvetica font-bold text-16px sm:text-[20px] md:text-[24px] lg:text-[40px] xl:text-[36px] 2xl:text-[42px] 3xl:text-[50px] sm:py-10 md:py-[74px] text-white leading-none">
                            <span className="text-[#9F81BF]">We specialize in making data compelling with powerful visual storytelling.</span> Our expertise spans all forms of data visualization, including dynamic infographics and interactive platforms, for both print and digital. We're dedicated to turning complex data into clear, visually impactful stories that inform and drive engagement and insight.
                        </p>
                        <div className="text-white font-Helvetica">
                            <div className="border-t-[1px] border-white">
                                <div className="flex">
                                    <div className="hidden border-r-[1px] flex-none lg:block lg:w-[46px] xl:w-[154px] 2xl:w-[308px]">
                                    </div>
                                    <div className="w-full">
                                        <div className="lg:h-[90px] xl:h-[100px] 2xl:h-[230px] px-[250px]"></div>
                                        <div className="grid xl:grid-cols-1 2xl:grid-cols-2">
                                            <div>
                                                <div className="border-t-[1px] border-r-[1px] relative">
                                                    <div className="lg:py-10 xl:py-8 2xl:lg:py-16 xl:px-0 2xl:px-16">
                                                        <div className="flex lg:flex-row xl:flex-col sm:text-[24px] md:text-[30px] lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px] lg:pl-[60px] xl:pl-[260px] 2xl:pl-0">
                                                            <div>
                                                                NARRATIVE DATA
                                                            </div>
                                                            <div className="lg:pt-0 xl:pt-1 2xl:pt-4">
                                                                EXPLORATION
                                                            </div>
                                                        </div>
                                                        <div className="
                                                        sm:text-base md:text-[20px] lg:text-xl xl:text-[26px] 2xl:text-[32px] 
                                                        lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                                        2xl:pb-[76px]
                                                        lg:max-w-[600px] xl:max-w-[950px] 2xl:max-w-[500px]
                                                        lg:pl-[60px] xl:pl-[260px] 2xl:pl-0 
                                                        ">
                                                            We specialize in transforming raw data into compelling information graphics and visualizations for every platform, digital, print, and film. It's not just about representation; it's about uncovering and articulating the story within the data, ensuring each number tells a part of a bigger narrative.
                                                        </div>
                                                    </div>
                                                    <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-10 bg-[#210837] text-center">
                                                        01
                                                    </div>
                                                </div>
                                                <div className="border-t-[1px] border-r-[1px] relative block 2xl:hidden">
                                                    <div className="lg:py-10 xl:py-8 2xl:lg:py-16 xl:px-0 2xl:px-16">
                                                        <div className="flex lg:flex-row xl:flex-col sm:text-[24px] md:text-[30px] lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px] lg:pl-[60px] xl:pl-[260px] 2xl:pl-0">
                                                            <div>
                                                                AESTHETIC PRECISION
                                                            </div>
                                                            <div className="lg:pt-0 xl:pt-1 2xl:pt-4">
                                                                MEETS DATA
                                                            </div>
                                                        </div>
                                                        <div className="
                                                        sm:text-base md:text-[20px] lg:text-xl xl:text-[26px] 2xl:text-[32px] 
                                                        lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                                        2xl:pb-[76px]
                                                        lg:max-w-[600px] xl:max-w-[950px] 2xl:max-w-[500px]
                                                        lg:pl-[60px] xl:pl-[260px] 2xl:pl-0 
                                                        ">
                                                            Our creations are where beauty meets precision, crafting visualizations that are not only accurate but also visually captivating. Our goal is to engage and enlighten, merging aesthetic appeal with informational clarity to produce unforgettable visual stories.
                                                        </div>
                                                    </div>
                                                    <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-10 bg-[#210837] text-center">
                                                        02
                                                    </div>
                                                </div>
                                                <div className="border-t-[1px] border-r-[1px] relative">
                                                    <div className="lg:py-10 xl:py-8 2xl:lg:py-16 xl:px-0 2xl:px-16">
                                                        <div className="flex lg:flex-row xl:flex-col sm:text-[24px] md:text-[30px] lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px] lg:pl-[60px] xl:pl-[260px] 2xl:pl-0">
                                                            <div>
                                                                CREATING LASTING
                                                            </div>
                                                            <div className="lg:pt-0 xl:pt-1 2xl:pt-4">
                                                                IMPRESSIONS WITH DATA
                                                            </div>
                                                        </div>
                                                        <div className="
                                                        sm:text-base md:text-[20px] lg:text-xl xl:text-[26px] 2xl:text-[32px] 
                                                        lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                                        2xl:pb-[76px]
                                                        lg:max-w-[600px] xl:max-w-[950px] 2xl:max-w-[500px]
                                                        lg:pl-[60px] xl:pl-[260px] 2xl:pl-0 
                                                        ">
                                                            Data visualization goes beyond comprehension to memorability. We craft visual narratives that stick, ensuring data is not just processed but remembered and revisited. Our approach makes complex data accessible, engaging, and impactful across all mediums.
                                                        </div>
                                                    </div>
                                                    <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-10 bg-[#210837] text-center">
                                                        01
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden 2xl:block">
                                                <div className="border-t-[1px] relative border-b-[1px] xl:mt-0 2xl:mt-[350px] 3xl:mt-[500px]">
                                                    <div className="sm:p-9 md:p-10 lg:p-16">
                                                        <div className="sm:text-[24px] md:text-[30px] lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px]">
                                                            <div>
                                                                AESTHETIC PRECISION
                                                            </div>
                                                            <div className="pt-4">
                                                                MEETS DATA
                                                            </div>
                                                        </div>
                                                        <div className="
                                                        sm:text-base md:text-[20px] lg:text-xl xl:text-[26px] 2xl:text-[32px] 
                                                        2xl:pt-[50px]
                                                        2xl:pb-[76px]
                                                        max-w-[500px]
                                                        ">
                                                            Our creations are where beauty meets precision, crafting visualizations that are not only accurate but also visually captivating. Our goal is to engage and enlighten, merging aesthetic appeal with informational clarity to produce unforgettable visual stories.
                                                        </div>
                                                    </div>
                                                    <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-10 bg-[#210837] text-center">
                                                        02
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
                <Contact />
            </div>
            <div className="block lg:hidden">
                <ExpertiseCustomCompo
                    title1="Data"
                    title2="Visualization"
                    videoSrc="../../assets/video/expertise_03.mp4"
                    mainText1="We specialize in making data compelling with powerful visual storytelling."
                    mainText2="Our expertise spans all forms of data visualization, including dynamic infographics and interactive platforms, for both print and digital. We're dedicated to turning complex data into clear, visually impactful stories that inform and drive engagement and insight."
                    expertiseTableData={expertiseTableData3}
                    expertiseData={expertiseDataList}
                />
            </div>
            <MainBorder />
        </div>
    )
}

export default ExpertiseDataCompo;        