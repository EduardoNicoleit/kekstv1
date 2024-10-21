import React from "react";
import { Link } from 'react-router-dom';

const ReadMore = (props) => {
    return (
        <div className="font-Helvetica">
            <div className="uppercase font-normal text-[12px] sm:text-xs md:text-[14px] xl:text-[16px] 2xl:text-[1vw] md:pr-6 flex py-3 sm:py-1.5 px-0 font-Helvetica cursor-pointer xl:hover:rounded-md xl:hover:bg-[#674480] items-center xl:hover:font-bold duration-200 ease-in-out w-[120px] sm:w-[140px] md:w-[150px] xl:w-[180px] 2xl:w-[12vw] 2xl:max-w-[12vw] 2xl:h-[3vw] 2xl:max-h-[3vw] xl:text-center hover:scale-110">
                <p className="flex-1">
                    <Link to={props.linkUrl} className="transition duration-300 ease-in-out">READ MORE</Link>
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
    )
}

export default ReadMore;
