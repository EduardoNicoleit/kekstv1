import React from 'react';
import { Link } from 'react-router-dom';

const Selections = ({ selectionsData }) => {
    return (
        <div className="space-y-8">
            {selectionsData && selectionsData.map((data, index) => (
                <div key={data.id} className={`flex flex-col md:flex-row text-white ${index === selectionsData.length - 1 ? 'pb-16' : ''}`}>
                    <div className='w-full md:w-[308px] m-0 p-0'>
                    </div>
                    <div className='flex-1 m-0 p-0 border-white'>
                        <Link to={data.link_url}>
                            <img src={data.img_url} alt="logo" className="h-auto w-full cursor-pointer my-5" />
                        </Link>
                        <div className='flex flex-col md:flex-row font-bold py-6 items-center'>
                            <div className='w-full md:w-[25%] flex items-center'>
                                <div className='text-2xl md:text-4xl font-bold font-Arial'>
                                    {data.title}
                                </div>
                                <div className='flex-1 border-t-[1px] w-1/2 ml-5'></div>
                            </div>
                            <div className='flex-1 font-normal text-lg md:text-2xl border-l-[1px] pl-8 font-Arial'>
                                {data.content}
                            </div>
                        </div>
                        <div className='h-[1px] bg-white my-8'></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Selections;