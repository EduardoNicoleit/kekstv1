import React from 'react';
import { Link } from 'react-router-dom';

const Selections = ({ selectionsData }) => {
    return (
        <div>
            {selectionsData && selectionsData.map((data, index) => (
                <div key={data.id} className={`flex flex-col md:flex-row text-white sm:px-0 md:px-0  ${data.id !== 1 ? ' pt-6 lg:pt-8 xl:pt-[60px] 2xl:pt-8' : ' md:mt-[-40px] lg:mt-[-20px] xl:mt-0 lg:pt-0 xl:pt-[50px]'}`}>
                    <div className='w-[9px] md:w-[34px] lg:w-[59px] xl:w-[100px] 2xl:w-[308px] flex-none'>
                    </div>
                    <div className='flex-1 m-0 p-0 border-white border-b-[1px]'>
                        <Link to={data.link_url}>
                            <img src={data.img_url} alt="logo" className="hidden xl:block h-auto w-full cursor-pointer" />
                            <img src={data.img_url1} alt="logo" className="block md:hidden h-auto w-full cursor-pointer" />
                            <img src={data.img_url2} alt="logo" className="hidden md:block xl:hidden h-auto w-full cursor-pointer" />
                        </Link>
                        <div className='pl-[9px] md:pl-0 flex flex-col 2xl:flex-row font-bold items-start 2xl:items-center
                        py-8 md:py-6 lg:py-8 xl:py-9 2xl:py-[38px] '>
                            <div className='flex-none w-full flex lg:w-[280px] xl:w-[270px] 2xl:w-[514px] items-center sm:border-none'>
                                <div className='text-[21px] sm:text-2xl md:text-[21px] lg:text-4xl xl:text-4xl font-bold font-Arial'>
                                    {data.title}
                                </div>
                                <div className='hidden 2xl:block h-[1px] bg-white ml-0 2xl:ml-5 w-full'></div>
                            </div>
                            <div className='w-full font-normal text-[17px] sm:text-xl md:text-lg xl:text-2xl border-0 border-r-0 2xl:border-l-[1px] px-0 2xl:px-8 font-Arial pt-2 md:pt-4 lg:pt-2 2xl:pt-0'>
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