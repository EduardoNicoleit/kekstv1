import React from 'react';
import { Link } from 'react-router-dom';

const Selections = (props) => {
    return (
        <div>
            {props.selectionsData && props.selectionsData.map((data) => (
                <div key={data.id} className={`flex  text-white ${data.id === props.selectionsData.length ? ' pb-16' : ''}`}>
                    <div className='w-[308px] m-0 p-0'>
                    </div>
                    <div className='flex-1 m-0 p-0 borer-white'>
                        <Link to={data.link_url}>
                            <img src={data.img_url} alt="logo" className="h-[440px] w-full cursor-pointer my-5" />
                        </Link>
                        <div className='flex  font-bold  py-6 items-center'>
                            <div className='w-[25%] flex items-center'>
                                <div className='text-4xl font-bold font-Arial'>
                                    {data.title}
                                </div>
                                <div className='flex-1 border-t-[1px] w-1/2 ml-5'></div>
                            </div>
                            <div className='flex-1 font-normal text-2xl border-l-[1px] pl-8 font-Arial'>
                                {data.content}
                            </div>
                        </div>
                        <div className='h-[1px] bg-white my-8'></div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Selections