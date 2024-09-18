import React from 'react';

const Selections = (props) => {
    return (
        <div>
            {props.selectionsData && props.selectionsData.map((data) => (
                <div key={data.id} className={`flex  text-white ${data.id === props.selectionsData.length ? ' pb-16' : ''}`}>
                    <div className='w-[290px] m-0 p-0'>
                    </div>
                    <div className='flex-1 m-0 p-0 border-b-[1px]'>
                        <img src={data.img_url} alt="logo" className="h-[440px] w-full cursor-pointer" />
                        <div className='flex  font-bold  py-8 items-center'>
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
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Selections