import React from "react";
import { Divider } from "../components";
import ManifestoImg from '../assets/img/home/manifesto.png';

const ManifestoCompo = () => {
    return (
        <div className="px-[8px] sm:px-6 md:px-[45px] xl:px-[50px] pb-0 xl:pb-12">
            <div className="border-b-[1px] bottom-0 top-0 md:top-2 pb-12 md:pb-16 lg:top-3 xl:top-0 w-full border-x-[1px] xl:border-none border-white py-6 sm:py-8 xl:py-[50px]">
                <div className="flex text-white">
                    <div className="flex w-full items-center">
                        <div className="h-5 md:h-4 xl:h-[30px] hidden sm:flex w-9 sm:w-6 md:w-[86px] xl:w-80 border-r-[1px] relative items-center">
                            <div className="h-[1px] bg-white w-[100px] xl:w-[300px]"></div>
                        </div>
                        <div className="flex items-center w-full px-3 sm:px-0">
                            <div className="font-bold text-[32px] sm:text-2xl md:text-3xl lg:text-[45px] px-2 font-Arial">
                                Our manifesto
                            </div>
                            <div className="h-[1px] flex-1 bg-white">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={ManifestoImg} alt="" className="w-full pt-[50px]" />
                </div>
            </div>
        </div>
    )
}

export default ManifestoCompo;