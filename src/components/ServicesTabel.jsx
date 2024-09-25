import React from "react";

const ExpertiseSection = (props) => {

    return (
        <div className="flex text-white gap-7 2xl:gap-10">
            <div className="hidden xl:block font-Helvetica xl:text-xl 3xl:text-2xl md:w-48 lg:w-[143px] xl:w-[180px] 2xl:w-[308px] py-4 md:px-6 lg:px-10 xl:px-4 2xl:px-10">
                Our Services:
            </div>
            <div className="w-full sm:pl-8 md:pl-10 lg:pl-[93px] xl:pl-0 px-10 lg:px-0">
                {
                    props.serviceData && props.serviceData.map((val, index) => (
                        <div key={index}>
                            <div className="sm:text-xs md:text-xs lg:text-[21px] 2xl:text-2xl 3xl:text-4xl font-Helvetica">
                                <div className="flex border-b-[1px] items-center">
                                    {val.content1.map((content, index) => (
                                        <div key={content} className={`${val.content2.length !== index + 1 ? ' ' : ''} ${index !== 0 ? ' border-l-[1px] p-2' : '  sm:py-2 md:py-4 sm:pr-2 md:pr-4'}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                                <div className={`flex items-center ${val.content3 && " border-b-[1px]"}`}>
                                    {val.content2.map((content, index) => (
                                        <div key={content} className={`${val.content2.length !== index + 1 ? ' ' : ''} ${index !== 0 ? ' border-l-[1px] p-2' : '  sm:py-2 md:py-4 sm:pr-2 md:pr-4'}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                                {
                                    val.content3 && (
                                        <div className="flex items-center">
                                            {val.content3.map((content, index) => (
                                                <div key={content} className={`border-white ${val.content3.length !== index + 1 ? ' ' : ''} ${index !== 0 ? ' border-l-[1px] sm:p-2 md:p-4 lg:p-2' : ' sm:py-2 md:py-4 sm:pr-2 md:pr-4 lg:pr-2'}`}>
                                                    {content}
                                                </div>
                                            ))}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ExpertiseSection;