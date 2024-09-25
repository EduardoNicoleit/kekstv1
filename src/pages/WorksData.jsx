import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Selection, Contact } from "../components";
import { selectionsData } from "../data/selections";
import WorksDataImg from '../assets/img/home/works_data.png';

const WorksDataCompo = ({ isSticky, element }) => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return (
        <div className="relative">
            <Navbar sticky={isSticky} />
            <div className="relative text-white welcome">
                <img src={WorksDataImg} alt="" className="w-full" ref={element} />
            </div>
            <div className="w-full text-white">
                <div className="">
                    <div className="font-Arial font-bold 
                    2xl:text-[120px]
                    2xl:pt-[171px]
                    2xl:pb-[50px]
                    2xl:pl-[358px]
                    ">
                        A selection of work
                    </div>
                </div>
            </div>
            <div className="2xl:px-[358px]">
                <div className="text-white">
                    <p className="font-Helvetica font-normal
                    2xl:text-[37px]
                    2xl:py-[74px]
                    ">
                        Unlocking new narratives in a digital age. The digital landscape is vast, constantly evolving, and ever-challenging. But with challenges come opportunities. Through Strategic Visual Communications, Product & Platform Creation, and Data Visualization, we empower brands to seize these opportunities. With a blend of creativity, technology, and strategy, we're not just designing for the present but envisioning the future.
                    </p>
                </div>
            </div>
            <div className="pt-12 px-[50px]">
                <Selection selectionsData={selectionsData} />
            </div>
            <Contact />
            <div className="absolute w-[calc(100vw-90px)] h-full border border-solid border-white xl:top-9 2xl:top-[50px] left-1/2 -translate-x-1/2"></div>
        </div>
    )
}

export default WorksDataCompo;