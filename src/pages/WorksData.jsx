import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Selection, Contact } from "../components";
import { selectionsData } from "../data/selections";
import WorksDataImg from '../assets/img/home/works_data.png';

const WorksDataCompo = ({ isSticky, element }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar sticky={isSticky} />
            <div className="relative text-white">
                <img src={WorksDataImg} alt="" className="w-full" ref={element} />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col">
                    <div className="font-Helvetica sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[90px] font-bold mx-auto lg:px-[280px] xl:px-[308px] mt-auto leading-none">
                        A selection <br />of work
                    </div>
                </div>
            </div>
            <div className="h-[1px] mx-12 bg-white my-10"></div>
            <div>
                <p className="sm:px-12 md:px-12 lg:px-12 xl:px-[358px] font-Helvetica font-bold text-16px sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px] 2xl:text-[42px] 3xl:text-[50px] sm:py-6 md:py-8 text-white">
                    Unlocking new narratives in a digital age. The digital landscape is vast, constantly evolving, and ever-challenging. But with challenges come opportunities. Through Strategic Visual Communications, Product & Platform Creation, and Data Visualization, we empower brands to seize these opportunities. With a blend of creativity, technology, and strategy, we're not just designing for the present but envisioning the future.
                </p>
            </div>
            <div className="pt-12 px-12">
                <Selection selectionsData={selectionsData} />
            </div>
            <Contact />
        </div>
    )
}

export default WorksDataCompo;