import React, { useState, useRef } from 'react';

const ResizableSidebar = () => {
    const [sidebarWidth, setSidebarWidth] = useState(200);
    const sidebarRef = useRef(null);

    const rsMouseDownHandler = (e) => {
        const x = e.clientX;
        const sbWidth = window.getComputedStyle(sidebarRef.current).width;
        const initialWidth = parseInt(sbWidth, 10);

        const mouseMoveHandler = (e) => {
            const dxLeft = x - e.clientX; // Resize from left to right
            const dxRight = e.clientX - x; // Resix=ze from right to left
            const newWidth = initialWidth + dxLeft;

            if (newWidth >= 200) {
                setSidebarWidth(newWidth);
            }
        };

        const mouseUpHandler = () => {
            document.removeEventListener('mouseup', mouseUpHandler);
            document.removeEventListener('mousemove', mouseMoveHandler);
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    return (
        <div>
            <div
                className="resizer text-4xl text-white"
                onMouseDown={rsMouseDownHandler}
                style={{ cursor: 'ew-resize' }}
            >
                Hello
                {/* Resizer element */}
            </div>
            <div className="sidebar text-4xl text-white" ref={sidebarRef} style={{ width: `${sidebarWidth}px` }}>
                {/* Sidebar content */}
                World
            </div>
        </div>
    );
};

export default ResizableSidebar;