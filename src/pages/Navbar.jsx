import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/img/navbar/logo_02.png';
import Hamburger from '../assets/hamburgerMenu.svg';
import Close from '../assets/close.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "./Navbar.css";

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
        <div className={sticky ? "navbar navbar-sticky" : "navbar"}>
            <div className='h-16 w-full sm:h-20 md:h-24 lg:h-[128px] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[128px]'>
                <Link to="/"><img src={Logo} alt="logo" className='cursor-pointer w-32 sm:w-40 md:w-48 lg:w-[223.49px] h-auto' /></Link>
                <div className='flex items-center'>
                    <div className="hidden lg:flex h-[50px] py-[13px] px-4 text-white">
                        <ul className='flex gap-[70px] text-sm sm:text-base md:text-lg lg:text-xl'>
                            <li className="hover:text-gray-400 flex items-center"><Link to="/">Expertise.</Link></li>
                            <li className="hover:text-gray-400 flex items-center"><Link to="/">Our work</Link></li>
                            <li className="hover:text-gray-400 flex items-center"><Link to="/">Get to know us.</Link></li>
                            <li className="hover:text-gray-400 flex items-center"><Link to="/">Our design thinking process.</Link></li>
                            <li className="hover:text-gray-400 flex items-center"><Link to="/">Our Manifesto</Link></li>
                            <li className="hover:text-gray-400 flex items-center"><Link to="/">Let's talk.</Link></li>
                        </ul>
                    </div>
                    <motion.div
                        whileTap={{ scale: 0.6 }}
                        className="lg:hidden cursor-pointer flex items-center h-full" // Center vertically
                        onClick={handleToggle}
                    >
                        <img src={toggle ? Close : Hamburger} alt="menu" className="w-6 h-6 invert" />
                    </motion.div>
                </div>
            </div>

            {/* Mobile menu */}
            {toggle && (
                <div ref={menuRef} className="lg:hidden fixed top-16 left-0 w-full bg-[#210837] bg-opacity-90 text-white z-50">
                    <ul className='flex flex-col items-start py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg'>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Expertise.</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our work</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Get to know us.</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our design thinking process.</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Our Manifesto</Link></li>
                        <li className="py-2 w-full hover:text-gray-400"><Link to="/" onClick={handleToggle}>Let's talk.</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;