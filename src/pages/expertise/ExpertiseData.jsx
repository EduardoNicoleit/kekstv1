import React from "react";
import Navbar from "../Navbar";
import { ServicesTable, Contact } from "../../components";
import Footer from './Footer';
import { expertiseData5 } from '../../data/selections';
import ExpertiseDataImg from '../../assets/img/home/expertise_data.png';

const ExpertiseDataCompo = () => {
    return (
        <div>
            <div className="relative text-white">
                <img src={ExpertiseDataImg} alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col">
                    <Navbar />
                    <div className="font-Helvetica text-[90px] font-bold px-[308px] mt-auto py-24 leading-none">
                        Data <br />visualization
                    </div>
                    <div className="border-y-[1px] border-white">
                        <ServicesTable serviceData={expertiseData5} />
                    </div>
                </div>
            </div>
            <p className="px-[358px] font-Helvetica font-bold text-[50px] py-[74px] text-white">
                <span className="text-[#9F81BF]">We specialize in making data compelling with powerful visual storytelling.</span> Our expertise spans all forms of data visualization, including dynamic infographics and interactive platforms, for both print and digital. We're dedicated to turning complex data into clear, visually impactful stories that inform and drive engagement and insight.
            </p>
            <div className="px-12 text-white font-Helvetica">
                <div className="border-y-[1px] border-white">
                    <div className="flex">
                        <div className="w-[365px] border-r-[1px] border-white">
                        </div>
                        <div className="w-full">
                            <div className="h-60"></div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="h-[755px] border-r-[1px] border-t-[1px] relative">
                                        <div className="p-20">
                                            <div className="text-[45px] ">
                                                NARRATIVE DATA<br />EXPLORATION
                                            </div>
                                            <div className="text-[32px] py-10">
                                                We specialize in transforming raw data into compelling information graphics and visualizations for every platform, digital, print, and film. It's not just about representation; it's about uncovering and articulating the story within the data, ensuring each number tells a part of a bigger narrative.
                                            </div>
                                        </div>
                                        <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-14 bg-[#210837] text-center">
                                            01
                                        </div>
                                    </div>
                                    <div className="h-[755px] border-t-[1px] relative border-r-[1px]">
                                        <div className="p-20">
                                            <div className="text-[45px]">
                                                CREATING LASTING
                                                <br />IMPRESSIONS WITH DATA
                                            </div>
                                            <div className="text-[32px] py-10">
                                                Data visualization goes beyond comprehension to memorability. We craft visual narratives that stick, ensuring data is not just processed but remembered and revisited. Our approach makes complex data accessible, engaging, and impactful across all mediums.
                                            </div>
                                        </div>
                                        <div className="text-[#9F81BF] w-16 h-16 font-Helvetica text-[34px] absolute bottom-0 top-[-24px] z-10 left-14 bg-[#210837] text-center">
                                            03
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-[755px] border-t-[1px] relative border-b-[1px] mt-[500px]">
                                        <div className="p-20">
                                            <div className="text-[45px]">
                                                AESTHETIC PRECISION
                                                <br />MEETS DATA
                                            </div>
                                            <div className="text-[32px] py-10">
                                                Our creations are where beauty meets precision, crafting visualizations that are not only accurate but also visually captivating. Our goal is to engage and enlighten, merging aesthetic appeal with informational clarity to produce unforgettable visual stories.
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
            <Contact />
        </div>
    )      
}

export default ExpertiseDataCompo;