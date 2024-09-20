import React from "react";

const Divider = ({ title }) => {
    return (
        <div className="flex text-white py-2 sm:py-4">
            <div className="flex w-full items-center">
                <div className="hidden sm:block h-[30px] w-20 sm:w-40 md:w-80 border-r relative flex items-center">
                    <div className="h-[1px] bg-white w-full"></div>
                </div>
                <div className="flex items-center w-full">
                    <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[45px] px-2 font-Arial">
                        {title}
                    </div>
                    <div className="h-[1px] flex-1 bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Divider;