import React, { useState, useEffect, useRef, useCallback } from 'react';
import Logo from '../assets/img/navbar/logo_02.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const navbarRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (navbarRef.current) {
            setSticky(window.scrollY > navbarRef.current.offsetTop);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);

    const handleToggle = useCallback((event) => {
        event.stopPropagation();
        setToggle((prev) => !prev);
    }, []);

    const handleClickOutside = useCallback((event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setToggle(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div
            ref={navbarRef}
            className={`${isSticky ? "navbar navbar-sticky" : "navbar mt-0 md:mt-4 lg:mt-14"} h-[100px]`}
        >
            <div className='w-full'>
                <div className='pl-[17px] md:pl-4 lg:pl-12 2xl:pl-[128px] border-white h-16 w-full flex items-center justify-between'>
                    <Link to="/">
                        <img src={Logo} alt="logo" className='cursor-pointer w-auto h-auto 2xl:w-auto' />
                    </Link>
                    <div className='flex w-full 2xl:pl-[50px] 3xl:pl-[70px] justify-between'>
                        <div className="xl:pl-[50px] lg:flex h-[50px] py-[13px] font-Arial font-normal text-white">
                            <ul className='hidden 2xl:flex 2xl:gap-[50px] 3xl:gap-[70px] text-lg'>
                                <li className="hover:text-gray-400 flex items-center"><Link to="/">Expertise</Link></li>
                                <li className="hover:text-gray-400 flex items-center"><Link to="/">Our work</Link></li>
                                <li className="hover:text-gray-400 flex items-center"><Link to="/">Get to know us</Link></li>
                                <li className="hover:text-gray-400 flex items-center"><Link to="/">Our design thinking process</Link></li>
                                <li className="hover:text-gray-400 flex items-center"><Link to="/">Our Manifesto</Link></li>
                                <li className="hover:text-gray-400 flex items-center"><Link to="/">Let's talk</Link></li>
                            </ul>
                        </div>
                        <motion.div
                            whileTap={{ scale: 0.6 }}
                            className="block 2xl:hidden cursor-pointer items-center h-full my-auto"
                            onClick={handleToggle}
                        >
                            {toggle ? (
                                <div className='font-Helvetica font-normal text-base lg:text-lg xl:text-[22px] text-white pr-6'>
                                    Close
                                </div>
                            ) : (
                                <div className='text-white uppercase font-Helvetica font-normal text-[11px] md:text-xs lg:text-[14px] xl:text-[22px] py-4 md:px-[11px] lg:px-[18px] xl:px-7'>
                                    Menu
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
            {toggle && (
                <div ref={menuRef} className="2xl:hidden fixed top-16 left-0 w-full bg-[#210837] bg-opacity-90 text-white z-50">
                    <ul className='flex flex-col items-start py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg'>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Expertise</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our work</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Get to know us</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our design thinking process</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our Manifesto</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Let's talk</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
