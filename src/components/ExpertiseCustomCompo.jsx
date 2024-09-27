import React from "react";
import Navbar from "../pages/Navbar";
import { Contact } from "../components";
import Footer from "../pages/expertise/Footer";

const ExpertiseCustomCompo = ({ isSticky, element, title1, title2, img, mainText1, mainText2, expertiseTableData, expertiseData }) => {
    return (
        <div>
            <div>
                <div>
                    <Navbar sticky={isSticky} />
                    <div className="relative text-white welcome ">
                        <img src={img} alt="" className="w-full" ref={element} />
                        <div className="w-full absolute bottom-0 px-6">
                            <div className="flex flex-col">
                                <div className="font-Helvetica text-[30px] py-[56px] font-bold">
                                    {title1} <br /> {title2}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="py-[42px] font-Helvetica text-white">
                            <div className="pl-6">
                                <div className="text-xs font-normal pb-2">Ours Services</div>
                                <div className="">
                                    {expertiseData.map((data, index) => (
                                        <div key={index} className="border-b-[1px] text-[13px] font-normal flex flex-row border-white items-center py-3">
                                            <div className="h-1 w-1 bg-white rounded-lg mr-2">
                                            </div>
                                            <div>
                                                {data}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="font-Helvetica font-bold text-[20px] text-white leading-normal py-10 pr-4">
                                    <span className="text-[#9F81BF] pr-1">{mainText1}</span>{mainText2}
                                </p>
                            </div>
                            <div className="border-t-[1px] border-white">
                                {expertiseTableData.map((data) => (
                                    <div key={data.id} className="font-Helvetica py-6 pl-6">
                                        <div className="flex flex-row items-center">
                                            <div className="font-normal text-[34px] text-[#9F81BF] pr-2">
                                                {data.number}
                                            </div>
                                            <div className="h-[1px] w-full bg-white"></div>
                                        </div>
                                        <div className="font-normal text-[21px] md:text-[20px] pb-4">
                                            {data.mainText1} <br /> {data.mainText2}
                                        </div>
                                        <div className="font-normal text-[18px] pr-5">
                                            {data.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="px-2">
                <Contact />
            </div>

            <div className="h-2 w-full"></div>
        </div>
    )
}

export default ExpertiseCustomCompo;