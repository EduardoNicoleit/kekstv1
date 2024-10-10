import React from 'react';
import Logo from '../assets/img/navbar/logo_02.png';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className='px-2 sm:px-6 md:px-[33px] xl:px-[45px]'>
                <div className='relative pt-8 lg:pt-12 pb-8 lg:pb-12 flex flex-col items-center xl:items-stretch'>
                    <div className='grid lg:grid-cols-5 text-white font-Arial text-lg px-0 lg:px-16 w-full'>
                        <div className='text-start pl-6 sm:pl-0'>
                            <Link to="/home">
                                <img src={Logo} alt="logo" className='cursor-pointer w-[166.25px] h-[57.6375px] transition duration-300 ease-in-out hover:scale-110' />
                            </Link>
                        </div>
                        <div className='grid col-span-3 items-center w-full pl-6 sm:pl-0 md:pl-0 lg:pl-14 xl:pl-0'>
                            <div className='grid grid-cols-1 xl:grid-cols-3 mt-4 sm:mx-auto xl:mx-0 pt-4 lg:pt-0 w-full lg:w-auto'>
                                <div className=''>
                                    <div className='hover:text-[#7a6b87]'>
                                        <Link to="/">Expertise</Link>
                                    </div>
                                    <div className='py-4 xl:py-2 hover:text-[#7a6b87]'>
                                        <Link to="/">Our work</Link>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='hover:text-[#7a6b87]'>
                                        <Link to="/">Get to know us</Link>
                                    </div>
                                    <div className='py-4 xl:py-2 hover:text-[#7a6b87]'>
                                        <Link to="/">Our Manifesto</Link>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='hover:text-[#7a6b87]'>
                                        <Link to="/">Our design thinking process</Link>
                                    </div>
                                    <div className='pt-4 xl:pt-2 hover:text-[#7a6b87]'>
                                        <Link to="/">Let's talk</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sm:py-4 md:py-4 lg:py-0 hidden lg:block my-0 xl:my-auto px-0 xl:px-12'>
                            <a href="mailto:creative@kekstcnc.com">
                                <div className='flex items-center gap-2'>
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
                            <div className='flex gap-10 py-2 mt-3 xl:mt-0'>
                                <a className='hover:scale-110' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M28.151 7.3239C28.151 3.29248 24.8525 0 20.8272 0H7.47463C3.44321 0 0.150879 3.29858 0.150879 7.3239V20.6767C0.150879 24.702 3.44931 28 7.47463 28H20.8272C24.8586 28 28.151 24.702 28.151 20.6767V7.3239ZM10.9869 20.1023H8.27485V11.3921H10.9869V20.1023ZM9.63085 10.2068C8.76349 10.2068 8.06107 9.50478 8.06107 8.63741C8.06107 7.77004 8.76349 7.06741 9.63085 7.06741C10.4982 7.06741 11.2007 7.77004 11.2007 8.63741C11.2007 9.49867 10.4982 10.2068 9.63085 10.2068ZM21.1326 20.1023H18.4267V15.8695C18.4267 14.8555 18.4084 13.5604 17.0218 13.5604C15.6108 13.5604 15.3971 14.66 15.3971 15.7961V20.1023H12.6911V11.3921H15.2871V12.5833H15.3238C15.6841 11.8992 16.5698 11.1779 17.8892 11.1779C20.6318 11.1779 21.1387 12.9799 21.1387 15.3254V20.1023H21.1326Z" fill="white" />
                                    </svg>
                                </a>
                                <a className='hover:scale-110' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="logo 2" clipPath="url(#clip0_291_15469)">
                                            <path id="Vector" d="M16.22 11.85L26.2714 0H23.8895L15.162 10.2892L8.19125 0H0.151367L10.6924 15.5591L0.151367 27.9856H2.53335L11.7499 17.1199L19.1115 27.9856H27.1514L16.2194 11.85H16.22ZM12.9576 15.6962L11.8896 14.1468L3.39161 1.81862H7.0502L13.9081 11.7679L14.9762 13.3172L23.8907 26.2497H20.2321L12.9576 15.6967V15.6962Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_291_15469">
                                                <rect width="27" height="28" fill="white" transform="translate(0.151367)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='px-2 relative block lg:hidden w-screen my-8'>
                        <div className='absolute h-[1px] block bg-white tom-10 bottom-0 w-[calc(100%-16px)]'>
                        </div>
                    </div>
                    <div className='pl-6 sm:pl-0 grid grid-cols-1 xl:grid-cols-5 text-white font-Arial text-lg pt-0 lg:pt-10 xl:pt-10 mx-auto xl:mx-0 px-0 lg:px-16 
                    pb-0 lg:pb-2 xl:pb-8 2xl:pb-12 w-full lg:w-auto'>
                        <div></div>
                        <div className='py-1 xl:py-0'>
                            © 2023 Kekst CNC
                        </div>
                        <div className='py-2 xl:py-0'>
                            Privacy Notice
                        </div>
                        <div className='py-2 xl:py-0'>
                            All Rights Reserved
                        </div>
                        <div></div>
                    </div>
                    <div className='pl-6 sm:pl-0 px-0 lg:py-5 gap-12 flex gap-6 justify-start w-full lg:hidden text-white'>
                        <a href="mailto:creative@kekstcnc.com" target="_blank" rel="noopener noreferrer" className='py-2'>
                            <div className='flex items-center gap-1'>
                                <div>
                                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.1504 0H2.15039C1.05039 0 0.160391 0.9 0.160391 2L0.150391 14C0.150391 15.1 1.05039 16 2.15039 16H18.1504C19.2504 16 20.1504 15.1 20.1504 14V2C20.1504 0.9 19.2504 0 18.1504 0ZM18.1504 14H2.15039V4L10.1504 9L18.1504 4V14ZM10.1504 7L2.15039 2H18.1504L10.1504 7Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='font-Helvetica text-lg'>
                                    creative@kekstcnc.com
                                </div>
                            </div>
                        </a>
                        <div className='flex gap-4 py-2 xl:mt-0 items-center hover:cursor-pointer'>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='px-5'>
                                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M28.151 7.3239C28.151 3.29248 24.8525 0 20.8272 0H7.47463C3.44321 0 0.150879 3.29858 0.150879 7.3239V20.6767C0.150879 24.702 3.44931 28 7.47463 28H20.8272C24.8586 28 28.151 24.702 28.151 20.6767V7.3239ZM10.9869 20.1023H8.27485V11.3921H10.9869V20.1023ZM9.63085 10.2068C8.76349 10.2068 8.06107 9.50478 8.06107 8.63741C8.06107 7.77004 8.76349 7.06741 9.63085 7.06741C10.4982 7.06741 11.2007 7.77004 11.2007 8.63741C11.2007 9.49867 10.4982 10.2068 9.63085 10.2068ZM21.1326 20.1023H18.4267V15.8695C18.4267 14.8555 18.4084 13.5604 17.0218 13.5604C15.6108 13.5604 15.3971 14.66 15.3971 15.7961V20.1023H12.6911V11.3921H15.2871V12.5833H15.3238C15.6841 11.8992 16.5698 11.1779 17.8892 11.1779C20.6318 11.1779 21.1387 12.9799 21.1387 15.3254V20.1023H21.1326Z" fill="white" />
                                </svg>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="logo 2" clipPath="url(#clip0_291_15469)">
                                        <path id="Vector" d="M16.22 11.85L26.2714 0H23.8895L15.162 10.2892L8.19125 0H0.151367L10.6924 15.5591L0.151367 27.9856H2.53335L11.7499 17.1199L19.1115 27.9856H27.1514L16.2194 11.85H16.22ZM12.9576 15.6962L11.8896 14.1468L3.39161 1.81862H7.0502L13.9081 11.7679L14.9762 13.3172L23.8907 26.2497H20.2321L12.9576 15.6967V15.6962Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_291_15469">
                                            <rect width="27" height="28" fill="white" transform="translate(0.151367)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact