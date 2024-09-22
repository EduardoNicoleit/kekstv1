import React from "react";
import { Link } from 'react-router-dom';
import { Selection, Divider } from "../components";
import { worksData } from "../data/selections";
import workImg from '../assets/img/home/works_bg.png';

const WorksCompo = () => {
    return (
        <div className="relative">
            <img src={workImg} alt="" className="w-full h-full" />
            <div className="absolute bottom-0 sm:top-1 md:top-2 lg:top-4 px-12">
                <div className="flex text-white py-0 2xl:py-4">
                    <div className="flex w-full items-center">
                        <div className="h-2 md:h-4 xl:h-[30px] w-40 sm:w-40 md:w-48 lg:w-64 xl:w-80 border-r-[1px] relative flex items-center">
                            <div className="h-[1px] bg-white w-[300px]"></div>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-[45px] px-2 font-Arial">
                                Our work
                            </div>
                            <div className="h-[1px] flex-1 bg-white">
                            </div>
                        </div>
                    </div>
                </div>
                <Selection selectionsData={worksData} />
                <div className="flex text-white px-8 xl:px-[308px] items-center py-1 sm:py-0 md:py-0 2xl:py-0 3xl:py-8">
                    <div className="hover:bg-[#7a6b87] flex transition-all duration-300 ease-in-out items-center">
                        <p className="font-Arial font-bold text-sm sm:text-sm md:text-lg xl:text-2xl py-0 2xl:py-5 pl-5 pr-2 box-border">
                            <Link to="/works">MORE WORKS</Link>
                        </p>
                        <svg
                            className="pt-[2px] mr-3 sm:w-5 md:w-8 sm:h-5 md:h-8 transition-all duration-300"
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
                <div className="h-[1px] bg-white w-full my-1 xl:my-12 3xl:my-16"></div>
            </div>
        </div>
    )
}

export default WorksCompo;