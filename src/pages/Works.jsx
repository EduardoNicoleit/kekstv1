import React from "react";
import { Link } from 'react-router-dom';
import { Selection } from "../components";
import { worksData } from "../data/selections";

const WorksCompo = () => {
    return (
        <div className="relative">
            <div className="bg-[url('assets/img/home/works_bg.png')] bg-contain bg-inherit w-full px-[8px] sm:px-6 md:px-[45px] lg:px-[45px] xl:px-[50px]">
                <div className="bottom-0 top-0 md:top-2 lg:top-3 xl:top-0 w-full border-x-[1px] xl:border-none border-white py-6 sm:py-8 xl:py-[50px]">
                    <div className="flex text-white pb-[50px]">
                        <div className="flex w-full items-center">
                            <div className="h-5 md:h-4 xl:h-[30px] w-9 hidden sm:flex sm:w-6 md:w-[86px] xl:w-80 border-r-[1px] relative items-center">
                                <div className="h-[1px] bg-white w-[100px] xl:w-[300px]"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="font-bold text-[32px] sm:text-2xl md:text-3xl lg:text-[45px] px-2 font-Arial">
                                    Our work
                                </div>
                                <div className="h-[1px] flex-1 bg-white">
                                </div>
                            </div>
                        </div>
                    </div>
                    <Selection selectionsData={worksData} />
                    <div className="flex text-white px-0 sm:px-8 md:px-[74px] xl:px-[308px] items-center py-8">
                        <div className="hover:bg-[#7a6b87] flex transition-all duration-300 ease-in-out items-center">
                            <p className="font-Arial font-bold text-sm sm:text-sm md:text-lg xl:text-2xl py-0 2xl:py-12 pl-5 pr-2 box-border">
                                <Link to="/works">MORE WORKS</Link>
                            </p>
                            <svg
                                className="pt-[2px] mr-3 w-5 h-5 sm:w-5 md:w-8 sm:h-5 md:h-8 transition-all duration-300"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="arrow_outward">
                                    <path
                                        id="Vector"
                                        d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z"
                                        fill="white"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="h-[1px] bg-white w-full"></div>
                </div>
            </div>
        </div>
    )
}

export default WorksCompo;