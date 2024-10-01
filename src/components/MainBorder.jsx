import React from "react";

const MainBorder = () => {
    return (
        <>
            <div className="absolute w-[1px] left-2 lg:left-4 xl:left-[25px] 2xl:left-[45px] 3xl:left-[50px] border bg-white top-2 lg:top-4 xl:top-[25px] 2xl:top-[45px] 3xl:top-[50px] h-[calc(100%-16px)] lg:h-[calc(100%-32px)] xl:h-[calc(100%-50px)] 2xl:h-[calc(100%-90px)] 3xl:h-[calc(100%-100px)]"></div>
            <div className="absolute w-[1px] right-2 lg:right-4 xl:right-[25px] 2xl:right-[45px] 3xl:right-[50px] border bg-white top-2 lg:top-4 xl:top-[25px] 2xl:top-[45px] 3xl:top-[50px] h-[calc(100%-16px)] lg:h-[calc(100%-32px)] xl:h-[calc(100%-50px)] 2xl:h-[calc(100%-90px)]  3xl:h-[calc(100%-100px)] "></div>
            <div className="absolute h-[1px] left-2 lg:left-4 xl:left-[25px] 2xl:left-[45px] 3xl:left-[50px] border bg-white top-2 lg:top-4 xl:top-[25px] 2xl:top-[45px] 3xl:top-[50px] w-[calc(100%-16px)] lg:w-[calc(100%-32px)] xl:w-[calc(100%-50px)] 2xl:w-[calc(100%-90px)] 3xl:w-[calc(100%-100px)]"></div>
            <div className="absolute h-[1px] left-2 lg:left-4 xl:left-[25px] 2xl:left-[45px] 3xl:left-[50px] border bg-white bottom-2 lg:bottom-4 xl:bottom-[25px] 2xl:bottom-[45px] 3xl:bottom-[50px] w-[calc(100%-16px)] lg:w-[calc(100%-32px)] xl:w-[calc(100%-50px)] 2xl:w-[calc(100%-90px)] 3xl:w-[calc(100%-100px)]"></div>
        </>
    )
}

export default MainBorder