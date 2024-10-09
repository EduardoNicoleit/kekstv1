/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import ExpandImg from '../assets/img/home/clearbg.svg';
import moveSvg from '../assets/img/effects/move.svg';
import inspireSvg from '../assets/img/effects/inspire.svg';
import growSvg from '../assets/img/effects/grow.svg';

const Welcome = () => {
    return (
        <div className="relative welcome">
            <div className="absolute w-full h-full">
                <img src={ExpandImg} alt="Welcome background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-2 w-full px-2 md:px-[16px] lg:px-[25px] 2xl:px-[50px]">
                <div className="w-full py-[150px] sm:py-[200px] xl:py-[250px]">
                    <div className="w-full max-w-7xl md:ml-[0px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px]">
                        <h1 className="relative text-[2.60rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-extrabold leading-tight text-white px-2">
                            <div className="mb-2 sm:mb-4 whitespace-nowrap mt-12">
                                Encourage. <span
                                    className="inline-block"
                                    style={{
                                        backgroundImage: `url(${moveSvg})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center bottom',
                                        backgroundSize: '150% 5px',
                                    }}
                                >
                                    Move.
                                </span>
                            </div>
                            <div className="mb-2 sm:mb-4 whitespace-nowrap">
                                <span
                                    className="inline-block"
                                    style={{
                                        backgroundImage: `url(${inspireSvg})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center bottom',
                                        backgroundSize: '150% 5px',
                                    }}
                                >
                                    Inspire.
                                </span> Adapt.
                            </div>
                            <div className="mb-2 sm:mb-4 whitespace-nowrap">Expand. React.</div>
                            <div className="mb-2 sm:mb-4 whitespace-nowrap">
                                Attract. <span
                                    className="inline-block relative"
                                    style={{
                                        backgroundImage: `url(${growSvg})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center bottom',
                                        backgroundSize: '102%',
                                        zIndex: 20,
                                        position: 'relative',
                                        overflow: 'visible',

                                    }}
                                >
                                    <span className="relative z-10">Grow.</span>
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