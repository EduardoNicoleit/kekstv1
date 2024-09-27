import React from 'react';
import { Link } from 'react-router-dom';

const Selections = ({ selectionsData }) => {
    return (
        <div className="space-y-6 xl:space-y-8">
            {selectionsData && selectionsData.map((data, index) => (
                <div key={data.id} className="flex flex-col md:flex-row text-white sm:px-9 md:px-0">
                    <div className='w-0 md:w-[94px] xl:w-[90px] 2xl:w-[308px]'>
                    </div>
                    <div className='flex-1 m-0 p-0 border-white'>
                        <Link to={data.link_url}>
                            <img src={data.img_url} alt="logo" className="hidden sm:block h-auto w-full cursor-pointer" />
                            <img src={data.img_url1} alt="logo" className="block sm:hidden h-auto w-full cursor-pointer" />
                        </Link>
                        <div className='flex flex-col xl:flex-row font-bold py-5 sm:py-5 xl:py-6 items-center px-4 sm:px-0'>
                            <div className='w-full flex xl:w-[230px] 2xl:w-[514px] items-center sm:border-none'>
                                <div className='text-[21px] sm:text-2xl lg:text-4xl xl:text-4xl font-bold font-Arial'>
                                    {data.title}
                                </div>
                                <div className='hidden 2xl:block h-[1px] bg-white ml-5 w-full'></div>
                            </div>
                            <div className='w-full font-normal text-[17px] sm:text-xl lg:text-2xl border-0 border-r-0 2xl:border-l-[1px] pl-0 xl:pl-8 font-Arial py-2 lg:py-0'>
                                {data.content}
                            </div>
                        </div>
                        <div className={`h-[1px] bg-white 2xl:mt-10 ${selectionsData.length === index + 1 ? " hidden" : ""}`}>
                            {data.length}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Selections;