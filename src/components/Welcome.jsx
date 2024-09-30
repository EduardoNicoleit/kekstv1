import React from 'react';
import ExpandImg from '../assets/img/home/clearbg.svg';

const Welcome = () => {
    return (
        <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 welcome">
            <div className="absolute inset-0">
                <img src={ExpandImg} alt="Welcome background" className="w-full h-full object-cover opacity-50" />
            </div>
            <div className="relative z-10 w-full px-[8px] sm:px-6 md:px-[45px] lg:px-[45px] xl:px-[50px]">
                <div className="w-full border-x border-white py-6 sm:py-8 xl:py-[50px]">
                    <div className="w-full max-w-7xl md:ml-[94px] xl:ml-[308px]">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-white px-2">
                            <div className="mb-2 sm:mb-4 whitespace-nowrap">Encourage. <span className="underline">Move.</span></div>
                            <div className="mb-2 sm:mb-4 whitespace-nowrap"><span className="underline">Inspire.</span> Adapt.</div>
                            <div className="mb-2 sm:mb-4 whitespace-nowrap">Expand. React.</div>
                            <div className="mb-2 sm:mb-4 whitespace-nowrap">Attract. <span className="underline">Grow.</span></div>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;