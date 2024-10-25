import React, { useEffect } from 'react';

// Placeholder for the image source
import locationImg from 'path/to/your/map/image.svg';

const InteractiveMap = () => {
    useEffect(() => {
        const offices = [
            { className: ".st14", city: "Abu Dhabi", address: "Abu Dhabi Address" },
            { className: ".st6", city: "Berlin", address: "Berlin Address" },
            { className: ".st4", city: "Brussels", address: "Brussels Address" },
            { className: ".st12", city: "Dubai", address: "Dubai Address" },
            { className: ".st1", city: "Frankfurt", address: "Frankfurt Address" },
            { className: ".st7", city: "London", address: "London Address" },
            { className: ".st5", city: "Munich", address: "Munich Address" },
            { className: ".st11", city: "New York", address: "New York Address" },
            { className: ".st3", city: "Paris", address: "Paris Address" },
            { className: ".st13", city: "Riyadh", address: "Riyadh Address" },
            { className: ".st9", city: "Seoul", address: "Seoul Address" },
            { className: ".st2", city: "Stockholm", address: "Stockholm Address" },
            { className: ".st8", city: "Tokyo", address: "Tokyo Address" },
            { className: ".st10", city: "Washington, D.C.", address: "Washington, D.C. Address" }
        ];

        offices.forEach((office) => {
            const dotElements = document.querySelectorAll(`circle${office.className}, path${office.className}`);
            dotElements.forEach((dotElement) => {
                const cx = parseFloat(dotElement.getAttribute("cx") || "0");
                const cy = parseFloat(dotElement.getAttribute("cy") || "0");

                const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
                textElement.setAttribute("x", (cx + 10).toString());
                textElement.setAttribute("y", (cy - 10).toString());
                textElement.setAttribute("fill", "black");
                textElement.setAttribute("class", "city-label");
                textElement.textContent = office.city;

                textElement.addEventListener("mouseenter", () => {
                    const tooltip = document.createElement("div");
                    tooltip.className = "tooltip";
                    tooltip.style.position = "absolute";
                    tooltip.style.left = `${cx + 30}px`;
                    tooltip.style.top = `${cy + 10}px`;
                    tooltip.style.backgroundColor = "#fff";
                    tooltip.style.border = "1px solid #333";
                    tooltip.style.padding = "5px";
                    tooltip.textContent = office.address;
                    document.body.appendChild(tooltip);

                    textElement.addEventListener("mouseleave", () => {
                        tooltip.remove();
                    });
                });

                dotElement.parentElement?.appendChild(textElement);
            });
        });
    }, []);

    return (
        <div className="interactive-map">
            {/* Interactive Map */}
            <div className="mb-8 md:mb-[20px] mt-[50px] md:mt-[60px] lg:mt-[70px] xl:mt-[100px] 2xl:mt-[140px] ml-4 md:ml-[34px] lg:ml-[59px] xl:ml-[100px] 2xl:ml-[308px]">
                <div className="h-[1px] 2xl:h-[2px] bg-white"></div>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-3 gap-0 2xl:gap-[350px] 3xl:gap-0">
                {/* Left Section */}
                <div className="sm:pb-6 lg:pb-10 xl:pb-20 pl-[20px] md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px] 3xl:py-[1vw]">
                    <div className="flex items-center">
                        <div
                            id="lets-talk"
                            className="flex-none font-Helvetica font-bold text-[32px] md:text-[40px] lg:text-[55px] xl:text-[65px] 2xl:text-[65px] 3xl:text-[4.5vw] leading-tight 2xl:leading-none pt-2 md:pt-4 3xl:pt-[1vw]"
                        >
                            Let’s talk
                        </div>
                    </div>
                    <div className="sm:pl-0 w-[200px] sm:w-[300px] xl:w-[350px] 2xl:w-[400px] 3xl:w-[25vw]">
                        <img src="/path/to/line-image.svg" alt="Divider Line" className="w-full h-auto" />
                    </div>
                    <a href="mailto:creative@kekstcnc.com">
                        <div className="sm:pl-0 flex items-center gap-2 pt-6 sm:pt-3 lg:pt-6 xl:pt-10 2xl:pt-[57px] 3xl:pt-[3vw] hover:text-[#7a6b87]">
                            <div className="flex items-center justify-center">
                                <svg
                                    className="w-[21px] h-[16px] 2xl:w-[25px] 2xl:h-[19px] 3xl:w-[1.5vw] 3xl:h-[1.5vw] pr-[2px]"
                                    viewBox="0 0 21 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-label="Email icon"
                                >
                                    <title>Email icon</title>
                                    <path
                                        d="M18.1504 0H2.15039C1.05039 0 0.160391 0.9 0.160391 2L0.150391 14C0.150391 15.1 1.05039 16 2.15039 16H18.1504C19.2504 16 20.1504 15.1 20.1504 14V2C20.1504 0.9 19.2504 0 18.1504 0ZM18.1504 14H2.15039V4L10.1504 9L18.1504 4V14ZM10.1504 7L2.15039 2H18.1504L10.1504 7Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center h-full">
                                <div className="font-Helvetica sm:text-[17px] lg:text-[20px] xl:text-2xl 2xl:text-3xl 3xl:text-[1.6vw] pl-1 2xl:pl-[0.5vw]">
                                    creative@kekstcnc.com
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Right Section spanning middle and right columns */}
                <div className="col-span-2 pr-1 pt-8 md:pt-5 pb-0 pl-[20px] xl:pl-24 2xl:pr-0 flex items-center justify-center">
                    <img
                        src={locationImg}
                        alt="Location"
                        className="w-[90vw] h-auto max-h-none 2xl:max-w-[60vw] 3xl:max-w-[50vw] object-cover scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default InteractiveMap;
