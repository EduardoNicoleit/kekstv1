import React, { useEffect } from "react";
import locationImg from '../assets/img/home/location.png'

const CreativeCompo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="text-white font-Arial relative">
                <div className="bg-[url('assets/img/home/kstc1.svg')] bg-no-repeat bg-cover h-auto w-full text-white font-Arial px-2 lg:px-4 xl:px-[25px] 2xl:px-[50px] bottom-0 top-0 pb-10 md:pb-0">
                    <div className="bottom-0 top-0 w-full">
                        <div className="flex text-white lg:pt-12 xl:pt-[62px] 2xl:pt-[98px]">
                            <div className="flex w-full items-center">
                                <div className="h-5 md:h-4 xl:h-[30px] hidden md:flex w-9 sm:w-6 md:w-[26px] lg:w-[51px] xl:w-[100px] border-r-0 xl:border-r-[1px] relative items-center">
                                    <div className="h-[1px] bg-white md:w-[34px] lg:w-[59px] xl:w-[92px] 2xl:w-[300px]"></div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="font-bold text-[32px] md:text-3xl lg:text-[45px] px-[9px] font-Arial">
                                        Get to know us
                                    </div>
                                    <div className="h-[1px] flex-1 bg-white">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="font-Arial text-[17px] md:text-[18px] lg:text-[28px] xl:text-4xl pl-[9px] md:pl-[34px] lg:pl-[59px] xl:pl-[100px] mr-2 md:mr-20 py-6 lg:py-12 xl:py-[60px]">
                            What distinguishes us is the unique fusion of Kekst CNC's renowned expertise <br />in strategic communication worldwide, coupled with our prowess in design thinking, innovative solutions, and impactful activation strategies. This combination guarantees seamless execution and unparalleled results across every project dimension.
                        </div>
                        <div className="pl-[9px] md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px] xl:pr-[90px] 2xl:pr-[290px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 font-Arial">
                                <div>
                                    <div className="font-bold text-[23px] md:text-5xl lg:text-[45px] xl:text-[93px] 2xl:text-8xl 3xl:text-9xl pt-0 md:pt-4 lg:pt-0 pb-6 md:pb-8 lg:pb-12 xl:pb-[60px]">
                                        Global
                                    </div>
                                    <div className="flex font-normal text-[17px] lg:text-lg xl:text-2xl lg:h-[120px] xl:h-[130px] 2xl:h-[160px]">
                                        <div>
                                            01.
                                        </div>
                                        <div className="flex-1 pl-1 px-10">
                                            Our creative team is a global force of the <br /> best and brightest minds in the industry.
                                        </div>
                                    </div>
                                    <div className="pt-8 lg:pt-0 flex font-normal text-[17px] lg:text-lg xl:text-2xl pb-8 xl:pb-0">
                                        <div>
                                            02.
                                        </div>
                                        <div className="flex-1 pl-1 px-10">
                                            By combining forces across locations, we bring our clients’ visions to life through seamless collaboration and unparalleled creative expertise.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-[23px] md:text-5xl lg:text-[45px] xl:text-[93px] 2xl:text-8xl 3xl:text-9xl pt-0 md:pt-4 lg:pt-0 pb-6 md:pb-8 lg:pb-12 xl:pb-[60px]">
                                        Creative
                                    </div>
                                    <div className="flex font-normal text-[17px] lg:text-lg xl:text-2xl lg:h-[120px] xl:h-[130px] 2xl:h-[160px]">
                                        <div>
                                            01.
                                        </div>
                                        <div className="flex-1 pl-1 px-10">
                                            We combine strategy, design and technology to create impactful solutions that inspire change and shape the future.
                                        </div>
                                    </div>
                                    <div className="pt-8 lg:pt-0 pl-0 lg:pl-4 flex basis-1/2 font-normal text-[17px] lg:text-lg xl:text-2xl pb-8 xl:pb-0">
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
                        <div className="h-[1px] bg-white sm:my-3 md:my-4 lg:my-6 xl:my-8 2xl:my-10 3xl:my-20 md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:ml-[290px]"></div>
                    </div>
                </div>
                <div className="bottom-0 top-[100px] md:top-20 px-[9px] lg:px-4 xl:px-[25px] 2xl:px-[50px]">
                    <div>
                        <img src={locationImg} alt="keskt..." className="pl-[9px] md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreativeCompo;