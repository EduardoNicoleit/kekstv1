import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from './expertise/Footer';
import { ServicesTable, Contact, ExpertiseCustomCompo, MainBorder } from "../components";
import { expertiseData4, expertiseTableData2, productListData } from '../data/selections';


const ProductCompo = ({ isSticky, element }) => {
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
                        <source src="assets/video/expertise_02.mp4" type="video/mp4" />
                    </video>
                    <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px] w-full absolute bottom-0">
                        <div className="flex flex-col ">
                            <div className="font-Helvetica text-[30px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[90px] font-bold sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] 2xl:pl-[308px] mt-auto py-14 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                                Digital Experience <br />& Innovation
                            </div>
                            <div className="hidden sm:block 2xl:hidden font-Helvetica text-base sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] py-2">
                                Our Services:
                            </div>
                            <div className="hidden sm:block border-y-[1px] xl:border-x-0 border-white">
                                <ServicesTable serviceData={expertiseData4} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                    <div className="">
                        <p className="sm:px-8 md:px-[33px] lg:px-[46px] xl:px-[154px] 2xl:px-[308px] font-Helvetica font-bold text-16px sm:text-[20px] md:text-[24px] lg:text-[40px] xl:text-[36px] 2xl:text-[42px] 3xl:text-[50px] sm:py-10 md:py-[74px] text-white leading-none">
                            <span className="text-[#9F81BF]">Redefining User Experience:</span> Our expertise spans all forms of data visualization, including dynamic infographics and interactive platforms, for both print and digital. We're dedicated to turning complex data into clear, visually impactful stories that inform and drive engagement and insight.
                        </p>
                        <div className="text-white font-Helvetica">
                            <div className="border-t-[1px] border-white">
                                <div className="flex">
                                    <div className="hidden border-r-[1px] flex-none lg:block lg:w-[46px] xl:w-[154px] 2xl:w-[308px]">
                                    </div>
                                    <div className="w-full ">
                                        <div className="lg:h-20 xl:h-60 border-0 xl:border-l-[1px] px-[250px] border-white"></div>
                                        <div className="border-t-0 lg:border-t-[1px] sm:px-20 md:px-40 lg:px-[60px] xl:px-[260px] relative">
                                            <div className="block lg:hidden 2xl:block sm:text-2xl md:text-[30px] xl:text-[45px] 2xl:text-4xl 3xl:text-[45px] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px]">
                                                <div>
                                                    User-Centric
                                                </div>
                                                <div className="pt-4">
                                                    Design
                                                </div>
                                            </div>
                                            <div className="hidden lg:block 2xl:hidden sm:text-2xl md:text-[30px] lg:text-[25px] xl:text-[45px] 2xl:text-4xl 3xl:text-[45px] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px]">
                                                User-Centric Design
                                            </div>
                                            <div className="sm:text-base md:text-xl xl:text-[26px] 2xl:text-[32px]
                                            lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                            lg:pb-10 xl:pb-[82px] 2xl:pb-[200px]
                                            lg:max-w-[500px]">
                                                By focusing on the user, we ensure every digital interaction is engaging, intuitive, and impactful, catering to your audience's needs and expectations.
                                            </div>
                                            <div className="text-[#9F81BF] w-16 h-16 sm:top-[95px] lg:top-[50px] xl:top-[75px] 2xl:top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                                01
                                            </div>
                                            <div className="hidden xl:block sm:w-4 md:w-24 lg:w-[180px] h-[1px] sm:top-[120px] xl:top-[100px] 2xl:top-36 left-10 absolute bottom-0 bg-white"></div>
                                        </div>
                                        <div className="border-t-0 lg:border-t-[1px] sm:px-20 md:px-40 lg:px-[60px] xl:px-[260px] relative">
                                            <div className="block lg:hidden 2xl:block sm:text-2xl md:text-[30px] xl:text-[45px] 2xl:text-4xl 3xl:text-[45px] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px]">
                                                <div>
                                                    Data-Driven
                                                </div>
                                                <div className="pt-4">
                                                    Insights
                                                </div>
                                            </div>
                                            <div className="hidden lg:block 2xl:hidden sm:text-2xl md:text-[30px] lg:text-[25px] xl:text-[45px] 2xl:text-4xl 3xl:text-[45px] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px]">
                                                Data-Driven Insights
                                            </div>
                                            <div className="sm:text-base md:text-xl xl:text-[26px] 2xl:text-[32px]
                                            lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                            lg:pb-10 xl:pb-[82px] 2xl:pb-[200px]
                                            lg:max-w-[500px]">
                                                Our strategy integrates both creativity and analytics, using user behavior and market research to inform design decisions, optimizing user experience across all platforms.
                                            </div>
                                            <div className="text-[#9F81BF] w-16 h-16 sm:top-[95px] lg:top-[50px] xl:top-[75px] 2xl:top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                                02
                                            </div>
                                            <div className="hidden xl:block sm:w-4 md:w-24 lg:w-[180px] h-[1px] sm:top-[120px] xl:top-[100px] 2xl:top-36 left-10 absolute bottom-0 bg-white"></div>
                                        </div>
                                        <div className="border-t-0 lg:border-t-[1px] sm:px-20 md:px-40 lg:px-[60px] xl:px-[260px] relative">
                                            <div className="block lg:hidden 2xl:block sm:text-2xl md:text-[30px] xl:text-[45px] 2xl:text-4xl 3xl:text-[45px] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px]">
                                                <div>
                                                    Forward-Thinking
                                                </div>
                                                <div className="pt-4">
                                                    Design
                                                </div>
                                            </div>
                                            <div className="hidden lg:block 2xl:hidden sm:text-2xl md:text-[30px] lg:text-[25px] xl:text-[45px] 2xl:text-4xl 3xl:text-[45px] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px]">
                                                Forward-Thinking Design
                                            </div>
                                            <div className="sm:text-base md:text-xl xl:text-[26px] 2xl:text-[32px]
                                            lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                            lg:pb-10 xl:pb-[82px] 2xl:pb-[200px]
                                            lg:max-w-[500px]">
                                                By focusing on the user, we ensure every digital interaction is engaging, intuitive, and impactful, catering to your audience's needs and expectations.
                                            </div>
                                            <div className="text-[#9F81BF] w-16 h-16 sm:top-[95px] lg:top-[50px] xl:top-[75px] 2xl:top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                                03
                                            </div>
                                            <div className="hidden xl:block sm:w-4 md:w-24 lg:w-[180px] h-[1px] sm:top-[120px] xl:top-[100px] 2xl:top-36 left-10 absolute bottom-0 bg-white"></div>
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
                    title1="Digital Experience"
                    title2="& Innovation"
                    videoSrc="assets/video/expertise_02.mp4"
                    mainText1="Redefining User Experience:"
                    mainText2="by blending visual strategy, storytelling, and cutting-edge technology, we elevate your digital presence, offering seamless, efficient, and delightful user experiences. Our approach centers on deeply understanding and innovating user interactions online."
                    expertiseTableData={expertiseTableData2}
                    expertiseData={productListData}
                />
            </div>
            <MainBorder />
        </div>
    )
}

export default ProductCompo;