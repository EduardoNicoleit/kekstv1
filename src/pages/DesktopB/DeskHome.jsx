import React from "react";
import homeImg from "../../assets/img/home/home_03.png";
import frameImg from "../../assets/img/home/frame_01.png";
import Expertise from "./Expertise";
import { Selection, ReadMore, Divider, Contact } from "../../components";
import { selectionsData_02 } from "../../data/selections";
import DefineCompo from "./Define";
import CreativeCompo from "./Creative";

const Home = () => {
  return (
    <div className="relative">
      <img src={homeImg} alt="logo" className="h-[1208] w-full" />
      <img src={frameImg} alt="logo" className="h-[1208] w-full" />
      <Expertise />
      <div className="pl-16">
        <Selection selectionsData={selectionsData_02} customClass="" />
      </div>
      <div className="pl-[310px] py-4">
        <ReadMore />
      </div>
      <Divider title="Our design thinking process." />
      <DefineCompo />
      <Divider title="Get to know us." />
      <CreativeCompo />
      <Contact />
    </div>
  );
};

export default Home;
