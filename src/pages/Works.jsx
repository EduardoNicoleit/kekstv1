import React from "react";
import { Link } from 'react-router-dom';
import { Selection, Divider } from "../components";
import { worksData } from "../data/selections";
import workImg from '../assets/img/home/works_bg.png';

const WorksCompo = () => {
    return (
        <div className="relative">
            <img src={workImg} alt="" className="w-full h-full" />
            <div className="absolute bottom-0 top-4 px-12">
                <Divider title="Our work" />
                <Selection selectionsData={worksData} />
                <div className="flex text-white px-[308px] py-10">
                    <p className="font-Arial font-bold text-2xl">
                        <Link to="/works">MORE WORKS</Link>
                    </p>
                    <svg className="ml-3 pt-[2px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow_outward">
                            <path id="Vector" d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" fill="white" />
                        </g>
                    </svg>
                </div>
                <div className="h-[1px] bg-white w-full my-10"></div>
            </div>
        </div>
    )
}

export default WorksCompo;