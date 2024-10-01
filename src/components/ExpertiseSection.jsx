import React from "react";
import { ReadMore } from "../components";
import { expertiseData2 } from '../data/selections';

const ExpertiseSection = () => {
    return (
        <div>
            {
                expertiseData2.map((val) => (
                    <div key={val.id} className="text-white border-b-[1px] border-white pl-[9px] md:pl-0 
                    pt-8 lg:pt-12 xl:pt-[55px] 2xl:pt-[45px]">
                        <div className="font-Helvetica flex flex-col xl:flex-row justify-between">
                            <div className="xl:max-w-[950px] 2xl:max-w-none">
                                <div className="flex items-center md:font-Arial font-bold text-base lg:text-3xl xl:text-[40px] 2xl:text-[55px]">
                                    {val.title}
                                </div>
                                <div className="font-normal text-xs lg:text-base xl:text-xl pt-1 md:pt-2 lg:pt-4 xl:pt-[23px] 2xl:pt-4 2xl:max-w-[1130px]">
                                    {val.text}
                                </div>
                            </div>
                            <div className="pr-0 2xl:pr-[94px] hidden xl:block">
                                <ReadMore linkUrl={val.link_url} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 3xl:grid-cols-2 text-8px text-[13px] lg:text-[15px] font-Helvetica pr-0 sm:pr-8 3xl:pr-0
                        pt-4 md:pt-[18px] lg:pt-6 xl:pt-10 2xl:pt-[52px] pb-[18px] lg:pb-[22px] xl:pb-[54px] 2xl:pb-[52px]">
                            <div className="hidden lg:block">
                                <div className="flex border-t-[1px] border-b-[1px] border-white">
                                    {val.content1.map((content, index) => (
                                        <div key={content} className={`py-2 pr-2 border-white ${val.content1.length !== index + 1 ? ' border-r-[1px]' : ' pl-2'}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex border-b-[1px] border-white">
                                    {val.content2.map((content, index) => (
                                        <div key={content} className={`py-2 pr-2  border-white ${val.content2.length !== index + 1 ? ' border-r-[1px]' : ' pl-2'}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {!val.content3 ?
                                (
                                    <div className="block lg:hidden">
                                        <div className="flex border-b-[1px] border-t-[1px] border-white">
                                            {val.content1.map((content, index) => (
                                                <div key={content} className={`py-2 pr-2 border-white ${val.content1.length !== index + 1 ? ' border-r-[1px]' : ' pl-2'}`}>
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex border-white border-b-[1px]">
                                            {val.content2.map((content, index) => (
                                                <div key={content} className={`py-2 pr-2   border-white ${val.content2.length !== index + 1 ? ' border-r-[1px]' : ' pl-2'}`}>
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) :
                                <div className="block lg:hidden">
                                    <div className="flex border-b-[1px] border-t-[1px] border-white">
                                        {val.content3.map((content, index) => (
                                            <div key={content} className={`py-2 pr-2 border-white ${index === 0 ? ' border-r-[1px]' : index === 1 ? ' pl-2' : 'border-l-[1px] pl-2'}`}>
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex border-white">
                                        {val.content4.map((content, index) => (
                                            <div key={content} className={`py-2 pr-2 border-white ${val.content4.length !== index + 1 ? ' border-r-[1px]' : ' pl-2'}`}>
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex border-t-[1px] border-b-[1px] border-white">
                                        {val.content5.map((content, index) => (
                                            <div key={content} className={`py-2 pr-2  border-white ${val.content5.length !== index + 1 ? ' border-r-[1px]' : ' '}`}>
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex border-white border-b-[1px]">
                                        {val.content6.map((content, index) => (
                                            <div key={content} className={`py-2 pr-2 border-white ${val.content6.length !== index + 1 ? ' border-r-[1px]' : ' '}`}>
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                            <div></div>
                        </div>
                        <div className="pr-0 xl:pr-20 block xl:hidden md:pt-1 lg:pt-[28px] xl:pt-0 pb-4 md:pb-5 lg:pb-[50px] xl:pb-0">
                            <ReadMore linkUrl={val.link_url} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default ExpertiseSection;