import React from 'react';

const SectionTwo: React.FC = () => {
    return (
        <div className="sectionTwo relative w-full flex items-center justify-center overflow-hidden">
            {/* Text Content with Overlay */}
            <div className="relative z-10 p-6 md:p-12 text-left w-full h-full flex flex-col items-start justify-center space-y-10 max-w-full md:max-w-[70%]">
                <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white shadow-lg leading-tight">
                    Encourage. Move.
                </div>
                <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white shadow-lg leading-tight">
                    Inspire. Adapt.
                </div>
                <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white shadow-lg leading-tight">
                    Expand. React.
                </div>
                <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white shadow-lg leading-tight">
                    Attract. Grow.
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
