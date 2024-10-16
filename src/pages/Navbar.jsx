import React, { useState, useEffect, useRef, useCallback } from 'react';
import Logo from '../assets/img/navbar/logo_02.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import "./Navbar.css";

const NavItem = ({ to, children, offset = -100, onClick }) => {
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
                onClick={onClick}
                spy={true}
                exact="true"
            >
                {children}
            </ScrollLink>
        );
    } else {
        // On other pages, navigate to the home page with the hash
        return (
            <RouterLink to={`/#${to}`} onClick={onClick}>
                {children}
            </RouterLink>
        );
    }
};

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const navbarRef = useRef(null);
    const navbarOriginalTop = useRef(0);
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);

    const lastScrollY = useRef(0);

    const handleScroll = useCallback(() => {
        if (navbarRef.current) {
            const currentScrollY = window.scrollY;
            const navbarOffset = navbarOriginalTop.current;

            if (currentScrollY > lastScrollY.current && currentScrollY > navbarOffset) {
                setSticky(true);
            }

            if (currentScrollY < lastScrollY.current) {
                setSticky(false);
            }

            lastScrollY.current = currentScrollY;
        }
    }, []);

    useEffect(() => {
        if (navbarRef.current) {
            navbarOriginalTop.current = navbarRef.current.offsetTop;
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const handleToggle = (event) => {
        event.stopPropagation();
        setToggle((prevToggle) => !prevToggle);
    };

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
        <AnimatePresence>
            <motion.div
                ref={navbarRef}
                className={`${isSticky ? "navbar navbar-sticky" : "navbar mt-0 md:mt-4 lg:mt-14"} h-[100px]`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className='w-full'>
                    <div className='pl-0 border-white h-16 w-full flex items-center justify-between 2xl:pl-[128px] xl:pl-[110px] lg:pl-[60px] md:pl-[28px] pl-[6px] 2xl:pr-[128px] xl:pr-[110px] lg:pr-[60px] md:pr-[28px] pr-[6px]'>
                        <NavItem to="welcome">
                            <img
                                src={Logo}
                                alt="logo"
                                className='cursor-pointer w-auto h-auto 2xl:w-auto transition duration-300 ease-in-out hover:scale-110'
                            />
                        </NavItem>
                        <div className='flex w-full justify-between'>
                            <div className="xl:pl-[128px] lg:flex h-[50px] py-[13px] font-Arial font-normal text-white">
                                {/* Desktop Menu */}
                                <ul className='hidden 2xl:flex 2xl:gap-[50px] 3xl:gap-[70px] text-lg'>
                                    <li className="cursor-pointer hover:text-gray-400 flex items-center transition duration-300 ease-in-out hover:scale-110">
                                        <NavItem to="expertise" offset={-100}>
                                            Expertise
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 flex items-center transition duration-300 ease-in-out hover:scale-110">
                                        <NavItem to="works" offset={-100}>
                                            Our Work
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 flex items-center transition duration-300 ease-in-out hover:scale-110">
                                        <NavItem to="creative" offset={-100}>
                                            Get to Know Us
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 flex items-center transition duration-300 ease-in-out hover:scale-110">
                                        <NavItem to="process" offset={-100}>
                                            Our Design Thinking Process
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 flex items-center transition duration-300 ease-in-out hover:scale-110">
                                        <NavItem to="manifesto" offset={-100}>
                                            Our Manifesto
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 flex items-center transition duration-300 ease-in-out hover:scale-110">
                                        <NavItem to="lets-talk" offset={-100}>
                                            Let's Talk
                                        </NavItem>
                                    </li>
                                </ul>
                            </div>
                            {/* Mobile Menu Toggle Button */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className={`block 2xl:hidden cursor-pointer items-center h-full my-auto text-white uppercase font-Helvetica border-solid border-[1px] border-white rounded-md font-normal text-[10px] md:text-xs lg:text-[12px] xl:text-[14px] py-2 px-4 lg:px-6 xl:px-8 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-[#674480] hover:text-white hover:font-bold`}
                                onClick={handleToggle}
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    key={toggle ? "X" : "menu"}
                                >
                                    {toggle ? "X" : "Menu"}
                                </motion.span>
                            </motion.button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <AnimatePresence>
                    {toggle && (
                        <motion.div
                            ref={menuRef}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="2xl:hidden w-full bg-[#210837] bg-opacity-90 text-white z-50 overflow-hidden mt-4"
                            style={{
                                position: isSticky ? 'fixed' : 'absolute',
                                top: isSticky ? '80px' : '51px',
                                right: 0,
                                maxWidth: '300px',
                            }}
                        >
                            <ul className='flex flex-col items-start py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg'>
                                <li className="py-2 w-full hover:text-[#9F81BF]">
                                    <NavItem to="expertise" onClick={() => setToggle(false)}>
                                        Expertise
                                    </NavItem>
                                </li>
                                <li className="py-2 w-full hover:text-[#9F81BF]">
                                    <NavItem to="works" onClick={() => setToggle(false)}>
                                        Our Work
                                    </NavItem>
                                </li>
                                <li className="py-2 w-full hover:text-[#9F81BF]">
                                    <NavItem to="creative" onClick={() => setToggle(false)}>
                                        Get to Know Us
                                    </NavItem>
                                </li>
                                <li className="py-2 w-full hover:text-[#9F81BF]">
                                    <NavItem to="process" onClick={() => setToggle(false)}>
                                        Our Design Thinking Process
                                    </NavItem>
                                </li>
                                <li className="py-2 w-full hover:text-[#9F81BF]">
                                    <NavItem to="manifesto" onClick={() => setToggle(false)}>
                                        Our Manifesto
                                    </NavItem>
                                </li>
                                <li className="py-2 w-full hover:text-[#9F81BF]">
                                    <NavItem to="lets-talk" onClick={() => setToggle(false)}>
                                        Let's Talk
                                    </NavItem>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
};

export default Navbar;
