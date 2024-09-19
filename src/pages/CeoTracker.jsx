import React from "react";
import Navbar from "./Navbar";

const CeoTracker = () => {
    return (
        <div className="w-[1920px] relative">
            <div className="relative text-white bg-cover bg-center w-full h-[1090px] bg-[url('assets/img/ceotracker/ceo_header.png')]">                
                <Navbar />
                <div className="absolute text-[70px] font-[400] leading-[81px] left-[332px] bottom-[364px]">
                    Kekst CNC
                </div>
                <div className="absolute text-[160px] font-[700] leading-[184px] left-[332px] bottom-[170px]">
                    CEO Tracker
                </div>
                <div className="absolute bottom-0 h-[128px] px-[50px] w-full box-border">
                    <div className="flex py-[25px] h-full border-t border-b border-gray-300">
                        <div className="w-[268px] border-r border-gray-300 text-2xl pl-[60px] font-Arial leading-8 font-[400]">
                            Overview:
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Launched a report revealing how CEOs<br />      
                            managed communication during the world's<br />
                            tumultuous times.
                        </div>
                        <div className="w-[548px]  border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Developed a visual narrative around distinct CEO<br /> 
                            personas, illustrating various leadership approaches<br /> 
                            amidst economic, political and societal challenges.
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
                        We have released a report derived from an analysis conducted by our Keskt CNC team, revealing how executive communications teams managed during the world's tumultuous times. Thousands of posts have provided insights into how the LinkedIn algorithm operates, the top priorities for CEOs, and how executive communications adjusted amidst ongoing conflict in Europe.                    
                    </div>
                </div>
            </div>

            <div className="w-full px-[50px] pt-[150px] relative box-border">

                <div>
                    <img src="/src/assets/img/ceotracker/ceo_1.png">
                    </img>
                </div>

                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    <div className="pr-[300px]">
                        With governments, media, and social media platforms amplifying polarization and politicization on critical societal issues, businesses and CEOs find themselves increasingly vulnerable. CEOs are seen as vital contributors to discussions on diversity, equity, and inclusion (DE&I) and sustainability, necessitating their engagement. However, they must ensure that their statements are grounded in factual information and yield tangible results rather than mere rhetoric.
                        <br /><br />
                        The report employs visual storytelling, crafted around distinct CEO personas, illustrating various leadership approaches amidst economic, political and societal challenges. This underscores CEOs' adaptability and diverse communication strategies, as they navigate through today's complex landscape of shifting expectations and adversities.
                    </div>
                </div>

                <div className="pt-32">
                    <img src="/src/assets/img/ceotracker/ceo_2.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/ceotracker/ceo_3.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/ceotracker/ceo_movie.png">
                    </img>
                </div>

                <div className="flex justify-end">
                    <img src="/src/assets/img/ceotracker/ceo_movie2.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/ceotracker/ceo_4.png">
                    </img>
                </div>

                <div>
                    <img src="/src/assets/img/ceotracker/ceo_5.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/ceotracker/bp_3b.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    bp
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Creating culturally tailored infographics to showcase bp's Greater Tortue Ahmeyim (GTA) FLNG project's achievements, fostering global understanding and engagement.                               
                                </div>
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
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/ceotracker/DB_4.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    DB
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Crafting inclusive campaigns through strategic messaging and innovative visuals to redefine perceptions and engage diverse audiences.                                
                                </div>
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

export default CeoTracker;