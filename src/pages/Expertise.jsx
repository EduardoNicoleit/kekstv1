import React from "react";
import { ExpertiseSection } from "../components";

const Expertise = () => {
    return (
        <div className="">
            <div className="bg-[url('assets/img/home/expertise_bg.png')] bg-inherit bg-no-repeat bg-cover w-full px-[8px] sm:px-6 md:px-[45px] lg:px-[45px] xl:px-[50px]">
                <div className="bottom-0 top-0 w-full border-x-[1px] xl:border-none border-white py-6 sm:py-8 xl:py-[50px]">
                    <div className="flex text-white">
                        <div className="flex w-full items-center">
                            <div className="h-5 md:h-4 xl:h-[30px] w-9 sm:w-6 md:w-[86px] xl:w-80 hidden sm:flex sm:border-r-[1px] relative items-center">
                                <div className="h-[1px] bg-white hidden sm:block w-[100px] xl:w-[300px]"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="font-bold text-[32px] sm:text-2xl md:text-3xl lg:text-[45px] px-2 font-Arial">
                                    Expertise
                                </div>
                                <div className="h-[1px] flex-1 bg-white">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-0 md:w-[94px] xl:w-[308px]"></div>
                        <div className="flex-1 sm:px-0">
                            <ExpertiseSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise;