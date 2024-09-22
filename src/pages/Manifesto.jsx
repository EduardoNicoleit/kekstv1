import React from "react";
import { Divider } from "../components";
import ManifestoImg from '../assets/img/home/manifesto.png';

const ManifestoCompo = () => {
    return (
        <div className="p-11">
            <div className="border-b-[1px] border-white">
                <div className="flex text-white py-0 2xl:py-4">
                    <div className="flex w-full items-center">
                        <div className="h-2 md:h-4 xl:h-[30px] w-40 sm:w-40 md:w-48 lg:w-64 xl:w-80 border-r-[1px] relative flex items-center">
                            <div className="h-[1px] bg-white w-[300px]"></div>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-[45px] px-2 font-Arial">
                                Our manifesto
                            </div>
                            <div className="h-[1px] flex-1 bg-white">
                            </div>
                        </div>
                    </div>
                </div>
                <img src={ManifestoImg} alt="" className="w-full pb-10" />
            </div>
        </div>
    )
}

export default ManifestoCompo;