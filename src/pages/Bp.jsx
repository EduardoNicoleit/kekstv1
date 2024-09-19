import React from "react";
import Navbar from "./Navbar";

const BP = () => {
    return (
        <div className="w-[1920px] relative">
            <div className="relative text-white bg-cover bg-center w-full h-[1090px] bg-[url('assets/img/bp/bp_3b.png')]">                
                <Navbar />
                <div className="absolute text-[160px] font-[700] leading-[184px] left-[332px] bottom-[170px]">
                    bp
                </div>
                <div className="absolute bottom-0 h-[128px] px-[50px] w-full box-border">
                    <div className="flex py-[25px] h-full border-t border-b border-gray-300">
                        <div className="w-[268px] border-r border-gray-300 text-2xl pl-[60px] font-Arial leading-8 font-[400] box-border">
                            Overview:
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Developed a series of infographics <br />
                            for bp's GTA FLNG project.
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] pr-[50px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Adapted content for different regions and languages,<br /> 
                            ensuring cultural and regional relevance.
                        </div>
                        <div className="w-[500px] pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Utilized a visual strategy to enhance<br /> 
                            understanding and engagement.
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[280px] pl-[110px] pr-[264px] flex relative">
                 <div className="w-[16%] text-white text-2xl font-Helvetica font-[400] leading-[28px] box-border">                        
                    The partnership:
                </div>
                <div className="w-[84%] flex flex-col">
                    <div className=" text-white text-[40px] font-Helvetica font-[400] leading-[46px] box-border">
                        In collaboration with bp, we created a series of static infographics to announce the arrival and berthing of different vessels at the Greater Tortue Ahmeyim (GTA) project. These infographics were designed to be used across bp-owned channels, including bp.com and bp's social media platforms, as part of an integrated communications campaign.                    
                    </div>
                </div>
            </div>

            <div className="w-full px-[50px] pt-[150px] relative box-border">

                <div>
                    <img src="/src/assets/img/bp/bp_movie.png">
                    </img>
                </div>

                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    <div className="pr-[300px]">
                        Our goal was to engage and educate audiences about the GTA project and the critical role of the FLNG vessels. The infographics showcased the project's scale and complexity, highlighting the world-class engineering involved.
                        <br /><br />
                        To resonate with diverse audiences, we tailored the visual content to reflect regional and cultural understandings. This approach not only enhanced the relatability of the infographics but also ensured that the information was accessible and engaging for different demographics.
                        <br /><br />
                        Through strategic visual storytelling, we brought the GTA FLNG project to life, emphasizing its significance in meeting the energy needs of Mauritania and Senegal and establishing a world-class LNG hub. The infographics served as a powerful tool in bp's communication strategy, effectively bridging the gap between complex technical information and public understanding.
                    </div>
                </div>

                <div className="pt-32">
                    <img src="/src/assets/img/bp/bp_1.png">
                    </img>
                </div>

                <div className="flex flex-row justify-end">
                    <div>
                        <img src="/src/assets/img/bp/bp_3a.png">
                        </img>
                    </div>
                    <div className="flex-col">
                        <div>
                            <img src="/src/assets/img/bp/bp_14.png">
                            </img>
                        </div>
                        <div>
                            <img src="/src/assets/img/bp/bp_3d.png">
                            </img>
                        </div>
                    </div>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/bp/bp_2.png">
                    </img>
                </div>

                <div className="pt-16 justify-end flex">
                    <img src="/src/assets/img/bp/bp_5.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/bp/dtcp_geader.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    DTCP
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Infusing dynamic visual narratives and data insights to craft a trustworthy, stakeholder-engaging brand identity for DTCP.                                </div>
                                <div className="pl-5 absolute bottom-0 flex">
                                    <div>
                                        READ MORE
                                    </div>
                                    <div className="pl-3 flex items-center">
                                        <img src="/src/assets/img/volkswagen/Vector.png" className="w-[13px] h-[13px]">
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/bp/ceo_1.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    CEO Tracker
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Analyzing CEO communication during turbulent times and crafting visually engaging narratives to showcase diverse leadership strategies amidst complex challenges.                                </div>
                                <div className="pl-5 absolute bottom-0 flex">
                                    <div>
                                        READ MORE
                                    </div>
                                    <div className="pl-3 flex items-center">
                                        <img src="/src/assets/img/volkswagen/Vector.png" className="w-[13px] h-[13px]">
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BP;