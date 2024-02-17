import React from "react";
import { TitleBanner,  } from "../components";
import { AgroBotTitleImg } from "../assets";
import { AgroBotHeader } from "../constant";

function AgroBot() {
    return (
        <div className="bg-[#F8F7F1] w-screen">
            <TitleBanner fromColor="#12200B" toColor="#4C5934" imageSrc={AgroBotTitleImg}>{AgroBotHeader}</TitleBanner>
            <p>Section 1</p>
            <p>Key features</p>
            <h2>Subteams</h2>
            <p>Chassis</p>
            <p>Extermination</p>
            <p>Navigation</p>
            <p>Applied AI</p>
            <p>Want to help?</p>
        </div>
    );
}

export default AgroBot;