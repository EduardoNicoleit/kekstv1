import React from "react";
import { ReadMore } from "../components";
import { expertiseData2 } from '../data/selections';
import { Link } from "react-router-dom";

const ExpertiseSection = () => {
    return (
        <div>
            {
                expertiseData2.map((val) => (
                    <div key={val.id} className="text-white border-b-[1px] border-white pl-4 md:pl-0 pt-6 lg:pt-12 xl:pt-[55px] 2xl:pt-[45px]">
                        <div className="font-Helvetica flex flex-col xl:flex-row justify-between">
                            <div className="xl:max-w-[950px] 2xl:max-w-none">
                                <Link to={val.link_url}>
                                    <div className="flex items-center font-extrabold text-[18px] pr-4 md:text-[35px] lg:text-[40px] xl:text-[44px] 2xl:text-[2.5vw] 3xl:text-[3vw] hover:text-[#7a6b87]">
                                        {val.title}
                                    </div>
                                </Link>
                                <div className="font-normal text-[3.2vw] pr-4 pt-1 sm:text-sm sm:pr-[30px] sm:text-left md:text-base md:pr-[30px] md:text-left md:pt-2 lg:text-lg lg:pt-4 lg:pr-8 lg:pr-4 xl:text-xl xl:pt-[23px] xl:pr-0 2xl:text-[1.5vw] 2xl:pt-[1.5vw] 2xl:pr-[3vw] 2xl:min-h-[5vw] 2xl:leading-[2vw]">
                                    {val.text}
                                </div>

                            </div>
                            <div className="pr-0 2xl:pr-[2vw] 3xl:pr-[2vw] hidden xl:block flex-none">
                                <ReadMore linkUrl={val.link_url} />
                            </div>
                        </div>
                        <div className="text-[13px] md:text-[1.3vw] font-Helvetica grid grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-2 pr-0 sm:pr-8 xl:pr-[5vw] 2xl:pr-[4vw] pt-4 md:pt-[18px] lg:pt-6 xl:pt-[3vw] 2xl:pt-[2.5vw] pb-[5px] lg:pb-[10px] xl:pb-[3vw] 2xl:pb-[2.5vw]">
                            <div className="col-span-1 2xl:col-span-2">
                                <div className="hidden lg:block w-max">
                                    <div className="flex border-t-[1px] border-b-[1px] border-white">
                                        {val.content1.map((content, index) => (
                                            <div
                                                key={content}
                                                className={`py-[1vw] pr-[1vw] border-white ${index === 0 ? '' : 'border-l pl-[1vw]'}`}
                                            >
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex border-b-[1px] border-white">
                                        {val.content2.map((content, index) => (
                                            <div
                                                key={content}
                                                className={`text-[13px] md:text-[15vw] lg:text-[1.3vw] py-[1vw] pr-[1vw] border-white ${val.content2.length !== index + 1 ? 'border-r' : 'pl-[1vw]'}`}
                                            >
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {!val.content3 ? (
                                    <div className="block lg:hidden">
                                        <div className="flex border-b-[1px] border-t-[1px] border-white">
                                            {val.content1.map((content, index) => (
                                                <div
                                                    key={content}
                                                    className={`py-2 pr-2 border-white ${val.content1.length !== index + 1 ? 'border-r-[1px]' : 'pl-2'}`}
                                                >
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex border-white border-b-[1px]">
                                            {val.content2.map((content, index) => (
                                                <div
                                                    key={content}
                                                    className={`py-2 pr-2 border-white ${val.content2.length !== index + 1 ? 'border-r-[1px]' : 'pl-2'}`}
                                                >
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="block lg:hidden">
                                        <div className="flex border-b-[1px] border-t-[1px] border-white">
                                            {val.content3.map((content, index) => (
                                                <div
                                                    key={content}
                                                    className={`py-2 pr-2 border-white ${index === 0 ? 'border-r-[1px]' : index === 1 ? 'pl-2' : 'border-l-[1px] pl-2'}`}
                                                >
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex border-white">
                                            {val.content4.map((content, index) => (
                                                <div
                                                    key={content}
                                                    className={`py-2 pr-2 border-white ${val.content4.length !== index + 1 ? 'border-r-[1px]' : 'pl-2'}`}
                                                >
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex border-t-[1px] border-b-[1px] border-white">
                                            {val.content5.map((content, index) => (
                                                <div
                                                    key={content}
                                                    className={`py-2 pr-2 border-white ${val.content5.length !== index + 1 ? 'border-r-[1px]' : ''}`}
                                                >
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex border-white border-b-[1px]">
                                            {val.content6.map((content, index) => (
                                                <div
                                                    key={content}
                                                    className={`py-2 pr-2 border-white ${val.content6.length !== index + 1 ? 'border-r-[1px]' : ''}`}
                                                >
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div></div>
                            </div>
                        </div>
                        <div className="pr-0 xl:pr-20 block xl:hidden md:pt-[0px] lg:pt-[0px] xl:pt-0 pb-4 md:pb-5 lg:pb-[20px] xl:pb-0">
                            <ReadMore linkUrl={val.link_url} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ExpertiseSection;
