import React from "react";
import { Link } from 'react-router-dom';

const ReadMore = (props) => {
    return (
        <div className="">
            <div className="uppercase hover-target font-normal text-[13px] sm:text-[15px] flex py-3 sm:py-1.5 px-5 sm:px-3 hover:scale-60 xl:hover:scale-60 font-Arial cursor-pointer hover:bg-[#7a6b87] hover:font-small items-center transition-all hover:text-base duration-400 ease-in-out w-[170px] xl:w-full">
                <p className="">
                    <Link to={props.linkUrl}>READ MORE</Link>
                </p>
                <svg className="ml-1 xl:ml-3 pt-[2px] hover:w-3 hover:h-3 xl:hover:w-6 xl:hover:h-6 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow_outward">
                        <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                    </g>
                </svg>
            </div>

        </div>
    )
}

export default ReadMore;