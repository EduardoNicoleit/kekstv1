import React from 'react';
import { Link } from 'react-router-dom';

const Selections = ({ selectionsData }) => {
    return (
        <div className="sm:space-y-0 md:space-y-1 lg:space-y-8">
            {selectionsData && selectionsData.map((data, index) => (
                <div key={data.id} className={`flex flex-col lg:flex-row text-white ${index === selectionsData.length - 1 ? ' pb-0 xl:pb-10' : ''}`}>
                    <div className='w-full md:w-[308px] m-0 p-0'>
                    </div>
                    <div className='flex-1 m-0 p-0 border-white'>
                        <Link to={data.link_url}>
                            <img src={data.img_url} alt="logo" className="h-auto w-full cursor-pointer sm:my-0 md:my-1 lg:my-3 xl:my-3 2xl:my-3 3xl:my-5 " />
                        </Link>
                        <div className='flex flex-col md:flex-row font-bold sm:py-0 md:py-0 lg:py-2 xl:py-1 2xl:py-1 3xl:py-6 items-center'>
                            <div className='w-full md:w-[25%] flex items-center'>
                                <div className='text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl font-bold font-Arial'>
                                    {data.title}
                                </div>
                                <div className='flex-1 border-t-[1px] w-1/2 ml-5'></div>
                            </div>
                            <div className='flex-1 w-full font-normal text-xs sm:text-xs md:text-sm lg:text-lg xl:text-2xl border-l-[1px] pl-8 font-Arial'>
                                {data.content}
                            </div>
                        </div>
                        <div className='h-[1px] bg-white my-2 sm:my-[6px] xl:my-3 2xl:my-5'></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Selections;