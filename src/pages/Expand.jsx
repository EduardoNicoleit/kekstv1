import React from "react";
import Navbar from "./Navbar";
import ExpandImg from '../assets/img/home/home_05.png';

const ExpandCompo = () => {
    return (
        <div className="relative">
            <img src={ExpandImg} alt="" className="w-full h-auto" />
            <div className="absolute bottom-0 top-4 w-full px-4 sm:px-12">
            </div>
        </div>
    )
}

export default ExpandCompo;