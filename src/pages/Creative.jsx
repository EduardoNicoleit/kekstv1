import React from "react";
import locationImg from '../assets/img/home/location.png'
import lineImg from '../assets/img/home/line.png'
import { Divider } from "../components";

const CreativeCompo = () => {
    return (
        <div>
            <div className="text-white font-Helvetica relative">
                <div className="bg-[url('assets/img/home/creative_bg.png')] bg-no-repeat bg-cover text-white font-Helvetica px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] bottom-0 top-0 pb-10 md:pb-0">
                    <div className="bottom-0 top-0 w-full pt-14">
                        <div className="flex text-white lg:pt-12 xl:pt-[62px] 2xl:pt-[98px]">
                            <Divider title="Get to know us" />
                        </div>
                        <div className="leading-relaxed font-Helvetica text-[17px] md:text-[18px] lg:text-[28px] xl:text-4xl pl-5 pr-4 md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px] mr-2 md:mr-20 py-10 pb-16 lg:py-[100px] xl:py-[120px] 2xl:py-[160px]">
                            What distinguishes us is the unique fusion of Kekst CNC's renowned expertise in strategic communication worldwide, coupled with our prowess in design thinking, innovative solutions, and impactful activation strategies. This combination guarantees seamless execution and unparalleled results across every project dimension.
                        </div>
                        <div className="pl-5 md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px] xl:pr-[90px] 2xl:pr-[90px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 font-Helvetica sm:gap-10 md:gap-10 lg:gap-10 xl:gap-18 2xl:gap-18">
                                <div>
                                    <div className="font-bold text-[40px] md:text-6xl lg:text-[60px] xl:text-[105px] 2xl:text-[128px] 3xl:text-[128px] pt-0 md:pt-4 lg:pt-0 pb-6 md:pb-8 lg:pb-12 xl:pb-[60px]">
                                        Global
                                    </div>
                                    <div className="flex font-normal text-[17px] lg:text-lg xl:text-2xl lg:h-[120px] xl:h-[130px] 2xl:h-[160px]">
                                        <div>
                                            01.
                                        </div>
                                        <div className="flex-1 pl-2 px-4">
                                            Our creative team is a global force of the <br /> best and brightest minds in the industry.
                                        </div>
                                    </div>
                                    <div className="pt-8 lg:pt-0 flex font-normal text-[17px] lg:text-lg xl:text-2xl pb-8 xl:pb-0">
                                        <div>
                                            02.
                                        </div>
                                        <div className="flex-1 pl-2 px-4">
                                            By combining forces across locations, we bring our clients’ visions to life through seamless collaboration and unparalleled creative expertise.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-[40px] md:text-6xl lg:text-[60px] xl:text-[105px] 2xl:text-[128px] 3xl:text-[128px] pt-0 md:pt-4 lg:pt-0 pb-6 md:pb-8 lg:pb-12 xl:pb-[60px]">
                                        Creative
                                    </div>
                                    <div className="flex font-normal text-[17px] lg:text-lg xl:text-2xl lg:h-[120px] xl:h-[130px] 2xl:h-[160px]">
                                        <div>
                                            01.
                                        </div>
                                        <div className="flex-1 pl-2 px-4">
                                            We combine strategy, design and technology to create impactful solutions that inspire change and shape the future.
                                        </div>
                                    </div>
                                    <div className="pt-8 lg:pt-0 pl-0 lg:pl-4 flex basis-1/2 font-normal text-[17px] lg:text-lg xl:text-2xl pb-8 xl:pb-0">
                                        <div>
                                            02.
                                        </div>
                                        <div className="flex-1 pl-2 px-4">
                                            We focus on real results that amplify your message’s impact.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 md:mb-[20px] mt-[50px] md:mt-[60px] lg:mt-[70px] xl:mt-[100px] 2xl:mt-[140px] pl-0 md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px]">
                            <div className="h-[1px] bg-white "></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 2xl:grid-cols-3 gap-0 2xl:gap-[150px]">
                        {/* Left Section */}
                        <div className="sm:pb-6 lg:pb-10 xl:pb-20 pl-[20px] md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px]">
                            <div className="flex items-center">
                                <div
                                    id="lets-talk"
                                    className="flex-none font-Helvetica font-bold text-[32px] md:text-[40px] lg:text-[55px] xl:text-[65px] 2xl:text-[65px] leading-tight 2xl:leading-none"
                                >
                                    Let’s talk
                                </div>
                                <div className="block sm:hidden h-[1px] bg-white w-full ml-2"></div>
                            </div>
                            <div className="sm:pl-0 w-[200px] sm:w-[300px] xl:w-[350px]">
                                <img src={lineImg} alt="Divider Line" />
                            </div>
                            <a href="mailto:creative@kekstcnc.com">
                                <div className="sm:pl-0 flex items-center gap-2 pt-4 sm:pt-3 lg:pt-6 xl:pt-10 2xl:pt-[57px] hover:text-[#7a6b87]">
                                    <div className="flex-none">
                                        <svg
                                            width="21"
                                            height="16"
                                            viewBox="0 0 21 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-label="Email icon"
                                        >
                                            <title>Email icon</title>
                                            <path
                                                d="M18.1504 0H2.15039C1.05039 0 0.160391 0.9 0.160391 2L0.150391 14C0.150391 15.1 1.05039 16 2.15039 16H18.1504C19.2504 16 20.1504 15.1 20.1504 14V2C20.1504 0.9 19.2504 0 18.1504 0ZM18.1504 14H2.15039V4L10.1504 9L18.1504 4V14ZM10.1504 7L2.15039 2H18.1504L10.1504 7Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className='font-Helvetica sm:text-[17px] lg:text-[20px] xl:text-2xl'>
                                        creative@kekstcnc.com
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Right Section spanning middle and right columns */}
                        <div className="col-span-2 pr-1 pt-5 pb-1 pl-[20px] xl:pl-24 2xl:pr-[0px] flex items-center justify-center">
                            <img
                                src={locationImg}
                                alt="Location"
                                className="h-max-[500px] w-auto object-cover hover:scale-110 transition duration-500 ease-in-out"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CreativeCompo;