import React, { useState } from "react";
import { Divider } from "../components";
import wavesImg from "../assets/img/home/Waves.png";
import CloseImg from "../assets/img/icons/close.png";
import AddImg from "../assets/img/icons/add.png";
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
            <div className="text-white font-Arial px-2 sm:px-4 md:px-6 xl:px-11 absolute bottom-0 top-1 xl:top-10">
                <div className="flex text-white py-0 2xl:py-2 3xl:py-4">
                    <div className="flex w-full items-center">
                        <div className="h-2 md:h-4 xl:h-[30px] w-40 sm:w-40 md:w-48 lg:w-64 xl:w-80 border-r-[1px] relative flex items-center">
                            <div className="h-[1px] bg-white w-[300px]"></div>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-[45px] px-2 font-Arial">
                                Our creative thinking process
                            </div>
                            <div className="h-[1px] flex-1 bg-white">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-normal text-sm sm:text-sm md:text-sm lg:text-2xl xl:text-xl 2xl:text-3xl 3xl:text-[36px] pl-10 xl:pl-[308px] pr-10 xl:pr-[250px] font-Arial leading-none pt-3 sm:pt-1 md:pt-2 xl:pt-7 2xl:pt-8 3xl:pt-16">
                    We specialize on amplifying creativity in brands, operations, and communications.
                    We are driven by the conviction that creativity can revolutionize how messages and reputations are perceived and stories are told. We aim to create comprehensive,multi-channel strategies that truly connect with audiences, creating impactful connections and memorable experiences.
                </div>
                <div className="flex">
                    <div className="w-9"></div>
                    <div className="flex-1">
                        <div className="py-3 md:py-4 lg:py-12 xl:py-8 2xl:py-10 3xl:py-16">
                            <div className="text-white text-xs md:text-sm xl:text-lg relative flex items-center justify-center w-fit m-auto font-Arial">
                                <img src={wavesImg} alt=""
                                    className="
                                    absolute 
                                    xl:left-[120px] 2xl:left-[110px] 3xl:left-[141px]
                                    md:w-[calc(100%-120px)] lg:w-[calc(100%-120px)] xl:w-[calc(100%-220px)] 2xl:w-[calc(100%-220px)] 3xl:w-[calc(100%-282px)] 
                                    md:bottom-[60px] lg:bottom-[65px] xl:bottom-[100px] 2xl:bottom-[121px] 3xl:bottom-[141px]
                                    translate-y-1/2"
                                />
                                <div className="w-[calc(100vw-100px)] h-[1px] bg-white absolute left-1/2 sm:bottom-[40px] md:bottom-[65px] lg:bottom-[64..5px] xl:bottom-[100px] 2xl:bottom-[115px] 3xl:bottom-[141px] -translate-x-1/2"></div>
                                <div className="flex gap-4 xl:gap-20 2xl:gap-[59px]">
                                    <div className='flex-none flex items-center flex-col'>
                                        <div className="pb-2 xl:pb-10">
                                            DISCOVER <br /> & DEFINE
                                        </div>
                                        <div className=
                                            {`flex-none 
                                            h-[40px] sm:h-[80px] md:h-[130px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[282px]
                                            w-[40px] sm:w-[80px] md:w-[130px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 1 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 1)}>
                                            <img src={processState === 1 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                            <div
                                                className=
                                                {`absolute left-1/2 
                                                sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-14 
                                                sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+56px)] 2xl:h-[calc(50%+40px)] 3xl:h-[calc(50%+56px)] 
                                                w-[1px]                                                
                                                z-10 ${processState === 1 ? " bg-red-700" : " bg-white"}`}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-none flex items-center flex-col'>
                                        <div className="pb-2 xl:pb-10">
                                            STRATEGY <br /> DEVELOPMENT
                                        </div>
                                        <div className=
                                            {`flex-none 
                                            h-[40px] sm:h-[80px] md:h-[130px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[282px]
                                            w-[40px] sm:w-[80px] md:w-[130px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 2 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 2)}>
                                            <img src={processState === 2 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                            <div
                                                className=
                                                {`absolute left-1/2 
                                                sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-14 
                                                sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+56px)] 2xl:h-[calc(50%+40px)] 3xl:h-[calc(50%+56px)] 
                                                w-[1px]                                                
                                                z-10 ${processState === 2 ? " bg-red-700" : " bg-white"}`}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-none flex items-center flex-col'>
                                        <div className="pb-2 xl:pb-10">
                                            CONCEPTUALIZATION <br /> & CREATION
                                        </div>
                                        <div className=
                                            {`flex-none 
                                            h-[40px] sm:h-[80px] md:h-[130px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[282px]
                                            w-[40px] sm:w-[80px] md:w-[130px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 3 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 3)}>
                                            <img src={processState === 3 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                            <div
                                                className=
                                                {`absolute left-1/2 
                                                sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-14 
                                                sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+56px)] 2xl:h-[calc(50%+40px)] 3xl:h-[calc(50%+56px)] 
                                                w-[1px]                                                
                                                z-10 ${processState === 3 ? " bg-red-700" : " bg-white"}`}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-none flex items-center flex-col'>
                                        <div className="pb-2 xl:pb-10">
                                            PRODUCTION  <br /> & EXECUTION
                                        </div>
                                        <div
                                            className=
                                            {`flex-none 
                                            h-[40px] sm:h-[80px] md:h-[130px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[282px]
                                            w-[40px] sm:w-[80px] md:w-[130px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 4 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 4)}>
                                            <img src={processState === 4 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                            <div
                                                className=
                                                {`absolute left-1/2 
                                                sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-14 
                                                sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+56px)] 2xl:h-[calc(50%+40px)] 3xl:h-[calc(50%+56px)] 
                                                w-[1px]                                                
                                                z-10 ${processState === 4 ? " bg-red-700" : " bg-white"}`}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex pl-0 xl:pl-[200px] 2xl:pl-[248px]">
                            <div className="w-40 md:w-60 lg:w-80 xl:w-[440px] 2xl:w-[580px] flex-none">
                                <div className="text-[#C51B89] font-bold text-base sm:text-base md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px] font-Arial">
                                    {processData.title1} <br />
                                    {processData.title2}
                                </div>
                                <div className="pt-2 md:pt-4 text-xs sm:text-xs md:text-sm xl:text-lg font-Arial">
                                    {processData.mainContent}
                                </div>
                            </div>
                            <div className="mx-10 w-[1px] bg-white"></div>
                            <div className="flex-1 flex">
                                <div className="flex justify-center flex-col font-Arial text-sm sm:text-xs md:text-sm xl:text-sm 2xl:text-base 3xl:text-2xl font-normal">
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