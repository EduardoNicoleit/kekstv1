import React from "react";
import Navbar from "./Navbar";

const DTCP = () => {
    return (
        <div className="w-[1920px] relative">
            <div className="relative text-white bg-cover bg-center w-full h-[1090px] bg-[url('assets/img/dtcp/dtcp_header.png')]">                
                <Navbar />
                <div className="absolute text-[160px] font-[700] leading-[184px] left-[332px] bottom-[170px]">
                    DTCP
                </div>
                <div className="absolute bottom-0 h-[128px] px-[50px] w-full box-border">
                    <div className="flex py-[25px] h-full border-t border-b border-gray-300">
                        <div className="w-[268px] border-r border-gray-300 text-2xl pl-[60px] font-Arial leading-8 font-[400] box-border">
                            Overview:
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Elevated the Annual Report with <br/>
                            Dynamic Visual Narratives.
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Transformed Complex Data into  <br />
                            Actionable Insights.
                        </div>
                        <div className="w-[500px] pl-[25px] pr-[50px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Crafted a Visual Identity that Reflects <br/>
                            the Company's Trustworthiness.
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
                        Partnering with DTCP, we've transformed their Annual Reports, infusing them with a narrative that resonates with the company's unique essence; dynamic and innovative. This approach was meticulously crafted to engage stakeholders, effectively conveying the company's accomplishments and future aspirations through a blend of captivating visual storytelling and insightful infographics. By integrating these elements, we ensured that the report not only invigorate readers, but also authentically reflect our pioneering ethos.                    </div>
                </div>
            </div>

            <div className="w-full px-[50px] pt-[150px] relative box-border">

                <div className="flex justify-end">
                    <img src="/src/assets/img/dtcp/dtcp_movie.png">
                    </img>
                </div>

                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    <div className="pr-[300px]">
                        By presenting complex information in a visually compelling manner, we facilitated a deeper understanding of the company's performance and strategic direction. Whether it's through interactive charts, dynamic graphs, or engaging timelines, our aim was to empower stakeholders with actionable insights that inform decision-making and foster trust in DTCP.
                    </div>
                </div>

                <div className="pt-32">
                    <img src="/src/assets/img/dtcp/dtcp_header1.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/dtcp/dtcp_3.png">
                    </img>
                </div>

                <div className="flex justify-end">
                    <img src="/src/assets/img/dtcp/dtcp_2.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/dtcp/dtcp_1.png">
                    </img>
                </div>

                <div>
                    <img src="/src/assets/img/dtcp/dtcp_5.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/dtcp/malteser_header.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    Malteser
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Merging data with design to democratize information, crafting a visually engaging, universally accessible identity.                           
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
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/dtcp/bp_3b.png')]">
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
                </div>
            </div>

        </div>
    )
}

export default DTCP;