import React from "react";
import { ReadMore } from "../components";
import { expertiseData2 } from '../data/selections';

const ExpertiseSection = () => {

    return (
        <div>
            {
                expertiseData2.map((val) => (
                    <div key={val.id} className={`text-white border-b-[1px] border-white ${val.id !== 1 ? " pt-6" : ""}`}>
                        <div className="flex items-center justify-between">
                            <div className="font-Arial font-bold text-[55px] mt-8">
                                {val.title}
                            </div>
                            <div className="flex pr-24">
                                <ReadMore linkUrl={val.link_url} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 text-[15px] font-Helvetica py-14">
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