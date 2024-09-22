import React from "react";
import { ReadMore } from "../components";
import { expertiseData2 } from '../data/selections';

const ExpertiseSection = () => {

    return (
        <div>
            {
                expertiseData2.map((val) => (
                    <div key={val.id} className={`text-white lg:border-b-[1px] border-white ${val.id !== 1 ? " sm:pt-2 md:pt-6" : ""}`}>
                        <div className="flex justify-between">
                            <div className="font-Arial font-bold text-sm sm:text-base md:text-lg xl:text-3xl 2xl:text-4xl 3xl:text-[55px] mt-0 md:mt-4 lg:mt-6 xl:mt-8">
                                {val.title}
                            </div>
                            <div className="flex pr-0 xl:pr-20 mt-0 md:mt-4 lg:mt-6 xl:mt-8">
                                <ReadMore linkUrl={val.link_url} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 2xl:grid-cols-2 text-8px sm:text-[10px] xl:text-[15px] font-Helvetica py-1 sm:py-2 md:py-2 lg:py-6 xl:py-8 2xl:py-9 3xl:py-[72px]">
                            <div className="">
                                <div className="flex border-t-[1px] border-b-[1px] border-white">
                                    {val.content1.map((content, index) => (
                                        <div key={content} className={`p-1 border-white ${val.content1.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex border-b-[1px] border-white">
                                    {val.content2.map((content, index) => (
                                        <div key={content} className={`p-1 border-white ${val.content2.length !== index + 1 ? ' border-r-[1px]' : ''}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default ExpertiseSection;