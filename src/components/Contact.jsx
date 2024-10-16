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

const Contact = () => {
    return (
        <div>
            <div className='px-2 sm:px-6 md:px-[33px] xl:px-[45px]'>
                <div className='relative pt-8 lg:pt-12 pb-8 lg:pb-12 flex flex-col items-center xl:items-stretch'>
                    <div className='grid lg:grid-cols-5 text-white font-Arial text-lg px-0 lg:px-16 w-full'>
                        <div className='text-start pl-6 sm:pl-0 pt-2'>
                            <NavItem to="welcome">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className='cursor-pointer w-[166.25px] h-[57.6375px] transition duration-300 ease-in-out hover:scale-110'
                                />
                            </NavItem>
                        </div>
                        <div className='grid col-span-3 items-center w-full pl-6 sm:pl-0 md:pl-0 lg:pl-14 xl:pl-0 pt-2'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 sm:mx-auto xl:mx-0 pt-4 lg:pt-0 w-full lg:w-auto'>
                                <div className=''>
                                    <div className='hover:text-[#7a6b87]'>
                                        <NavItem to="expertise">
                                            Expertise
                                        </NavItem>
                                    </div>
                                    <div className='py-4 xl:py-2 hover:text-[#7a6b87]'>
                                        <NavItem to="works">
                                            Our Work
                                        </NavItem>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='hover:text-[#7a6b87]'>
                                        <NavItem to="creative">
                                            Get to Know Us
                                        </NavItem>
                                    </div>
                                    <div className='py-4 xl:py-2 hover:text-[#7a6b87]'>
                                        <NavItem to="manifesto">
                                            Our Manifesto
                                        </NavItem>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='hover:text-[#7a6b87] lg:pr-12 xl:pr-2'>
                                        <NavItem to="process">
                                            Our Design Thinking Process
                                        </NavItem>
                                    </div>
                                    <div className='py-4 xl:pt-2 hover:text-[#7a6b87]'>
                                        <NavItem to="lets-talk">
                                            Let's Talk
                                        </NavItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:py-0 hidden lg:block my-0 xl:my-auto px-0 xl:px-12'>
                            <a href="mailto:creative@kekstcnc.com">
                                <div className='pb-4 xl:pt-3 lg:pt-2 md:pt-2 flex items-center gap-2'>
                                    <div>
                                        {/* Email SVG */}
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
    );
};

export default Contact;
