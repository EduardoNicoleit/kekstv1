import React from "react";
import Navbar from "./Navbar";

const Netclean = () => {
    return (
        <div className="w-[1920px] relative">
            <div className="relative text-white bg-cover bg-center w-full h-[1090px] bg-[url('assets/img/netclean/netclean.png')]">                
                <Navbar />
                <div className="absolute text-[160px] font-[700] leading-[184px] left-[332px] bottom-[170px]">
                    Netclean
                </div>
                <div className="absolute bottom-0 h-[128px] px-[50px] w-full box-border">
                    <div className="flex py-[25px] h-full border-t border-b border-gray-300">
                        <div className="w-[268px] border-r border-gray-300 text-2xl pl-[60px] font-Arial leading-8 font-[400] box-border ">
                            Overview:
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Reinvented NetClean's <br />
                            Annual Reports strategy.
                        </div>
                        <div className="w-[548px] border-r border-gray-300 pl-[25px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Crafted a multi-channel, visual approach <br/> 
                            to communicate results and core values.
                        </div>
                        <div className="w-[500px] pl-[25px] pr-[50px] text-[22px] font-Arial leading-[26px] font-[400] box-border flex items-center">
                            Converted data into dynamic stories <br />
                            for stakeholder engagement.
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
                    In our partnership with NetClean, we revolutionized the concept of Annual Reports. We initiated a narrative strategy that resonated with the company's modern and bold ethos, marking a fundamental shift in how NetClean communicates its core values and achievements. 
                    </div>
                </div>
            </div>
            <div className="h-[850px] ml-[360px] mt-[134px] mr-[50px] bg-white"></div>
            <div className="w-full px-[50px] relative box-border">
                <div className="py-[114px] px-[300px] text-white text-[24px] font-Helvetica font-[400] leading-[32px] box-border">
                Our strategy wove this narrative across various channels, creating a dialogue with stakeholders that went beyond the traditional confines of reporting. The aim was to transform static data into a compelling visual narrative, utilizing infographics, illustrations and animations not just to capture attention, but to make complex information engaging and relatable.
                <br /><br />
                This multi-platform execution spanned from the tangible touch of print to the interactive engagement of digital media.
                <br /><br />
                The result was a case study in innovation. By communicating NetClean's results and objectives through an array of narrative-driven, visually engaging content, we didn’t just report on the company's year – we brought it to life. This approach proved instrumental in driving stakeholder engagement and aligning the company’s communication strategy with its forward-thinking identity.
                </div>
                <div>
                    <img src="/src/assets/img/netclean/netclean_1.png">
                    </img>
                </div>
                <div className="pt-[64px]">
                    <img src="/src/assets/img/netclean/netclean_2.png">
                    </img>
                </div>
                <div className="flex justify-end">
                    <img src="/src/assets/img/netclean/netclean_3.png">
                    </img>
                </div>
                <div className="pt-[64px] flex justify-end">
                    <img src="/src/assets/img/netclean/white.png">
                    </img>
                    <img src="/src/assets/img/netclean/black.png">
                    </img>
                </div>
                <div>
                    <img className="pt-[128px]" src="/src/assets/img/netclean/netclean_4.png">
                    </img>
                </div>
                <div className="flex justify-end">
                    <img src="/src/assets/img/netclean/netclean_5.png">
                    </img>
                </div>
                <div className="w-full flex pt-16">
                    <div className="w-1/2">
                        <div className="w-full h-[800px] bg-no-repeat bg-cover bg-[url('assets/img/netclean/vw.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    bpl
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Partnering with Volkswagen to enhance their global ESG narrative, from strategic audience engagement to shaping future sustainability pathways.
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
                        <div className=" w-full h-[800px] bg-no-repeat bg-[url('assets/img/netclean/PHI_copy.png')]">
                            <div className="relative pl-[43px] pt-[100px] w-[513px] h-[716px] text-white">
                                <div className="h-[100px] text-2xl font-[700]">
                                    NetClean
                                </div>
                                <div className="text-[40px] font-[400] leading-[50px] font-Arial">
                                    Crafting a video campaign that showcases how artificial intelligence tools are revolutionizing research methodologies within Mars, positioning them at the forefront of innovative exploration.
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

export default Netclean;