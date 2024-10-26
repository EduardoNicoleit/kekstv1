import React from 'react';
import { Link } from 'react-router-dom';

const Selections = ({ selectionsData }) => {
    return (
        <div className="overflow-hidden">
            {selectionsData && selectionsData.map((data, index) => (
                <div
                    key={data.id}
                    className={`flex flex-col md:flex-row text-white sm:px-0 md:px-0 ${data.id !== 1
                        ? 'pt-[50px] lg:pt-[60px] xl:pt-[72px] 2xl:pt-0'
                        : 'pt-[50px] lg:pt-0'
                        }`}
                >
                    <div className="w-0 lg:w-[34px] xl:w-[65px] 2xl:w-[308px]"></div>
                    <div className="flex-1 m-0 p-0 border-white border-b-[1px] 3xl:border-b-[2px] lg:border-b-0">
                        <Link to={data.link_url}>
                            <div className="relative overflow-hidden w-full lg:h-[400px] xl:h-[410px] 2xl:h-[24vw]">
                                <img
                                    src={data.img_url}
                                    alt="logo"
                                    className="hidden sm:block h-full w-full pt-8 2xl:pt-[2vw] cursor-pointer transition duration-300 ease-in-out hover:scale-105 object-cover"
                                />
                                <img
                                    src={data.mobile_img_url}
                                    alt="logo"
                                    className="block sm:hidden h-full w-full cursor-pointer transition duration-300 ease-in-out hover:scale-105 object-cover"
                                />
                            </div>
                        </Link>
                        <div
                            className="flex flex-col lg:flex-row font-bold items-center px-[33px] lg:px-0 py-0 sm:py-5 md:py-8 xl:py-[26px] 2xl:py-[2.5vw] mt-8 md:mt-0 mb-12 md:mb-0"
                        >
                            <div
                                className="w-full flex lg:w-[280px] xl:w-[270px] flex-none 2xl:w-[20vw] items-center sm:border-none pb-2 xl:pb-0"
                            >
                                <div
                                    className="md:text-[21px] lg:text-[30px] xl:text-4xl 2xl:text-[2vw] font-bold font-Helvetica 2xl:pr-[1vw] 3xl:leading-[2.5vw]"
                                >
                                    {data.title}
                                </div>
                                <div
                                    className="hidden 2xl:block h-[1px] 3xl:h-[2px] bg-white ml-5 w-full 2xl:ml-[1vw]"
                                ></div>
                            </div>
                            <div
                                className="leading-tight pl-0 md:pl-0 pr-5 w-full font-normal text-[3.2vw] sm:text-sm lg:text-lg xl:text-xl 2xl:text-[20px] 3xl:text-[1.05vw] border-0 border-r-0 2xl:border-l-[1px] 3xl:border-l-[2px] 2xl:px-[2.5vw] font-Helvetica pt-2 md:pt-4 lg:pt-2 2xl:pt-0 3xl:leading-[1.6vw]"
                            >
                                {data.content}
                            </div>
                        </div>
                        {selectionsData.length !== index + 1 && (
                            <div className="h-[1px] bg-white hidden lg:block mt-0 2xl:mt-2"></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Selections;
