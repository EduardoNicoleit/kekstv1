import React from "react";
import { Link } from 'react-router-dom';

const ExpertiseFooter = () => {
    return (
        <div className="border-y-[1px] flex flex-col sm:py-3 md:py-10 lg:py-12 2xl:py-16 3xl:py-20 font-Helvetica sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
            <div className="mx-auto">
                <div className="text-white flex sm:py-2 md:py-4 lg:py-5 hover:text-[#7a6b87] group items-center">
                    <div>
                        <Link to="/expertise">Creative Communication & Strategy</Link>
                    </div>
                    <div>
                        <svg
                            className="ml-3 pt-[2px] sm:w-6 md:w-7 lg:w-9 xl:w-10 
                            sm:h-6 md:h-7 lg:h-8 xl:h-9  fill-current text-white group-hover:text-[#7a6b87]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g id="arrow_outward">
                                <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="text-white flex sm:py-2 md:py-4 lg:py-5 hover:text-[#7a6b87] group items-center">
                    <div>
                        <Link to="/product">DIGITAL EXPERIENCE & INNOVATION</Link>
                    </div>
                    <div>
                        <svg
                            className="ml-3 pt-[2px] 
                            sm:w-6 md:w-7 lg:w-9 xl:w-10 
                            sm:h-6 md:h-7 lg:h-8 xl:h-9 
                            fill-current text-white group-hover:text-[#7a6b87]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g id="arrow_outward">
                                <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="text-white flex sm:py-2 md:py-4 lg:py-5 hover:text-[#7a6b87] group items-center">
                    <div>
                        <Link to="/expertise/datas">DATA VISUALIZATION</Link>
                    </div>
                    <div>
                        <svg
                            className="ml-3 pt-[2px] sm:w-6 md:w-7 lg:w-9 xl:w-10 
                            sm:h-6 md:h-7 lg:h-8 xl:h-9  fill-current text-white group-hover:text-[#7a6b87]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g id="arrow_outward">
                                <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertiseFooter;