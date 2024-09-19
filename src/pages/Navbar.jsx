import React, { useState } from 'react'
import Logo from '../assets/img/navbar/logo_02.png';
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className=''>
            <div className='h-[128px] flex items-center'>
                <img src={Logo} alt="logo" className='cursor-pointer w-[223.49.15px] h-[77.48px] ml-[128px] mr-[54px]' />
                <div className='flex'>
                    <div className="flex h-[50px] py-[13px] px-4 text-white">
                        <ul className='hidden md:flex gap-[70px]'>
                            <li>
                                <Link to="/expertise">Expertise.</Link>
                            </li>
                            <li>
                                <Link to="/">Our work</Link>
                            </li>
                            <li>
                                <Link to="/">Get to know us.</Link>
                            </li>
                            <li>
                                <Link to="/">Our design thinking process.</Link>
                            </li>
                            <li>
                                <Link to="/">Our Manifesto</Link>
                            </li>
                            <li>
                                <Link to="/">Let's talk.</Link>
                            </li>
                        </ul>
                    </div>
                    <motion.div whileTap={{ scale: 0.6 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
                        <img src={toggle ? Close : Hamburger} alt="hamburger" />
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Navbar