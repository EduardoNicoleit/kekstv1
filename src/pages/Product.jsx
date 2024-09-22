import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from './expertise/Footer';
import { ServicesTable, Contact } from "../components";
import { expertiseData4 } from '../data/selections';
import ProductImg from '../assets/img/home/product_bg.png';

const ProductCompo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="relative text-white">
                <div className="sticky top-0 z-50">
                    <Navbar />
                </div>
                <img src={ProductImg} alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col">
                    <div className="font-Helvetica sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[90px] font-bold lg:px-[280px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        Creative <br />Communication & Strategy
                    </div>
                    <div className="border-y-[1px] border-white">
                        <ServicesTable serviceData={expertiseData4} />
                    </div>
                </div>
            </div>
            <p className="sm:px-12 md:px-12 lg:px-12 xl:px-[358px] font-Helvetica font-bold text-16px sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px] 2xl:text-[42px] 3xl:text-[50px] sm:py-10 md:py-[74px] text-white">
                <span className="text-[#9F81BF]">Redefining User Experience:</span> by blending visual strategy, storytelling, and cutting-edge technology, we elevate your digital presence, offering seamless, efficient, and delightful user experiences. Our approach centers on deeply understanding and innovating user interactions online.
            </p>
            <div className="px-12 text-white font-Helvetica">
                <div className="border-y-[1px] border-white">
                    <div className="flex">
                        <div className="lg:w-1 xl:w-[365px] border-white">
                        </div>
                        <div className="w-full ">
                            <div className="lg:h-20 xl:h-60 border-0 xl:border-l-[1px] px-[250px] border-white"></div>
                            <div className="h-[604px] border-t-[1px] border-x-[1px] sm:px-20 md:px-40 lg:px-[250px] relative">
                                <div className="text-[45px] pt-28">
                                    User-Centric<br />Design
                                </div>
                                <div className="sm:text-xl md:text-xl lg:text-3xl xl:text-[26px] 2xl:text-[32px] py-10">
                                    By focusing on the user, we ensure every digital interaction is engaging, intuitive, and impactful, catering to your audience's needs and expectations.
                                </div>
                                <div className="text-[#9F81BF] w-16 h-16 top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                    01
                                </div>
                                <div className="sm:w-4 md:w-24 lg:w-48 h-[1px] top-36 left-10 absolute bottom-0 bg-white"></div>
                            </div>
                            <div className="h-[604px] border-t-[1px] border-x-[1px] sm:px-20 md:px-40 lg:px-[250px] relative">
                                <div className="text-[45px] pt-28">
                                    Data-Driven<br />Insights
                                </div>
                                <div className="sm:text-xl md:text-xl lg:text-3xl xl:text-[26px] 2xl:text-[32px] py-10">
                                    Our strategy integrates both creativity and analytics, using user behavior and market research to inform design decisions, optimizing user experience across all platforms.
                                </div>
                                <div className="text-[#9F81BF] w-16 h-16 top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                    02
                                </div>
                                <div className="sm:w-4 md:w-24 lg:w-48 h-[1px] top-36 left-10 absolute bottom-0 bg-white"></div>
                            </div>
                            <div className="h-[604px] border-t-[1px] border-x-[1px] sm:px-20 md:px-40 lg:px-[250px] relative">
                                <div className="text-[45px] pt-28">
                                    Forward-Thinking<br />Design
                                </div>
                                <div className="sm:text-xl md:text-xl lg:text-3xl xl:text-[26px] 2xl:text-[32px] py-10">
                                    By focusing on the user, we ensure every digital interaction is engaging, intuitive, and impactful, catering to your audience's needs and expectations.
                                </div>
                                <div className="text-[#9F81BF] w-16 h-16 top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                    03
                                </div>
                                <div className="sm:w-4 md:w-24 lg:w-48 h-[1px] top-36 left-10 absolute bottom-0 bg-white"></div>
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

export default ProductCompo;