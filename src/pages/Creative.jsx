import React from "react";
import { Divider } from "../components";
import locationImg from '../assets/img/home/location.png'
import creativeImg from '../assets/img/home/creative_bg.png'

const CreativeCompo = () => {
    return (
        <div>
            <div className="text-white font-Arial p-11 relative">
                <img src={creativeImg} alt="" />
                <div className="absolute bottom-0 left-0 top-28 px-12">
                    <Divider title="Get to Know us" />
                    <div className="font-Arial text-4xl ml-[308px] mr-20 py-10">
                        What distinguishes us is the unique fusion of Kekst CNC's renowned expertise <br />in strategic communication worldwide, coupled with our prowess in design thinking, innovative solutions, and impactful activation strategies. This combination guarantees seamless execution and unparalleled results across every project dimension.
                    </div>
                    <div className="px-[290px]">
                        <div className="grid grid-cols-1 xl:grid-cols-2 font-Arial py-5">
                            <div>
                                <div className="font-bold text-9xl py-10">
                                    Global
                                </div>
                                <div className="flex font-normal text-2xl py-10 h-[200px]">
                                    <div>
                                        01.
                                    </div>
                                    <div className="flex-1 pl-1">
                                        Our creative team is a global force of the <br /> best and brightest minds in the industry.
                                    </div>
                                </div>
                                <div className="flex font-normal text-2xl">
                                    <div>
                                        02.
                                    </div>
                                    <div className="flex-1 pl-1 px-20">
                                        By combining forces across locations, we bring our clients’ visions to life through seamless collaboration and unparalleled creative expertise.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-9xl py-10">
                                    Creative
                                </div>
                                <div className="flex font-normal text-2xl py-10 h-[200px]">
                                    <div>
                                        01.
                                    </div>
                                    <div className="flex-1 pl-1">
                                        We combine strategy, design and technology to create impactful solutions that inspire change and shape the future.
                                    </div>
                                </div>
                                <div className="pl-10 flex basis-1/2 font-normal text-2xl">
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
                    <div className="h-[1px] bg-white my-20 ml-[290px]"></div>
                </div>
                <div className="absolute bottom-20 left-0 px-12">
                    <img src={locationImg} alt="" className="pl-[290px]" />
                </div>
            </div>
        </div>
    )
}
export default CreativeCompo;