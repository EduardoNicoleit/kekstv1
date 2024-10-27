import React, { useState, useEffect, useRef, useCallback } from 'react';
import Logo from '../assets/img/navbar/logo.svg';
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

            if (currentScrollY > lastScrollY.current) {
                // Scrolling down
                setSticky(false);
            } else {
                // Scrolling up
                if (currentScrollY <= navbarOffset) {
                    // If we scroll up past the navbar's original position, dock it
                    setSticky(false);
                } else {
                    setSticky(true);
                }
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
                className={`${isSticky ? "navbar navbar-sticky" : "navbar mb-2 mt-1 md:mt-1 lg:mt-10 3xl:mt-[6vh]"} h-[4vh] md:h-[10vh] 2xl:h-[14vh]`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className='w-full'>
                    <div className='pl-0 border-white h-10 w-full flex items-center justify-between 2xl:pl-[128px] xl:pl-[110px] lg:pl-[60px] md:pl-[28px] pl-[10px] 3xl:pl-[10vh] pr-4 sm:pr-6 md:pr-12 lg:pr-12'>
                        <NavItem to="welcome">
                            <img
                                src={Logo}
                                alt="logo"
                                className="cursor-pointer transition duration-300 ease-in-out hover:scale-105 h-auto min-w-[92.51px] min-h[32.07px] w-[auto] sm:w-[20vw] md:w-[20vw] lg:w-[18vw] xl:w-[15vw] 2xl:w-[10vw] 3xl:w-[10vw]"
                            />
                        </NavItem>

                        <div className='flex w-full justify-between xl:pl-[150px] 2xl:pl-[100px] 3xl:pl-[250px]'>
                            <div className="flex h-full py-[20px] font-Helvetica font-normal text-white">
                                {/* Desktop Menu */}
                                <ul className='hidden 2xl:flex 2xl:gap-[40px] 3xl:gap-[100px] text-[1.0vw]'>
                                    <li className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105">
                                        <NavItem to="expertise" offset={-100}>
                                            Expertise
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105">
                                        <NavItem to="works" offset={-100}>
                                            Our Work
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105">
                                        <NavItem to="creative" offset={-100}>
                                            Get to Know Us
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105">
                                        <NavItem to="process" offset={-100}>
                                            Our Design Thinking Process
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105">
                                        <NavItem to="manifesto" offset={-100}>
                                            Our Manifesto
                                        </NavItem>
                                    </li>
                                    <li className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105">
                                        <NavItem to="lets-talk" offset={-100}>
                                            Let's Talk
                                        </NavItem>
                                    </li>
                                </ul>
                            </div>
                            {/* Mobile Menu Toggle Button */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className={`block 2xl:hidden cursor-pointer items-center my-2 text-white uppercase font-Helvetica border-solid border-[1px] border-white rounded-sm font-normal transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#674480] hover:text-white w-[48px] h-[26px] sm:w-[48px] sm:h-[26px] md:w-[75px] md:h-[46px] lg:w-[83px] lg:h-[46px] xl:w-[83px] xl:h-[46px]`}
                                onClick={handleToggle}
                            >
                                <motion.span
                                    className="flex justify-center items-center w-full text-[9px] sm:text-[9px] md:text-[14px] lg:text-[14px] xl:text-[16px]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    key={toggle ? "X" : "Menu"}
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
                            className="2xl:hidden w-full bg-[#210837] bg-opacity-90 text-white z-50 overflow-hidden mt-0 md:mt-4"
                            style={{
                                position: isSticky ? 'fixed' : 'absolute',
                                top: isSticky ? '80px' : '51px',
                                right: 0,
                                maxWidth: '300px',
                            }}
                        >
                            <ul className='cursor-pointer flex flex-col items-start py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg'>
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
