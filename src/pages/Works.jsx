import React from "react";
import { Link } from 'react-router-dom';
import { Selection, Divider } from "../components";
import { worksData } from "../data/selections";

const WorksCompo = () => {
    return (
        <div className="relative">
            <div className="bg-[url('assets/img/home/works_bg.png')] bg-no-repeat bg-cover w-full px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                <div className="bottom-0 top-0 md:top-2 lg:top-3 xl:top-0 w-full border-x-[1px] xl:border-none border-white py-6 sm:py-8 xl:py-[50px]">
                    <div className="flex text-white pb-[50px]">
                        <Divider title="Our work" />
                    </div>
                    <Selection selectionsData={worksData} />
                    <div className="flex text-white px-[9px] md:px-[14px] lg:px-[60px] xl:px-[80px] 2xl:px-[288px] items-center py-8">
                        <div className="hover:bg-[#674480] flex transition-all duration-300 ease-in-out items-center hover:rounded-md">
                            <p className="font-Helvetica font-bold text-sm sm:text-sm md:text-lg xl:text-2xl xl:my-4 2xl:my-6 pl-5 pr-2">
                                <Link to="/works">MORE WORKS</Link>
                            </p>
                            <svg
                                className="pt-[2px] mr-3 w-5 h-5 sm:w-5 md:w-6 lg:w-8 sm:h-5 md:h-6 lg:h-8 transition-all duration-300"
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
                </div>
            </div>
        </div>
    )
}

export default WorksCompo;