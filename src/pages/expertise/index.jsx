import React, { useEffect } from "react";
import ExpertiseImg from '../../assets/img/home/expertise.png';
import Navbar from "../Navbar";
import { expertiseData3 } from '../../data/selections';
import { ServicesTable, Contact } from "../../components";
import ExpertiseTable from "./ExpertiseTable";
import Footer from './Footer';

const ExpertiseCompo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="relative text-white">
                <img src={ExpertiseImg} alt="" className="w-full" />
                <div className="absolute bottom-0 top-4 w-full px-12 flex flex-col">

                    <div className="font-Helvetica sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] 3xl:text-[90px] font-bold lg:px-[280px] xl:px-[308px] mt-auto sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 3xl:py-20">
                        DIGITAL EXPERIENCE & <br />INNOVATION
                    </div>
                    <div className="border-y-[1px] border-white">
                        <ServicesTable serviceData={expertiseData3} />
                    </div>
                </div>
            </div>
            <p className="sm:px-12 md:px-12 lg:px-[358px] font-Helvetica font-bold text-16px sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px] 2xl:text-[42px] 3xl:text-[50px] sm:py-10 md:py-[74px] text-white">
                <span className="text-[#9F81BF]">Crafting narratives to engage and inspire in an age where stories define brands and shape opinions,</span> we step forward as a guide in the world of creative communication. From the inception of an idea to its grand realization, our journey is about making narratives resonate.
            </p>
            <ExpertiseTable />
            <Footer />
            <Contact />
        </div>
    )
}

export default ExpertiseCompo;