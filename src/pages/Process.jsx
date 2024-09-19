import React, { useState } from "react";
import { Divider } from "../components";
import wavesImg from "../assets/img/home/Waves.png";
import CloseImg from "../assets/img/icons/delete.png";
import AddImg from "../assets/img/icons/remove.png";
import ProcessImg from '../assets/img/home/process_bg.png';

const ProcessCompo = () => {

    const data = [
        {
            title1: "1. DISCOVER & ",
            title2: "DEFINE",
            mainContent: "UNDERSTANDING THE TASK AT HAND",
            subContent1: "Engage with stakeholders to gather initial requirements.",
            subContent2: "Conduct market research to understand the landscape and target audience.",
            subContent3: "Define clear objectives and deliverables based on the identified needs."
        },
        {
            title1: "2. STRATEGY",
            title2: "DEVELOPMENT",
            mainContent: "CHARTING A COURSE FOR SUCCESS",
            subContent1: "Analyze the insights gained from the discovery phase.",
            subContent2: "Set specific, measurable, achievable, relevant, and time - bound(SMART) goals.",
            subContent3: "Develop a roadmap that outlines the steps to be taken, considering resources, timeframes, and potential risks."
        },
        {
            title1: "3. CONCEPTUALIZATION",
            title2: "& CREATION",
            mainContent: "BRINGING IDEAS TO LIFE",
            subContent1: "Brainstorm various approaches and solutions.",
            subContent2: "Develop prototypes or mockups to visualize concepts.",
            subContent3: "Review and refine ideas based on feedback and testing results."
        },
        {
            title1: "4. PRODUCTION",
            title2: "& EXECUTION",
            mainContent: "TRANSFORMING CONCEPTS INTO REALITIES",
            subContent1: "Finalize the design and prepare assets for production.",
            subContent2: "Oversee and manage the production process to ensure quality and consistency.",
            subContent3: "Launch the final product, solution, or campaign, and monitor its performance and reception."
        }
    ]
    const [processState, setProcessState] = useState(1);
    const [processData, setProcessData] = useState({
        title1: "1. DISCOVER & ",
        title2: "DEFINE",
        mainContent: "UNDERSTANDING THE TASK AT HAND",
        subContent1: "Engage with stakeholders to gather initial requirements.",
        subContent2: "Conduct market research to understand the landscape and target audience.",
        subContent3: "Define clear objectives and deliverables based on the identified needs."
    })

    const changeProcessState = (e, val) => {
        setProcessState(val)
        setProcessData(data[val - 1])
    }
    return (
        <div className="relative">
            <img src={ProcessImg} alt="" className="w-full" />
            <div className="text-white font-Arial px-11 absolute bottom-0 top-10">
                <Divider title="Our creative thinking process" />
                <div className="font-normal text-[36px] pl-[308px] pr-[250px] font-Arial leading-none">
                    We specialize on amplifying creativity in brands, operations, and communications.
                    We are driven by the conviction that creativity can revolutionize how messages and reputations are perceived and stories are told. We aim to create comprehensive,multi-channel strategies that truly connect with audiences, creating impactful connections and memorable experiences.
                </div>
                <div className="flex">
                    <div className="w-9"></div>
                    <div className="flex-1">
                        <div className="py-24">
                            <div className="text-white text-lg relative flex items-center justify-center w-fit m-auto font-Arial">
                                <img src={wavesImg} alt="" className="absolute left-[141px] w-[calc(100%-282px)] bottom-[141px] translate-y-1/2" />
                                <div className="w-[calc(100vw-100px)] h-[1px] bg-white absolute left-1/2 bottom-[141px] -translate-x-1/2"></div>
                                <div className="flex gap-[59px]">
                                    <div className='flex-none flex items-center flex-col'>
                                        <div className="pb-10">
                                            DISCOVER <br /> & DEFINE
                                        </div>
                                        <div className={`flex-none h-[282px] w-[282px] border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 1 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 1)}>
                                            <img src={processState === 1 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                            <div className={`absolute left-1/2 -top-14 w-[1px] h-[calc(50%+56px)] z-10 ${processState === 1 ? " bg-red-700" : " bg-white"}`}></div>
                                        </div>
                                    </div>
                                    <div className='flex-none flex items-center flex-col'>
                                        <div className="pb-10">
                                            STRATEGY <br /> DEVELOPMENT
                                        </div>
                                        <div className={`flex-none h-[282px] w-[282px] border border-solid border-green rounded-full relative flex items-center justify-center cursor-pointer ${processState === 2 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 2)}>
                                            <img src={processState === 2 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                            <div className={`absolute left-1/2 -top-14 w-[1px] h-[calc(50%+56px)] z-10 ${processState === 2 ? " bg-red-700" : " bg-white"}`}></div>
                                        </div>
                                    </div>
                                    <div className='flex-none flex items-center flex-col'>
                                        <div className="pb-10">
                                            CONCEPTUALIZATION <br /> & CREATION
                                        </div>
                                        <div className={`flex-none h-[282px] w-[282px] border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 3 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 3)}>
                                            <img src={processState === 3 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                            <div className={`absolute left-1/2 -top-14 w-[1px] h-[calc(50%+56px)] z-10 ${processState === 3 ? " bg-red-700" : " bg-white"}`}></div>
                                        </div>
                                    </div>
                                    <div className='flex-none flex items-center flex-col'>
                                        <div className="pb-10">
                                            PRODUCTION  <br /> & EXECUTION
                                        </div>
                                        <div className={`flex-none h-[282px] w-[282px] border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 4 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 4)}>
                                            <img src={processState === 4 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                            <div className={`absolute left-1/2 -top-14 w-[1px] h-[calc(50%+56px)] z-10 ${processState === 4 ? " bg-red-700" : " bg-white"}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex pl-[248px]">
                            <div className="w-[580px] flex-none">
                                <div className="text-[#C51B89] font-bold text-[45px] font-Arial">
                                    {processData.title1} <br />
                                    {processData.title2}
                                </div>
                                <div className="pt-4 text-[22px] font-Arial">
                                    {processData.mainContent}
                                </div>
                            </div>
                            <div className="mx-10 w-[1px] bg-white"></div>
                            <div className="flex-1 flex">
                                <div className="flex justify-center flex-col font-Arial text-2xl font-normal">
                                    <ul className="list-disc">
                                        <li>
                                            {processData.subContent1}
                                        </li>
                                        <li>
                                            {processData.subContent2}
                                        </li>
                                        <li>
                                            {processData.subContent3}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default ProcessCompo;