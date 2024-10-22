import React from "react";
import { Link } from 'react-router-dom';
import { Selection, Divider } from "../components";
import { worksData } from "../data/selections";

const WorksCompo = () => {
    return (
        <div className="relative">
            <div className="bg-[url('assets/img/home/works_bg.png')] bg-no-repeat bg-cover w-full px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                <div className="bottom-0 top-0 md:top-2 lg:top-3 xl:top-0 w-full border-x-[1px] xl:border-none border-white sm:py-0">
                    <div className="flex text-white 3xl:pb-[2.5vw]">
                        <Divider title="Our work" />
                    </div>
                    <Selection selectionsData={worksData} />
                    <div className="flex text-white px-[9px] md:px-[14px] lg:px-[60px] xl:px-[80px] 2xl:px-[288px] items-center py-8 2xl:pb-[4vw] 2xl:pt-[3vw]">
                        <div className="hover:bg-[#674480] flex transition-all duration-300 ease-in-out items-center hover:rounded-md">
                            <p className="font-Helvetica font-bold text-sm sm:text-sm md:text-lg xl:text-2xl 2xl:text-[1.2vw] xl:my-4 2xl:my-[1.5vw] pl-5 pr-2">
                                <Link to="/works">MORE WORKS</Link>
                            </p>
                            <svg
                                className="ml-1 xl:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-[2vw] 2xl:h-[2vw]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="arrow_outward">
                                    <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
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