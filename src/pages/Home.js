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

    return (
        <>
            <HomeBanner></HomeBanner>

            <OurMission></OurMission>
            
            <HomeProjects></HomeProjects>

            <OurSponsors/>
        </>
    );
};

export default Home;