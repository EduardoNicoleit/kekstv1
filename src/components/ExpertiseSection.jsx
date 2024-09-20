import React from "react";
import { ReadMore } from "../components";
import { expertiseData2 } from '../data/selections';

const ExpertiseSection = () => {
    return (
        <div className="space-y-6">
            {expertiseData2.map((val) => (
                <div key={val.id} className={`text-white border-b-[1px] border-white ${val.id !== 1 ? "pt-6" : ""}`}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-0">
                        <div className="font-Arial font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[55px] mt-4 sm:mt-8">
                            {val.title}
                        </div>
                        <div className="mt-2 sm:mt-0 sm:pr-4 md:pr-8 lg:pr-24">
                            <ReadMore linkUrl={val.link_url} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 text-xs sm:text-sm md:text-[15px] font-Helvetica py-6 sm:py-10 md:py-14">
                        <div className="space-y-2">
                            <div className="flex flex-wrap border-t border-b border-white">
                                {val.content1.map((content, index) => (
                                    <div key={content} className={`p-1 border-white ${index !== val.content1.length - 1 ? 'border-r' : ''} ${index !== 0 ? 'border-t sm:border-t-0' : ''}`}>
                                        {content}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap border-b border-white">
                                {val.content2.map((content, index) => (
                                    <div key={content} className={`p-1 border-white ${index !== val.content2.length - 1 ? 'border-r' : ''} ${index !== 0 ? 'border-t sm:border-t-0' : ''}`}>
                                        {content}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ExpertiseSection;