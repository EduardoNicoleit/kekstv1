import React from 'react';
import Logo from '../assets/img/navbar/logo_02.png';
import { Link as ScrollLink } from 'react-scroll';

const Contact = () => {
    return (
        <div>
            <div className='px-2 sm:px-6 md:px-[33px] xl:px-[45px]'>
                <div className='relative pt-8 lg:pt-12 pb-8 lg:pb-12 flex flex-col items-center xl:items-stretch'>
                    <div className='grid lg:grid-cols-5 text-white font-Arial text-lg px-0 lg:px-16 w-full'>
                        <div className='text-start pl-6 sm:pl-0 pt-2'>
                            <ScrollLink to="welcome" smooth={true} duration={500}>
                                <img src={Logo} alt="logo" className='cursor-pointer w-[166.25px] h-[57.6375px] transition duration-300 ease-in-out hover:scale-110' />
                            </ScrollLink>
                        </div>
                        <div className='grid col-span-3 items-center w-full pl-6 sm:pl-0 md:pl-0 lg:pl-14 xl:pl-0 pt-2'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 sm:mx-auto xl:mx-0 pt-4 lg:pt-0 w-full lg:w-auto'>
                                <div className=''>
                                    <div className='hover:text-[#7a6b87]'>
                                        <ScrollLink to="expertise" smooth={true} duration={500}>
                                            Expertise
                                        </ScrollLink>
                                    </div>
                                    <div className='py-4 xl:py-2 hover:text-[#7a6b87]'>
                                        <ScrollLink to="works" smooth={true} duration={500}>
                                            Our Work
                                        </ScrollLink>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='hover:text-[#7a6b87]'>
                                        <ScrollLink to="creative" smooth={true} duration={500}>
                                            Get to Know Us
                                        </ScrollLink>
                                    </div>
                                    <div className='py-4 xl:py-2 hover:text-[#7a6b87]'>
                                        <ScrollLink to="manifesto" smooth={true} duration={500}>
                                            Our Manifesto
                                        </ScrollLink>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='hover:text-[#7a6b87] lg:pr-12 xl:pr-2'>
                                        <ScrollLink to="process" smooth={true} duration={500}>
                                            Our Design Thinking Process
                                        </ScrollLink>
                                    </div>
                                    <div className='py-4 xl:pt-2 hover:text-[#7a6b87]'>
                                        <ScrollLink to="lets-talk" smooth={true} duration={500}>
                                            Let's Talk
                                        </ScrollLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:py-0 hidden lg:block my-0 xl:my-auto px-0 xl:px-12'>
                            <a href="mailto:creative@kekstcnc.com">
                                <div className='pb-4 xl:pt-3 lg:pt-2 md:pt-2 flex items-center gap-2'>
                                    <div>
                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.1504 0H2.15039C1.05039 0 0.160391 0.9 0.160391 2L0.150391 14C0.150391 15.1 1.05039 16 2.15039 16H18.1504C19.2504 16 20.1504 15.1 20.1504 14V2C20.1504 0.9 19.2504 0 18.1504 0ZM18.1504 14H2.15039V4L10.1504 9L18.1504 4V14ZM10.1504 7L2.15039 2H18.1504L10.1504 7Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className='font-Helvetica text-lg hover:text-[#7a6b87]'>
                                        creative@kekstcnc.com
                                    </div>
                                </div>
                            </a>
                            <div className='flex gap-10 pt-4 xl:mt-0'>
                                <a className='hover:scale-110' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    {/* LinkedIn SVG */}
                                </a>
                                <a className='hover:scale-110' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    {/* Twitter SVG */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='px-2 relative block lg:hidden w-screen my-4'>
                        <div className='absolute h-[1px] block bg-white tom-10 bottom-0 w-[calc(100%-16px)] left-2 md:left-4 md:w-[calc(100%-32px)] sm:left-4 sm:w-[calc(100%-32px)]'>
                        </div>
                    </div>
                    <div className='pl-6 sm:pl-0 grid grid-cols-1 lg:grid-cols-5 lg:gap-2 xl:grid-cols-5 text-white font-Arial text-lg pt-0 lg:pt-10 xl:pt-10 mx-auto xl:mx-0 px-0 lg:px-16 
                    pb-0 lg:pb-2 xl:pb-8 2xl:pb-12 w-full lg:w-auto'>
                        <div></div>
                        <div className='py-1 xl:py-0 lg:text-center lg:py-2'>
                            © 2023 Kekst CNC
                        </div>
                        <div className='py-2 xl:py-0 lg:text-center'>
                            Privacy Notice
                        </div>
                        <div className='py-2 xl:py-0 lg:text-center'>
                            All Rights Reserved
                        </div>
                        <div></div>
                    </div>
                    <div className='pl-6 sm:pl-0 px-0 lg:py-5 flex justify-start w-full lg:hidden text-white gap-8 md:gap-[300px] sm:gap-[280px] md:mr:0'>
                        <a href="mailto:creative@kekstcnc.com" target="_blank" rel="noopener noreferrer" className='py-2'>
                            <div className='flex items-center gap-1'>
                                <div>
                                    {/* Email SVG */}
                                </div>
                                <div className='font-Helvetica text-lg'>
                                    creative@kekstcnc.com
                                </div>
                            </div>
                        </a>
                        <div className='flex gap-4 py-2 xl:mt-0 items-center hover:cursor-pointer'>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='px-5'>
                                {/* LinkedIn SVG */}
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                {/* Twitter SVG */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
