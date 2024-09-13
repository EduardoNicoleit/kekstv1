import React, { useState } from 'react'
import Logo from '../assets/img/navbar/logo.png';
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='w-full h-[128px] shadow-sm flex items-center'>
            <img src={Logo} alt="logo" className='cursor-pointer w-[181.15px] h-[77.48px] ml-[128px] mr-[54px]' />
            <div className='flex'>
                <div className="flex h-[50px] py-[13px] px-4 text-white">
                    <ul className='hidden md:flex gap-10'>
                        <li>Expertise.</li>
                        <li>Showcases.</li>
                        <li>Get to know us.</li>
                        <li>Our design thinking process.</li>
                        <li>Our Manifesto.</li>
                        <li>Let's talk.</li>
                    </ul>
                </div>
                <motion.div whileTap={{ scale: 0.6 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
                    <img src={toggle ? Close : Hamburger} alt="hamburger" />
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar