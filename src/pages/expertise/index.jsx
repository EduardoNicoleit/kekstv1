import React from "react";
import ExpertiseImg from '../../assets/img/home/expertise.png';
import Navbar from "../Navbar";
import { expertiseData3 } from '../../data/selections';
import { ServicesTable, Contact } from "../../components";
import ExpertiseTable from "./ExpertiseTable";
import Footer from './Footer';

const ExpertiseCompo = () => {
    return (
        <div className="">
            <div className="relative text-white">
                <img src={ExpertiseImg} alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col">
                    <Navbar />
                    <div className="font-Helvetica text-[90px] font-bold px-[308px] mt-auto py-20">
                        DIGITAL EXPERIENCE & <br />INNOVATION
                    </div>
                    <div className="border-y-[1px] border-white">
                        <ServicesTable serviceData={expertiseData3} />
                    </div>
                </div>
            </div>
            <p className="px-[358px] font-Helvetica font-bold text-[50px] py-[74px] text-white">
                <span className="text-[#9F81BF]">Crafting narratives to engage and inspire in an age where stories define brands and shape opinions,</span> we step forward as a guide in the world of creative communication. From the inception of an idea to its grand realization, our journey is about making narratives resonate.
            </p>
            <ExpertiseTable />
            <Footer />
            <Contact />
        </div>
    )
}

export default ExpertiseCompo;