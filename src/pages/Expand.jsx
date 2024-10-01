import React from "react";
import Navbar from "./Navbar";
import ExpandImg from '../assets/img/home/home_05.png';

const ExpandCompo = () => {
    return (
        <div className="relative">
            <img src={ExpandImg} alt="keskt..." className="w-full" />
            <div className="absolute bottom-0 top-4">
            </div>
        </div>
    )
}

export default ExpandCompo;