import React, { useEffect, useState } from 'react';
import Map from './Map';
import lineImg from '../assets/img/home/line.png';

const InteractiveMap = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const offices = [
        { className: ".st14", city: "Abu Dhabi", address: "123 Abu Dhabi St, UAE", position: "abu-dhabi" },
        { className: ".st6", city: "Berlin", address: "456 Berlin Rd, Germany", position: "berlin" },
        { className: ".st4", city: "Brussels", address: "789 Brussels Ave, Belgium", position: "brussels" },
        { className: ".st12", city: "Dubai", address: "101 Dubai Blvd, UAE", position: "dubai" },
        { className: ".st1", city: "Frankfurt", address: "202 Frankfurt Way, Germany", position: "frankfurt" },
        { className: ".st7", city: "London", address: "303 London Bridge Rd, UK", position: "london" },
        { className: ".st5", city: "Munich", address: "404 Munich St, Germany", position: "munich" },
        { className: ".st11", city: "New York", address: "505 5th Ave, USA", position: "new-york" },
        { className: ".st3", city: "Paris", address: "606 Champs-Élysées, France", position: "paris" },
        { className: ".st13", city: "Riyadh", address: "707 Riyadh Rd, Saudi Arabia", position: "riyadh" },
        { className: ".st9", city: "Seoul", address: "808 Seoul St, South Korea", position: "seoul" },
        { className: ".st2", city: "Stockholm", address: "909 Stockholm Blvd, Sweden", position: "stockholm" },
        { className: ".st8", city: "Tokyo", address: "1010 Tokyo Tower Rd, Japan", position: "tokyo" },
        { className: ".st10", city: "Washington, D.C.", address: "1111 Pennsylvania Ave NW, USA", position: "washington" }
    ];

    useEffect(() => {
        console.log("Starting InteractiveMap component");

        const calculateFontSize = () => {
            const baseFontSize = 25;
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
                    cityNameDiv.style.pointerEvents = "auto"; // Enable pointer events
                    cityNameDiv.style.cursor = "pointer"; // Optional: change cursor on hover
                    cityNameDiv.className = "city-name";

                    // Generate a safe ID for the city
                    const cityId = city.toLowerCase().replace(/\s+/g, '-');
                    cityNameDiv.id = `city-name-${cityId}`;

                    // Temporarily add to body to get dimensions
                    document.body.appendChild(cityNameDiv);
                    const textWidth = cityNameDiv.getBoundingClientRect().width;
                    const textHeight = cityNameDiv.getBoundingClientRect().height;
                    document.body.removeChild(cityNameDiv);

                    // Define an offset for the x-axis to create some space
                    const xOffset = 10;

                    // Adjust position based on the custom logic for each city
                    switch (position) {
                        case "abu-dhabi":
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos + 0.5 * textHeight}px`;
                            break;
                        case "berlin":
                            cityNameDiv.style.left = `${xPos + xOffset}px`;
                            cityNameDiv.style.top = `${yPos - 0.5 * textHeight}px`;
                            break;
                        case "brussels":
                            cityNameDiv.style.left = `${xPos - 8}px`;
                            cityNameDiv.style.top = `${yPos - 1.3 * textHeight}px`;
                            break;
                        case "dubai":
                            cityNameDiv.style.left = `${xPos + 3}px`;
                            cityNameDiv.style.top = `${yPos - textHeight}px`;
                            break;
                        case "frankfurt":
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos + 1.2 * textHeight}px`;
                            // Add a line from the coordinate to the text
                            const lineDiv = document.createElement("div");
                            lineDiv.style.position = "absolute";
                            lineDiv.style.left = `${xPos + 1}px`;
                            lineDiv.style.top = `${yPos + 1}px`;
                            lineDiv.style.width = "1px";
                            lineDiv.style.height = `${1.2 * textHeight}px`;
                            lineDiv.style.backgroundColor = "white";
                            overlayDiv.appendChild(lineDiv);
                            break;
                        case "london":
                            cityNameDiv.style.left = `${xPos - textWidth}px`;
                            cityNameDiv.style.top = `${yPos - 5}px`;
                            break;
                        case "munich":
                            cityNameDiv.style.left = `${xPos + xOffset}px`;
                            cityNameDiv.style.top = `${yPos - 5}px`;
                            break;
                        case "new-york":
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos - (textHeight + 4)}px`;
                            break;
                        case "paris":
                            cityNameDiv.style.left = `${xPos - 0.9 * textHeight}px`;
                            cityNameDiv.style.top = `${yPos + 0.2 * textHeight}px`;
                            break;
                        case "riyadh":
                            cityNameDiv.style.left = `${xPos - textWidth}px`;
                            cityNameDiv.style.top = `${yPos}px`;
                            break;
                        case "seoul":
                            cityNameDiv.style.left = `${xPos - textWidth}px`;
                            cityNameDiv.style.top = `${yPos + 5}px`;
                            break;
                        case "stockholm":
                            cityNameDiv.style.left = `${xPos - (textWidth + 5)}px`;
                            cityNameDiv.style.top = `${yPos - 15}px`;
                            break;
                        case "tokyo":
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos + 0.5 * textHeight}px`;
                            break;
                        case "washington":
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos + textHeight}px`;
                            break;
                        default:
                            cityNameDiv.style.left = `${xPos}px`;
                            cityNameDiv.style.top = `${yPos}px`;
                            break;
                    }

                    // Add hover event listeners to update the address dynamically
                    cityNameDiv.addEventListener("mouseenter", () => {
                        setSelectedCity({ city, address });
                        cityNameDiv.style.fontWeight = "bold";
                    });

                    cityNameDiv.addEventListener("mouseleave", () => {
                        if (!selectedCity || selectedCity.city.toLowerCase() !== city.toLowerCase()) {
                            cityNameDiv.style.fontWeight = "normal";
                        }
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
    }, [selectedCity]); // Add selectedCity to dependencies

    // Time-based interval to cycle through cities
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % offices.length);
        }, 5000); // Change city every 5 seconds
        return () => clearInterval(interval);
    }, []);

    // Update selected city when currentIndex changes
    useEffect(() => {
        setSelectedCity(offices[currentIndex]);
    }, [currentIndex]);

    // Update font weight of city names on the map when selectedCity changes
    useEffect(() => {
        offices.forEach((office) => {
            const cityId = office.city.toLowerCase().replace(/\s+/g, '-');
            const cityNameDiv = document.getElementById(`city-name-${cityId}`);
            if (cityNameDiv) {
                if (selectedCity && selectedCity.city.toLowerCase() === office.city.toLowerCase()) {
                    cityNameDiv.style.fontWeight = "bold";
                } else {
                    cityNameDiv.style.fontWeight = "normal";
                }
            }
        });
    }, [selectedCity]);

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
                <div className="svg-container w-full h-auto" style={{ position: "relative" }}>
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
                            pointerEvents: "none" // Keep this to prevent the overlay from blocking the SVG
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveMap;
