import React, { useState, useEffect } from 'react';
import { HomeBanner, Sponsors, OurMission, HomeProjects } from '../components';

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

            <OurMission></OurMission>
            
            <HomeProjects></HomeProjects>

            <Sponsors/>
        </div>
    );
};

export default Home;