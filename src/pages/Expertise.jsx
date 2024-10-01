import React from "react";
import { ExpertiseSection } from "../components";

const Expertise = () => {
    return (
        <div className="">
            <div className="bg-[url('assets/img/home/expertise_bg.png')] bg-inherit bg-no-repeat bg-cover w-full px-2 lg:px-4 xl:px-[25px] 2xl:px-[50px]">
                <div className="bottom-0 top-0 w-full border-x-[1px] xl:border-none border-white py-6 sm:py-8 xl:py-[50px]">
                    <div className="flex text-white">
                        <div className="flex w-full items-center">
                            <div className="h-5 md:h-4 xl:h-[30px] md:w-[26px] lg:w-[51px] xl:w-[92px] 2xl:w-80 hidden md:flex border-r-0 xl:border-r-[1px] relative items-center">
                                <div className="h-[1px] bg-white hidden sm:block md:w-[34px] lg:w-[59px] xl:w-[300px]"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="font-bold text-[32px] lg:text-[45px] px-[9px] font-Arial">
                                    Expertise
                                </div>
                                <div className="xl:block h-[1px] flex-1 bg-white">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-0 md:w-[34px] lg:w-[59px] xl:w-[100px] 2xl:w-[308px]"></div>
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