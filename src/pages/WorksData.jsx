import React from "react";
import Navbar from "./Navbar";
import { Selection, Contact } from "../components";
import { selectionsData } from "../data/selections";
import WorksDataImg from '../assets/img/home/works_data.png';

const WorksDataCompo = () => {
    return (
        <div>
            <div className="relative text-white">
                <img src={WorksDataImg} alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col">
                    <Navbar />
                    <div className="font-Helvetica text-[90px] font-bold px-[308px] mt-auto leading-none">
                        A selection <br />of work
                    </div>
                </div>
            </div>
            <div className="h-[1px] mx-12 bg-white my-10"></div>
            <div>
                <p className="px-[358px] font-Helvetica font-bold text-[30px] py-[74px] text-white">
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