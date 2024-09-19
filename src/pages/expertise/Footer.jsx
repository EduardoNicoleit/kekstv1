import React from "react";
import { Link } from 'react-router-dom';

const ExpertiseFooter = () => {
    return (
        <div className="border-y-[1px] py-20 font-Helvetica text-4xl items-center px-[30%]">
            <div className="text-white flex items-center py-5">
                <div>
                    <Link to="/">Creative Communication & Strategy</Link>
                </div>
                <div>
                    <svg className="ml-3 pt-[2px]" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow_outward">
                            <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="text-white flex items-center py-5">
                <div>
                    <Link to="/">DIGITAL EXPERIENCE & INNOVATION</Link>
                </div>
                <div>
                    <svg className="ml-3 pt-[2px]" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow_outward">
                            <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="text-white flex items-center py-5">
                <div>
                    <Link to="/">DATA VISUALIZATION</Link>
                </div>
                <div>
                    <svg className="ml-3 pt-[2px]" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow_outward">
                            <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ExpertiseFooter;