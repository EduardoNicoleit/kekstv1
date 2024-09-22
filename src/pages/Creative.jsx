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
            <div className="text-white font-Arial p-11 relative">
                <img src={creativeImg} alt="" />
                <div className="absolute bottom-0 left-0 sm:top-12 md:top-14 lg:top-20 xl:top-24 2xl:top-28 px-12">
                    <div className="flex text-white sm:py-1 md:py-2 2xl:py-2 3xl:py-4">
                        <div className="flex w-full items-center">
                            <div className="h-2 md:h-4 xl:h-[30px] w-40 sm:w-40 md:w-48 lg:w-64 xl:w-80 border-r-[1px] relative flex items-center">
                                <div className="h-[1px] bg-white w-[300px]"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-[45px] px-2 font-Arial">
                                    Get to know us
                                </div>
                                <div className="h-[1px] flex-1 bg-white">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block font-Arial sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl xl:ml-[308px] mr-20 xl:py-4 lg:py-5 2xl:py-10">
                        What distinguishes us is the unique fusion of Kekst CNC's renowned expertise <br />in strategic communication worldwide, coupled with our prowess in design thinking, innovative solutions, and impactful activation strategies. This combination guarantees seamless execution and unparalleled results across every project dimension.
                    </div>
                    <div className="block lg:hidden font-Arial sm:text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl xl:ml-[308px] xl:py-4 lg:py-5 2xl:py-10">
                        What distinguishes us is the unique fusion of Kekst CNC's renowned expertise in strategic communication worldwide, coupled with our prowess in design thinking, innovative solutions, and impactful activation strategies. This combination guarantees seamless execution and unparalleled results across every project dimension.
                    </div>
                    <div className="xl:pl-[290px] xl:pr-[90px] 2xl:pr-[290px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 font-Arial py-0 md:py-2 lg:py-2 xl:py-2 2xl:py-5">
                            <div>
                                <div className="font-bold sm:text-xl md:text-3xl lg:text-4xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl sm:py-1 md:py-3 lg:py-2 xl:py-4 2xl:py-0 3xl:py-10">
                                    Global
                                </div>
                                <div className="flex font-normal sm:text-xs md:text-base lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-2xl sm:py-2 md:py-4 lg:py-4 xl:py-4 2xl:py-10 lg:h-[120px] xl:h-[130px] 2xl:h-[160px] 3xl:h-[200px]">
                                    <div>
                                        01.
                                    </div>
                                    <div className="flex-1 pl-1">
                                        Our creative team is a global force of the <br /> best and brightest minds in the industry.
                                    </div>
                                </div>
                                <div className="flex font-normal sm:text-xs md:text-base lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-2xl">
                                    <div>
                                        02.
                                    </div>
                                    <div className="flex-1 pl-1 px-20">
                                        By combining forces across locations, we bring our clients’ visions to life through seamless collaboration and unparalleled creative expertise.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="font-bold sm:text-xl md:text-3xl lg:text-4xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl sm:py-1 md:py-3 lg:py-2 xl:py-4 2xl:py-0 3xl:py-10">
                                    Creative
                                </div>
                                <div className="flex font-normal sm:text-xs md:text-base lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-2xl sm:py-2 md:py-4 lg:py-4 xl:py-4 2xl:py-10 lg:h-[120px] xl:h-[130px] 2xl:h-[160px] 3xl:h-[200px]">
                                    <div>
                                        01.
                                    </div>
                                    <div className="flex-1 pl-1">
                                        We combine strategy, design and technology to create impactful solutions that inspire change and shape the future.
                                    </div>
                                </div>
                                <div className="pl-0 lg:pl-10 flex basis-1/2 font-normal sm:text-xs md:text-base lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-2xl">
                                    <div>
                                        02.
                                    </div>
                                    <div className="flex-1 pl-1 px-24">
                                        We focus on real results that amplify your message’s impact.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] bg-white sm:my-3 md:my-4 lg:my-6 xl:my-8 2xl:my-10 3xl:my-20 lg:ml-0 xl:ml-[290px]"></div>
                </div>
                <div className="absolute sm:bottom-1 md:bottom-[-210px] lg:bottom-[-20px] xl:bottom-12 2xl:bottom-16 left-0 px-12">
                    <img src={locationImg} alt="" className="pl-0 xl:pl-[290px]" />
                </div>
            </div>
        </div>
    )
}
export default CreativeCompo;