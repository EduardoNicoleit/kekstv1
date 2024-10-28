import React from "react";
// import locationImg from '../assets/img/home/world.svg'
import { InteractiveMap } from "../components";
import { Divider } from "../components";


const CreativeCompo = () => {
    return (
        <div>
            <div className="text-white font-Helvetica relative">
                <div className="bg-[url('assets/img/home/creative_bg.png')] bg-no-repeat bg-cover text-white font-Helvetica px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] bottom-0 top-0 pb-0 md:pb-10">
                    <div className="bottom-0 top-0 w-full">
                        <div className="flex text-white">
                            <Divider title="Get to know us" />
                        </div>
                        <div className="font-Helvetica leading-normal font-normal text-[17px] md:text-[18px] lg:text-[22px] xl:text-[24px] 2xl:text-[32px] 3xl:text-[1.5vw] pl-5 pr-4 md:pl-[34px] lg:pl-[59px] xl:pr-[140px] xl:pl-[100px] 2xl:pl-[308px] lg:pr-[100px] 3xl:pr-[10vw] pb-6 lg:pb-[60px] xl:pb-[60px] 2xl:pb-[60px] 3xl:pb-[3vw]">
                            What distinguishes us is the unique fusion of Kekst CNC's renowned expertise in strategic communication worldwide, coupled with our prowess in design thinking, innovative solutions, and impactful activation strategies. This combination guarantees seamless execution and unparalleled results across every project dimension.
                        </div>
                        <div className="pl-5 md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px] xl:pr-[90px] 2xl:pr-[90px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 font-Helvetica sm:gap-10 md:gap-10 lg:gap-10 xl:gap-18 2xl:gap-18 3xl:gap-[2vw] pb-12 2xl:pb-[5vw]">
                                <div>
                                    <div className="font-bold text-[40px] md:text-6xl lg:text-[60px] xl:text-[105px] 2xl:text-[128px] 3xl:text-[6vw] pt-0 md:pt-4 lg:pt-0 pb-6 md:pb-8 lg:pb-12 xl:pb-[60px] 2xl:py-[3vw]">
                                        Global
                                    </div>
                                    <div className="flex font-normal text-[17px] lg:text-lg xl:text-2xl lg:h-[120px] xl:h-[130px] 2xl:h-[160px] 3xl:h-[7vw] 3xl:text-[1.5vw] 2xl:leading-[2.2vw]">
                                        <div>01.</div>
                                        <div className="flex-1 pl-2 pb-2 3xl:pb-[1vw] px-4 2xl:pl-[1vw] 2xl:pr-[3.5vw] 3xl:pr-[7vw]">
                                            Our creative team is a global force of the best and brightest minds in the industry.
                                        </div>
                                    </div>
                                    <div className="mt-8 lg:mt-2 xl:mt-[30px] 2xl:mt-[2vw] flex font-normal text-[17px] lg:text-lg xl:text-2xl pb-6 xl:pb-0 3xl:text-[1.5vw] 2xl:leading-[2.2vw]">
                                        <div>02.</div>
                                        <div className="flex-1 pl-2 pb-2 3xl:pb-[1vw] px-4 2xl:pl-[1vw] 2xl:pr-[3.5vw] 3xl:pr-[7vw]">
                                            By combining forces across locations, we bring our client’s visions to life through seamless collaboration and unparalleled creative expertise.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-[40px] md:text-6xl lg:text-[60px] xl:text-[105px] 2xl:text-[128px] 3xl:text-[6vw] pt-0 md:pt-4 lg:pt-0 pb-6 md:pb-8 lg:pb-12 xl:pb-[60px] 2xl:py-[3vw]">
                                        Creative
                                    </div>
                                    <div className="flex font-normal text-[17px] lg:text-lg xl:text-2xl lg:h-[120px] xl:h-[130px] 2xl:h-[160px] 3xl:h-[7vw] 3xl:text-[1.5vw] 2xl:leading-[2.2vw]">
                                        <div>01.</div>
                                        <div className="flex-1 pb-2 xl:pb-4 3xl:pb-[10vw] pl-2 px-4 2xl:pl-[1vw] 2xl:pr-[3.5vw] 3xl:pr-[5vw]">
                                            We combine strategy, design and technology to create impactful solutions that inspire change and shape the future.
                                        </div>
                                    </div>
                                    <div className="mt-8 md:mt-2 lg:mt-2 xl:mt-[30px] 2xl:mt-[2vw] flex basis-1/2 font-normal text-[17px] lg:text-lg xl:text-2xl pb-6 xl:pb-0 3xl:text-[1.5vw] 2xl:leading-[2.2vw]">
                                        <div>02.</div>
                                        <div className="flex-1 pb-2 3xl:pb-[1vw] pl-2 px-4 2xl:pl-[1vw] 2xl:pr-[3.5vw] 3xl:pr-[10vw]">
                                            We focus on real results that amplify your message’s impact.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div><InteractiveMap /></div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default CreativeCompo;