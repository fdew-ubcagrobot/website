import React from "react";
import { TitleBanner, PortfolioS1, StatsBar} from "../components";
import { GroupWork } from "../assets"; 

function Portfolio() {
    return (
        <div className="bg-[#F8F7F1] w-screen">
            <TitleBanner fromColor="#919331" toColor="#9da38a" imageSrc={GroupWork} imageClassName="absolute right-0 bottom-0 w-5/12">Portfolio</TitleBanner>
           <PortfolioS1></PortfolioS1>
           <StatsBar></StatsBar>
        </div>
    );
};

export default Portfolio;