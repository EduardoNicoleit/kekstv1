import React from "react";
import Navbar from "../Navbar";
import { ServicesTable, Contact, ExpertiseCustomCompo } from "../../components";
import Footer from './Footer';
import { expertiseData5, expertiseTableData3, expertiseDataList } from '../../data/selections';
import ExpertiseDataImg from '../../assets/img/home/expertise_data.png';
import ExpertiseDataMobileImg from '../../assets/img/home/expertise_data_mobile.png';

const ExpertiseDataCompo = ({ isSticky, element }) => {
    return (
        <div>
            <div className="hidden sm:block">
                <Navbar sticky={isSticky} />
                <div className="relative text-white welcome">
                    <img src={ExpertiseDataImg} alt="" className="w-full" ref={element} />
                    <div className="px-6 md:px-[45px] xl:px-[50px] w-full absolute bottom-0">
                        <div className="flex flex-col ">
                            <div className="font-Helvetica text-[30px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[90px] font-bold sm:pl-8 md:pl-9 lg:pl-[93px] xl:pl-[180px] 2xl:pl-[308px] mt-auto py-14 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                                Data <br />visualization
                            </div>
                            <div className="hidden sm:block xl:hidden font-Helvetica text-base sm:pl-8 md:pl-9 lg:pl-[93px] py-2">
                                Our Services:
                            </div>
                            <div className="hidden sm:block border-y-[1px] xl:border-x-0 border-white border-x-[1px]">
                                <ServicesTable serviceData={expertiseData5} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 md:px-[45px] xl:px-[50px]">
                    <div className="border-x-[1px] xl:border-none border-white">
                        <p className="sm:px-8 md:px-10 lg:px-[93px] xl:px-[190px] 2xl:px-[308px] font-Helvetica font-bold text-16px sm:text-[20px] md:text-[24px] lg:text-[40px] xl:text-[36px] 2xl:text-[42px] 3xl:text-[50px] sm:py-10 md:py-[74px] text-white leading-none">
                            <span className="text-[#9F81BF]">We specialize in making data compelling with powerful visual storytelling.</span> Our expertise spans all forms of data visualization, including dynamic infographics and interactive platforms, for both print and digital. We're dedicated to turning complex data into clear, visually impactful stories that inform and drive engagement and insight.
                        </p>
                        <div className="text-white font-Helvetica border-t-[1px]">
                            <div className="border-white">
                                <div className="flex">
                                    <div className="hidden lg:block lg:w-[102px] xl:w-[220px] 2xl:w-[382px] border-r-[1px] border-white">
                                    </div>
                                    <div className="w-full">
                                        <div className="lg:h-20 xl:h-60 px-[250px] border-white"></div>
                                        <div className="grid grid-cols-2">
                                            <div>
                                                <div className="sm:h-[650px] md:h-[650px] lg:h-[620px] xl:h-[755px] border-r-[1px] border-t-[1px] relative">
                                                    <div className="sm:p-9 md:p-10 lg:p-16">
                                                        <div className="sm:text-[24px] md:text-[30px] lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px] ">
                                                            NARRATIVE DATA<br />EXPLORATION
                                                        </div>
                                                        <div className="sm:text-base md:text-[20px] lg:text-xl xl:text-[26px] 2xl:text-[32px] py-[50px]">
                                                            We specialize in transforming raw data into compelling information graphics and visualizations for every platform, digital, print, and film. It's not just about representation; it's about uncovering and articulating the story within the data, ensuring each number tells a part of a bigger narrative.
                                                        </div>
                                                    </div>
                                                    <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-14 bg-[#210837] text-center">
                                                        01
                                                    </div>
                                                </div>
                                                <div className="sm:h-[650px] md:h-[650px] lg:h-[620px] xl:h-[755px] border-t-[1px] relative border-r-[1px]">
                                                    <div className="sm:p-9 md:p-10 lg:p-16">
                                                        <div className="sm:text-[24px] md:text-[30px] lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px]">
                                                            CREATING LASTING
                                                            <br />IMPRESSIONS WITH DATA
                                                        </div>
                                                        <div className="sm:text-base md:text-[20px] lg:text-xl xl:text-[26px] 2xl:text-[32px] py-[50px]">
                                                            Data visualization goes beyond comprehension to memorability. We craft visual narratives that stick, ensuring data is not just processed but remembered and revisited. Our approach makes complex data accessible, engaging, and impactful across all mediums.
                                                        </div>
                                                    </div>
                                                    <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-14 bg-[#210837] text-center">
                                                        03
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="sm:h-[650px] md:h-[650px] lg:h-[620px] xl:h-[755px] border-t-[1px] relative border-b-[1px] mt-[500px]">
                                                    <div className="sm:p-9 md:p-10 lg:p-16">
                                                        <div className="sm:text-[24px] md:text-[30px] lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px]">
                                                            AESTHETIC PRECISION
                                                            <br />MEETS DATA
                                                        </div>
                                                        <div className="sm:text-base md:text-[20px] lg:text-xl xl:text-[26px] 2xl:text-[32px] py-[50px]">
                                                            Our creations are where beauty meets precision, crafting visualizations that are not only accurate but also visually captivating. Our goal is to engage and enlighten, merging aesthetic appeal with informational clarity to produce unforgettable visual stories.
                                                        </div>
                                                    </div>
                                                    <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-14 bg-[#210837] text-center">
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
            <div className="block sm:hidden">
                <ExpertiseCustomCompo
                    img={ExpertiseDataMobileImg}
                    mainText1="We specialize in making data compelling with powerful visual storytelling."
                    mainText2="Our expertise spans all forms of data visualization, including dynamic infographics and interactive platforms, for both print and digital. We're dedicated to turning complex data into clear, visually impactful stories that inform and drive engagement and insight."
                    expertiseTableData={expertiseTableData3}
                    expertiseData={expertiseDataList}
                />
            </div>
        </div>
    )
}

export default ExpertiseDataCompo;        