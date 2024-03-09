import React from "react";
import { TitleBanner, AgroBotIntro, AgroBotKeyFeatures, AgroBotSubteams, WantToHelp, } from "../components";
import { AgroBotBannerImg } from "../assets";
import { AgroBotHeader } from "../constant";


function AgroBot() {
    return (
        <div className="bg-[#F8F7F1] w-full">
            <TitleBanner fromColor="#12200B" toColor="#4C5934" imageSrc={AgroBotBannerImg}>{AgroBotHeader}</TitleBanner>
            <AgroBotIntro></AgroBotIntro>
            <AgroBotKeyFeatures></AgroBotKeyFeatures>
            <AgroBotSubteams></AgroBotSubteams>
            <WantToHelp></WantToHelp>
        </div>
    );
}

export default AgroBot;