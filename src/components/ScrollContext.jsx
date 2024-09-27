import React, { createContext, useRef } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';

export const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
    const refs = {
        section1: useRef(null),
        section2: useRef(null)
    };

    const scrollToSection = (section) => {
        if (refs[section] && refs[section].current) {
            scroller.scrollTo(section, {
                duration: 500,
                delay: 0,
                smooth: true,
                containerId: refs[section].current.id
            });
        }
    };

    return (
        <ScrollContext.Provider value={{ scrollToSection, refs }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
