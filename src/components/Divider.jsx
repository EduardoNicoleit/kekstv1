import React from "react";

const Divider = (props) => {
    return (
        <div className="flex w-full items-center py-6  md:py-[50px] 2xl:py-[2.5vw]">
            <div className="flex-none h-5 md:h-4 xl:h-[30px] 2xl:h-[2.0vw] w-9 hidden md:flex sm:w-6 md:w-[25px] lg:w-[50px] xl:w-[91px] 2xl:w-[299px] border-r-0 xl:border-r-[1px] 3xl:border-r-[2px] relative items-center">
                <div className="h-[1px] 3xl:h-[2px] bg-white md:w-[34px] lg:w-[59px] xl:w-[91px] 2xl:w-[299px]"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="font-bold text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[2.5vw] pl-4 md:pl-2 2xl:pl-3 pr-5 font-Helvetica 2xl:pt-[4vh] 2xl:pb-[4vh]">
                    {props.title}
                </div>
                <div className="h-[1px] 3xl:h-[2px] flex-1 bg-white"></div>
            </div>
        </div>
    )
}

export default Divider;
