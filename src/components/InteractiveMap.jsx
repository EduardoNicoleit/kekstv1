import React, { useEffect, useState } from 'react';
import Map from './Map';
import lineImg from '../assets/img/home/line.png'; // Make sure this path is correct

const InteractiveMap = () => {
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        console.log("Starting InteractiveMap component");

        const offices = [
            { className: ".st14", city: "Abu Dhabi", address: "Abu Dhabi Address", position: "below" },
            { className: ".st6", city: "Berlin", address: "Berlin Address", position: "right" },
            { className: ".st4", city: "Brussels", address: "Brussels Address", position: "above" },
            { className: ".st12", city: "Dubai", address: "Dubai Address", position: "above" },
            { className: ".st1", city: "Frankfurt", address: "Frankfurt Address", position: "double-below" },
            { className: ".st7", city: "London", address: "London Address", position: "left" },
            { className: ".st5", city: "Munich", address: "Munich Address", position: "below" },
            { className: ".st11", city: "New York", address: "New York Address", position: "above" },
            { className: ".st3", city: "Paris", address: "Paris Address", position: "below" },
            { className: ".st13", city: "Riyadh", address: "Riyadh Address", position: "left" },
            { className: ".st9", city: "Seoul", address: "Seoul Address", position: "left" },
            { className: ".st2", city: "Stockholm", address: "Stockholm Address", position: "right" },
            { className: ".st8", city: "Tokyo", address: "Tokyo Address", position: "below" },
            { className: ".st10", city: "Washington, D.C.", address: "Washington, D.C. Address", position: "below" }
        ];

        const calculateFontSize = () => {
            const baseFontSize = 12;
            const scaleFactor = window.innerWidth / 1920;
            return Math.max(baseFontSize * scaleFactor, 8);
        };

        const positionLabels = () => {
            const svgElement = document.querySelector('.embedded-svg svg');
            const overlayDiv = document.querySelector('.overlay');

            if (!svgElement || !overlayDiv) {
                console.error('SVG or overlay div element not found');
                return;
            }

            // Clear previous labels
            overlayDiv.innerHTML = '';

            // Get the bounding box of the SVG element
            const svgRect = svgElement.getBoundingClientRect();
            const svgWidth = svgRect.width;
            const svgHeight = svgRect.height;
            const viewBox = svgElement.getAttribute('viewBox').split(' ');
            const originalWidth = parseFloat(viewBox[2]);
            const originalHeight = parseFloat(viewBox[3]);

            const xScale = svgWidth / originalWidth;
            const yScale = svgHeight / originalHeight;

            console.log("SVG and overlay div elements found, proceeding with detection");

            // Iterate through each office and find elements using class names
            offices.forEach((office) => {
                const { className, city, address, position } = office;
                console.log(`Searching for elements with class ${className} for city ${city}`);

                // Find elements matching the class
                const elements = svgElement.querySelectorAll(className);
                if (elements.length === 0) {
                    console.warn(`No element found for ${city} with class ${className}`);
                    return;
                }

                elements.forEach((element) => {
                    const bbox = element.getBBox();
                    console.log(`Found element for ${city} at (${bbox.x}, ${bbox.y})`);

                    // Calculate the scaled position
                    const xPos = bbox.x * xScale;
                    const yPos = bbox.y * yScale;

                    // Calculate font size dynamically
                    const fontSize = calculateFontSize();

                    // Create a div element for the city name
                    const cityNameDiv = document.createElement("div");
                    cityNameDiv.textContent = city;
                    cityNameDiv.style.position = "absolute";
                    cityNameDiv.style.fontSize = `${fontSize}px`;
                    cityNameDiv.style.fontWeight = "normal";
                    cityNameDiv.style.color = "white";
                    cityNameDiv.className = "city-name";

                    // Temporarily add to body to get dimensions
                    document.body.appendChild(cityNameDiv);
                    const textWidth = cityNameDiv.getBoundingClientRect().width;
                    const textHeight = cityNameDiv.getBoundingClientRect().height;
                    document.body.removeChild(cityNameDiv);

                    // Adjust position based on the custom logic for each city
                    switch (position) {
                        case "above":
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos - textHeight}px`;
                            break;
                        case "below":
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos + textHeight}px`;
                            break;
                        case "double-below":
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos + 2 * textHeight}px`;
                            break;
                        case "left":
                            cityNameDiv.style.left = `${xPos - textWidth}px`;
                            cityNameDiv.style.top = `${yPos}px`;
                            break;
                        case "right":
                            cityNameDiv.style.left = `${xPos + textWidth}px`;
                            cityNameDiv.style.top = `${yPos}px`;
                            break;
                        default:
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos}px`;
                            break;
                    }

                    // Add hover event listener to update the address dynamically
                    cityNameDiv.addEventListener("mouseenter", () => {
                        setSelectedCity({ city, address });
                    });

                    // Append the city name div to the overlay
                    overlayDiv.appendChild(cityNameDiv);
                    console.log(`City name div added for ${city}`);
                });
            });
        };

        // Initial positioning of the labels
        positionLabels();

        // Reposition the labels when the window is resized
        window.addEventListener('resize', positionLabels);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', positionLabels);
        };
    }, []);

    return (
        <div className="interactive-map grid grid-cols-3 gap-4">
            {/* Left Section - "Let's Talk" */}
            <div className="col-span-1 sm:pb-6 lg:pb-10 xl:pb-20 pl-[20px] md:pl-[34px] lg:pl-[59px] xl:pl-[100px] 2xl:pl-[308px] 3xl:py-[1vw]">
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
                {/* Display the selected city's address dynamically */}
                {selectedCity && (
                    <div className="mt-4 text-lg text-gray-700">
                        <strong>{selectedCity.city}</strong>: {selectedCity.address}
                    </div>
                )}
            </div>

            {/* Right Section - Interactive Map */}
            <div className="col-span-2 flex items-center justify-center">
                <div className="svg-container w-full h-full" style={{ position: "relative" }}>
                    {/* Map Component */}
                    <Map />
                    {/* Overlay for Labels */}
                    <div
                        className="overlay"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 2,
                            pointerEvents: "none" // Make sure the overlay doesn't block interaction with the SVG
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveMap;
