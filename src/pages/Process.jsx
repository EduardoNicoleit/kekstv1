import React, { useState } from "react";
import { Divider } from "../components";
import wavesImg from "../assets/img/home/Waves.png";
import CloseImg from "../assets/img/icons/delete.png";
import AddImg from "../assets/img/icons/remove.png";

const ProcessCompo = () => {

    const [processState, setProcessState] = useState(0);

    const changeProcessState = (e, val) => {
        setProcessState(val)
    }
    return (
        <div className="text-white font-Arial process px-11">
            <Divider title="Our creative thinking process" />
            <div className="font-normal text-[36px] px-[290px] font-Arial">
                We specialize on amplifying creativity in brands, operations, and communications.
                We are driven by the conviction that creativity can revolutionize how messages and reputations are perceived and stories are told. We aim to create comprehensive,multi-channel strategies that truly connect with audiences, creating impactful connections and memorable experiences.
            </div>
            <div className="flex">
                <div className="w-9"></div>
                <div className="flex-1">
                    <div className="py-20">
                        <div className="text-white text-lg relative flex items-center justify-center w-fit m-auto font-Arial">
                            <img src={wavesImg} alt="" className="absolute left-[141px] w-[calc(100%-282px)] bottom-[141px] translate-y-1/2" />
                            <div className="w-[calc(100vw-100px)] h-[1px] bg-white absolute left-1/2 bottom-[141px] -translate-x-1/2"></div>
                            <div className="flex gap-[59px]">
                                <div className='flex-none flex items-center flex-col'>
                                    <div className="pb-10">
                                        DISCOVER <br /> & DEFINE
                                    </div>
                                    <div className={`flex-none h-[282px] w-[282px] border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 1 ? " bg-[#9ca3af] opacity-40" : ""}`} onClick={(e) => changeProcessState(e, 1)}>
                                        <img src={processState === 1 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                        <div className={`absolute left-1/2 -top-14 w-[1px] h-[calc(50%+56px)] z-10 ${processState === 1 ? " bg-red-700" : " bg-white"}`}></div>
                                    </div>
                                </div>
                                <div className='flex-none flex items-center flex-col'>
                                    <div className="pb-10">
                                        STRATEGY <br /> DEVELOPMENT
                                    </div>
                                    <div className={`flex-none h-[282px] w-[282px] border border-solid border-green rounded-full relative flex items-center justify-center cursor-pointer ${processState === 2 ? " bg-[#9ca3af] opacity-40" : ""}`} onClick={(e) => changeProcessState(e, 2)}>
                                        <img src={processState === 2 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                        <div className={`absolute left-1/2 -top-14 w-[1px] h-[calc(50%+56px)] z-10 ${processState === 2 ? " bg-red-700" : " bg-white"}`}></div>
                                    </div>
                                </div>
                                <div className='flex-none flex items-center flex-col'>
                                    <div className="pb-10">
                                        CONCEPTUALIZATION <br /> & CREATION
                                    </div>
                                    <div className={`flex-none h-[282px] w-[282px] border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 3 ? " bg-[#9ca3af] opacity-40" : ""}`} onClick={(e) => changeProcessState(e, 3)}>
                                        <img src={processState === 3 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                        <div className={`absolute left-1/2 -top-14 w-[1px] h-[calc(50%+56px)] z-10 ${processState === 3 ? " bg-red-700" : " bg-white"}`}></div>
                                    </div>
                                </div>
                                <div className='flex-none flex items-center flex-col'>
                                    <div className="pb-10">
                                        PRODUCTION  <br /> & EXECUTION
                                    </div>
                                    <div className={`flex-none h-[282px] w-[282px] border border-solid border-white rounded-full relative flex items-center justify-center cursor-pointer ${processState === 4 ? " bg-[#9ca3af] opacity-40" : ""}`} onClick={(e) => changeProcessState(e, 4)}>
                                        <img src={processState === 4 ? CloseImg : AddImg} alt="" className="w-10 h-10 required: z-20" />
                                        <div className={`absolute left-1/2 -top-14 w-[1px] h-[calc(50%+56px)] z-10 ${processState === 4 ? " bg-red-700" : " bg-white"}`}></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex pl-[250px] pt-20 pb-6">
                        <div className="w-[35%] border-r-[1px]">
                            <div className="text-[#C51B89] font-bold text-[45px] font-Arial">
                                1. DISCOVER <br />
                                & DEFINE
                            </div>
                            <div className="pt-4 text-[22px] font-Arial">
                                UNDERSTANDING THE TASK AT HAND
                            </div>
                        </div>
                        <div className="flex-1 flex pl-8">
                            <div className="flex justify-center flex-col font-Arial text-2xl font-normal">
                                <li>
                                    Engage with stakeholders to gather initial requirements.
                                </li>
                                <li>
                                    Conduct market research to understand the landscape and target audience.
                                </li>
                                <li>
                                    Define clear objectives and deliverables based on the identified needs.
                                </li>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProcessCompo;