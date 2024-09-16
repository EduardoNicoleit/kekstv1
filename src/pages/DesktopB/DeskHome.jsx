import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar"; // Import Navbar
import Expertise from "./Expertise";
import { Selection, ReadMore, Divider, Contact } from "../../components";
import { selectionsData_02 } from "../../data/selections";
import DefineCompo from "./Define";
import CreativeCompo from "./Creative";
import SectionTwo from "./SectionTwo";
import Works from "./Works";

const Home = () => {
  return (
    <div className="relative">
      {/* Video Section (Section One) */}
      <div id="videoSection" className="relative w-full h-[calc(100vh)]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=DppVAQqaNE4"
          playing
          loop
          controls={false}
          muted
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          style={{
            transform: 'scale(1)',
            transformOrigin: 'center',
          }}
          config={{
            youtube: {
              playerVars: { quality: 'highres', rel: 0, showinfo: 0 },
            },
          }}
        />
      </div>

      {/* Navbar appears after the video */}
      <Navbar />

      {/* Section Two */}
      <div id="sectionTwo">
        <SectionTwo />
      </div>

      {/* Rest of the content */}
      <Expertise />
      <Works />
      <Divider title="Our design thinking process." />
      <DefineCompo />
      <Divider title="Get to know us." />
      <CreativeCompo />
      <Contact />
    </div >
  );
};

export default Home;
