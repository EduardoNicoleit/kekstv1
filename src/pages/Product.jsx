import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from './expertise/Footer';
import { ServicesTable, Contact, ExpertiseCustomCompo } from "../components";
import { expertiseData4, expertiseTableData2, productListData } from '../data/selections';
import ProductImg from '../assets/img/home/product_bg.png';
import ProductMobildImg from '../assets/img/home/product_bg_mobile.png';

const ProductCompo = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="hidden sm:block">
                <Navbar sticky={isSticky} />
                <div className="relative text-white welcome">
                    <img src={ProductImg} alt="" className="w-full" ref={element} />
                    <div className="px-6 md:px-[45px] xl:px-[50px] w-full absolute bottom-0">
                        <div className="flex flex-col ">
                            <div className="font-Helvetica text-[30px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[90px] font-bold sm:pl-8 md:pl-9 lg:pl-[93px] xl:pl-[180px] 2xl:pl-[308px] mt-auto py-14 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                                Creative <br />Communication & Strategy
                            </div>
                            <div className="hidden sm:block xl:hidden font-Helvetica text-base sm:pl-8 md:pl-9 lg:pl-[93px] py-2">
                                Our Services:
                            </div>
                            <div className="hidden sm:block border-y-[1px] xl:border-x-0 border-white border-x-[1px]">
                                <ServicesTable serviceData={expertiseData4} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 md:px-[45px] xl:px-[50px]">
                    <div className="border-x-[1px] xl:border-none border-white">
                        <p className="sm:px-8 md:px-10 lg:px-[93px] xl:px-[190px] 2xl:px-[308px] font-Helvetica font-bold text-16px sm:text-[20px] md:text-[24px] lg:text-[40px] xl:text-[36px] 2xl:text-[42px] 3xl:text-[50px] sm:py-10 md:py-[74px] text-white leading-none">
                            <span className="text-[#9F81BF]">Redefining User Experience:</span> Our expertise spans all forms of data visualization, including dynamic infographics and interactive platforms, for both print and digital. We're dedicated to turning complex data into clear, visually impactful stories that inform and drive engagement and insight.
                        </p>
                        <div className="text-white font-Helvetica">
                            <div className="border-t-[1px] border-white">
                                <div className="flex">
                                    <div className="hidden lg:block lg:w-[102px] xl:w-[220px] 2xl:w-[382px]">
                                    </div>
                                    <div className="w-full ">
                                        <div className="lg:h-20 xl:h-60 border-0 xl:border-l-[1px] px-[250px] border-white"></div>
                                        <div className="md:h-[450px] lg:h-[500px] xl:h-[604px] border-t-0 lg:border-t-[1px] md:border-x-0 lg:border-x-[1px] sm:px-20 md:px-40 lg:px-[240px] relative">
                                            <div className="sm:text-2xl md:text-[30px] xl:text-[45px] 2xl:text-4xl 3xl:text-[45px] pt-[90px]">
                                                User-Centric<br />Design
                                            </div>
                                            <div className="sm:text-base md:text-xl xl:text-[26px] 2xl:text-[32px] py-[50px]">
                                                By focusing on the user, we ensure every digital interaction is engaging, intuitive, and impactful, catering to your audience's needs and expectations.
                                            </div>
                                            <div className="text-[#9F81BF] w-16 h-16 sm:top-[95px] xl:top-[100px] 2xl:top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                                01
                                            </div>
                                            <div className="sm:w-4 md:w-24 lg:w-[180px] h-[1px] sm:top-[120px] xl:top-32 2xl:top-36 left-10 absolute bottom-0 bg-white"></div>
                                        </div>
                                        <div className="md:h-[450px] lg:h-[500px] xl:h-[604px] border-t-[1px] md:border-x-0 lg:border-x-[1px] sm:px-20 md:px-40 lg:px-[240px] relative">
                                            <div className="sm:text-2xl md:text-[30px] xl:text-[45px] 2xl:text-4xl 3xl:text-[45px] pt-[90px]">
                                                Data-Driven<br />Insights
                                            </div>
                                            <div className="sm:text-base md:text-xl xl:text-[26px] 2xl:text-[32px] py-[50px]">
                                                Our strategy integrates both creativity and analytics, using user behavior and market research to inform design decisions, optimizing user experience across all platforms.
                                            </div>
                                            <div className="text-[#9F81BF] w-16 h-16 sm:top-[95px] xl:top-[100px] 2xl:top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                                02
                                            </div>
                                            <div className="sm:w-4 md:w-24 lg:w-[180px] h-[1px] sm:top-[120px] xl:top-32 2xl:top-36 left-10 absolute bottom-0 bg-white"></div>
                                        </div>
                                        <div className="md:h-[450px] lg:h-[500px] xl:h-[604px] border-t-[1px] md:border-x-0 lg:border-x-[1px] sm:px-20 md:px-40 lg:px-[240px] relative">
                                            <div className="sm:text-2xl md:text-[30px] xl:text-[45px] 2xl:text-4xl 3xl:text-[45px] pt-[90px]">
                                                Forward-Thinking<br />Design
                                            </div>
                                            <div className="sm:text-base md:text-xl xl:text-[26px] 2xl:text-[32px] py-[50px]">
                                                By focusing on the user, we ensure every digital interaction is engaging, intuitive, and impactful, catering to your audience's needs and expectations.
                                            </div>
                                            <div className="text-[#9F81BF] w-16 h-16 sm:top-[95px] xl:top-[100px] 2xl:top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                                03
                                            </div>
                                            <div className="sm:w-4 md:w-24 lg:w-[180px] h-[1px] sm:top-[120px] xl:top-32 2xl:top-36 left-10 absolute bottom-0 bg-white"></div>
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
                    img={ProductMobildImg}
                    mainText1="Redefining User Experience:"
                    mainText2="by blending visual strategy, storytelling, and cutting-edge technology, we elevate your digital presence, offering seamless, efficient, and delightful user experiences. Our approach centers on deeply understanding and innovating user interactions online."
                    expertiseTableData={expertiseTableData2}
                    expertiseData={productListData}
                />
            </div>
            {/* <div className="absolute w-[calc(100vw-40px)] h-full border border-solid border-white top-4 left-1/2 -translate-x-1/2"></div> */}
        </div>
    )
}

export default ProductCompo;