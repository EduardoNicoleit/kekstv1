import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ExpertiseFooter from './expertise/ExpertiseFooter';
import { ServicesTable, Footer, ExpertiseCustomCompo, MainBorder } from "../components";
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
                        <div className="flex flex-col">
                            <div className="font-Helvetica text-[30px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[5.5vw] 5xl:text-[4.5vw] font-bold sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] 2xl:pl-[308px] 3xl:pl-[15vw] mt-auto py-14 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-[6vw]">
                                Digital Experience <br /> & Innovation
                            </div>
                            <div className="uppercase hidden sm:block 2xl:hidden font-Helvetica text-base sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] py-2">
                                Our Services:
                            </div>
                            <div className="hidden sm:block border-y-[1px] xl:border-x-0 border-white">
                                <ServicesTable serviceData={expertiseData4} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] 3xl:px-[45px]">
                    <div>
                        <p className="sm:px-8 md:px-[33px] lg:px-[46px] xl:px-[154px] 2xl:px-[308px] 3xl:px-[15vw] font-Helvetica font-normal text-[17px] md:text-[28px] 2xl:text-[40px] 3xl:text-[1.8vw] sm:py-10 md:py-[74px] 2xl:py-[2.5vw] text-white leading-tight 3xl:leading-[2.5vw]">
                            <span className="text-[#9F81BF] font-bold">Redefining User Experience:</span> by blending visual strategy, storytelling, and cutting-edge technology, we elevate your digital presence, offering seamless, efficient, and delightful user experiences. Our approach centers on deeply understanding and innovating user interactions online.
                        </p>
                        <div className="text-white font-Helvetica">
                            <div className="border-t-[1px] border-white">
                                <div className="flex">
                                    <div className="hidden border-r-[1px] flex-none lg:block lg:w-[46px] xl:w-[154px] 2xl:w-[308px] ">
                                    </div>
                                    <div className="w-full">
                                        <div className="lg:h-20 xl:h-60 border-0 xl:border-l-[1px] px-[250px] border-white"></div>
                                        <div className="border-t-0 lg:border-t-[1px] sm:px-20 md:px-40 lg:px-[60px] xl:px-[260px] relative">
                                            <div className="uppercase block lg:hidden 2xl:block sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px] leading-normal 2xl:leading-[2.5vw]">
                                                <div>
                                                    User-Centric <br /> Design
                                                </div>
                                            </div>
                                            <div className="uppercase hidden lg:block 2xl:hidden sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px] leading-normal">
                                                User-Centric Design
                                            </div>
                                            <div className="leading-normal 2xl:leading-[1.6vw] text-sm sm:text-sm lg:text-lg xl:text-xl 2xl:text-[20px] 3xl:text-[1.05vw]
                                            lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                            lg:pb-12 xl:pb-[78px] 2xl:pb-[90px] 3xl:pb-[120px]
                                            lg:max-w-[800px] 3xl:max-w-[50vw]">
                                                By focusing on the user, we ensure every digital interaction is engaging, intuitive, and impactful, catering to your audience's needs and expectations.
                                            </div>
                                            <div className="text-[#9F81BF] w-16 h-16 sm:top-[95px] lg:top-[50px] xl:top-[75px] 2xl:top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                                01
                                            </div>
                                            <div className="hidden xl:block sm:w-4 md:w-24 lg:w-[180px] h-[1px] sm:top-[120px] xl:top-[100px] 2xl:top-36 left-10 absolute bottom-0 bg-white"></div>
                                        </div>
                                        <div className="border-t-0 lg:border-t-[1px] sm:px-20 md:px-40 lg:px-[60px] xl:px-[260px] relative">
                                            <div className="uppercase block lg:hidden 2xl:block sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px] leading-normal 2xl:leading-[2.5vw]">
                                                <div>
                                                    Data-Driven <br />Insights
                                                </div>
                                            </div>
                                            <div className="uppercase hidden lg:block 2xl:hidden sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px] leading-normal">
                                                Data-Driven Insights
                                            </div>
                                            <div className="leading-normal 2xl:leading-[1.6vw] text-sm sm:text-sm lg:text-lg xl:text-xl 2xl:text-[20px] 3xl:text-[1.05vw]
                                            lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                            lg:pb-12 xl:pb-[78px] 2xl:pb-[90px] 3xl:pb-[120px]
                                            lg:max-w-[800px] 3xl:max-w-[50vw]">
                                                Our strategy integrates both creativity and analytics, using user behavior and market research to inform design decisions, optimizing user experience across all platforms.
                                            </div>
                                            <div className="text-[#9F81BF] w-16 h-16 sm:top-[95px] lg:top-[50px] xl:top-[75px] 2xl:top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                                02
                                            </div>
                                            <div className="hidden xl:block sm:w-4 md:w-24 lg:w-[180px] h-[1px] sm:top-[120px] xl:top-[100px] 2xl:top-36 left-10 absolute bottom-0 bg-white"></div>
                                        </div>
                                        <div className="border-t-0 lg:border-t-[1px] sm:px-20 md:px-40 lg:px-[60px] xl:px-[260px] relative">
                                            <div className="uppercase block lg:hidden 2xl:block sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px] leading-normal 2xl:leading-[2.5vw]">
                                                <div>
                                                    Forward-Thinking <br />Design
                                                </div>
                                            </div>
                                            <div className="uppercase hidden lg:block 2xl:hidden sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.2vw] 5xl:text-[2vw] lg:pt-10 xl:pt-[82px] 2xl:pt-[90px] leading-normal">
                                                Forward-Thinking Design
                                            </div>
                                            <div className="leading-normal 2xl:leading-[1.6vw] text-sm sm:text-sm lg:text-lg xl:text-xl 2xl:text-[20px] 3xl:text-[1.05vw]
                                            lg:pt-5 xl:pt-[22px] 2xl:pt-[50px]
                                            lg:pb-12 xl:pb-[78px] 2xl:pb-[90px] 3xl:pb-[120px]
                                            lg:max-w-[800px] 3xl:max-w-[50vw]">
                                                We're dedicated to exploring new digital landscapes, we ensure our clients stay ahead in the constantly evolving digital ecosystem.
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
                        <ExpertiseFooter />
                    </div>
                </div>
                <Footer />
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
    );
}

export default ProductCompo;