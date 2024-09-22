import React from "react";

const ExpertiseSection = (props) => {

    return (
        <div className="flex text-white gap-10">
            <div className="hidden lg:block font-Helvetica xl:text-xl 3xl:text-2xl md:w-48 lg:w-[308px] py-4 md:px-6 lg:px-10">
                Our Services:
            </div>
            <div className="w-full">
                {
                    props.serviceData && props.serviceData.map((val, index) => (
                        <div key={index}>
                            <div className="sm:text-xs md:text-xs lg:text-sm 2xl:text-2xl 3xl:text-4xl font-Helvetica">
                                <div className="flex border-b-[1px] border-white">
                                    {val.content1.map((content, index) => (
                                        <div key={content} className={`border-white ${val.content1.length !== index + 1 ? ' border-r-[1px]' : ''} ${index !== 0 ? ' sm:p-2 md:p-4' : ' sm:py-2 md:py-4 sm:pr-2 md:pr-4'}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex border-b-[1px]">
                                    {val.content2.map((content, index) => (
                                        <div key={content} className={`${val.content2.length !== index + 1 ? ' border-r-[1px]' : ''} ${index !== 0 ? ' sm:p-2 md:p-4' : ' sm:py-2 md:py-4 sm:pr-2 md:pr-4'}`}>
                                            {content}
                                        </div>
                                    ))}
                                </div>
                                {
                                    val.content3 && (
                                        <div className="flex ">
                                            {val.content3.map((content, index) => (
                                                <div key={content} className={`border-white ${val.content3.length !== index + 1 ? ' border-r-[1px]' : ''} ${index !== 0 ? ' sm:p-2 md:p-4' : ' sm:py-2 md:py-4 sm:pr-2 md:pr-4'}`}>
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