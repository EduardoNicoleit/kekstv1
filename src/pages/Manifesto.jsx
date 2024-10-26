import React from "react";
import manifestoVideo from '../assets/video/manifesto.mp4';
import { Divider } from "../components";

const ManifestoCompo = () => {
    return (
        <div className="px-2 lg:px-4 xl:px-[25px] 2xl:px-[45px] pb-0">
            <div className="border-b-[1px] bottom-0 top-0 md:top-2 pb-12 md:pb-16 lg:top-3 xl:top-0 w-full py-6 sm:py-8 xl:py-[50px]">
                <div className="flex text-white">
                    <Divider title="Our manifesto" />
                </div>
                <div>
                    <video
                        src={manifestoVideo}
                        controls
                        className="pt-7 md:pt-[0px] w-full h-full object-cover cursor-pointer max-h-[95vh]"
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