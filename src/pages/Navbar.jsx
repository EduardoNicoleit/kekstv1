import React, { useState, useEffect, useRef, useCallback } from 'react';
import Logo from '../assets/img/navbar/logo_02.png';
import { motion, AnimatePresence } from 'framer-motion';
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
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            className={`block 2xl:hidden cursor-pointer items-center h-full my-auto text-white uppercase font-Helvetica border-solid border-[1px] border-white rounded-md font-normal text-[11px] md:text-xs lg:text-[14px] xl:text-[22px] py-2 px-4 ${isSticky ? 'bg-opacity-80' : ''}`}
                            onClick={handleToggle}
                        >
                            {toggle ? "X" : "Menu"}
                        </motion.button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {toggle && (
                    <motion.div
                        ref={menuRef}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="2xl:hidden w-full bg-[#210837] bg-opacity-90 text-white z-50 overflow-hidden mt-4"
                        style={{
                            position: isSticky ? 'fixed' : 'absolute',
                            top: isSticky ? '80px' : '51px',
                            right: 0,
                            maxWidth: '300px',
                        }}
                    >
                        <ul className='flex flex-col items-start py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg'>
                            <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Expertise</Link></li>
                            <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our work</Link></li>
                            <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Get to know us</Link></li>
                            <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our design thinking process</Link></li>
                            <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our Manifesto</Link></li>
                            <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Let's talk</Link></li>
                        </ul>
                    </motion.div>

                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
