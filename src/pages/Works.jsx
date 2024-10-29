import React from "react";
import { Link } from 'react-router-dom';
import { Selection, Divider } from "../components";
import { worksData } from "../data/selections";

const WorksCompo = () => {
    return (
        <div className="relative">
            <div className="bg-[url('assets/img/home/works_bg.png')] bg-no-repeat bg-cover w-full px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px]">
                <div className="bottom-0 top-0 md:top-2 lg:top-3 xl:top-0 w-full border-x-[1px] xl:border-none border-white sm:py-0">
                    <div className="flex text-white">
                        <Divider title="Our work" />
                    </div>
                    <Selection selectionsData={worksData} />
                    <div className="flex text-white px-[9px] md:px-[14px] lg:px-[60px] xl:px-[80px] 2xl:px-[288px] items-center pt-8 pb-16 2xl:pb-[4vw] 2xl:pt-[2vw]">
                        <div className="hover:bg-[#674480] flex transition-all duration-300 ease-in-out items-center hover:rounded-md px-2 xl:px-3 3xl:px-[0.5vw]">
                            <p className="font-Helvetica font-normal text-[12px] sm:text-xs md:text-[14px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.95vw] xl:my-3 2xl:my-[1vw] px-2 py-2">
                                <Link to="/works">MORE WORKS</Link>
                            </p>
                            <svg
                                className="ml-1 xl:ml-3 w-[15px] h-[15px] sm:w-[15px] sm:h-[15px] md:w-[15px] md:h-[15px] lg:w-[15px] lg:h-[15px] xl:w-[15px] xl:h-[15px] 2xl:w-[18px] 2xl:h-[18px] 3xl:w-[1.1vw] 3xl:h-[1.1vw]"
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