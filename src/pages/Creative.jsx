import React, { useEffect } from "react";
import { Divider } from "../components";
import locationImg from '../assets/img/home/location.png'
import creativeImg from '../assets/img/home/creative_bg.png'

const CreativeCompo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="text-white font-Arial relative">
                <div className="bg-[url('assets/img/home/creative_bg.png')] bg-contain bg-inherit w-full text-white font-Arial px-[8px] sm:px-6 md:px-[45px] xl:px-[50px] bottom-0 top-0">
                    <div className="bottom-0 top-0 md:top-2 lg:top-3 xl:top-0 w-full border-x-[1px] xl:border-none border-white py-6 sm:py-8 xl:py-[50px]">
                        <div className="flex text-white">
                            <div className="flex w-full items-center">
                                <div className="h-5 md:h-4 xl:h-[30px] hidden sm:flex w-9 sm:w-6 md:w-[86px] xl:w-80 border-r-[1px] relative items-center">
                                    <div className="h-[1px] bg-white w-[100px] xl:w-[300px]"></div>
                                </div>
                                <div className="flex items-center w-full px-3 sm:px-0">
                                    <div className="font-bold text-[32px] sm:text-2xl md:text-3xl lg:text-[45px] px-2 font-Arial">
                                        Get to know us
                                    </div>
                                    <div className="h-[1px] flex-1 bg-white">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="font-Arial text-[17px] lg:text-4xl md:pl-[94px] px-4 sm:px-9 md:px-0 xl:pl-[308px] mr-20 py-6 lg:py-[60px]">
                            What distinguishes us is the unique fusion of Kekst CNC's renowned expertise <br />in strategic communication worldwide, coupled with our prowess in design thinking, innovative solutions, and impactful activation strategies. This combination guarantees seamless execution and unparalleled results across every project dimension.
                        </div>
                        <div className="pl-4 sm:pl-9 md:pl-[94px] xl:pl-[308px] xl:pr-[90px] 2xl:pr-[290px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 font-Arial">
                                <div>
                                    <div className="font-bold text-[23px] md:text-5xl lg:text-[93px] 2xl:text-8xl 3xl:text-9xl lg:py-[60px] pb-6 lg:pb-0">
                                        Global
                                    </div>
                                    <div className="flex font-normal text-[17px] lg:text-2xl lg:h-[120px] xl:h-[130px] 2xl:h-[160px] 3xl:h-[200px]">
                                        <div>
                                            01.
                                        </div>
                                        <div className="flex-1 pl-1 px-10">
                                            Our creative team is a global force of the <br /> best and brightest minds in the industry.
                                        </div>
                                    </div>
                                    <div className="flex font-normal text-[17px] lg:text-2xl py-[50px] xl:py-0">
                                        <div>
                                            02.
                                        </div>
                                        <div className="flex-1 pl-1 px-10">
                                            By combining forces across locations, we bring our clients’ visions to life through seamless collaboration and unparalleled creative expertise.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-[23px] md:text-5xl lg:text-[93px] 2xl:text-8xl 3xl:text-9xl lg:py-[60px] pb-6 lg:pb-0">
                                        Creative
                                    </div>
                                    <div className="flex font-normal text-[17px] lg:text-2xl lg:h-[120px] xl:h-[130px] 2xl:h-[160px] 3xl:h-[200px]">
                                        <div>
                                            01.
                                        </div>
                                        <div className="flex-1 pl-1 px-10">
                                            We combine strategy, design and technology to create impactful solutions that inspire change and shape the future.
                                        </div>
                                    </div>
                                    <div className="pl-0 lg:pl-4 flex basis-1/2 font-normal text-[17px] lg:text-2xl py-[50px] xl:py-0">
                                        <div>
                                            02.
                                        </div>
                                        <div className="flex-1 pl-1 px-10">
                                            We focus on real results that amplify your message’s impact.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[1px] bg-white sm:my-3 md:my-4 lg:my-6 xl:my-8 2xl:my-10 3xl:my-20  xl:ml-[290px]"></div>
                    </div>
                </div>
                <div className="bottom-0 top-20 px-[8px] sm:px-6 md:px-[45px]">
                    <div className="border-x-[1px] xl:border-none">
                        <img src={locationImg} alt="" className="px-4 md:px-0 lg:pl-[94px] xl:pl-[308px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreativeCompo;