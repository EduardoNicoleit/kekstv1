import React from "react";
import Navbar from "../pages/Navbar";
import { Footer } from "../components";
import ExpertiseFooter from "../pages/expertise/ExpertiseFooter";

const ExpertiseCustomCompo = ({ isSticky, element, title1, title2, mainText1, mainText2, expertiseTableData, expertiseData, videoSrc }) => {
    return (
        <div>
            <div>
                <div>
                    <Navbar sticky={isSticky} />
                    <div className="relative text-white welcome h-[531px] 2xl:h-[80vh] 3xl:h-[60vh]">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            ref={element}
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                        <div className="w-full absolute bottom-0 px-6 2xl:px-[3vw]">
                            <div className="flex flex-col">
                                <div className="font-Helvetica text-[35px] 2xl:text-[2.5vw] 3xl:text-[2vw] py-[56px] 2xl:py-[4vw] font-bold">
                                    {title1} <br /> {title2}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 2xl:px-[3vw]">
                        <div className="py-[42px] 2xl:py-[3vw] font-Helvetica text-white">
                            <div className="pl-6 2xl:pl-[2vw]">
                                <div className="text-xs 2xl:text-[1.2vw] font-normal pb-2 2xl:pb-[0.5vw] uppercase">Our Services</div>
                                <div className="">
                                    {expertiseData.map((data, index) => (
                                        <div key={index} className="border-b-[1px] text-[13px] 2xl:text-[1vw] font-normal flex flex-row border-white items-center py-3 2xl:py-[1vw]">
                                            <div className="h-1 w-1 2xl:h-[0.5vw] 2xl:w-[0.5vw] bg-white rounded-lg mr-2 2xl:mr-[1vw]"></div>
                                            <div>{data}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="font-Helvetica text-[20px] 2xl:text-2xl 3xl:text-[1.2vw] text-white leading-normal py-10 2xl:py-[4vw] pr-4 2xl:pr-[3vw]">
                                    <span className="text-[#9F81BF] font-bold pr-2 2xl:pr-[1vw]">{mainText1}</span>{mainText2}
                                </p>
                            </div>
                            <div className="border-t-[1px] border-white">
                                {expertiseTableData.map((data) => (
                                    <div key={data.id} className="font-Helvetica py-6 2xl:py-[2vw] pl-6 2xl:pl-[2vw]">
                                        <div className="flex flex-row items-center">
                                            <div className="font-normal text-[30px] 2xl:text-[2vw] text-[#9F81BF] pr-2 2xl:pr-[1vw]">
                                                {data.number}
                                            </div>
                                            <div className="h-[1px] w-full bg-white"></div>
                                        </div>
                                        <div className="font-normal text-[18px] md:text-[18px] 2xl:text-[1.5vw] pb-4 2xl:pb-[1vw] uppercase">
                                            {data.mainText1} <br /> {data.mainText2}
                                        </div>
                                        <div className="font-normal text-[14px] 2xl:text-[1.3vw] pr-5 2xl:pr-[3vw]">
                                            {data.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="px-2 2xl:px-[3vw]">
                        <ExpertiseFooter />
                    </div>
                </div>
            </div>
            <div className="px-2 2xl:px-[3vw]">
                <Footer />
            </div>

            <div className="h-2 w-full"></div>
        </div>
    );
}

export default ExpertiseCustomCompo;
