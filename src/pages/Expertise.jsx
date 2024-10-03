import React from "react";
import { ExpertiseSection, Divider } from "../components";

const Expertise = () => {
    return (
        <div className="">
            <div className="bg-[url('assets/img/home/expertise_bg.png')] bg-inherit bg-no-repeat bg-cover w-full px-2 lg:px-4 xl:px-[25px] 2xl:px-[50px]">
                <div className="bottom-0 top-0 w-full border-x-[1px] xl:border-none border-white py-6 sm:py-8 xl:py-[50px]">
                    <div className="flex text-white">
                        <Divider title="Expertise" />
                    </div>
                    <div className="flex">
                        <div className="w-0 md:w-[34px] lg:w-[59px] xl:w-[100px] 2xl:w-[308px]"></div>
                        <div className="flex-1 sm:px-0">
                            <ExpertiseSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise;