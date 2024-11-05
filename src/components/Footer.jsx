import React from 'react';
// import Logo from '../assets/img/navbar/logo.svg';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavItem = ({ to, children, offset = -100 }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/home';

    if (isHomePage) {
        // On the home page, use ScrollLink for smooth scrolling
        return (
            <ScrollLink
                to={to}
                smooth={true}
                duration={500}
                offset={offset}
                spy={true}
                exact="true"
            >
                {children}
            </ScrollLink>
        );
    } else {
        // On other pages, navigate to the home page with the hash
        return (
            <RouterLink to={`/#${to}`}>
                {children}
            </RouterLink>
        );
    }
};

const Footer = () => {
    return (
        <div>
            <div className='px-2 sm:px-6 md:px-[33px] xl:px-[45px] 2xl:px-[45px] 3xl:px-[3vw] 2xl:pt-[1.6vw]'>
                <div className='relative pt-8 lg:pt-8 pb-2 2xl:pb-[2.5vw] 3xl:pb-[1.5vw] flex flex-col items-center xl:items-stretch'>
                    <div className='font-Helvetica text-white text-md lg:text-md xl:text-[14px] 2xl:text-[1vw] grid lg:grid-cols-5 px-0 lg:px-16 w-full '>
                        <div className='text-start pl-6 sm:pl-0 mb-5 mt-5 xl:mt-0 2xl:mt-[2vw] 2xl:mb-[1.6vw]'>
                            {/* <NavItem to="welcome">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className='cursor-pointer w-[166.25px] h-[57.6375px] 2xl:w-[8vw] 2xl:h-[2.8vw] 3xl:w-[10vw] 3xl:h-[3.75vw] transition duration-300 ease-in-out hover:scale-110'
                                />
                            </NavItem> */}
                        </div>
                        {/* Navigation Links */}
                        <div className='grid col-span-3 w-full py-8 xl:py-0 pl-6 sm:pl-0 md:pl-0 lg:pl-14 xl:pl-0 md:pt-0 cursor-pointer 2xl:leading-[2vw]'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 sm:mx-auto xl:mx-0 pt-0 lg:pt-0 w-full lg:w-auto 2xl:pt-0'>
                                <div className='2xl:flex 2xl:flex-col 2xl:justify-start 2xl:items-start'>
                                    <div className='hover:text-[#7a6b87] my-4 xl:my-0 2xl:mt-[2vw]'>
                                        <NavItem to="expertise">
                                            Expertise
                                        </NavItem>
                                    </div>
                                    <div className='hover:text-[#7a6b87] mt-4 2xl:mt-0'>
                                        <NavItem to="works">
                                            Our Work
                                        </NavItem>
                                    </div>
                                </div>
                                <div className='2xl:flex 2xl:flex-col 2xl:justify-start 2xl:items-start'>
                                    <div className='hover:text-[#7a6b87] my-4 xl:my-0 2xl:mt-[2vw]'>
                                        <NavItem to="creative">
                                            Get to Know Us
                                        </NavItem>
                                    </div>
                                    <div className='hover:text-[#7a6b87] mt-4 2xl:mt-0'>
                                        <NavItem to="manifesto">
                                            Our Manifesto
                                        </NavItem>
                                    </div>
                                </div>
                                <div className='2xl:flex 2xl:flex-col 2xl:justify-start 2xl:items-start'>
                                    <div className='hover:text-[#7a6b87] my-4 xl:my-0 2xl:mt-[2vw] mr-8'>
                                        <NavItem to="process">
                                            Our Process
                                        </NavItem>
                                    </div>
                                    <div className='hover:text-[#7a6b87] mt-4 2xl:mt-0'>
                                        <NavItem to="lets-talk">
                                            Let's Talk
                                        </NavItem>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer and Social Media Icons */}
                        <div
                            className="hidden lg:flex lg:flex-col ml-6 sm:ml-0 md:ml-0 xl:ml-16 3xl:ml-[5vw] space-x-10 lg:space-x-0 lg:space-y-1 mt-5 xl:mt-1 2xl:mt-[2vw] 2xl:gap-1 3xl:gap-[0.5vw]"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center">
                                <svg
                                    className='w-[28px] h-[28px] 2xl:w-[2vw] 2xl:h-[2vw] 3xl:w-[1.8vw] 3xl:h-[1.8vw]'
                                    viewBox="0 0 35 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M33.7,8.8c0-4.8-4-8.8-8.8-8.8H8.8C4,0,0,4,0,8.8v16.1c0,4.8,4,8.8,8.8,8.8l16.1,0c4.8,0,8.8-4,8.8-8.8L33.7,8.8z M13,24.2H9.8V13.7H13V24.2z M11.4,12.3c-1,0-1.9-0.8-1.9-1.9c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9C13.3,11.4,12.5,12.3,11.4,12.3z M25.2,24.2H22v-5.1c0-1.2,0-2.8-1.7-2.8c-1.7,0-2,1.3-2,2.7v5.2h-3.3V13.7h3.1v1.4h0c0.4-0.8,1.5-1.7,3.1-1.7 c3.3,0,3.9,2.2,3.9,5V24.2z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                                <span className="hidden lg:inline-block ml-2 text-white">LinkedIn</span>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-center">
                                <svg
                                    className='w-[28px] h-[28px] 2xl:w-[2vw] 2xl:h-[2vw] 3xl:w-[1.8vw] 3xl:h-[1.8vw]'
                                    viewBox="0 0 35 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            d="M11.7,8.7H10c-0.1,0-0.1,0.1-0.1,0.2l12,15.9c0,0,0.1,0,0.1,0h1.8c0.1,0,0.1-0.1,0.1-0.2L11.7,8.7 C11.8,8.7,11.7,8.7,11.7,8.7z"
                                            fill="#FFFFFF"
                                        />
                                        <path
                                            d="M24.9,0H8.8C4,0,0,4,0,8.8v16.1c0,4.8,4,8.8,8.8,8.8h16.1c4.8,0,8.8-4,8.8-8.8V8.8C33.7,4,29.7,0,24.9,0z M21,26.8l-5.3-7l-5.9,7H6.4l7.7-9.1L5.9,6.9h6.8l5,6.6l5.5-6.6h3.3l-7.3,8.6l8.5,11.3H21z"
                                            fill="#FFFFFF"
                                        />
                                    </g>
                                </svg>
                                <span className="hidden lg:inline-block ml-2 text-white">X (Twitter) </span>
                            </div>
                        </div>

                    </div>
                    {/* Divider Line for Mobile */}
                    <div className='px-2 relative block lg:hidden w-screen my-4'>
                        <div className='absolute h-[1px] block bg-white tom-10 bottom-0 w-[calc(100%-16px)] sm:w-[calc(100%-16px)] left-2 sm:left-2'>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className='text-md lg:text-md xl:text-[14px] 2xl:text-[1vw] pl-6 sm:pl-0 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 text-white font-Helvetica pt-0 lg:pt-10 xl:pt-10 mx-auto lg:mx-0 px-0 lg:px-8 xl:px-16 pb-0 lg:pb-10 xl:pb-10 w-full lg:w-auto 2xl:pb-[5vw] 2xl:pt-[5vw]'>
                        <div className='lg:col-span-1'></div>
                        <div className='pt-4 lg:pr-4 lg:pb-4 xl:py-0 lg:text-left'>
                            © 2023 Kekst CNC
                        </div>
                        <div className='pt-4 lg:pr-4 lg:pb-4 xl:py-0 text-left lg:text-center xl:text-left'>
                            All Rights Reserved
                        </div>
                        <div className='pt-4 xl:py-0 lg:pb-4 lg:pr-4 lg:pl-4 xl:pl-0 lg:text-left hover:text-[#7a6b87] cursor-pointer'>
                            {/* Email Link */}
                            <a href="mailto:creative@kekstcnc.com">
                                creative@kekstcnc.com
                            </a>
                        </div>
                        <div className='lg:col-span-1'></div>
                    </div>


                    {/* Footer and Social Icons for Mobile */}
                    <div className='pl-6 sm:pl-0 px-0 py-4 lg:py-5 flex justify-left w-full lg:hidden text-white md:mr-0'>
                        {/* Email Link */}
                        <a
                            href="mailto:creative@kekstcnc.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='py-2'
                        >
                        </a>
                        {/* Social Media Icons */}
                        <div className='flex pr-4 py-2 xl:mt-0 items-center hover:cursor-pointer'>
                            {/* LinkedIn Icon */}
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='px-0 lg:px-4 xl:px-12'
                            >
                                <svg
                                    className='w-[29px] h-[28px] 2xl:w-[2.2vw] 2xl:h-[2.2vw] 3xl:w-[2vw] 3xl:h-[2vw]'
                                    viewBox="0 0 35 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M33.7,8.8c0-4.8-4-8.8-8.8-8.8H8.8C4,0,0,4,0,8.8v16.1c0,4.8,4,8.8,8.8,8.8l16.1,0c4.8,0,8.8-4,8.8-8.8L33.7,8.8z M13,24.2H9.8V13.7H13V24.2z M11.4,12.3c-1,0-1.9-0.8-1.9-1.9c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9C13.3,11.4,12.5,12.3,11.4,12.3z M25.2,24.2H22v-5.1c0-1.2,0-2.8-1.7-2.8c-1.7,0-2,1.3-2,2.7v5.2h-3.3V13.7h3.1v1.4h0c0.4-0.8,1.5-1.7,3.1-1.7 c3.3,0,3.9,2.2,3.9,5V24.2z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                            </a>
                            {/* Twitter Icon */}
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='ml-8 lg:ml-4 xl:ml-0'
                            >
                                <svg
                                    className='w-[28px] h-[28px] 2xl:w-[2vw] 2xl:h-[2vw] 3xl:w-[1.8vw] 3xl:h-[1.8vw]'
                                    viewBox="0 0 35 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            d="M11.7,8.7H10c-0.1,0-0.1,0.1-0.1,0.2l12,15.9c0,0,0.1,0,0.1,0h1.8c0.1,0,0.1-0.1,0.1-0.2L11.7,8.7 C11.8,8.7,11.7,8.7,11.7,8.7z"
                                            fill="white"
                                        />
                                        <path
                                            d="M24.9,0H8.8C4,0,0,4,0,8.8v16.1c0,4.8,4,8.8,8.8,8.8h16.1c4.8,0,8.8-4,8.8-8.8V8.8C33.7,4,29.7,0,24.9,0z M21,26.8l-5.3-7l-5.9,7H6.4l7.7-9.1L5.9,6.9h6.8l5,6.6l5.5-6.6h3.3l-7.3,8.6l8.5,11.3H21z"
                                            fill="white"
                                        />
                                    </g>
                                </svg>
                            </a>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;
