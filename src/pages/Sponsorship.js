import React from "react";
import { TitleBanner, SponsorshipS1, SponsorshipS2, SponsorshipS3, Sponsors } from "../components";
import { SponsorIcon } from "../assets";
import { Header } from "../constant";

const Sponsorship = () => {
    return (
        <div className="bg-[#F8F7F1]">
            <TitleBanner fromColor="#4c59348a" toColor="#002601" imageSrc={SponsorIcon}>{Header}</TitleBanner>
            {/* <SponsorshipS1></SponsorshipS1> */}
            <SponsorshipS2></SponsorshipS2>
            <SponsorshipS3></SponsorshipS3>
            <Sponsors />
        </div>
    );
};

export default Sponsorship;