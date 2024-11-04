import React from "react";

const ExpertiseSection = (props) => {
    return (
        <div className="flex text-white">
            <div className="hidden 2xl:block flex-none font-Helvetica xl:text-xl 2xl:text-[24px] 3xl:text-[1.2vw] 5xl:text-[1vw] md:w-48 lg:w-[143px] xl:w-[154px] 2xl:w-[308px] 3xl:w-[15vw] py-4 2xl:py-[0.6vw] 3xl:py-[1.1vw] md:px-6 lg:px-10 xl:px-4 2xl:px-10 3xl:px-[2vw]">
                Our Services:
            </div>
            <div className="w-full sm:pl-8 md:pl-[33px] lg:pl-[46px] xl:pl-[154px] 2xl:pl-0 px-10 lg:px-0">
                {
                    props.serviceData && props.serviceData.map((val, index) => (
                        <div key={index}>
                            <div className="sm:text-xs md:text-xs lg:text-[21px] 2xl:text-[26px] 3xl:text-[1.4vw] 5xl:text-[1.2vw] font-Helvetica">
                                <div className="flex border-b-[1px] items-center">
                                    {val.content1.map((content, index) => (
                                        <div
                                            key={content}
                                            className={`${val.content2.length !== index + 1 ? '' : ''
                                                } ${index !== 0
                                                    ? ' border-l-[1px] p-2 md:p-4 3xl:p-[1.5vw]'
                                                    : 'sm:py-2 md:py-4 sm:pr-2 md:pr-4 3xl:pr-[1.5vw] 3xl:py-[1.5vw]'
                                                }`}
                                        >
                                            {content}
                                        </div>
                                    ))}
                                </div>
                                <div className={`flex items-center ${val.content3 && "border-b-[1px]"}`}>
                                    {val.content2.map((content, index) => (
                                        <div
                                            key={content}
                                            className={`${val.content2.length !== index + 1 ? '' : ''
                                                } ${index !== 0
                                                    ? ' border-l-[1px] p-2 md:p-4 3xl:p-[1.5vw]'
                                                    : 'sm:py-2 md:py-4 sm:pr-2 md:pr-4 3xl:pr-[1.5vw] 3xl:py-[1.5vw]'
                                                }`}
                                        >
                                            {content}
                                        </div>
                                    ))}
                                </div>
                                {val.content3 && (
                                    <div className="flex items-center">
                                        {val.content3.map((content, index) => (
                                            <div
                                                key={content}
                                                className={`border-white ${val.content3.length !== index + 1 ? '' : ''
                                                    } ${index !== 0
                                                        ? ' border-l-[1px] p-2 md:p-4 3xl:p-[1.5vw]'
                                                        : 'sm:py-2 md:py-4 sm:pr-2 md:pr-4 3xl:pr-[1.5vw] 3xl:py-[1.5vw]'
                                                    }`}
                                            >
                                                {content}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ExpertiseSection;
