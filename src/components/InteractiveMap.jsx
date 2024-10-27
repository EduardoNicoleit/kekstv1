import React, { useEffect } from 'react';

// Placeholder for the image source
import locationImg from '../assets/img/home/map-with-dots.svg';
import lineImg from '../assets/img/home/line.png';

const InteractiveMap = () => {
    useEffect(() => {
        console.log("Starting InteractiveMap component");

        const offices = [
            { color: "#FFFBFF", city: "Abu Dhabi", address: "Abu Dhabi Address" },
            { color: "#FEFFFF", city: "Berlin", address: "Berlin Address" },
            { color: "#FDFFFF", city: "Brussels", address: "Brussels Address" },
            { color: "#FCFFFF", city: "Dubai", address: "Dubai Address" },
            { color: "#FBFFFF", city: "Frankfurt", address: "Frankfurt Address" },
            { color: "#FAFFFF", city: "London", address: "London Address" },
            { color: "#F9FFFF", city: "Munich", address: "Munich Address" },
            { color: "#FFFFFE", city: "New York", address: "New York Address" },
            { color: "#FFFFFD", city: "Paris", address: "Paris Address" },
            { color: "#FFFFFC", city: "Riyadh", address: "Riyadh Address" },
            { color: "#FFFFFB", city: "Seoul", address: "Seoul Address" },
            { color: "#FFFFFA", city: "Stockholm", address: "Stockholm Address" },
            { color: "#FFFEFF", city: "Tokyo", address: "Tokyo Address" },
            { color: "#FFFDFF", city: "Washington, D.C.", address: "Washington, D.C. Address" }
        ];

        const img = new Image();
        img.src = locationImg;
        img.crossOrigin = "anonymous"; // Make sure the image can be used in the canvas
        console.log("Image source set. Waiting for image to load...");

        img.onload = () => {
            console.log("Image loaded successfully with dimensions:", img.width, img.height);

            // Only proceed if the image dimensions are valid
            if (img.width === 0 || img.height === 0) {
                console.error("Image dimensions are invalid. Ensure the image file is accessible.");
                return;
            }

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                console.error("Failed to get canvas context");
                return;
            }

            console.log("Canvas context obtained");

            canvas.width = img.width;
            canvas.height = img.height;
            console.log("Canvas dimensions set to image width and height:", img.width, img.height);

            ctx.drawImage(img, 0, 0);
            console.log("Image drawn on the canvas");

            offices.forEach((office) => {
                const { color, city } = office;
                console.log(`Searching for pixel with color ${color} for city ${city}`);

                // Convert the hex color to RGB
                const r = parseInt(color.substring(1, 3), 16);
                const g = parseInt(color.substring(3, 5), 16);
                const b = parseInt(color.substring(5, 7), 16);

                let found = false;
                for (let y = 0; y < canvas.height; y++) {
                    for (let x = 0; x < canvas.width; x++) {
                        const pixel = ctx.getImageData(x, y, 1, 1).data;
                        if (pixel[0] === r && pixel[1] === g && pixel[2] === b) {
                            console.log(`Found pixel for ${city} at (${x}, ${y})`);

                            const cityNameSpan = document.createElement("span");
                            cityNameSpan.textContent = city;
                            cityNameSpan.style.position = "absolute";
                            cityNameSpan.style.left = `${x + window.scrollX}px`;
                            cityNameSpan.style.top = `${y + window.scrollY - 30}px`;
                            cityNameSpan.style.fontSize = "16px";
                            cityNameSpan.style.fontWeight = "bold";
                            cityNameSpan.style.color = "red";
                            cityNameSpan.className = "city-name";

                            document.body.appendChild(cityNameSpan);
                            console.log(`City name span added for ${city}`);
                            found = true;
                            break;
                        }
                    }
                    if (found) break;
                }

                if (!found) {
                    console.warn(`No pixel found for ${city} with color ${color}`);
                }
            });
        };

        img.onerror = (error) => {
            console.error("Error loading image:", error);
        };
    }, []);

    return (
        <div className="interactive-map">
            <div className="mb-8 md:mb-[20px] mt-[50px] md:mt-[60px] lg:mt-[70px] xl:mt-[100px] 2xl:mt-[140px] ml-4 md:ml-[34px] lg:ml-[59px] xl:ml-[100px] 2xl:ml-[308px]">
                <div className="h-[1px] 2xl:h-[2px] bg-white"></div>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-3 gap-0 2xl:gap-[350px] 3xl:gap-0">
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
                        <img src={lineImg} alt="Line" className="w-full h-auto" />
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

                            <div id="email-address" className="flex items-center h-full">
                                <div className="font-Helvetica sm:text-[17px] lg:text-[20px] xl:text-2xl 2xl:text-3xl 3xl:text-[1.6vw] pl-1 2xl:pl-[0.5vw]">
                                    creative@kekstcnc.com
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

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
