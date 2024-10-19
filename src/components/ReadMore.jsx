import React from "react";
import { Link } from 'react-router-dom';

const ReadMore = (props) => {
    return (
        <div className="">
            <div className="uppercase font-normal text-[12px] sm:text-xs md:text-sm xl:text-base md:pr-6 flex py-3 sm:py-1.5 px-0 font-Helvetica cursor-pointer hover:rounded-md hover:bg-[#674480] items-center hover:font-bold duration-200 ease-in-out w-[150px] xl:w-full">
                <p className="">
                    <Link to={props.linkUrl} className="transition duration-300 ease-in-out">READ MORE</Link>
                </p>
                <svg className="ml-1 xl:ml-3 pt-[2px] pb-[2px] w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow_outward">
                        <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default ReadMore;
