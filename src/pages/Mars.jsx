import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Contact } from "../components";

const Mars = ({ isSticky, element }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" w-full px-2">
      <div className="relative font-Helvetica text-white border-[1px] border-solid border-white">
        <Navbar sticky={isSticky} />
        <div className="relative text-white" ref={element}>
          <img
            src="/src/assets/img/mars/Mar.png"
            alt=""
            className="w-full h-auto object-contain"
          />
          <div className="absolute bottom-[55px] left-2.5 text-[30px] leading-8 font-bold">
            Mars
          </div>
        </div>
        <div className=" py-10">
          <div className=" pl-6 text-white">
            <div className=" uppercase text-xs">Overview:</div>
            <div className=" flex flex-col gap-3 mt-3">
              <div className=" flex pb-3 border-b-[1px] border-b-white ">
                <div className=" w-4">
                  <div className=" h-1 w-1 mt-2 mx-1 bg-white rounded-full"></div>
                </div>
                <div className="text-sm">
                  Developed a holis tic video campaign, showcasing Mars as an AI
                  research pioneer.
                </div>
              </div>

              <div className=" flex pb-3 border-b-[1px] border-b-white ">
                <div className=" w-4">
                  <div className=" h-1 w-1 mt-2 mx-1 bg-white rounded-full"></div>
                </div>
                <div className="text-sm">
                  Used single-shot technique for immersive video innovation.
                </div>
              </div>
              <div className=" flex pb-3 border-b-[1px] border-b-white ">
                <div className=" w-4">
                  <div className=" h-1 w-1 mt-2 mx-1 bg-white rounded-full"></div>
                </div>
                <div className="text-sm">
                  Crafted compelling narrative with meticulous storyboarding to
                  highlight Mars' AI leadership.
                </div>
              </div>
            </div>
          </div>
          <div className=" pl-8 pr-5 flex flex-col gap-4 text-white mt-[50px]">
            <div className=" text-xs uppercase">The Partnership:</div>
            <div className=" text-[17px] text-white leading-5 font-bold">
              For our Mars video campaign, we were tasked with a significant
              challenge; to showcase how artificial intelligence tools are
              revolutionizing research methodologies within Mars and emphasizing
              the pioneering strides the company has made in this domain. This
              objective required us to not only illustrate the transformative
              impact of AI on our research processes, but also to highlight Mars
              as a trailblazer in leveraging such technologies.
            </div>
          </div>
        </div>
        <img
          src="/src/assets/img/mars/mars_movie.png"
          className=" w-full h-auto object-contain"
        ></img>
        <div className=" text-white py-10 px-6  text-[17px] font-Helvetica space-y-5 font-normal leading-[20px] box-border">
          <p>
            For the Mars video campaign, we were tasked with a significant
            challenge: to showcase how artificial intelligence tools are
            revolutionizing research methodologies within Mars and emphasizing
            the pioneering strides the company has made in this domain. This
            objective required us to illustrate the transformative impact of AI
            on the research processes and also highlight Mars as a trailblazer
            in leveraging such technologies.
          </p>
          <p>
            At the core of our campaign was the innovative execution of a video
            shot in a single and continuous take this approach was aimed at
            maximizing the viewer's immersion, ensuring their engagement from
            the first frame to the last.
          </p>
          <p>
            The storyboard functioned as a strategic visual blueprint, with each
            scene deliberately designed to convey the narrative's progression.
            Our commitment to a singular, uninterrupted shot allowed us to craft
            a seamless journey through the world of Mars, showcasing our
            forward-thinking approach and the transformative power of AI in
            research.
          </p>
        </div>
        <div className="flex justify-end">
          <img src="/src/assets/img/mars/mars.png"></img>
        </div>
        <div className="w-full flex pt-6">
          <div className="w-1/2">
            <img
              src="/src/assets/img/mars/bp4.png"
              className="w-full h-auto object-contain"
            ></img>
          </div>
          <div className="w-1/2">
            <img
              src="/src/assets/img/mars/bp5.png"
              className="w-full h-auto object-contain"
            ></img>
          </div>
        </div>
        <div className="w-full flex pt-6">
          <div className="w-1/2">
            <img
              src="/src/assets/img/mars/bp3.png"
              className="w-full h-auto object-contain"
            ></img>
          </div>
          <div className="w-1/2">
            <img
              src="/src/assets/img/mars/bp2.png"
              className="w-full h-auto object-contain"
            ></img>
          </div>
        </div>
        <div className="w-full flex pt-6">
          <div className="w-1/2">
            <img
              src="/src/assets/img/mars/bp_13.png"
              className="w-full h-auto object-contain"
            ></img>
          </div>
          <div className="w-1/2">
            <img
              src="/src/assets/img/mars/bp_14.png"
              className="w-full h-auto object-contain"
            ></img>
          </div>
        </div>
        <div className="w-full flex pt-6">
          <div className="w-1/2">
            <img
              src="/src/assets/img/mars/bp_13(1).png"
              className="w-full h-auto object-contain"
            ></img>
          </div>
          <div className="w-1/2">
            <img
              src="/src/assets/img/mars/bp_14(1).png"
              className="w-full h-auto object-contain"
            ></img>
          </div>
        </div>
        <div className="w-full flex pt-6">
          <div className="w-1/2 relative">
            <img
              src="/src/assets/img/mars/uniper_1.png"
              className="w-full h-auto object-contain"
            ></img>
            <div className="absolute left-0 top-0 bg-transparent py-5  h-full pl-4">
              <div className=" max-w-[182px] md:max-w-[400px] flex flex-col justify-between h-full">
                <div className=" flex flex-col gap-4">
                  <div className=" text-white text-[15px] mt-4 font-bold">
                    Net Clean
                  </div>
                  <div className=" mt-4 text-xs md:text-[32px] leading-[14px] md:leading-9">
                    Reinventing how annual data reports can be transformed into
                    impactful narrative communication tools.
                  </div>
                </div>
                <div className=" ml-4 uppercase flex gap-2.5">
                  <div className=" text-[13px]">Read More</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img
              src="/src/assets/img/mars/uniper_2.png"
              className="w-full h-auto object-contain"
            ></img>
          </div>
        </div>
      </div>
      {/* <Contact /> */}
    </div>
  );
};

export default Mars;
