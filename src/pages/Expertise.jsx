import React from "react";
import { ExpertiseSection } from "../components";
import expertiseImg from '../assets/img/home/expertise_bg.png'

const Expertise = () => {
    return (
        <div>
            <div className="relative">
                <img src={expertiseImg} alt="" className="w-full h-full" />
                <div className="absolute bottom-0 top-0 md:top-2 lg:top-3 xl:top-4 px-12 w-full">
                    <div className="flex text-white py-0 2xl:py-4 3xl:py-8">
                        <div className="flex w-full items-center">
                            <div className="h-2 md:h-4 xl:h-[30px] w-40 sm:w-40 md:w-48 lg:w-64 xl:w-80 border-r-[1px] relative flex items-center">
                                <div className="h-[1px] bg-white w-[300px]"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-[45px] px-2 font-Arial">
                                    Expertise
                                </div>
                                <div className="h-[1px] flex-1 bg-white">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-0 xl:w-[308px]"></div>
                        <div className="flex-1">
                            <ExpertiseSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise;