import React from "react";
import { Divider, ExpertiseSection } from "../components";
import expertiseImg from '../assets/img/home/expertise_bg.png';

const Expertise = () => {
    return (
        <div className="relative mb-20 z-10">
            <img src={expertiseImg} alt="" className="w-full h-auto" />
            <div className="absolute bottom-0 top-4 px-4 sm:px-12 w-full">
                <Divider title="Expertise" />
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[308px] mb-4 md:mb-0"></div>
                    <div className="flex-1">
                        <ExpertiseSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise;