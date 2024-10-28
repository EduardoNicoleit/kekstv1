/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Map from './Map';
import lineImg from '../assets/img/home/line.png';

const InteractiveMap = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredCity, setHoveredCity] = useState(null);
    const [clickedCity, setClickedCity] = useState(null);

    const offices = [
        {
            className: ".st14",
            city: "Abu Dhabi",
            address: `P.O. Box 77863
Abu Dhabi
UAE`,
            position: "abu-dhabi"
        },
        {
            className: ".st6",
            city: "Berlin",
            address: `Mädler Haus
Friedrichstraße 58
10117 Berlin`,
            position: "berlin"
        },
        {
            className: ".st4",
            city: "Brussels",
            address: `Square de Meeûs 23
1000 Brussels
Belgium`,
            position: "brussels"
        },
        {
            className: ".st12",
            city: "Dubai",
            address: `Boutique Office 21,
Dubai Knowledge Park
Al Sufouh
Dubai
UAE`,
            position: "dubai"
        },
        {
            className: ".st1",
            city: "Frankfurt",
            address: `WestendDuo
Bockenheimer Landstr. 24
60323 Frankfurt am Main
Germany`,
            position: "frankfurt"
        },
        {
            className: ".st7",
            city: "London",
            address: `3 New St Square
London EC4A 3BF
United Kingdom`,
            position: "london"
        },
        {
            className: ".st5",
            city: "Munich",
            address: `Leopold-Palais
Leopoldstr. 10
80802 Munich
Germany`,
            position: "munich"
        },
        {
            className: ".st11",
            city: "New York",
            address: `New York (Headquarters)
1675 Broadway, 30th Floor
New York, NY 10019`,
            position: "new-york"
        },
        {
            className: ".st3",
            city: "Paris",
            address: `c/o Publicis
133 Ave des Champs-Elysées
75008 Paris
France`,
            position: "paris"
        },
        {
            className: ".st13",
            city: "Riyadh",
            address: `Roshn Front Business Area
Building S4
Riyadh, Kingdom of Saudi Arabia 13413`,
            position: "riyadh"
        },
        {
            className: ".st9",
            city: "Seoul",
            address: `#1108, 320, Gangnam-daero, Gangnam-gu
Seoul 06252
South Korea`,
            position: "seoul"
        },
        {
            className: ".st2",
            city: "Stockholm",
            address: `P.O. Box 1405
Sveavägen 24-26
SE-111 84 Stockholm
Sweden`,
            position: "stockholm"
        },
        {
            className: ".st8",
            city: "Tokyo",
            address: `Sanno Park Tower 25F
2-11-1 Nagata-cho
Chiyoda-ku
Tokyo 100-6125
Japan`,
            position: "tokyo"
        },
        {
            className: ".st10",
            city: "Washington, D.C.",
            address: `Washington, D.C.
1515 N. Courthouse Rd.
Arlington, VA 22201`,
            position: "washington"
        }
    ];

    useEffect(() => {
        console.log("Starting InteractiveMap component");

        const calculateFontSize = () => {
            let baseFontSize;
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) { // Mobile breakpoint
                baseFontSize = 40; // Adjust this value as needed
            } else {
                baseFontSize = 20;
            }

            const scaleFactor = screenWidth / 1920;
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
                    cityNameDiv.style.cursor = "pointer";
                    cityNameDiv.style.transformOrigin = "center"; // Set transform origin to center
                    cityNameDiv.style.transform = "scale(1)"; // Initialize scale
                    cityNameDiv.style.opacity = "1"; // Initialize opacity
                    cityNameDiv.style.transition = 'transform 0.2s ease, opacity 0.2s ease, font-weight 0.2s ease';
                    cityNameDiv.style.willChange = 'transform'; // Optimize rendering
                    cityNameDiv.className = "city-name";

                    // Generate a safe ID for the city
                    const cityId = city.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '');
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

                    // Add hover event listeners to update the hovered city
                    cityNameDiv.addEventListener("mouseenter", () => {
                        if (!clickedCity) {
                            setHoveredCity(city);
                        }
                    });

                    cityNameDiv.addEventListener("mouseleave", () => {
                        if (!clickedCity) {
                            setHoveredCity(null);
                        }
                    });

                    // Add click event listener to keep the hover effect for 5 seconds
                    cityNameDiv.addEventListener("click", () => {
                        setClickedCity(city);
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

    // Reset clickedCity after 5 seconds
    useEffect(() => {
        if (clickedCity) {
            const timeout = setTimeout(() => {
                setClickedCity(null);
            }, 5000); // Reset after 5 seconds
            return () => clearTimeout(timeout);
        }
    }, [clickedCity]);

    // Update styles when hoveredCity, clickedCity, or selectedCity changes
    useEffect(() => {
        offices.forEach((office) => {
            const cityId = office.city.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '');
            const cityNameDiv = document.getElementById(`city-name-${cityId}`);
            if (cityNameDiv) {
                if (clickedCity === office.city) {
                    // If this city is clicked
                    cityNameDiv.style.fontWeight = 'bold';
                    cityNameDiv.style.transform = 'scale(1.1)';
                    cityNameDiv.style.opacity = '1';
                } else if (hoveredCity === office.city) {
                    // If this city is being hovered
                    cityNameDiv.style.fontWeight = 'bold';
                    cityNameDiv.style.transform = 'scale(1.1)';
                    cityNameDiv.style.opacity = '1';
                } else if (selectedCity && selectedCity.city === office.city) {
                    // If this city is the selected city (from interval)
                    cityNameDiv.style.fontWeight = 'bold';
                    cityNameDiv.style.transform = 'scale(1)';
                    cityNameDiv.style.opacity = (hoveredCity || clickedCity) ? '0.1' : '1';
                } else {
                    // All other cities
                    cityNameDiv.style.fontWeight = 'normal';
                    cityNameDiv.style.transform = 'scale(1)';
                    cityNameDiv.style.opacity = (hoveredCity || clickedCity) ? '0.1' : '1';
                }
            }
        });
    }, [hoveredCity, clickedCity, selectedCity]);

    // Determine which city's address to display
    const displayedCity = clickedCity
        ? offices.find((office) => office.city === clickedCity)
        : hoveredCity
            ? offices.find((office) => office.city === hoveredCity)
            : selectedCity;

    return (
        <div className="interactive-map relative overflow-visible ml-5 pr-4 md:ml-[34px] lg:ml-[59px] xl:ml-[100px] 2xl:ml-[308px] h-[65vh] md:h-[500px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px] 3xl:h-[40vw] w-auto border-t border-white">
            {/* Parent Container: flex-col on mobile, flex-row on md and above */}
            <div className="flex flex-col md:flex-row h-full">
                {/* Left Section - "Let's Talk" and Address Display */}
                <div className="w-full md:w-1/3 flex-shrink-0 overflow-visible z-10">
                    {/* Left Section Content */}
                    <div className="flex items-center">
                        <div
                            id="lets-talk"
                            className="font-Helvetica font-bold text-[32px] md:text-[32px] lg:text-[55px] xl:text-[65px] 2xl:text-[4vw] leading-tight pt-2 md:pt-4"
                        >
                            Let’s talk
                        </div>
                    </div>
                    <div className="sm:pl-0 w-[200px] sm:w-[300px] xl:w-[350px] 2xl:w-[400px] 3xl:w-[25vw]">
                        <img src={lineImg} alt="Divider Line" className="w-full h-auto" />
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
                                <div className="font-Helvetica font-bold sm:text-[17px] lg:text-[20px] xl:text-2xl 2xl:text-3xl 3xl:text-[1.2vw] pl-1 2xl:pl-[0.5vw]">
                                    creative@kekstcnc.com
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* Address Display */}
                    <div className="mt-8 md:mt-16">
                        {/* "Where we are:" text */}
                        <div className="font-Helvetica font-extrabold text-[24px] md:text-[32px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[2.2vw] leading-tight text-white mt-3 lg:mt-6">
                            Where we are:
                        </div>

                        {/* City Name with Icon */}
                        <div className="flex items-center mb-2">
                            {/* SVG Icon */}
                            <div className="mr-2 lg:mr-4 xl:mr-6 mt-3 lg:mt-6 3xl:mt-[1.5vw]">
                                <svg
                                    className="w-[20px] h-[20px] 2xl:w-[2vw] 2xl:h-[2vw]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                </svg>
                            </div>
                            {/* City Name */}
                            <div className="font-Helvetica font-bold text-[22px] md:text-[30px] lg:text-[30px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[2vw] leading-tight text-white mt-3 lg:mt-6 3xl:mt-[1.5vw]">
                                {displayedCity?.city}
                            </div>
                        </div>

                        {/* Address */}
                        <div
                            className="h-[50px] md:h-auto font-Helvetica sm:text-[17px] lg:text-[20px] xl:text-2xl 2xl:text-3xl 3xl:text-[1.1vw] font-normal whitespace-pre-line address-display leading-normal py-4 2xl:py-[1.5vw] 3xl:leading-[1.8vw]"
                            style={{
                                opacity: displayedCity ? '1' : '0',
                                transition: 'opacity 0.2s ease',
                            }}
                        >
                            {displayedCity?.address}
                        </div>
                    </div>
                </div>

                {/* Right Section - Interactive Map */}
                <div className="w-full md:w-2/3 flex-shrink-0 overflow-visible mt-8 md:mt-0">
                    <div
                        className="svg-container w-full mt-[100px] mt-8 md:mt-[120px]"
                        style={{ position: 'relative' }}
                    >
                        {/* Map Component */}
                        <Map />
                        {/* Overlay for Labels */}
                        <div
                            className="overlay"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1,
                                pointerEvents: 'none',
                                overflow: 'hidden',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveMap;