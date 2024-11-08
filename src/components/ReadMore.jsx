import React from "react";
import { Link } from 'react-router-dom';

const ReadMore = (props) => {
    return (
        <div className="font-Helvetica group hover:text-[#7a6b87] xl:hover:bg-[#674480] xl:hover:text-white xl:hover:rounded-lg">
            <div className="items-center uppercase font-normal px-0 xl:px-2 text-[12px] sm:text-xs md:text-[14px] xl:text-[14px] 2xl:text-[12px] 3xl:text-[0.8vw] flex py-3 sm:py-3 md:py-3 font-Helvetica cursor-pointer 2xl:h-[2.6vw] 2xl:max-h-[3vw] xl:text-center">
                <p className="flex-0">
                    <Link to={props.linkUrl} className="transition duration-300 ease-in-out pr-2">READ MORE</Link>
                </p>
                <svg
                    className="ml-0 xl:ml-3 w-[15px] h-[15px] sm:w-[15px] sm:h-[15px] md:w-[15px] md:h-[15px] lg:w-[15px] lg:h-[15px] xl:w-[15px] xl:h-[15px] 2xl:w-[18px] 2xl:h-[18px] 3xl:w-[1.1vw] 3xl:h-[1.1vw] fill-current transition-colors duration-300"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="arrow_outward">
                        <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default ReadMore;
