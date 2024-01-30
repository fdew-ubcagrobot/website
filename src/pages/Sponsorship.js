import React from "react";
import {TitleBanner, SponsorshipS1, SponsorshipS2, SponsorshipS3, SponsorshipS4 } from "../components";
import Shake from "../components/sponsorship/shake.png";

const Sponsorship = () => {
    return (
        <>
            <TitleBanner imageSrc={Shake}>Sponsorship</TitleBanner>
            <SponsorshipS1>
                Sponsorship
            </SponsorshipS1>
            <SponsorshipS2>
                Hello
            </SponsorshipS2>
            <SponsorshipS3>
                Hello
            </SponsorshipS3>
            <SponsorshipS4>
                Hello
            </SponsorshipS4>
        </>
    );
};

export default Sponsorship;