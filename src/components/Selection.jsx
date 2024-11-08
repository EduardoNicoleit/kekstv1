import React from 'react';
import { Link } from 'react-router-dom';

const Selections = ({ selectionsData }) => {
    return (
        <div>
            {selectionsData && selectionsData.map((data, index) => (
                <div key={data.id} className={`flex flex-col md:flex-row text-white sm:px-0 md:px-0 ${data.id !== 1 ? 'pt-6 lg:pt-8 xl:pt-[60px] 2xl:pt-[2vw]' : 'md:mt-[-40px] lg:mt-[-20px] xl:mt-0'}`}>
                    <div className='flex-1 m-0 p-0 border-white border-b-[1px] mt-6 ml-4 md:ml-[34px] lg:ml-[59px] xl:ml-[100px] 2xl:ml-[308px]'>
                        <div className='overflow-hidden xl:h-[400px] 2xl:h-[24vw]'>
                            <Link to={data.link_url}>
                                <img src={data.img_url} alt="logo" className="hidden xl:block object-cover h-full w-full cursor-pointer transition duration-300 ease-in-out hover:scale-110" />
                                <img src={data.img_url1} alt="logo" className="block md:hidden h-full w-full cursor-pointer transition duration-300 ease-in-out hover:scale-110" />
                                <img src={data.img_url2} alt="logo" className="hidden md:block xl:hidden h-auto w-full cursor-pointer transition duration-300 ease-in-out hover:scale-110" />
                            </Link>
                        </div>
                        <div className='pl-0 md:pl-0 flex flex-col 2xl:flex-row font-bold items-start 2xl:items-center py-8 md:py-6 lg:py-8 xl:py-9 2xl:py-[2.5vw]'>
                            <div className='flex-none w-full flex lg:w-[280px] xl:w-[270px] 2xl:w-[20vw] items-center sm:border-none'>
                                <Link to={data.link_url}>
                                    <div className='text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[34px] 2xl:text-[2vw] font-bold font-Helvetica hover:text-[#7a6b87] pl-0 md:pl-0'>
                                        {data.title}
                                    </div>
                                </Link>
                                <div className='hidden 2xl:block h-[1px] 3xl:h-[1.5px] bg-white ml-0 2xl:ml-[1vw] w-full'></div>
                            </div>
                            <div className='leading-tight pl-0 md:pl-0 pr-5 w-full font-normal text-sm sm:text-sm lg:text-lg xl:text-xl 2xl:text-[20px] 3xl:text-[1.05vw] border-0 border-r-0 2xl:border-l-[1px] 3xl:border-l-[2px] 2xl:px-[2.5vw] font-Helvetica pt-2 md:pt-4 lg:pt-2 2xl:pt-0 3xl:leading-[1.6vw]'>
                                {data.content}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Selections;
