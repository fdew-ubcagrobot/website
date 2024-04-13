import React from "react";
import { TitleBanner, InfoParagraph, StatsBar, PortfolioImageGallery, PortfolioProjects, Publications, HomeProjects} from "../components";
import { GroupWork } from "../assets"; 
import Divider from "../components/common/Divider";

function Portfolio() {
    return (
        <div className="!bg-gradient-to-b from-[#F8F7F1]  via-[#F8F7F1] to-lime-500 w-auto">
            <TitleBanner fromColor="#919331" toColor="#9da38a" imageSrc={GroupWork} imageClassName="absolute right-0 bottom-0 w-128">Portfolio</TitleBanner>
           <HomeProjects></HomeProjects>
           <Divider></Divider>
           <InfoParagraph title="Hello" text="Lorem Ipsum AgroBot Very good"></InfoParagraph>
           <StatsBar></StatsBar>
           <Divider></Divider>
           {/* <Publications></Publications> */}
           {/* <Divider></Divider> */}
           <PortfolioImageGallery></PortfolioImageGallery>
        </div>
    );
};

export default Portfolio;