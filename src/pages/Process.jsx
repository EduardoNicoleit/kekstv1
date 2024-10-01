import React, { useState } from "react";
import wavesImg from "../assets/img/home/Waves.png";
import wavesHImg from "../assets/img/home/Waves_h.png";
import CloseImg from "../assets/img/icons/close.png";
import AddImg from "../assets/img/icons/add.png";
import CloseModalImg from "../assets/img/icons/close1.png";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";

const ProcessCompo = () => {

    const data = [
        {
            title: "1. DISCOVER & DEFINE",
            mainContent: "UNDERSTANDING THE TASK AT HAND",
            subContent1: "Engage with stakeholders to gather initial requirements.",
            subContent2: "Conduct market research to understand the landscape and target audience.",
            subContent3: "Define clear objectives and deliverables based on the identified needs."
        },
        {
            title: "2. STRATEGY DEVELOPMENT",
            mainContent: "CHARTING A COURSE FOR SUCCESS",
            subContent1: "Analyze the insights gained from the discovery phase.",
            subContent2: "Set specific, measurable, achievable, relevant, and time - bound(SMART) goals.",
            subContent3: "Develop a roadmap that outlines the steps to be taken, considering resources, timeframes, and potential risks."
        },
        {
            title: "3. CONCEPTUALIZATION & CREATION",
            mainContent: "BRINGING IDEAS TO LIFE",
            subContent1: "Brainstorm various approaches and solutions.",
            subContent2: "Develop prototypes or mockups to visualize concepts.",
            subContent3: "Review and refine ideas based on feedback and testing results."
        },
        {
            title: "4. PRODUCTION & EXECUTION",
            mainContent: "TRANSFORMING CONCEPTS INTO REALITIES",
            subContent1: "Finalize the design and prepare assets for production.",
            subContent2: "Oversee and manage the production process to ensure quality and consistency.",
            subContent3: "Launch the final product, solution, or campaign, and monitor its performance and reception."
        }
    ]
    const [processState, setProcessState] = useState(1);
    const [processData, setProcessData] = useState({
        title: "1. DISCOVER & DEFINE",
        mainContent: "UNDERSTANDING THE TASK AT HAND",
        subContent1: "Engage with stakeholders to gather initial requirements.",
        subContent2: "Conduct market research to understand the landscape and target audience.",
        subContent3: "Define clear objectives and deliverables based on the identified needs."
    })

    const changeProcessState = (e, val, state) => {
        setProcessState(val)
        setProcessData(data[val - 1])
        setOpen(!open);
        setMobileState(state);
    }
    const [open, setOpen] = React.useState(false);
    const [mobileState, setMobileState] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <div className="">
            <div className="bg-[url('assets/img/home/process_bg.png')] bg-no-repeat bg-cover w-full text-white font-Arial px-2 lg:px-4 xl:px-[25px] 2xl:px-[50px] bottom-0 top-0">
                <div className="bottom-0 top-0 md:top-2 lg:top-3 xl:top-0 w-full">
                    <div className="flex text-white md:py-12 xl:py-[50px]">
                        <div className="flex w-full items-center">
                            <div className="h-5 md:h-4 xl:h-[30px] hidden md:flex w-9 sm:w-6 md:w-[26px] lg:w-[51px] xl:w-[100px] 2xl:w-80 border-r-0 xl:border-r-[1px] relative items-center">
                                <div className="h-[1px] bg-white w-[100px] md:w-[34px] lg:w-[59px] xl:w-[92px] 2xl:w-[300px]"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="font-bold text-[32px] md:text-3xl lg:text-[45px] px-[9px] font-Arial">
                                    Our process
                                </div>
                                <div className="h-[1px] flex-1 bg-white">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-base md:text-lg lg::text-[28px] 2xl:text-[36px] pl-[9px] md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px] pr-10 lg:pr-[100px] xl:pr-[140px] 3xl:pr-[200px] font-Arial pb-8 md:pb-[58px] lg:pb-20 xl:pb-20 2xl:pb-[100px] pt-8 md:pt-0 lg:pt-[30px] leading-none xl:leading-tight">
                        We specialize on amplifying creativity in brands, operations, and communications.
                        We are driven by the conviction that creativity can revolutionize how messages and reputations are perceived and stories are told. We aim to create comprehensive,multi-channel strategies that truly connect with audiences, creating impactful connections and memorable experiences.
                    </div>
                    <div className="pb-[27px] hidden xl:flex">
                        <div className="w-0"></div>
                        <div className="flex-1">
                            <div className="xl:pb-10 2xl:pb-[74px] ">
                                <div className="text-white text-xs md:text-sm xl:text-xl relative flex items-center justify-center w-fit m-auto font-Arial">
                                    <img src={wavesImg} alt="keskt..."
                                        className="
                                    absolute
                                    sm:left-[68px] md:left-[78px] lg:left-[83px] xl:left-[120px] 2xl:left-[110px] 3xl:left-[141px]
                                    sm:w-[calc(100%-130px)] md:w-[calc(100%-160px)] lg:w-[calc(100%-160px)] xl:w-[calc(100%-220px)] 2xl:w-[calc(100%-220px)] 3xl:w-[calc(100%-282px)]
                                    sm:bottom-[50px] md:bottom-[60px] lg:bottom-[72px] xl:bottom-[100px] 2xl:bottom-[121px] 3xl:bottom-[141px]
                                    translate-y-1/2"
                                    />
                                    <div className="w-[calc(100vw-16px)] lg:w-[calc(100vw-32px)] xl:w-[calc(100vw-50px)] 2xl:w-[calc(100vw-100px)] 3xl:w-[calc(100vw-120px)] h-[1px] bg-white absolute left-1/2 sm:bottom-[50px] md:bottom-[65px] lg:bottom-[72px] xl:bottom-[100px] 2xl:bottom-[115px] 3xl:bottom-[141px] -translate-x-1/2"></div>
                                    <div className="flex gap-4 md:gap-10 xl:gap-20 2xl:gap-[59px]">
                                        <div className='flex-none flex items-center flex-col'>
                                            <div className="pb-2 xl:pb-10">
                                                DISCOVER <br /> & DEFINE
                                            </div>
                                            <div className=
                                                {`flex-none 
                                            h-[40px] sm:h-[100px] md:h-[130px] lg:h-[147px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[282px]
                                            w-[40px] sm:w-[100px] md:w-[130px] lg:w-[147px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 1 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 1, false)}>
                                                <img src={processState === 1 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required:" />
                                                <div
                                                    className=
                                                    {`absolute left-1/2 
                                                sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-10 
                                                sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+26px)] 2xl:h-[calc(50%+32px)] 3xl:h-[calc(50%+26px)] 
                                                w-[1px]                                                
                                                ${processState === 1 ? " bg-[#C51B89]" : " bg-white"}`}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex-none flex items-center flex-col'>
                                            <div className="pb-2 xl:pb-10">
                                                STRATEGY <br /> DEVELOPMENT
                                            </div>
                                            <div className=
                                                {`flex-none 
                                            h-[40px] sm:h-[100px] md:h-[130px] lg:h-[147px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[282px]
                                            w-[40px] sm:w-[100px] md:w-[130px] lg:w-[147px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 2 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 2, false)}>
                                                <img src={processState === 2 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                                <div
                                                    className=
                                                    {`absolute left-1/2 
                                                sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-10 
                                                sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+26px)] 2xl:h-[calc(50%+32px)] 3xl:h-[calc(50%+26px)] 
                                                w-[1px]                                                
                                                ${processState === 2 ? " bg-[#C51B89]" : " bg-white"}`}>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex-none flex items-center flex-col'>
                                            <div className="pb-2 xl:pb-10">
                                                CONCEPTUALIZATION <br /> & CREATION
                                            </div>
                                            <div className=
                                                {`flex-none 
                                            h-[40px] sm:h-[100px] md:h-[130px] lg:h-[147px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[282px]
                                            w-[40px] sm:w-[100px] md:w-[130px] lg:w-[147px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 3 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 3, false)}>
                                                <img src={processState === 3 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                                <div
                                                    className=
                                                    {`absolute left-1/2 
                                                sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-10 
                                                sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+26px)] 2xl:h-[calc(50%+32px)] 3xl:h-[calc(50%+26px)] 
                                                w-[1px]                                                
                                                ${processState === 3 ? " bg-[#C51B89]" : " bg-white"}`}>

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
                                            h-[40px] sm:h-[100px] md:h-[130px] lg:h-[147px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[282px]
                                            w-[40px] sm:w-[100px] md:w-[130px] lg:w-[147px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 4 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 4, false)}>
                                                <img src={processState === 4 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                                <div
                                                    className=
                                                    {`absolute left-1/2 
                                                sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-10 
                                                sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+26px)] 2xl:h-[calc(50%+32px)] 3xl:h-[calc(50%+26px)] 
                                                w-[1px]                                                
                                                ${processState === 4 ? " bg-[#C51B89]" : " bg-white"}`}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row pl-0 sm:pl-[40px] md:pl-[100px] lg:pl-[120px] xl:pl-[100px] 2xl:pl-[322px] flex-none">
                                <div className="pb-2 md:pb-0 md:w-60 lg:w-[300px] xl:w-[380px] 2xl:w-[508px] flex-none">
                                    <div className="text-[#C51B89] font-bold text-[21px] md:text-xl lg:text-[26px] xl:text-[33px] 2xl:text-4xl 3xl:text-[45px] font-Arial flex xl:flex-none 
                                    xl:max-w-[380px] 2xl:max-w-[450px] leading-3">
                                        {processData.title}
                                    </div>
                                    <div className="pt-2 md:pt-4 text-[22px] xl:text-lg font-Arial">
                                        {processData.mainContent}
                                    </div>
                                </div>
                                <div className="hidden sm:block mx-3 xl:mx-5 2xl:mx-10 w-[1px] bg-white"></div>
                                <div className="flex-1 flex pl-4 sm:pl-4 md:pl-[20px] pr-3">
                                    <div className="flex justify-center flex-col font-Arial text-[17px] xl:text-2xl font-normal">
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
                    <div className="relative block xl:hidden">
                        <div className="absolute grid grid-cols-3 top-[100px] sm:top-[170px] md:top-[190px] lg:top-[280px] w-full h-full">
                            <div></div>
                            <div>
                                <img src={wavesHImg} alt="" className="w-full h-[67%] sm:h-[65%] md:h-[64%] lg:h-[68%]" />
                            </div>
                            <div></div>
                        </div>
                        <div className="w-[1px] bg-white left-1/2 flex items-center justify-center absolute 
                        md:top-0 h-[calc(100%-50px)] sm:h-[calc(100%-110px)] md:h-[calc(100%-100px)] lg:h-[calc(100%-60px)]
                        mt-2 sm:mt-[52px] md:mt-10 lg:mt-0"></div>
                        <div className="flex flex-col items-center justify-center gap-[50px] sm:gap-[70px] md:gap-[100px] lg:gap-[190px] 
                        pb-20 sm:pb-[100px] md:pb-[150px] lg:pb-[200px] pt-12 sm:pt-[100px] md:pt-[120px] lg:pt-[164px]">
                            <div className=
                                {`flex-none
                                h-[105px] sm:h-[143px] lg:h-[230px]
                                w-[105px] sm:w-[143px] lg:w-[230px]
                                border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 1 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 1, true)}>
                                <img src={processState === 1 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                <div className="absolute flex right-[60px] sm:right-[85px] lg:right-[100px] items-center">
                                    <div className="font-Helvetica font-bold text-[10px] sm:text-[10px] lg:text-[22px] pr-1 sm:pr-2 text-right w-[150px]">
                                        <div>
                                            DISCOVER
                                        </div>
                                        <div>
                                            & DEFINE
                                        </div>
                                    </div>
                                    <div className={`h-[1px] flex-none w-[50px] sm:w-[90px] lg:w-[145px] mr-0 lg:mr-6 ${processState === 1 ? " bg-[#C51B89]" : " bg-white"}`}></div>
                                </div>
                            </div>
                            <div className=
                                {`flex-none 
                                h-[105px] sm:h-[143px] lg:h-[230px]
                                w-[105px] sm:w-[143px] lg:w-[230px]
                                border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 2 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 2, true)}>
                                <img src={processState === 2 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                <div className="absolute flex left-[60px] sm:left-[80px] lg:left-[130px] items-center">
                                    <div className={`h-[1px] flex-none w-[50px] sm:w-[90px] lg:w-[145px] ${processState === 2 ? " bg-[#C51B89]" : " bg-white"}`}></div>
                                    <div className="font-Helvetica font-bold text-[10px] sm:text-[10px] lg:text-[22px] pl-1 sm:pl-2 w-[150px]">
                                        STRATEGY <br /> DEVELOPMENT
                                    </div>
                                </div>
                            </div>
                            <div className=
                                {`flex-none 
                                h-[105px] sm:h-[143px] lg:h-[230px]
                                w-[105px] sm:w-[143px] lg:w-[230px]
                                border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 3 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 3, true)}>
                                <img src={processState === 3 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                <div className="absolute flex right-[60px] sm:right-[85px] lg:right-[100px] items-center">
                                    <div className="font-Helvetica font-bold text-[10px] sm:text-[10px] lg:text-[22px] pr-1 sm:pr-2 text-right w-full">
                                        <div>
                                            CONCEPTUALIZATION
                                        </div>
                                        <div>
                                            & CREATION
                                        </div>
                                    </div>
                                    <div className={`h-[1px] flex-none w-[50px] sm:w-[90px] lg:w-[145px] mr-0 lg:mr-6 ${processState === 3 ? " bg-[#C51B89]" : " bg-white"}`}></div>
                                </div>
                            </div>
                            <div className=
                                {`flex-none 
                                h-[105px] sm:h-[143px] lg:h-[230px]
                                w-[105px] sm:w-[143px] lg:w-[230px]
                                border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 4 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 4, true)}>
                                <img src={processState === 4 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                <div className="absolute flex left-[60px] sm:left-[80px] lg:left-[130px] items-center">
                                    <div className={`h-[1px] flex-none w-[50px] sm:w-[90px] lg:w-[145px] ${processState === 4 ? " bg-[#C51B89]" : " bg-white"}`}></div>
                                    <div className="font-Helvetica font-bold text-[10px] sm:text-[10px] lg:text-[22px] pl-1 sm:pl-2 w-[150px]">
                                        PRODUCTION  <br /> & EXECUTION
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block xl:hidden">
                    <Dialog open={open && mobileState} handler={handleOpen}>
                        <DialogHeader className="bg-[#210837] justify-end items-center">
                            <div className="mr-1" onClick={handleOpen}>
                                <img src={CloseModalImg} alt="" className="w-4 h-4 " />
                            </div></DialogHeader>
                        <DialogBody className="bg-[#210837] p-6">
                            <div className="font-Helvetica font-bold text-3xl sm:text-[34px] lg:text-[50px] text-[#C51B89] leading-none">
                                {processData.title}
                            </div>
                            <div className="font-Helvetica pt-2 sm:pt-8 text-base sm:text-[28px] lg:text-[34px] text-white leading-tight">
                                {processData.mainContent}
                            </div>
                            <div className="flex-1 flex pl-4 sm:pl-4 md:pl-[20px] pr-3 text-white pt-16 lg:pt-20">
                                <div className="flex justify-center flex-col font-Arial text-lg sm:text-[28px] lg:text-[34px] font-light">
                                    <ul className="list-disc">
                                        <li className="leading-tight">
                                            {processData.subContent1}
                                        </li>
                                        <li className="pt-20 leading-tight">
                                            {processData.subContent2}
                                        </li>
                                        <li className="pt-20 pb-6 leading-tight">
                                            {processData.subContent3}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </DialogBody>
                    </Dialog>
                </div>
            </div >
        </div>
    )
}
export default ProcessCompo;