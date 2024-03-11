import React, { useState, useEffect } from 'react';
import { HomeBanner, OurSponsors, OurMission, HomeProjects } from '../components';

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
        <div className='bg-white'>
            <HomeBanner isMobile={isMobile}></HomeBanner>
            <div className="h-[10vh]" style={{ background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(248,247,241,1) 100%)' }}></div>
            <OurMission></OurMission>
            
            <HomeProjects></HomeProjects>

            <OurSponsors/>
        </div>
    );
};

export default Home;