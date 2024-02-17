import React, { useState, useEffect } from 'react';
import { HomeBanner, Sponsors } from '../components';

function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = debounce(() => {
            setIsMobile(window.innerWidth < 768);
        }, 250);

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return (
        <div>
            <HomeBanner isMobile={isMobile}></HomeBanner>
            
            <div className='w-80vw mx-auto my-10vh'>
                <div>Mitigate Climate Impacts</div>
                <div>Enhance Food Security</div>
                <div>Ensure Economic Viability</div>
            </div>

            <Sponsors />
        </div>
    );
};

export default Home;