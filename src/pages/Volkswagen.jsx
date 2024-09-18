import React from "react";
import Banner from "../components/banner";

const Volkswagen = () => {
  return (
    <div className="w-[1920px] relative">
      <div className="relative text-white bg-cover bg-center w-full h-[1090px] bg-[url('assets/img/volkswagen/volkswagen.png')]">
        {/* <Banner /> */}
        <div className="absolute text-[160px] leading-[184px] left-[332px] bottom-[170px]">
          Volkswagen
        </div>
        <div className="absolute bottom-0 h-[128px] px-[50px] w-full box-border">
          <div className="flex py-[32px] h-full">
            <div className="w-[268px] border-r border-gray-300 text-2xl pl-[60px] font-Arial leading-8 font-[400] box-border">
              Overview:
            </div>
            <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-8 font-[400] box-border">
              Crafted a targeted social media <br />
              campaign for Volkswagen's ESG initiatives.
            </div>
            <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-8 font-[400] box-border">
              Engaged audiences with creative <br />
              content over a two-month period.
            </div>
            <div className="w-[500px] pl-[25px] text-[22px] font-Arial leading-8 font-[400] box-border">
              Transformed ESG data into relatable visuals, enhancing audience
              connection.
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[280px] pl-[110px] pr-[264px] pb-[124px] flex relative">
        <div className="w-[16%] text-white text-2xl font-Helvetica font-[400] leading-[28px] box-border">
          The partnership:
        </div>
        <div className=" w-[84%] text-white text-[40px] font-Helvetica font-[400] leading-[46px] box-border">
          In close collaboration with Volkswagen, we meticulously developed a
          social media campaign to promote and position the group's global ESG
          initiatives. Over two months, this campaign engaged audiences through
          creative posts, aiming to shift perceptions by connecting ESG actions
          with relatable, real-world scenarios.
        </div>
      </div>
      <div className="w-full px-[50px] relative box-border">
        <img src="/src/assets/img/volkswagen/Netclean_1.png"></img>
        <div className="py-[114px] px-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
          Our commitment spanned from concept creation and strategic planning to
          the execution phase, ensuring a seamless narrative throughout. The
          visual strategy transformed complex data into engaging visuals,
          marrying numerical facts about Volkswagen's ESG efforts with elements
          from everyday life, such as soccer stadiums and natural landscapes, to
          whimsical motifs like balloons.
          <br />
          <br />
          This approach aimed to create an emotional connection, making the ESG
          initiatives both accessible and meaningful to the audience. Through
          careful strategy, creative conceptualization, and diligent execution,
          we delivered a cohesive and impactful campaign.
        </div>
        <img src="/src/assets/img/volkswagen/Netclean_1(1).png"></img>
        <div className="pt-[64px] flex justify-end">
          <img src="/src/assets/img/volkswagen/vw-mockup.png"></img>
        </div>
        <img
          className="pt-[64px]"
          src="/src/assets/img/volkswagen/vw_movie_3.png"
        ></img>
        <img
          className="pt-[64px]"
          src="/src/assets/img/volkswagen/vw-mockup_4 copy.png"
        ></img>
        <div className="w-full flex pt-16">
          <div className="w-1/2">
            <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/volkswagen/volkswagen.png')]"></div>
          </div>
          <div className="w-1/2">
            <div className="w-full h-[800px] bg-no-repeat bg-[url('assets/img/volkswagen/netclean_2.png')]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volkswagen;
