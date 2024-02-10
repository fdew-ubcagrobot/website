import React from "react";
import {TitleBanner, SponsorshipS1, SponsorshipS2, SponsorshipS3, SponsorshipS4 } from "../components";
import Shake from "../components/sponsorship/shake.png";

const Portfolio = () => {
    return (
        <div className="bg-[#F8F7F1] w-screen">
            <TitleBanner fromColor="#919331" toColor="#9da38a" imageSrc={Shake}>Portfolio</TitleBanner>
            {/* <SponsorshipS1></SponsorshipS1>
            <SponsorshipS2></SponsorshipS2>
            <SponsorshipS3>
                AgroBots
            </SponsorshipS3>
            <SponsorshipS4>
                Key Features
            </SponsorshipS4> */}
        </div>
    );
};

export default Portfolio;