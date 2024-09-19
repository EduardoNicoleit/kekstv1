import React from "react";
import Navbar from "./Navbar";

const CopReport = () => {
    return (
        <div className="w-[1920px] relative">
            <div className="relative text-white bg-cover bg-center w-full h-[1090px] bg-[url('assets/img/copreport/cop27_header.png')]">                
                <Navbar />
                <div className="absolute text-[70px] font-[400] leading-[81px] left-[332px] bottom-[364px]">
                    Kekst CNC
                </div>
                <div className="absolute text-[160px] font-[700] leading-[184px] left-[332px] bottom-[170px]">
                    COP 27 Report
                </div>
                <div className="absolute bottom-0 h-[128px] px-[50px] w-full box-border">
                    <div className="flex py-[25px] h-full border-t border-b border-gray-300">
                        <div className="w-[268px] border-r border-gray-300 text-2xl pl-[60px] font-Arial leading-8 font-[400] box-border">
                            Overview:
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Analyzed over 2 million <br />
                            content pieces globally.
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Derived insights from daily<br />
                            conversations and executive discussions<br />
                            on LinkedIn.
                        </div>
                        <div className="w-[548px] border-gray-300 pl-[25px] pr-[50px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Enhanced understanding through data<br /> 
                            visualization and visual storytelling.
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
                        We launched a report for COP 27, grounded in an analysis of over 2 million content pieces from various regions and media sources. Our analysis included earned media, trade press, and social media content from Europe, the Middle East, and the US.                
                    </div>
                </div>
            </div>

            <div className="w-full px-[50px] pt-[150px] relative box-border">

                <div>
                    <img src="/src/assets/img/copreport/bp_1 1.png">
                    </img>
                </div>

                <div className="pt-[114px] pl-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                    <div className="pr-[300px]">
                        By analyzing and correlating the most distinct and interesting data points, we crafted a compelling global narrative. Data visualization and visual storytelling in the report played a crucial role in enhancing understanding, discovering insights, and informing decision-making.
                        <br /><br />
                        We examined key stakeholder perceptions—investors, activists/policy makers, the general public, top executives, and journalists—across 11 key sectors: Extractives, Financials, Food & Beverage, Healthcare, Infrastructure, Resource Transformation, Services, Technology, Transportation, and Renewables. We categorized content sentiment as positive, neutral, or negative.
                        <br /><br />
                        This approach enabled us to calculate daily conversation volumes and Net Polarized Sentiment—a ratio of positive to negative sentiment adjusted for materiality. Insights were further enriched by LinkedIn conversations among top executives.
                    </div>
                </div>

                <div className="pt-32">
                    <img src="/src/assets/img/copreport/cop27_2.png">
                    </img>
                </div>

                <div className="pt-16 flex justify-end">
                    <img src="/src/assets/img/copreport/cop27_3.png">
                    </img>
                </div>

                <div className="pt-16">
                    <img src="/src/assets/img/copreport/cop27_4.png">
                    </img>
                </div>
                
                <div className="pt-16">
                    <img src="/src/assets/img/copreport/cop27_5.png">
                    </img>
                </div>

                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/copreport/DB_4.png')]">
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
                    <div className="w-1/2">
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/copreport/BP_1.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    bpl
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Partnering with bpI to spotlight its crucial role in advancing the pharmaceutical industry through engaging narratives and innovative visual strategies.                                
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

export default CopReport;