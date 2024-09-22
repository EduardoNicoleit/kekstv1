import React from 'react';
import Logo from '../assets/img/navbar/logo.png';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='px-[72px]'>
            <div className='flex flex-col items-center xl:items-stretch'>
                <div className='grid grid-cols-1 xl:grid-cols-5 text-white font-Arial text-lg py-8 lg:py-16'>
                    <div className='text-start'>
                        <Link to="/home">
                            <img src={Logo} alt="logo" className='cursor-pointer w-[181.15px] h-[77.48px]' />
                        </Link>
                    </div>
                    <div className='sm:py-4 md:py-4 lg:py-5 xl:py-0'>
                        <div>
                            <Link to="/">Expertise.</Link>
                        </div>
                        <div className='pt-2'>
                            <Link to="/">Showcases.</Link>
                        </div>
                    </div>
                    <div className='sm:py-4 md:py-4 lg:py-5 xl:py-0'>
                        <div>
                            <Link to="/">Get to know us.</Link>
                        </div>
                        <div className='pt-2'>
                            <Link to="/">Our Manifesto.</Link>
                        </div>
                    </div>
                    <div className='sm:py-4 md:py-4 lg:py-5 xl:py-0'>
                        <div>
                            <Link to="/">Our design thinking process.</Link>
                        </div>
                        <div className='pt-2'>
                            <Link to="/">Let's talk.</Link>
                        </div>
                    </div>
                    <div className='sm:py-4 md:py-4 lg:py-5 xl:py-0'>
                        <div className='flex items-center gap-2'>
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1504 0H2.15039C1.05039 0 0.160391 0.9 0.160391 2L0.150391 14C0.150391 15.1 1.05039 16 2.15039 16H18.1504C19.2504 16 20.1504 15.1 20.1504 14V2C20.1504 0.9 19.2504 0 18.1504 0ZM18.1504 14H2.15039V4L10.1504 9L18.1504 4V14ZM10.1504 7L2.15039 2H18.1504L10.1504 7Z" fill="white" />
                            </svg>
                            <div className='font-Helvetica text-lg'>
                                creative@kekstcnc.com
                            </div>
                        </div>
                        <div className='flex gap-10 py-2 mt-3 xl:mt-0'>
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M28.151 7.3239C28.151 3.29248 24.8525 0 20.8272 0H7.47463C3.44321 0 0.150879 3.29858 0.150879 7.3239V20.6767C0.150879 24.702 3.44931 28 7.47463 28H20.8272C24.8586 28 28.151 24.702 28.151 20.6767V7.3239ZM10.9869 20.1023H8.27485V11.3921H10.9869V20.1023ZM9.63085 10.2068C8.76349 10.2068 8.06107 9.50478 8.06107 8.63741C8.06107 7.77004 8.76349 7.06741 9.63085 7.06741C10.4982 7.06741 11.2007 7.77004 11.2007 8.63741C11.2007 9.49867 10.4982 10.2068 9.63085 10.2068ZM21.1326 20.1023H18.4267V15.8695C18.4267 14.8555 18.4084 13.5604 17.0218 13.5604C15.6108 13.5604 15.3971 14.66 15.3971 15.7961V20.1023H12.6911V11.3921H15.2871V12.5833H15.3238C15.6841 11.8992 16.5698 11.1779 17.8892 11.1779C20.6318 11.1779 21.1387 12.9799 21.1387 15.3254V20.1023H21.1326Z" fill="white" />
                            </svg>
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
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 pr-[78px] xl:pr-0 xl:grid-cols-5 text-white font-Arial text-lg pb-16'>
                    <div></div>
                    <div className='py-1 xl:py-0'>
                        © 2023 Kekst CNC
                    </div>
                    <div className='py-1 xl:py-0'>
                        Privacy Notice
                    </div>
                    <div className='py-1 xl:py-0'>
                        All Rights Reserved
                    </div>
                    <div></div>
                </div>
            </div>
        </div >
    )
}

export default Contact