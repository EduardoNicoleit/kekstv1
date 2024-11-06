/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import ExpandImg from '../assets/img/home/clearbg.svg';
import moveSvg from '../assets/img/effects/move.svg';
import inspireSvg from '../assets/img/effects/inspire.svg';
import growSvg from '../assets/img/effects/grow.svg';

const Welcome = () => {
    return (
        <div className="relative welcome max-w-full max-h-[80%]">
            <div className="absolute w-full h-full">
                <img src={ExpandImg} alt="Welcome background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-2 w-full px-3 md:px-[16px] lg:px-[25px] 2xl:px-[208px]">
                <div className="w-full pt-[50px] pb-[30px] sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32 xl:pt-36 xl:pb-36 2xl:pt-30 2xl:pb-20 3xl:pt-[20vh] 3xl:pb-36">
                    <div className="w-full max-w-7xl lg:pl-14 xl:pl-24 2xl:pl-36">
                        <h1
                            className="relative font-extrabold leading-tight text-white px-3 md:px-6 lg:px-0 pr-4 text-[9.5vw] sm:text-[9.5vw] md:text-[9.5vw] xl:text-[9.5vw] 2xl:text-[7.5vw] 3xl:text-[7.5vw] 3xl:mt-[5vh]"
                            style={{
                                fontFamily: 'Helvetica, sans-serif',
                                maxWidth: '50vw', // Default max width for larger screens
                            }}
                        >
                            <div className="mb-2 sm:mb-4 whitespace-nowrap mt-12">
                                Encourage. <span
                                    className="inline-block"
                                    style={{
                                        backgroundImage: `url(${moveSvg})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center bottom',
                                        backgroundSize: '98%',
                                        overflow: 'visible',
                                    }}
                                >
                                    <span className="relative z-10 pl-0 lg:pl-3 pr-4">Move.</span>
                                </span>
                            </div>
                            <div className="mb-2 sm:mb-4 whitespace-nowrap">
                                <span
                                    className="inline-block"
                                    style={{
                                        backgroundImage: `url(${inspireSvg})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center bottom',
                                        backgroundSize: '110%',
                                        overflow: 'visible',
                                    }}
                                >
                                    Inspire.
                                </span> Adapt.
                            </div>
                            <div className="mb-2 sm:mb-4 whitespace-nowrap">Expand. React.</div>
                            <div className="mb-2 sm:mb-4 whitespace-nowrap">
                                Attract.
                                <span
                                    className="inline-block relative z-10"
                                    style={{
                                        backgroundImage: `url(${growSvg})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center bottom',
                                        backgroundSize: '98%',
                                        overflow: 'visible',

                                    }}
                                >
                                    <span className="relative z-10 pl-3 pr-3 md:pl-6 md:pr-6">Grow.</span>
                                </span>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;