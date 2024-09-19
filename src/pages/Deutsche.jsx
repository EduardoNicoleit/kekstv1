import React from "react";
import Navbar from "./Navbar";

const Deutsche = () => {
    return (
        <div className="w-[1920px] relative">
            <div className="relative text-white bg-cover bg-center w-full h-[1090px] bg-[url('assets/img/deutsche/DB_header.png')]">                
                <Navbar />
                <div className="absolute text-[160px] font-[700] leading-[184px] left-[332px] bottom-[170px]">
                    Deutsche Bahn
                </div>
                <div className="absolute bottom-0 h-[128px] px-[50px] w-full box-border">
                    <div className="flex py-[25px] h-full border-t border-b border-gray-300">
                        <div className="w-[268px] border-r border-gray-300 text-2xl pl-[60px] font-Arial leading-8 font-[400] box-border">
                            Overview:
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Conceptualized Deutsche Bahn's messaging on<br /> 
                            the topic of "diversity" based on factual insights<br />      
                            and the company's reality.
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Utilized innovative visual communication to<br /> 
                            reshape perceptions of diversity.
                        </div>
                        <div className="w-[548px]  pl-[25px] pr-[50px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Deployed a strategic approach targeting<br /> 
                            key stakeholders and the general public.
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
                        Partnering with Deutsche Bahn, we embarked on a campaign aimed at spotlighting and championing diversity within Germany'slargest railway company.                 
                    </div>
                </div>
            </div>

            <div className="w-full px-[50px] pt-[150px] relative box-border">

                <div>
                    <img src="/src/assets/img/deutsche/DB_movie.png">
                    </img>
                </div>

                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    <div className="pr-[300px]">
                        Our approach centered on a communication strategy grounded in factual information and a candid portrayal of the company's current landscape.
                        <br/><br/>
                        Employing a distinctive visual language crafted specifically to demystify and engage with the topic, our strategy aimed to present diversity in a refreshing and accessible light. Through modern illustrations, we showcased diversity as a vibrant and integral aspect of the company, steering away from conventional representations. These visuals not only symbolized the campaign's core message but, also marked a significant shift in the company's.
                        <br/><br/>
                        We crafted an experience that converted passive viewers into active readers, readers into committed followers and followers into advocates.
                    </div>
                </div>

                <div className="pt-32 flex justify-end">
                    <img src="/src/assets/img/deutsche/DB_1.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/deutsche/DB_2.png">
                    </img>
                </div>

                <div className="pt-16 flex justify-end">
                    <img src="/src/assets/img/deutsche/DB_3.png">
                    </img>
                </div>
                
                <div className="pt-16">
                    <img src="/src/assets/img/deutsche/DB_4.png">
                    </img>
                </div>

                <div className="flex justify-end">
                    <img src="/src/assets/img/deutsche/DB_5.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/deutsche/ceo_1.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    CEO Tracker
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Analyzing CEO communication during turbulent times and crafting visually engaging narratives to showcase diverse leadership strategies amidst complex challenges.                               
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
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/deutsche/Cop27_1.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    COP 27
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Shaping COP 27's global narrative through data-driven insights and visual storytelling, capturing diverse stakeholder sentiments.                                
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

export default Deutsche;