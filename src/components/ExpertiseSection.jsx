import React from "react";
import { ReadMore } from "../components";
import { expertiseData2 } from '../data/selections';

const ExpertiseSection = () => {
    return (
        <div>
            {
                expertiseData2.map((val) => (
                    <div key={val.id} className="text-white border-b-[1px] border-white sm:pl-8 md:pl-0 py-8 lg:py-[60px] xl:py-[60px] 2xl:py-10 3xl:py-16">
                        <div className="flex flex-col sm:flex-row justify-between px-4">
                            <div className="font-Helvetica flex items-center md:font-Arial font-bold text-[21px] sm:text-base md:text-lg lg:text-3xl 2xl:text-4xl 3xl:text-[55px] pb-4 sm:pb-0">
                                {val.title}
                            </div>
                            <div className="pr-0 xl:pr-20 hidden sm:block">
                                <ReadMore linkUrl={val.link_url} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 3xl:grid-cols-2 text-8px text-[13px] lg:text-[15px] font-Helvetica pt-6 sm:pt-8 lg:pt-[60px] xl:pt-[60px] 2xl:pt-9 3xl:pt-10 pr-0 sm:pr-8 3xl:pr-0">
                            <div className="hidden sm:block">
                                <div className="flex border-t-[1px] border-b-[1px] border-white">
                                    {val.content1.map((content, index) => (
                                        <div key={content} className={`p-2 border-white ${val.content1.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex border-b-[1px] border-white">
                                    {val.content2.map((content, index) => (
                                        <div key={content} className={`p-2 border-white ${val.content2.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {!val.content3 ?
                                (
                                    <div className="block sm:hidden px-4 pb-10">
                                        <div className="flex border-b-[1px] border-t-[1px] border-white">
                                            {val.content1.map((content, index) => (
                                                <div key={content} className={`p-2 border-white ${val.content1.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex border-white border-b-[1px]">
                                            {val.content2.map((content, index) => (
                                                <div key={content} className={`p-2  border-white ${val.content2.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) :
                                <div className="block sm:hidden px-4 pb-10">
                                    <div className="flex border-b-[1px] border-t-[1px] border-white">
                                        {val.content3.map((content, index) => (
                                            <div key={content} className={`p-2 border-white ${val.content3.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex border-white">
                                        {val.content4.map((content, index) => (
                                            <div key={content} className={`p-2  border-white ${val.content4.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex border-t-[1px] border-b-[1px] border-white">
                                        {val.content5.map((content, index) => (
                                            <div key={content} className={`p-2 border-white ${val.content5.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex border-white border-b-[1px]">
                                        {val.content6.map((content, index) => (
                                            <div key={content} className={`p-2 border-white ${val.content6.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                            <div></div>
                        </div>
                        <div className="pr-0 xl:pr-20 block sm:hidden">
                            <ReadMore linkUrl={val.link_url} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default ExpertiseSection;