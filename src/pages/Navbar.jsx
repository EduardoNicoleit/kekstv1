import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/img/navbar/logo_02.png';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'; // Updated import

const Navbar = ({ sticky }) => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);

    const handleToggle = (event) => {
        event.stopPropagation();
        setToggle(!toggle);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={sticky ? `${styles.navbar} ${styles["navbar-sticky"]} h-[100PX]` : `${styles.navbar} h-[100px] xl:mt-[25px] 2xl:mt-[45px] 3xl:mt-[50px]`}>
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
                            className="block 2xl:hidden cursor-pointer items-center h-full my-auto" // Center vertically
                            onClick={handleToggle}
                        >
                            <div className='text-white uppercase font-Helvetica font-normal text-[11px] md:text-xs lg:text-[14px] xl:text-[22px] md:py-[7px] lg:py-[10px] xl:py-4 2xl:py-4 md:px-[11px] lg:px-[18px] xl:px-7 2xl:px-7 border-white border-0 md:border-[1px] mr-[17px] md:mr-4 lg:mr-12 2xl:mr-[128px]'>
                                Menu
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {toggle && (
                <div ref={menuRef} className="2xl:hidden fixed top-16 left-0 w-full bg-[#210837] bg-opacity-90 text-white z-50">
                    <ul className='flex flex-col items-start py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg'>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Expertise</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our work</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Get to know us.</Link></li>
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
