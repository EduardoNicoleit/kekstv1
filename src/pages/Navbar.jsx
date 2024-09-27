import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/navbar/logo.png';


const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

    // Scroll listener to fix the navbar after passing the video section (Section One)
    useEffect(() => {
        const handleScroll = () => {
            const videoSection = document.getElementById('videoSection'); // Target Video Section (Section One)
            const videoSectionOffsetTop = videoSection?.offsetTop || 0;

            if (window.scrollY >= videoSectionOffsetTop + videoSection.clientHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-full h-[88px] flex items-center mr-10 px-6 lg:px-[128px] z-50 bg-purple text-white shadow-lg transition-all duration-300 ${isFixed ? 'fixed top-0 left-0' : 'relative'}`}>
            {/* Logo (Aligned Left) */}
            <img src={Logo} alt="logo" className="cursor-pointer mr-14" />

            {/* Navigation Links */}
            <div className='flex items-center'>
                <ul className="hidden md:flex gap-10 ml-14">
                    <li>Expertise.</li>
                    <li>Showcases.</li>
                    <li>Get to know us.</li>
                    <li>Our design thinking process.</li>
                    <li>Our Manifesto.</li>
                    <li>Let's talk.</li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
