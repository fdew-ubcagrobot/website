import React from "react";
import { TitleBanner } from "../components";
import { GroupWork } from "../assets"; 
import PortfolioS1 from "../components/portfolio/portfolio-s1";

const Portfolio = () => {
    return (
        <div className="bg-[#F8F7F1] w-screen">
            <TitleBanner fromColor="#919331" toColor="#9da38a" imageSrc={GroupWork}>Portfolio</TitleBanner>
           <PortfolioS1></PortfolioS1>
        </div>
    );
};

export default Portfolio;