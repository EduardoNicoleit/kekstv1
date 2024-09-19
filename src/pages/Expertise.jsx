import React from "react";
import { Divider, ExpertiseSection } from "../components";
import expertiseImg from '../assets/img/home/expertise_bg.png'

const Expertise = () => {
    return (
        <div>
            <div className="relative">
                <img src={expertiseImg} alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 px-12 w-full">
                    <Divider title="Expertise" />
                    <div className="flex">
                        <div className="w-[308px]"></div>
                        <div className="flex-1">
                            <ExpertiseSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise;