import React from "react";
import { Divider } from "../components";
import ManifestoImg from '../assets/img/home/manifesto.png';

const ManifestoCompo = () => {
    return (
        <div className="p-11">
            <div className="border-b-[1px] border-white">
                <Divider title="Our manifesto" />
                <img src={ManifestoImg} alt="" className="w-full pb-10" />
            </div>
        </div>
    )
}

export default ManifestoCompo;