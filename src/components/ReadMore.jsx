import React from "react";
import { Link } from 'react-router-dom';

const ReadMore = ({ linkUrl }) => {
    return (
        <div className="font-normal text-sm sm:text-base md:text-[15px] flex items-center font-Arial cursor-pointer">
            <p>
                <Link to={linkUrl}>Read more</Link>
            </p>
            <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="arrow_outward">
                    <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                </g>
            </svg>
        </div>
    )
}

export default ReadMore;