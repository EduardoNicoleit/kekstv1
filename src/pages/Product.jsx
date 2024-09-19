import React from "react";
import Navbar from "./Navbar";
import Footer from './expertise/Footer';
import { ServicesTable, Contact } from "../components";
import { expertiseData4 } from '../data/selections';
import ProductImg from '../assets/img/home/product_bg.png';

const ProductCompo = () => {
    return (
        <div>
            <div className="relative text-white">
                <img src={ProductImg} alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col">
                    <Navbar />
                    <div className="font-Helvetica text-[90px] font-bold px-[308px] mt-auto py-20">
                        Creative <br />Communication & Strategy
                    </div>
                    <div className="border-y-[1px] border-white">
                        <ServicesTable serviceData={expertiseData4} />
                    </div>
                </div>
            </div>
            <p className="px-[358px] font-Helvetica font-bold text-[50px] py-[74px] text-white">
                <span className="text-[#9F81BF]">Redefining User Experience:</span> by blending visual strategy, storytelling, and cutting-edge technology, we elevate your digital presence, offering seamless, efficient, and delightful user experiences. Our approach centers on deeply understanding and innovating user interactions online.
            </p>
            <div className="px-12 text-white font-Helvetica">
                <div className="border-y-[1px] border-white">
                    <div className="flex">
                        <div className="w-[365px] border-r-[1px] border-white">
                        </div>
                        <div className="w-full">
                            <div className="h-60"></div>
                            <div className="h-[604px] border-t-[1px] border-r-[1px] px-[250px] relative">
                                <div className="text-[45px] pt-28">
                                    User-Centric<br />Design
                                </div>
                                <div className="text-[32px] py-10">
                                    By focusing on the user, we ensure every digital interaction is engaging, intuitive, and impactful, catering to your audience's needs and expectations.
                                </div>
                                <div className="text-[#9F81BF] w-16 h-16 top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                    01
                                </div>
                                <div className="w-48 h-[1px] top-36 left-10 absolute bottom-0 bg-white"></div>
                            </div>
                            <div className="h-[604px] border-t-[1px] border-r-[1px] px-[250px] relative">
                                <div className="text-[45px] pt-28">
                                    Data-Driven<br />Insights
                                </div>
                                <div className="text-[32px] py-10">
                                    Our strategy integrates both creativity and analytics, using user behavior and market research to inform design decisions, optimizing user experience across all platforms.
                                </div>
                                <div className="text-[#9F81BF] w-16 h-16 top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                    02
                                </div>
                                <div className="w-48 h-[1px] top-36 left-10 absolute bottom-0 bg-white"></div>
                            </div>
                            <div className="h-[604px] border-t-[1px] border-r-[1px] px-[250px] relative">
                                <div className="text-[45px] pt-28">
                                    Forward-Thinking<br />Design
                                </div>
                                <div className="text-[32px] py-10">
                                    By focusing on the user, we ensure every digital interaction is engaging, intuitive, and impactful, catering to your audience's needs and expectations.
                                </div>
                                <div className="text-[#9F81BF] w-16 h-16 top-[120px] left-[-32px] font-Helvetica text-[34px] absolute bottom-0 bg-[#210837] text-center">
                                    03
                                </div>
                                <div className="w-48 h-[1px] top-36 left-10 absolute bottom-0 bg-white"></div>
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