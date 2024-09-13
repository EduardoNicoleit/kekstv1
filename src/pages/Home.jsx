import React from 'react'
import heroImg from '../assets/img/home/main.png'

const Home = () => {
    return (
        <div className='w-full home'>
            <img src={heroImg} alt="logo" className="h-[898px]" />
            <div className='text-white font-Arial font-bold pt-40'>
                <div className='text-[120px] px-[306px] pb-[50px]'>
                    A selection of work
                </div>
                <div className='h-[0.5px] bg-white w-full'></div>
                <div className='text-3xl px-[306px] pt-16'>
                    Unlocking new narratives in a digital age. The digital landscape is vast, constantly evolving, and ever-challenging. But with challenges come opportunities. Through Strategic Visual Communications, Product & Platform Creation, and Data Visualization, we empower brands to seize these opportunities. With a blend of creativity, technology, and strategy, we're not just designing for the present but envisioning the future.
                </div>
            </div>
        </div>
    )
}

export default Home