import React, { useState, useEffect } from "react";
import { Divider } from "../components";
import wavesVideo from "../assets/animation/Waves.mov";
import wavesHImg from "../assets/img/home/Waves_h.png";
import CloseImg from "../assets/img/icons/close.png";
import AddImg from "../assets/img/icons/add.png";
import CloseModalImg from "../assets/img/icons/close1.png";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    Carousel,
    IconButton
} from "@material-tailwind/react";

const ProcessCompo = () => {

    const processStateData = [
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

    const changeProcessState = (e, val, state) => {
        setProcessState(val)
        setOpen(!open);
        setMobileState(state);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setProcessState((prevState) => (prevState === 4 ? 1 : prevState + 1));
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    const [open, setOpen] = React.useState(false);
    const [mobileState, setMobileState] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const currentProcessData = processStateData[processState - 1];

    return (
        <div className="">
            <div className="bg-[url('assets/img/home/process_bg.png')] bg-no-repeat bg-cover w-full text-white font-Helvetica px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] bottom-0 top-0">
                <div className="bottom-0 top-0 md:top-2 lg:top-3 xl:top-0 w-full">
                    <div className="flex text-white">
                        <Divider title="Our process" />
                    </div>
                    <div className="font-Helvetica leading-normal font-normal text-[17px] md:text-[18px] lg:text-[22px] xl:text-[24px] 2xl:text-[32px] 3xl:text-[1.5vw] pl-5 pr-4 md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px] lg:pr-[100px] xl:pr-[140px] 3xl:pr-[10vw] pb-8 md:pb-[58px] lg:pb-20 xl:pb-20 2xl:pb-[100px] pb-6 lg:pb-[60px] xl:pb-[60px] 2xl:pb-[60px] 3xl:pb-[3vw]">
                        We specialize on amplifying creativity in brands, operations, and communications.
                        We are driven by the conviction that creativity can revolutionize how messages and reputations are perceived and stories are told. We aim to create comprehensive, multi-channel strategies that truly connect with audiences, creating impactful connections and memorable experiences.
                    </div>
                    <div className="pb-[40px] 3xl:pb-[6vw] 5xl:pb-[2vw] hidden lg:flex">
                        <div className="w-0"></div>
                        <div className="flex-1">
                            <div className="xl:pb-[100px] 2xl:pb-[20px] 3xl:pb-[4vw]">
                                <div className="text-white text-center text-xs md:text-sm xl:text-xl 2xl:text-[1.1vw] 2xl:leading-[1.5vw] relative flex justify-center w-fit m-auto font-Helvetica">
                                    <video
                                        src={wavesVideo}
                                        className="absolute left-1/2 transform -translate-x-1/2 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] sm:bottom-[50px] md:bottom-[60px] lg:bottom-[72px] xl:bottom-[100px] 2xl:bottom-[121px] 3xl:bottom-[141px]"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    ></video>

                                    <div className="relative">
                                        {/* Horizontal Line */}
                                        <div className="w-[calc(100vw-16px)] lg:w-[calc(100vw-32px)] xl:w-[calc(100vw-67px)] 2xl:w-[calc(100vw-100px)] 3xl:w-[calc(100vw-90px)] h-[1px] 3xl:h-[2px] bg-white absolute left-1/2 transform -translate-x-1/2 sm:bottom-[50px] md:bottom-[65px] lg:bottom-[72px] xl:bottom-[100px] 2xl:bottom-[115px] 3xl:bottom-[7.5vw] z-0"></div>

                                        <div className="flex gap-4 md:gap-10 xl:gap-20 2xl:gap-[59px]">
                                            {/* First Circle */}
                                            <div className="flex-none flex items-center flex-col cursor-pointer group" onClick={(e) => changeProcessState(e, 1, false)}>
                                                <div className="pb-2 xl:pb-12 3xl:pb-[3vw] group-hover:text-white">
                                                    DISCOVER <br /> & DEFINE
                                                </div>
                                                <div className={`flex-none h-[40px] sm:h-[100px] md:h-[130px] lg:h-[147px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[15vw] w-[40px] sm:w-[100px] md:w-[130px] lg:w-[147px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[15vw] border border-solid rounded-full relative flex items-center justify-center ${processState === 1 ? 'bg-[#9ca3af66] border-white' : 'border-white group-hover:border-white'} group-hover:bg-[#674480]`}>
                                                    <img src={processState === 1 ? CloseImg : AddImg} alt="Icon" className="w-10 h-10 2xl:w-[2vw] 2xl:h-[2vw]" />
                                                    <div className={`absolute left-1/2 transform -translate-x-1/2 sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-[2vw] sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+26px)] 2xl:h-[calc(50%+32px)] 3xl:h-[calc(50%+[40px])] w-[1px] 3xl:w-[3px] ${processState === 1 ? 'bg-[#C51B89]' : 'bg-white group-hover:bg-white group-hover:z-10'}`}></div>
                                                </div>
                                            </div>

                                            {/* Second Circle */}
                                            <div className="flex-none flex items-center flex-col cursor-pointer group" onClick={(e) => changeProcessState(e, 2, false)}>
                                                <div className="pb-2 xl:pb-12 3xl:pb-[3vw] group-hover:text-white">
                                                    STRATEGY <br /> DEVELOPMENT
                                                </div>
                                                <div className={`flex-none h-[40px] sm:h-[100px] md:h-[130px] lg:h-[147px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[15vw] w-[40px] sm:w-[100px] md:w-[130px] lg:w-[147px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[15vw] border border-solid rounded-full relative flex items-center justify-center ${processState === 2 ? 'bg-[#9ca3af66] border-white' : 'border-white group-hover:border-white'} group-hover:bg-[#674480]`}>
                                                    <img src={processState === 2 ? CloseImg : AddImg} alt="Icon" className="w-10 h-10 2xl:w-[2vw] 2xl:h-[2vw]" />
                                                    <div className={`absolute left-1/2 transform -translate-x-1/2 sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-[2vw] sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+26px)] 2xl:h-[calc(50%+32px)] 3xl:h-[calc(50%+[40px])] w-[1px] 3xl:w-[3px] ${processState === 2 ? 'bg-[#C51B89]' : 'bg-white group-hover:bg-white'}`}></div>
                                                </div>
                                            </div>

                                            {/* Third Circle */}
                                            <div className="flex-none flex items-center flex-col cursor-pointer group" onClick={(e) => changeProcessState(e, 3, false)}>
                                                <div className="pb-2 xl:pb-12 3xl:pb-[3vw] group-hover:text-white">
                                                    CONCEPTUALIZATION <br /> & CREATION
                                                </div>
                                                <div className={`flex-none h-[40px] sm:h-[100px] md:h-[130px] lg:h-[147px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[15vw] w-[40px] sm:w-[100px] md:w-[130px] lg:w-[147px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[15vw] border border-solid rounded-full relative flex items-center justify-center ${processState === 3 ? 'bg-[#9ca3af66] border-white' : 'border-white group-hover:border-white'} group-hover:bg-[#674480]`}>
                                                    <img src={processState === 3 ? CloseImg : AddImg} alt="Icon" className="w-10 h-10 2xl:w-[2vw] 2xl:h-[2vw]" />
                                                    <div className={`absolute left-1/2 transform -translate-x-1/2 sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-[2vw] sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+26px)] 2xl:h-[calc(50%+32px)] 3xl:h-[calc(50%+[40px])] w-[1px] 3xl:w-[3px] ${processState === 3 ? 'bg-[#C51B89]' : 'bg-white group-hover:bg-white'}`}></div>
                                                </div>
                                            </div>

                                            {/* Fourth Circle */}
                                            <div className="flex-none flex items-center flex-col cursor-pointer group" onClick={(e) => changeProcessState(e, 4, false)}>
                                                <div className="pb-2 xl:pb-12 3xl:pb-[3vw] group-hover:text-white">
                                                    PRODUCTION <br /> & EXECUTION
                                                </div>
                                                <div className={`flex-none h-[40px] sm:h-[100px] md:h-[130px] lg:h-[147px] xl:h-[200px] 2xl:h-[230px] 3xl:h-[15vw] w-[40px] sm:w-[100px] md:w-[130px] lg:w-[147px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[15vw] border border-solid rounded-full relative flex items-center justify-center ${processState === 4 ? 'bg-[#9ca3af66] border-white' : 'border-white group-hover:border-white'} group-hover:bg-[#674480]`}>
                                                    <img src={processState === 4 ? CloseImg : AddImg} alt="Icon" className="w-10 h-10 2xl:w-[2vw] 2xl:h-[2vw]" />
                                                    <div className={`absolute left-1/2 transform -translate-x-1/2 sm:-top-2 md:-top-2 lg:-top-2 xl:-top-10 2xl:-top-11 3xl:-top-[2vw] sm:h-[calc(50%+16px)] md:h-[calc(50%+16px)] lg:h-[calc(50%+16px)] xl:h-[calc(50%+26px)] 2xl:h-[calc(50%+32px)] 3xl:h-[calc(50%+[40px])] w-[1px] 3xl:w-[3px] ${processState === 4 ? 'bg-[#C51B89]' : 'bg-white group-hover:bg-white'}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* // Text below the circles */}
                            <div className="items-start justify-start flex flex-col md:flex-row items-center justify-between pr-4 pt-12 pl-0 sm:pl-[40px] md:pl-[100px] lg:pl-[120px] xl:pl-[100px] 2xl:pl-[322px] flex-none h-[250px] xl:h-[300px] 2xl:h-[350px] 3xl:h-[10vw]">
                                {/* Left Section */}
                                <div className="pb-2 md:pb-0 pt-8 pr-6 2xl:pr-8 3xl:pr-[5vw]">
                                    <div className="flex flex-col text-[#C51B89] font-bold text-[21px] md:text-xl lg:text-[26px] xl:text-[33px] 2xl:text-4xl 3xl:text-[2.1vw] leading-normal font-Helvetica 3xl:pb-[1vw] 2xl:max-w-[30vw] 2xl:leading-[2.5vw]">
                                        {currentProcessData.title}
                                    </div>

                                    <div className="py-2 md:py-4 text-[22px] xl:text-lg 3xl:text-[1.5vw] 3xl:leading-[1.7vw] font-Helvetica">
                                        {currentProcessData.mainContent}
                                    </div>
                                </div>
                                {/* Right Section */}
                                <div className="flex-1 flex pl-8 2xl:pl-[4vw] justify-start border-l border-white">
                                    <div className="flex justify-start flex-col font-Helvetica text-[17px] py-2 xl:text-2xl 3xl:text-[1.2vw] 5xl:text-[1vw] 3xl:leading-[2vw] font-normal pr-6 3xl:pr-[1vw] pl-1 3xl:pl-[0.5vw]">
                                        <ul className="list-disc">
                                            <li>
                                                {currentProcessData.subContent1}
                                            </li>
                                            <li>
                                                {currentProcessData.subContent2}
                                            </li>
                                            <li>
                                                {currentProcessData.subContent3}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="relative hidden">
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
                                    <div className="font-Helvetica font-bold text-[10px] sm:text-[10px] lg:text-[22px] 3xl:text-[1.5vw] 3xl:leading-[2vw] pr-1 sm:pr-2 text-right w-[150px]">
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
                                    <div className="font-Helvetica font-bold text-[10px] sm:text-[10px] lg:text-[22px] 3xl:text-[1.5vw] 3xl:leading-[2vw] pl-1 sm:pl-2 w-[150px]">
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
                                <div className="absolute flex right-[50px] sm:right-[85px] lg:right-[100px] items-center">
                                    <div className="font-Helvetica font-bold text-[10px] sm:text-[10px] lg:text-[22px] 3xl:text-[1.5vw] 3xl:leading-[2vw] pr-1 sm:pr-2 text-right w-full">
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
                                    <div className="font-Helvetica font-bold text-[10px] sm:text-[10px] lg:text-[22px] 3xl:text-[1.5vw] 3xl:leading-[2vw] pl-1 sm:pl-2 w-[150px]">
                                        PRODUCTION  <br /> & EXECUTION
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block lg:hidden">
                        <div>
                            <Carousel loop={true} autoplay={true} autoplayDelay={10000} className="rounded-xl"
                                prevArrow={({ handlePrev }) => (
                                    <IconButton
                                        variant="text"
                                        color="white"
                                        size="lg"
                                        onClick={handlePrev}
                                        className="!absolute top-[62%] xs:left-4 -translate-y-2/4 hidden"
                                    >
                                        <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4003 14L0.666992 3.26667L3.93366 0L17.9337 14L3.93366 28L0.666992 24.7333L11.4003 14Z" fill="white" />
                                        </svg>
                                    </IconButton>
                                )}
                                nextArrow={({ handleNext }) => (
                                    <IconButton
                                        variant="text"
                                        color="white"
                                        size="lg"
                                        onClick={handleNext}
                                        className="!absolute top-[37%] !right-0 xs:!right-4 -translate-y-2/4"
                                    >
                                        <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4003 14L0.666992 3.26667L3.93366 0L17.9337 14L3.93366 28L0.666992 24.7333L11.4003 14Z" fill="white" />
                                        </svg>
                                    </IconButton>
                                )}
                            >
                                <div className='flex-none flex items-center flex-col'>
                                    <div className="pb-12 text-center text-base 3xl:text-[1.5vw] 3xl:leading-[2vw] font-bold font-Helvetica">
                                        DISCOVER <br /> & DEFINE
                                    </div>
                                    <div className=
                                        {`flex-none 
                                            h-[282px]
                                            w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 1 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 1, false)}>
                                        <img src={processState === 1 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required:" />
                                        <div
                                            className=
                                            {`absolute left-1/2 
                                                -top-10 
                                                h-[calc(50%+26px)] 
                                                w-[1px]                                                
                                                ${processState === 1 ? " bg-[#C51B89]" : " bg-white"}`}>
                                        </div>
                                    </div>
                                    <div className="pt-8 pl-[25px]">
                                        <div className="font-Helvetica font-bold text-[21px] 3xl:text-[1.5vw] 3xl:leading-[2vw] text-[#C51B89] leading-none">
                                            {processStateData[0].title}
                                        </div>
                                        <div className="font-Helvetica pt-[10px] text-[17px] 3xl:text-[1.5vw] 3xl:leading-[2vw] font-normal text-white">
                                            {processStateData[0].mainContent}
                                        </div>
                                        <div className="flex-1 flex pr-5 pl-5 text-white pt-5">
                                            <div className="flex justify-center flex-col font-Helvetica font-normal text-[17px] 3xl:text-[1.5vw] 3xl:leading-[2vw]">
                                                <ul className="list-disc">
                                                    <li className="leading-tight">
                                                        {processStateData[0].subContent1}
                                                    </li>
                                                    <li className="leading-tight pt-2">
                                                        {processStateData[0].subContent2}
                                                    </li>
                                                    <li className="pb-6 leading-tight pt-2">
                                                        {processStateData[0].subContent3}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-none flex items-center flex-col'>
                                    <div className="pb-12 text-center text-base font-bold font-Helvetica 3xl:text-[1.5vw] 3xl:leading-[2vw]">
                                        STRATEGY <br /> DEVELOPMENT
                                    </div>
                                    <div className=
                                        {`flex-none 
                                            h-[282px]
                                            w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 2 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 2, false)}>
                                        <img src={processState === 2 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                        <div
                                            className=
                                            {`absolute left-1/2 
                                                -top-10 
                                                h-[calc(50%+26px)] 
                                                w-[1px]                                                
                                                ${processState === 2 ? " bg-[#C51B89]" : " bg-white"}`}>

                                        </div>
                                    </div>
                                    <div className="pt-8 pl-[25px]">
                                        <div className="font-Helvetica font-bold text-[21px] 3xl:text-[1.5vw] 3xl:leading-[2vw] text-[#C51B89] leading-none">
                                            {processStateData[1].title}
                                        </div>
                                        <div className="font-Helvetica pt-[10px] text-[17px] 3xl:text-[1.5vw] 3xl:leading-[2vw] font-normal text-white">
                                            {processStateData[1].mainContent}
                                        </div>
                                        <div className="flex-1 flex pr-3 text-white pt-5">
                                            <div className="flex justify-center flex-col font-Helvetica font-normal text-[17px] 3xl:text-[1.5vw] 3xl:leading-[2vw] pr-5 pl-5">
                                                <ul className="list-disc">
                                                    <li className="leading-tight">
                                                        {processStateData[1].subContent1}
                                                    </li>
                                                    <li className="leading-tight pt-2">
                                                        {processStateData[1].subContent2}
                                                    </li>
                                                    <li className="pb-6 leading-tight pt-2">
                                                        {processStateData[1].subContent3}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-none flex items-center flex-col'>
                                    <div className="pb-12 text-center text-base 3xl:text-[1.5vw] 3xl:leading-[2vw] font-bold font-Helvetica">
                                        CONCEPTUALIZATION <br /> & CREATION
                                    </div>
                                    <div className=
                                        {`flex-none 
                                            h-[282px]
                                            w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 3 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 3, false)}>
                                        <img src={processState === 3 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                        <div
                                            className=
                                            {`absolute left-1/2 
                                                -top-10 
                                                h-[calc(50%+26px)] 
                                                w-[1px]                                                
                                                ${processState === 3 ? " bg-[#C51B89]" : " bg-white"}`}>

                                        </div>
                                    </div>
                                    <div className="pt-8 pl-[25px]">
                                        <div className="font-Helvetica font-bold text-[21px] 3xl:text-[1.5vw] 3xl:leading-[2vw] text-[#C51B89] leading-none">
                                            {processStateData[2].title}
                                        </div>
                                        <div className="font-Helvetica pt-[10px] text-[17px] 3xl:text-[1.5vw] 3xl:leading-[2vw] font-normal text-white">
                                            {processStateData[2].mainContent}
                                        </div>
                                        <div className="flex-1 flex pr-3 text-white pt-5">
                                            <div className="flex justify-center flex-col font-Helvetica font-normal text-[17px] 3xl:text-[1.5vw] 3xl:leading-[2vw] pr-5 pl-5">
                                                <ul className="list-disc">
                                                    <li className="leading-tight">
                                                        {processStateData[2].subContent1}
                                                    </li>
                                                    <li className="leading-tight pt-2">
                                                        {processStateData[2].subContent2}
                                                    </li>
                                                    <li className="pb-6 leading-tight pt-2">
                                                        {processStateData[2].subContent3}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-none flex items-center flex-col'>
                                    <div className="pb-12 text-center text-base 3xl:text-[1.5vw] 3xl:leading-[2vw] font-bold font-Helvetica">
                                        PRODUCTION  <br /> & EXECUTION
                                    </div>
                                    <div
                                        className=
                                        {`flex-none 
                                            h-[282px]
                                            w-[282px]
                                            border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 4 ? " bg-[#9ca3af66]" : ""}`} onClick={(e) => changeProcessState(e, 4, false)}>
                                        <img src={processState === 4 ? CloseImg : AddImg} alt="keskt..." className="w-10 h-10 required: " />
                                        <div
                                            className=
                                            {`absolute left-1/2 
                                                -top-10 
                                                h-[calc(50%+26px)] 
                                                w-[1px]                                                
                                                ${processState === 4 ? " bg-[#C51B89]" : " bg-white"}`}>
                                        </div>
                                    </div>
                                    <div className="pt-8 pl-[25px]">
                                        <div className="font-Helvetica font-bold text-[21px] 3xl:text-[1.5vw] 3xl:leading-[2vw] text-[#C51B89] leading-none">
                                            {processStateData[3].title}
                                        </div>
                                        <div className="font-Helvetica pt-[10px] text-[17px] 3xl:text-[1.5vw] 3xl:leading-[2vw] font-normal text-white">
                                            {processStateData[3].mainContent}
                                        </div>
                                        <div className="flex-1 flex pr-3 text-white pt-5">
                                            <div className="flex justify-center flex-col font-Helvetica font-normal text-[17px] 3xl:text-[1.5vw] 3xl:leading-[2vw] pr-5 pl-5">
                                                <ul className="list-disc">
                                                    <li className="leading-tight">
                                                        {processStateData[3].subContent1}
                                                    </li>
                                                    <li className="leading-tight pt-2">
                                                        {processStateData[3].subContent2}
                                                    </li>
                                                    <li className="pb-6 leading-tight pt-2">
                                                        {processStateData[3].subContent3}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block xl:hidden">
                    <Dialog open={open && mobileState} handler={handleOpen}>
                        <DialogHeader className="bg-[#210837] justify-end items-center">
                            <div className="mr-1" onClick={handleOpen}>
                                <img src={CloseModalImg} alt="" className="w-4 h-4 " />
                            </div></DialogHeader>
                        <DialogBody className="bg-[#210837] p-6">
                            <div className="font-Helvetica font-bold text-3xl sm:text-[34px] lg:text-[50px] 3xl:text-[1.5vw] 3xl:leading-[2vw] text-[#C51B89] leading-none">
                                {currentProcessData.title}
                            </div>
                            <div className="font-Helvetica pt-2 sm:pt-8 text-base sm:text-[28px] lg:text-[34px] 3xl:text-[1.5vw] 3xl:leading-[2vw] text-white leading-tight">
                                {currentProcessData.mainContent}
                            </div>
                            <div className="flex-1 flex pl-4 sm:pl-4 md:pl-[20px] pr-3 text-white pt-16 lg:pt-20">
                                <div className="flex justify-center flex-col font-Helvetica text-lg sm:text-[28px] lg:text-[34px] 3xl:text-[1.5vw] 3xl:leading-[2vw] font-light">
                                    <ul className="list-disc">
                                        <li className="leading-tight">
                                            {currentProcessData.subContent1}
                                        </li>
                                        <li className="pt-20 leading-tight">
                                            {currentProcessData.subContent2}
                                        </li>
                                        <li className="pt-20 pb-6 leading-tight">
                                            {currentProcessData.subContent3}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </DialogBody>
                    </Dialog>
                </div>
            </div >
        </div >
    )
}
export default ProcessCompo;