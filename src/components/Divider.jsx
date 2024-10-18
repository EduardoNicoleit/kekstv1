import React from "react";

const Divider = (props) => {
    return (
        <div className="flex w-full items-center">
            <div className="flex-none h-5 md:h-4 xl:h-[30px] w-9 hidden md:flex sm:w-6 md:w-[25px] lg:w-[50px] xl:w-[91px] 2xl:w-[299px] border-r-0 xl:border-r-[1px] relative items-center">
                <div className="h-[1px] bg-white md:w-[34px] lg:w-[59px] xl:w-[91px] 2xl:w-[299px]"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="font-bold text-[32px] md:text-3xl lg:text-[45px] xl:text-[50px] 2xl:text-[52px] px-5 font-Helvetica">
                    {props.title}
                </div>
                <div className="h-[1px] flex-1 bg-white">
                </div>
            </div>
        </div>
    )
}

export default Divider;