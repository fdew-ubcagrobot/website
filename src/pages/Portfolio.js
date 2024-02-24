import React from "react";
import { TitleBanner, InfoParagraph, StatsBar, PortfolioImageGallery, PortfolioProjects} from "../components";
import { GroupWork } from "../assets"; 

function Portfolio() {
    return (
        <div className="!bg-gradient-to-b from-[#F8F7F1] to-lime-500 w-screen">
            <TitleBanner fromColor="#919331" toColor="#9da38a" imageSrc={GroupWork} imageClassName="absolute right-0 bottom-0 w-128">Portfolio</TitleBanner>
           <PortfolioProjects></PortfolioProjects>
           <InfoParagraph></InfoParagraph>
           <StatsBar></StatsBar>
           <PortfolioImageGallery></PortfolioImageGallery>
        </div>
    );
};

export default Portfolio;