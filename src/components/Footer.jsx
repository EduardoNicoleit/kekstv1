import React from 'react';
import Logo from '../assets/img/navbar/logo_02.png';
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
                <div className='relative pt-8 lg:pt-12 pb-8 lg:pb-12 flex flex-col items-center xl:items-stretch'>
                    <div className='grid lg:grid-cols-5 text-white font-Helvetica text-lg px-0 lg:px-16 w-full 2xl:text-[1.2vw]'>
                        <div className='text-start pl-6 sm:pl-0 2xl:pt-[1.6vw] 2xl:pb-[1.6vw]'>
                            <NavItem to="welcome">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className='cursor-pointer w-[166.25px] h-[57.6375px] 2xl:w-[8vw] 2xl:h-[2.8vw] 3xl:w-[10vw] 3xl:h-[3.75vw] transition duration-300 ease-in-out hover:scale-110'
                                />
                            </NavItem>
                        </div>
                        {/* Navigation Links */}
                        <div className='grid col-span-3 w-full py-8 xl:py-0 pl-6 sm:pl-0 md:pl-0 lg:pl-14 xl:pl-0 md:pt-0 cursor-pointer 2xl:leading-[4vw]'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 sm:mx-auto xl:mx-0 pt-4 lg:pt-0 w-full lg:w-auto 2xl:pt-0'>
                                <div className='2xl:flex 2xl:flex-col 2xl:justify-start 2xl:items-start'>
                                    <div className='hover:text-[#7a6b87] my-4 xl:my-0'>
                                        <NavItem to="expertise">
                                            Expertise
                                        </NavItem>
                                    </div>
                                    <div className='hover:text-[#7a6b87] mt-4 2xl:mt-[1vw]'>
                                        <NavItem to="works">
                                            Our Work
                                        </NavItem>
                                    </div>
                                </div>
                                <div className='2xl:flex 2xl:flex-col 2xl:justify-start 2xl:items-start'>
                                    <div className='hover:text-[#7a6b87] my-4 xl:my-0'>
                                        <NavItem to="creative">
                                            Get to Know Us
                                        </NavItem>
                                    </div>
                                    <div className='hover:text-[#7a6b87] mt-4 2xl:mt-[1vw]'>
                                        <NavItem to="manifesto">
                                            Our Manifesto
                                        </NavItem>
                                    </div>
                                </div>
                                <div className='2xl:flex 2xl:flex-col 2xl:justify-start 2xl:items-start'>
                                    <div className='hover:text-[#7a6b87] lg:pr-12 xl:pr-2 my-4 xl:my-0'>
                                        <NavItem to="process">
                                            Our Design Thinking Process
                                        </NavItem>
                                    </div>
                                    <div className='hover:text-[#7a6b87] mt-4 2xl:mt-[1vw]'>
                                        <NavItem to="lets-talk">
                                            Let's Talk
                                        </NavItem>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer and Social Media Icons */}
                        <div className='xl:flex lg:py-0 hidden lg:block my-0 px-0 lg:px-12 3xl:px-[8vw]'>
                            {/* Social Media Icons */}
                            <div className='flex gap-10 pt-4 xl:pt-0 2xl:gap-[5vw] 2xl:py-[2vw]'>
                                {/* LinkedIn Icon */}
                                <a
                                    className='hover:scale-110'
                                    href="https://www.linkedin.com/company/kekst-cnc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        className='w-[29px] h-[28px] 2xl:w-[2.2vw] 2xl:h-[2.2vw] 3xl:w-[2vw] 3xl:h-[2vw]'
                                        viewBox="0 0 29 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            id="Vector"
                                            d="M28.151 7.3239C28.151 3.29248 24.8525 0 20.8272 0H7.47463C3.44321 0 0.150879 3.29858 0.150879 7.3239V20.6767C0.150879 24.702 3.44931 28 7.47463 28H20.8272C24.8586 28 28.151 24.702 28.151 20.6767V7.3239ZM10.9869 20.1023H8.27485V11.3921H10.9869V20.1023ZM9.63085 10.2068C8.76349 10.2068 8.06107 9.50478 8.06107 8.63741C8.06107 7.77004 8.76349 7.06741 9.63085 7.06741C10.4982 7.06741 11.2007 7.77004 11.2007 8.63741C11.2007 9.49867 10.4982 10.2068 9.63085 10.2068ZM21.1326 20.1023H18.4267V15.8695C18.4267 14.8555 18.4084 13.5604 17.0218 13.5604C15.6108 13.5604 15.3971 14.66 15.3971 15.7961V20.1023H12.6911V11.3921H15.2871V12.5833H15.3238C15.6841 11.8992 16.5698 11.1779 17.8892 11.1779C20.6318 11.1779 21.1387 12.9799 21.1387 15.3254V20.1023H21.1326Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                                {/* Twitter Icon */}
                                <a
                                    className='hover:scale-110'
                                    href="https://x.com/KekstCNC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        className='w-[28px] h-[28px] 2xl:w-[2vw] 2xl:h-[2vw] 3xl:w-[1.8vw] 3xl:h-[1.8vw]'
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="logo 2" clipPath="url(#clip0_291_15469)">
                                            <path
                                                id="Vector"
                                                d="M16.22 11.85L26.2714 0H23.8895L15.162 10.2892L8.19125 0H0.151367L10.6924 15.5591L0.151367 27.9856H2.53335L11.7499 17.1199L19.1115 27.9856H27.1514L16.2194 11.85H16.22ZM12.9576 15.6962L11.8896 14.1468L3.39161 1.81862H7.0502L13.9081 11.7679L14.9762 13.3172L23.8907 26.2497H20.2321L12.9576 15.6967V15.6962Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_291_15469">
                                                <rect
                                                    width="27"
                                                    height="28"
                                                    fill="white"
                                                    transform="translate(0.151367)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Divider Line for Mobile */}
                    <div className='px-2 relative block lg:hidden w-screen my-4'>
                        <div className='absolute h-[1px] block bg-white tom-10 bottom-0 w-[calc(100%-16px)] left-2 md:left-4 md:w-[calc(100%-32px)] sm:left-4 sm:w-[calc(100%-32px)]'>
                        </div>
                    </div>
                    {/* Footer Links */}
                    <div className='text-lg 2xl:text-[1.2vw] pl-6 sm:pl-0 grid grid-cols-1 lg:grid-cols-5 lg:gap-2 xl:grid-cols-5 text-white font-Helvetica pt-0 lg:pt-10 xl:pt-10 mx-auto xl:mx-0 px-0 lg:px-16 pb-0 lg:pb-2 xl:pb-8 w-full lg:w-auto 2xl:pb-[1.5vw] 2xl:pt-[6vw]'>
                        <div></div>
                        <div className='py-4  lg:pr-4 xl:py-0 lg:text-left'>
                            © 2023 Kekst CNC
                        </div>
                        <div className='py-4 lg:pr-4 xl:py-0 text-left lg:text-center xl:text-left'>
                            All Rights Reserved
                        </div>
                        <div className='py-4 xl:py-0 lg:pr-4 lg:text-left hover:text-[#7a6b87] hover-cursor-pointer'>
                            {/* Email Link */}
                            <a href="mailto:creative@kekstcnc.com">
                                creative@kekstcnc.com
                            </a>

                        </div>
                        <div></div>
                    </div>
                    {/* Footer and Social Icons for Mobile */}
                    <div className='pl-6 sm:pl-0 px-0 py-4 lg:py-5 flex justify-left w-full lg:hidden text-white md:mr:0'>
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
                                className='px-0 lg:px-12 '
                            >
                                <svg
                                    className='w-[29px] h-[28px] 2xl:w-[2.2vw] 2xl:h-[2.2vw] 3xl:w-[2vw] 3xl:h-[2vw]'
                                    viewBox="0 0 29 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="Vector"
                                        d="M28.151 7.3239C28.151 3.29248 24.8525 0 20.8272 0H7.47463C3.44321 0 0.150879 3.29858 0.150879 7.3239V20.6767C0.150879 24.702 3.44931 28 7.47463 28H20.8272C24.8586 28 28.151 24.702 28.151 20.6767V7.3239ZM10.9869 20.1023H8.27485V11.3921H10.9869V20.1023ZM9.63085 10.2068C8.76349 10.2068 8.06107 9.50478 8.06107 8.63741C8.06107 7.77004 8.76349 7.06741 9.63085 7.06741C10.4982 7.06741 11.2007 7.77004 11.2007 8.63741C11.2007 9.49867 10.4982 10.2068 9.63085 10.2068ZM21.1326 20.1023H18.4267V15.8695C18.4267 14.8555 18.4084 13.5604 17.0218 13.5604C15.6108 13.5604 15.3971 14.66 15.3971 15.7961V20.1023H12.6911V11.3921H15.2871V12.5833H15.3238C15.6841 11.8992 16.5698 11.1779 17.8892 11.1779C20.6318 11.1779 21.1387 12.9799 21.1387 15.3254V20.1023H21.1326Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                            {/* Twitter Icon */}
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    className='ml-8 lg:ml-0 w-[28px] h-[28px] 2xl:w-[2vw] 2xl:h-[2vw] 3xl:w-[1.8vw] 3xl:h-[1.8vw]'
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="logo 2" clipPath="url(#clip0_291_15469)">
                                        <path
                                            id="Vector"
                                            d="M16.22 11.85L26.2714 0H23.8895L15.162 10.2892L8.19125 0H0.151367L10.6924 15.5591L0.151367 27.9856H2.53335L11.7499 17.1199L19.1115 27.9856H27.1514L16.2194 11.85H16.22ZM12.9576 15.6962L11.8896 14.1468L3.39161 1.81862H7.0502L13.9081 11.7679L14.9762 13.3172L23.8907 26.2497H20.2321L12.9576 15.6967V15.6962Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_291_15469">
                                            <rect
                                                width="27"
                                                height="28"
                                                fill="white"
                                                transform="translate(0.151367)"
                                            />
                                        </clipPath>
                                    </defs>
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
