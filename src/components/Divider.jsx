import React from "react";

const Divider = (props) => {
    return (
        <div className="flex text-white py-0 xk:py-4">
            <div className="flex w-full items-center">
                <div className="h-2 md:h-4 xl:h-[30px] w-80 border-r-[1px] relative flex items-center">
                    <div className="h-[1px] bg-white w-[300px]"></div>
                </div>
                <div className="flex items-center w-full">
                    <div className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-[45px] px-2 font-Arial">
                        {props.title}
                    </div>
                    <div className="h-[1px] flex-1 bg-white">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Divider;