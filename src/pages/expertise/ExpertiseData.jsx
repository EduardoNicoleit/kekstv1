import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { ServicesTable, Footer, ExpertiseCustomCompo, MainBorder } from "../../components";
import ExpertiseFooter from './ExpertiseFooter';
import { expertiseData5, expertiseTableData3, expertiseDataList } from '../../data/selections';

const ExpertiseDataCompo = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component loads
    }, []); // Empty dependency array ensures it runs only on component mount

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
                    <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px] w-full absolute bottom-0">
                        <div className="flex flex-col">
                            <div className="font-Helvetica text-[30px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[5.5vw] 5xl:text-[4.5vw] font-bold sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] 2xl:pl-[308px] 3xl:pl-[15vw] mt-auto py-14 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-[6vw]">
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
                <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                    <div>
                        <p className="sm:px-8 md:px-[33px] lg:px-[46px] xl:px-[154px] 2xl:px-[308px] 3xl:px-[15vw] font-Helvetica font-normal text-[17px] md:text-[28px] 2xl:text-[40px] 3xl:text-[1.8vw] sm:py-10 md:py-[74px] 2xl:py-[2.5vw] text-white leading-tight 3xl:leading-[2.5vw]">
                            <span className="text-[#9F81BF] font-bold">We specialize in making data compelling with powerful visual storytelling.</span> Our expertise spans all forms of data visualization, including dynamic infographics and interactive platforms, for both print and digital. We're dedicated to turning complex data into clear, visually impactful stories that inform and drive engagement and insight.
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
                                                        <div className="flex lg:flex-row xl:flex-col sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw] lg:pl-[60px] xl:pl-[260px] 2xl:pl-0 leading-normal 2xl:leading-[2.5vw]">
                                                            <div>
                                                                NARRATIVE DATA <br /> EXPLORATION
                                                            </div>
                                                        </div>
                                                        <div className="leading-normal 2xl:leading-[1.6vw]
                                                        text-sm sm:text-sm lg:text-lg xl:text-xl 2xl:text-[20px] 3xl:text-[1.05vw]
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
                                                        <div className="flex lg:flex-row xl:flex-col sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw] lg:pl-[60px] xl:pl-[260px] 2xl:pl-0 leading-normal 2xl:leading-[2.5vw]">
                                                            <div>
                                                                AESTHETIC PRECISION <br /> MEETS DATA
                                                            </div>
                                                        </div>
                                                        <div className="leading-normal 2xl:leading-[1.6vw]
                                                       text-sm sm:text-sm lg:text-lg xl:text-xl 2xl:text-[20px] 3xl:text-[1.05vw]
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
                                                        <div className="flex lg:flex-row xl:flex-col sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw] lg:pl-[60px] xl:pl-[260px] 2xl:pl-0 leading-normal 2xl:leading-[2.5vw]">
                                                            <div>
                                                                CREATING LASTING <br /> IMPRESSIONS WITH DATA
                                                            </div>
                                                        </div>
                                                        <div className="leading-normal 2xl:leading-[1.6vw]
                                                        text-sm sm:text-sm lg:text-lg xl:text-xl 2xl:text-[20px] 3xl:text-[1.05vw] 
                                                        lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                                        2xl:pb-[76px]
                                                        lg:max-w-[600px] xl:max-w-[950px] 2xl:max-w-[500px]
                                                        lg:pl-[60px] xl:pl-[260px] 2xl:pl-0 
                                                        ">
                                                            Data visualization goes beyond comprehension to memorability. We craft visual narratives that stick, ensuring data is not just processed but remembered and revisited. Our approach makes complex data accessible, engaging, and impactful across all mediums.
                                                        </div>
                                                    </div>
                                                    <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-10 bg-[#210837] text-center">
                                                        03
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden 2xl:block">
                                                <div className="border-t-[1px] relative border-b-[1px] xl:mt-0 2xl:mt-[350px] 3xl:mt-[500px]">
                                                    <div className="sm:p-9 md:p-10 lg:p-16">
                                                        <div className="leading-normal 2xl:leading-[2.5vw] sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw]">
                                                            <div>
                                                                AESTHETIC PRECISION <br />MEETS DATA
                                                            </div>
                                                        </div>
                                                        <div className="leading-normal 2xl:leading-[1.6vw]
                                                        text-sm sm:text-sm lg:text-lg xl:text-xl 2xl:text-[20px] 3xl:text-[1.05vw]
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
                        <ExpertiseFooter />
                    </div>
                </div>
                <Footer />
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