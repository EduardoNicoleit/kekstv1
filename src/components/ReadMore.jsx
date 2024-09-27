import React from "react";
import { Link } from 'react-router-dom';

const ReadMore = (props) => {
    return (
        <div className="hover-target font-normal text-[13px] sm:text-[15px] flex py-3 sm:py-1.5 px-5 sm:px-3 hover:hover:scale-125 font-Arial cursor-pointer hover:bg-[#7a6b87] hover:font-bold items-center transition-all hover:text-base duration-300 ease-in-out">
            <p className="">
                <Link to={props.linkUrl}>READ MORE</Link>
            </p>
            <svg className="ml-3 pt-[2px] hover:w-7 hover:h-7 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="arrow_outward">
                    <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                </g>
            </svg>
        </div>
    )
}

export default ReadMore;