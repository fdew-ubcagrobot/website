import React from "react";
import { TitleBanner, SponsorshipS1, SponsorshipS2, SponsorshipS3, SponsorshipS4 } from "../components";
import Shake from "../components/sponsorship/shake.png";

const Sponsorship = () => {
    return (
        <div className="bg-[#F8F7F1] w-screen">
            <TitleBanner fromColor="#4c59348a" toColor="#345950" imageSrc={Shake}>Sponsorship</TitleBanner>
            <SponsorshipS1></SponsorshipS1>
            <SponsorshipS2></SponsorshipS2>
            <SponsorshipS3>
                Hello
            </SponsorshipS3>
            <SponsorshipS4>
                Our sponsors go here
            </SponsorshipS4>
            
        </div>
    );
};

export default Sponsorship;