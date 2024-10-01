import React from "react";
import manifestoVideo from '../assets/video/manifesto.mp4';

const ManifestoCompo = () => {
    return (
        <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[50px] pb-0">
            <div className="border-b-[1px] bottom-0 top-0 md:top-2 pb-12 md:pb-16 lg:top-3 xl:top-0 w-full py-6 sm:py-8 xl:py-[50px]">
                <div className="flex text-white">
                    <div className="flex w-full items-center">
                        <div className="h-5 md:h-4 xl:h-[30px] hidden sm:flex w-9 sm:w-6 md:w-[28px] lg:w-[51px] xl:w-[100px] 2xl:w-80 border-r-0 xl:border-r-[1px] relative items-center">
                            <div className="h-[1px] bg-white w-[100px] md:w-[34px] lg:w-[59px] xl:w-[92px] 2xl:w-[300px]"></div>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="font-bold text-[32px] md:text-3xl lg:text-[45px] px-[9px] font-Arial">
                                Our manifesto
                            </div>
                            <div className="h-[1px] flex-1 bg-white">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <video
                        src={manifestoVideo}
                        controls
                        className="w-full pt-7 md:pt-[50px]"
                        alt="Manifesto Video"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default ManifestoCompo;